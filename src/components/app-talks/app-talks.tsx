import { Component, Listen, Prop, State } from '@stencil/core';
import { MatchResults } from '@stencil/router';
import { ToastController } from '@ionic/core';

import { urlB64ToUint8Array } from '../../helpers/utils';


@Component({
  tag: 'app-talks',
  styleUrl: 'app-talks.scss'
})
export class AppTalks {

  @Prop() match: MatchResults;
  @Prop({ connect: 'ion-toast-controller' }) toastCtrl: ToastController;

  @State() notify: boolean;
  @State() swSupport: boolean;

  // demo key from https://web-push-codelab.glitch.me/
  // replace with your key in production
  publicServerKey = urlB64ToUint8Array('BBsb4au59pTKF4IKi-aJkEAGPXxtzs-lbtL58QxolsT2T-3dVQIXTUCCE1TSY8hyUvXLhJFEUmH7b5SJfSTcT-E');

  componentWillLoad() {
    if ('serviceWorker' in navigator && 'PushManager' in window) {
      this.swSupport = true;
    } else {
      this.swSupport = false;
    }
  }

  @Listen('ionChange')
  subscribeToNotify($event: CustomEvent) {
    console.log($event.detail.checked);

    if ($event.detail.checked === true) {
      this.handleSub();
    }
  }

  handleSub() {
    // get our service worker registration
    navigator.serviceWorker.getRegistration().then((reg) => {

      // check if service worker is registered
      if (reg) {
        // get push subscription
        reg.pushManager.getSubscription().then((sub) => {
  
          // if there is no subscription that means
          // the user has not subscribed before
          if (sub === null) {
            // user is not subscribed
            reg.pushManager.subscribe({
              userVisibleOnly: true,
              applicationServerKey: this.publicServerKey
            })
            .then((sub: PushSubscription) => {
              // our user is now subscribed
              // lets reflect this in our UI
              console.log('web push subscription: ', sub);
              this.notify = true;
            })
          }
        })
      }
    })
  }

  render() {
    if (this.match && this.match.params.name) {
      return (
        <ion-page>
          <ion-header>
            <ion-toolbar color='primary'>
              <ion-title>{this.match.params.name}'s Talks</ion-title>
            </ion-toolbar>
          </ion-header>

          <ion-content>
            <p>
              Hello! My name is {this.match.params.name}.
              My name was passed in through a route param!
            </p>

            {this.swSupport ? <ion-item>
              <ion-label>Notifications</ion-label>
              <ion-toggle checked={this.notify} disabled={this.notify}></ion-toggle>
            </ion-item> : null}
            
            {/* TODO: add git page link */}
            <p>
              Hybrid Apps In A Snap
            </p>

            {/* TODO: add git page link */}
            <p>
              Communication: Coming Out of the Basement
            </p>

            {/* TODO: add git page link */}
            <p>
              Advanced Unit Testing
            </p>

            {/* TODO: add git page link */}
            <p>
              Personal PWAs: How to Shine and Showcase Your Skills at the Same Time
            </p>

            {/* TODO: add git page link */}
            <p>
              Communication: Tech Company Ecosystem
            </p>
          </ion-content>
        </ion-page>
      );
    }
  }
}