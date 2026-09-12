> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcode/asset-management](https://developer.apple.com/documentation/xcode/asset-management)

# Asset management

Add app icons, images, strings, data files, machine learning models, and other resources to your projects, and manage how you load them at runtime.

<a id="Overview"></a>

## Overview

Apps rely on many types of assets to create a rich, dynamic, and visually engaging user experience. Xcode provides tools and settings to help you add, organize, and optimize the different asset types your app uses.

Xcode simplifies managing most types of assets with asset catalogs. Use *asset catalogs* to organize and manage resources such as images, colors, app icons, textures, stickers, and data.

![Three icons that represent common types of resources in asset catalogs. From left-to-right, an image stack icon with the label images, a color picker icon with the label colors, and a CSV icon with the label data.](https://developer.apple.com/images/com.apple.Xcode/asset-management-1@2x.png)

Xcode also provides interactive editors for certain types of assets, like particle effects, that let you experiment, make changes, and see the results immediately.

## Topics

### App icons and launch screen

- [Creating your app icon using Icon Composer](creating-your-app-icon-using-icon-composer.md): Use Icon Composer to stylize your app icon for different platforms and appearances.
- [Configuring your app to use alternate app icons](configuring-your-app-to-use-alternate-app-icons.md): Add alternate app icons to your app, and let people choose which icon to display.
- [Configuring your app icon using an asset catalog](configuring-your-app-icon.md): Add app icon variations to an asset catalog that represents your app in places such as the App Store, the Home Screen, Settings, and search results.
- [Specifying your app’s launch screen](specifying-your-apps-launch-screen.md): Make your iOS app launch experience faster and more responsive by customizing a launch screen.

### Asset catalogs

- [Managing assets with asset catalogs](managing-assets-with-asset-catalogs.md): Add, organize, and edit sets of assets in your Xcode project using asset catalogs.

### Images

- [Adding images to your Xcode project](adding-images-to-your-xcode-project.md): Import images into your project, manage their appearances and variations, and load them at runtime.
- [Creating custom symbol images for your app](https://developer.apple.com/documentation/uikit/creating-custom-symbol-images-for-your-app): Create, organize, and annotate symbol images using SF Symbols.

### Colors

- [Specifying your app’s color scheme](specifying-your-apps-color-scheme.md): Set a global accent color for your app by using asset catalogs.
- [Supporting Dark Mode in your interface](https://developer.apple.com/documentation/uikit/supporting-dark-mode-in-your-interface): Update colors, images, and behaviors so that your app adapts automatically when Dark Mode is active.

### Augmented reality assets

- [Detecting Images in an AR Experience](https://developer.apple.com/documentation/arkit/detecting-images-in-an-ar-experience): React to known 2D images in the user’s environment, and use their positions to place AR content.
- [Scanning and Detecting 3D Objects](https://developer.apple.com/documentation/arkit/scanning-and-detecting-3d-objects): Record spatial features of real-world objects, then use the results to find those objects in the user’s environment and trigger AR content.
- [Composing interactive 3D content with RealityKit and Reality Composer Pro](https://developer.apple.com/documentation/realitykit/composing-interactive-3d-content-with-realitykit-and-reality-composer-pro): Build an interactive scene using an animation timeline.

### Machine learning models

- [Create ML](https://developer.apple.com/documentation/createml): Create machine learning models for use in your app.

### Particle effects

- [Creating a SpriteKit particle emitter in Xcode](creating-a-spritekit-particle-emitter-in-xcode.md): Add particle effects to your app by creating repeatable particles.

## See Also

### Interface

- [Localization](localization.md): Expand the market for your app by supporting multiple languages and regions.
- [Accessibility Inspector](https://developer.apple.com/documentation/accessibility/accessibility-inspector): Reveal how your app represents itself to people using accessibility features.
