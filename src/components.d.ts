/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import {
  MatchResults,
} from '@stencil/router';

declare global {
  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;
    componentOnReady(done: (ele?: this) => void): void;
  }
}



import {
  AppBlog as AppBlog
} from './components/app-blog/app-blog';

declare global {
  interface HTMLAppBlogElement extends AppBlog, HTMLStencilElement {
  }
  var HTMLAppBlogElement: {
    prototype: HTMLAppBlogElement;
    new (): HTMLAppBlogElement;
  };
  interface HTMLElementTagNameMap {
    "app-blog": HTMLAppBlogElement;
  }
  interface ElementTagNameMap {
    "app-blog": HTMLAppBlogElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "app-blog": JSXElements.AppBlogAttributes;
    }
  }
  namespace JSXElements {
    export interface AppBlogAttributes extends HTMLAttributes {
      match?: MatchResults;
    }
  }
}


import {
  AppGit as AppGit
} from './components/app-git/app-git';

declare global {
  interface HTMLAppGitElement extends AppGit, HTMLStencilElement {
  }
  var HTMLAppGitElement: {
    prototype: HTMLAppGitElement;
    new (): HTMLAppGitElement;
  };
  interface HTMLElementTagNameMap {
    "app-git": HTMLAppGitElement;
  }
  interface ElementTagNameMap {
    "app-git": HTMLAppGitElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "app-git": JSXElements.AppGitAttributes;
    }
  }
  namespace JSXElements {
    export interface AppGitAttributes extends HTMLAttributes {
      match?: MatchResults;
    }
  }
}


import {
  AppHome as AppHome
} from './components/app-home/app-home';

declare global {
  interface HTMLAppHomeElement extends AppHome, HTMLStencilElement {
  }
  var HTMLAppHomeElement: {
    prototype: HTMLAppHomeElement;
    new (): HTMLAppHomeElement;
  };
  interface HTMLElementTagNameMap {
    "app-home": HTMLAppHomeElement;
  }
  interface ElementTagNameMap {
    "app-home": HTMLAppHomeElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "app-home": JSXElements.AppHomeAttributes;
    }
  }
  namespace JSXElements {
    export interface AppHomeAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  AppProfile as AppProfile
} from './components/app-profile/app-profile';

declare global {
  interface HTMLAppProfileElement extends AppProfile, HTMLStencilElement {
  }
  var HTMLAppProfileElement: {
    prototype: HTMLAppProfileElement;
    new (): HTMLAppProfileElement;
  };
  interface HTMLElementTagNameMap {
    "app-profile": HTMLAppProfileElement;
  }
  interface ElementTagNameMap {
    "app-profile": HTMLAppProfileElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "app-profile": JSXElements.AppProfileAttributes;
    }
  }
  namespace JSXElements {
    export interface AppProfileAttributes extends HTMLAttributes {
      match?: MatchResults;
    }
  }
}


import {
  AppResume as AppResume
} from './components/app-resume/app-resume';

declare global {
  interface HTMLAppResumeElement extends AppResume, HTMLStencilElement {
  }
  var HTMLAppResumeElement: {
    prototype: HTMLAppResumeElement;
    new (): HTMLAppResumeElement;
  };
  interface HTMLElementTagNameMap {
    "app-resume": HTMLAppResumeElement;
  }
  interface ElementTagNameMap {
    "app-resume": HTMLAppResumeElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "app-resume": JSXElements.AppResumeAttributes;
    }
  }
  namespace JSXElements {
    export interface AppResumeAttributes extends HTMLAttributes {
      match?: MatchResults;
    }
  }
}


import {
  AppSocial as AppSocial
} from './components/app-social/app-social';

declare global {
  interface HTMLAppSocialElement extends AppSocial, HTMLStencilElement {
  }
  var HTMLAppSocialElement: {
    prototype: HTMLAppSocialElement;
    new (): HTMLAppSocialElement;
  };
  interface HTMLElementTagNameMap {
    "app-social": HTMLAppSocialElement;
  }
  interface ElementTagNameMap {
    "app-social": HTMLAppSocialElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "app-social": JSXElements.AppSocialAttributes;
    }
  }
  namespace JSXElements {
    export interface AppSocialAttributes extends HTMLAttributes {
      match?: MatchResults;
    }
  }
}


