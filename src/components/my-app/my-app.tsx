import '@ionic/core';
import '@stencil/core';
import { Component, Prop, Listen } from '@stencil/core';
import { ToastController } from '@ionic/core';

@Component({
  tag: 'my-app',
  styleUrl: 'my-app.scss'
})
export class MyApp {

  @Prop({ connect: 'ion-toast-controller' }) toastCtrl: ToastController;

  componentDidLoad() {
    /*
      Handle service worker updates correctly.
      This code will show a toast letting the
      user of the PWA know that there is a 
      new version available. When they click the
      reload button it then reloads the page 
      so that the new service worker can take over
      and serve the fresh content
    */
    window.addEventListener('swUpdate', () => {
      this.toastCtrl.create({
        message: 'New version available',
        showCloseButton: true,
        closeButtonText: 'Reload'
      }).then((toast) => {
        toast.present();
      });
    })
  }

  @Listen('body:ionToastWillDismiss')
  reload() {
    window.location.reload();
  }

  render() {
    return (
      <ion-app>
        <main>
          <stencil-router>
            <stencil-route url='/' component='app-home' exact={true}>
            </stencil-route>

            <stencil-route url='/profile/:name' component='app-profile'>
            </stencil-route>

            <stencil-route url='/speaking/:name' component='app-speaking'>
            </stencil-route>

            <stencil-route url='/git/:name' component='app-git'>
            </stencil-route>

            <stencil-route url='/resume/:name' component='app-resume'>
            </stencil-route>

            <stencil-route url='/travels/:name' component='app-travels'>
            </stencil-route>

            <stencil-route url='/social/:name' component='app-social'>
            </stencil-route>

            <stencil-route url='/stfu/' component='app-stfu'>
            </stencil-route>

            <stencil-route url='/talks/:name' component='app-talks'>
            </stencil-route>

            <stencil-route url='/blog/:name' component='app-blog'>
            </stencil-route>
          </stencil-router>
        </main>
      </ion-app>
    );
  }
}