import {
  AppSpeaking as AppSpeaking
} from './components/app-speaking/app-speaking';

declare global {
  interface HTMLAppSpeakingElement extends AppSpeaking, HTMLStencilElement {
  }
  var HTMLAppSpeakingElement: {
    prototype: HTMLAppSpeakingElement;
    new (): HTMLAppSpeakingElement;
  };
  interface HTMLElementTagNameMap {
    "app-speaking": HTMLAppSpeakingElement;
  }
  interface ElementTagNameMap {
    "app-speaking": HTMLAppSpeakingElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "app-speaking": JSXElements.AppSpeakingAttributes;
    }
  }
  namespace JSXElements {
    export interface AppSpeakingAttributes extends HTMLAttributes {
      match?: MatchResults;
    }
  }
}


import {
  AppGit as AppStfu
} from './components/app-stfu/app-stfu';

declare global {
  interface HTMLAppStfuElement extends AppStfu, HTMLStencilElement {
  }
  var HTMLAppStfuElement: {
    prototype: HTMLAppStfuElement;
    new (): HTMLAppStfuElement;
  };
  interface HTMLElementTagNameMap {
    "app-stfu": HTMLAppStfuElement;
  }
  interface ElementTagNameMap {
    "app-stfu": HTMLAppStfuElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "app-stfu": JSXElements.AppStfuAttributes;
    }
  }
  namespace JSXElements {
    export interface AppStfuAttributes extends HTMLAttributes {
      match?: MatchResults;
    }
  }
}


import {
  AppTalks as AppTalks
} from './components/app-talks/app-talks';

declare global {
  interface HTMLAppTalksElement extends AppTalks, HTMLStencilElement {
  }
  var HTMLAppTalksElement: {
    prototype: HTMLAppTalksElement;
    new (): HTMLAppTalksElement;
  };
  interface HTMLElementTagNameMap {
    "app-talks": HTMLAppTalksElement;
  }
  interface ElementTagNameMap {
    "app-talks": HTMLAppTalksElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "app-talks": JSXElements.AppTalksAttributes;
    }
  }
  namespace JSXElements {
    export interface AppTalksAttributes extends HTMLAttributes {
      match?: MatchResults;
    }
  }
}


import {
  AppTravels as AppTravels
} from './components/app-travels/app-travels';

declare global {
  interface HTMLAppTravelsElement extends AppTravels, HTMLStencilElement {
  }
  var HTMLAppTravelsElement: {
    prototype: HTMLAppTravelsElement;
    new (): HTMLAppTravelsElement;
  };
  interface HTMLElementTagNameMap {
    "app-travels": HTMLAppTravelsElement;
  }
  interface ElementTagNameMap {
    "app-travels": HTMLAppTravelsElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "app-travels": JSXElements.AppTravelsAttributes;
    }
  }
  namespace JSXElements {
    export interface AppTravelsAttributes extends HTMLAttributes {
      match?: MatchResults;
    }
  }
}


import {
  LazyImg as LazyImg
} from './components/lazy-img/lazy-img';

declare global {
  interface HTMLLazyImgElement extends LazyImg, HTMLStencilElement {
  }
  var HTMLLazyImgElement: {
    prototype: HTMLLazyImgElement;
    new (): HTMLLazyImgElement;
  };
  interface HTMLElementTagNameMap {
    "lazy-img": HTMLLazyImgElement;
  }
  interface ElementTagNameMap {
    "lazy-img": HTMLLazyImgElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "lazy-img": JSXElements.LazyImgAttributes;
    }
  }
  namespace JSXElements {
    export interface LazyImgAttributes extends HTMLAttributes {
      alt?: string;
      src?: string;
    }
  }
}


import {
  MyApp as MyApp
} from './components/my-app/my-app';

declare global {
  interface HTMLMyAppElement extends MyApp, HTMLStencilElement {
  }
  var HTMLMyAppElement: {
    prototype: HTMLMyAppElement;
    new (): HTMLMyAppElement;
  };
  interface HTMLElementTagNameMap {
    "my-app": HTMLMyAppElement;
  }
  interface ElementTagNameMap {
    "my-app": HTMLMyAppElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "my-app": JSXElements.MyAppAttributes;
    }
  }
  namespace JSXElements {
    export interface MyAppAttributes extends HTMLAttributes {
      
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }
