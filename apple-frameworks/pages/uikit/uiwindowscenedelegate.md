> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwindowscenedelegate](https://developer.apple.com/documentation/uikit/uiwindowscenedelegate)

# UIWindowSceneDelegate (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Additional methods that you use to manage app-specific tasks occurring in a scene.

## Declaration

```swift
@MainActor protocol UIWindowSceneDelegate : UISceneDelegate
```

## Mentioned In

- [Transitioning to the UIKit scene-based life cycle](transitioning-to-the-uikit-scene-based-life-cycle.md)
- [Specifying the scenes your app supports](specifying-the-scenes-your-app-supports.md)

<a id="overview"></a>

## Overview

Use your [UIWindowSceneDelegate](uiwindowscenedelegate.md) object to manage the life cycle of one instance of your app’s user interface. The window scene delegate conforms to the [UISceneDelegate](uiscenedelegate.md) protocol, and you use it to receive notifications when its scene connects to the app, enters the foreground, and so on. You also use it to respond to changes in the underlying environment of the scene. For example, if the user resizes a scene, use your delegate to make any needed changes to your content to accommodate the new size.

Don’t create [UIWindowSceneDelegate](uiwindowscenedelegate.md) objects directly. Instead, specify the name of your delegate class as part of the configuration data for your scene. You can specify this information in your app’s `Info.plist` file, or in the [UISceneConfiguration](uisceneconfiguration.md) object you return from your app delegate’s [application(\_:configurationForConnecting:options:)](uiapplicationdelegate/application%28__configurationforconnecting_options_%29.md) method. For more information about how to configure scenes, see [Specifying the scenes your app supports](specifying-the-scenes-your-app-supports.md).

For an example on using `UIWindowSceneDelegate` in your app, see [Supporting multiple windows on iPad](supporting-multiple-windows-on-ipad.md).

## Topics

### Managing the scene’s main window

- [window](uiwindowscenedelegate/window.md): The main window associated with the scene.

### Responding to scene changes

- [windowScene(\_:didUpdateEffectiveGeometry:)](uiwindowscenedelegate/windowscene%28__didupdateeffectivegeometry_%29.md): Called when the window scene’s effective geometry has changed.

### Performing tasks

- [windowScene(\_:performActionFor:completionHandler:)](uiwindowscenedelegate/windowscene%28__performactionfor_completionhandler_%29.md): Asks the delegate to perform the user-selected action.
- [windowScene(\_:userDidAcceptCloudKitShareWith:)](uiwindowscenedelegate/windowscene%28__userdidacceptcloudkitsharewith_%29.md): Tells the delegate that the window scene now has access to shared information in CloudKit.

### Configuring supported interface orientations

- [supportedInterfaceOrientations(for:)](uiwindowscenedelegate/supportedinterfaceorientations%28for_%29.md): Returns the interface orientations supported by the window scene. The returned value replaces the app’s UISupportedInterfaceOrientations Info.plist value for this scene. If not implemented, the Info.plist value is used.

### Deprecated methods

- [windowScene(\_:didUpdate:interfaceOrientation:traitCollection:)](uiwindowscenedelegate/windowscene%28__didupdate_interfaceorientation_traitcollection_%29.md): Deprecated. Notifies you when the size, orientation, or traits of a scene change.

### Instance Methods

- [preferredWindowingControlStyle(for:)](uiwindowscenedelegate/preferredwindowingcontrolstyle%28for_%29.md): Called by the system to determine the windowing control style for the provided scene. `automaticStyle` will be used if this method is not implemented.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [UISceneDelegate](uiscenedelegate.md)

## See Also

### Window scenes

- [Supporting multiple windows on iPad](supporting-multiple-windows-on-ipad.md): Support side-by-side instances of your app’s interface and create new windows.
- [UIWindowScene](uiwindowscene.md): A scene that manages one or more windows for your app.
- [UIScene](uiscene.md): An object that represents one instance of your app’s user interface.
- [UISceneDelegate](uiscenedelegate.md): The core methods you use to respond to life-cycle events occurring within a scene.

# UIWindowSceneDelegate (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Additional methods that you use to manage app-specific tasks occurring in a scene.

## Declaration

```objectivec
@protocol UIWindowSceneDelegate <UISceneDelegate>
```

## Mentioned In

- [Transitioning to the UIKit scene-based life cycle](transitioning-to-the-uikit-scene-based-life-cycle.md)
- [Specifying the scenes your app supports](specifying-the-scenes-your-app-supports.md)

<a id="overview"></a>

## Overview

Use your [UIWindowSceneDelegate](uiwindowscenedelegate.md) object to manage the life cycle of one instance of your app’s user interface. The window scene delegate conforms to the [UISceneDelegate](uiscenedelegate.md) protocol, and you use it to receive notifications when its scene connects to the app, enters the foreground, and so on. You also use it to respond to changes in the underlying environment of the scene. For example, if the user resizes a scene, use your delegate to make any needed changes to your content to accommodate the new size.

Don’t create [UIWindowSceneDelegate](uiwindowscenedelegate.md) objects directly. Instead, specify the name of your delegate class as part of the configuration data for your scene. You can specify this information in your app’s `Info.plist` file, or in the [UISceneConfiguration](uisceneconfiguration.md) object you return from your app delegate’s [application:configurationForConnectingSceneSession:options:](uiapplicationdelegate/application%28__configurationforconnecting_options_%29.md) method. For more information about how to configure scenes, see [Specifying the scenes your app supports](specifying-the-scenes-your-app-supports.md).

For an example on using `UIWindowSceneDelegate` in your app, see [Supporting multiple windows on iPad](supporting-multiple-windows-on-ipad.md).

## Topics

### Managing the scene’s main window

- [window](uiwindowscenedelegate/window.md): The main window associated with the scene.

### Responding to scene changes

- [windowScene:didUpdateEffectiveGeometry:](uiwindowscenedelegate/windowscene%28__didupdateeffectivegeometry_%29.md): Called when the window scene’s effective geometry has changed.

### Performing tasks

- [windowScene:performActionForShortcutItem:completionHandler:](uiwindowscenedelegate/windowscene%28__performactionfor_completionhandler_%29.md): Asks the delegate to perform the user-selected action.
- [windowScene:userDidAcceptCloudKitShareWithMetadata:](uiwindowscenedelegate/windowscene%28__userdidacceptcloudkitsharewith_%29.md): Tells the delegate that the window scene now has access to shared information in CloudKit.

### Configuring supported interface orientations

- [supportedInterfaceOrientationsForWindowScene:](uiwindowscenedelegate/supportedinterfaceorientations%28for_%29.md): Returns the interface orientations supported by the window scene. The returned value replaces the app’s UISupportedInterfaceOrientations Info.plist value for this scene. If not implemented, the Info.plist value is used.

### Deprecated methods

- [windowScene:didUpdateCoordinateSpace:interfaceOrientation:traitCollection:](uiwindowscenedelegate/windowscene%28__didupdate_interfaceorientation_traitcollection_%29.md): Deprecated. Notifies you when the size, orientation, or traits of a scene change.

### Instance Methods

- [preferredWindowingControlStyleForScene:](uiwindowscenedelegate/preferredwindowingcontrolstyle%28for_%29.md): Called by the system to determine the windowing control style for the provided scene. `automaticStyle` will be used if this method is not implemented.

## Relationships

### Inherits From

- [UISceneDelegate](uiscenedelegate.md)

## See Also

### Window scenes

- [UIWindowScene](uiwindowscene.md): A scene that manages one or more windows for your app.
- [UIScene](uiscene.md): An object that represents one instance of your app’s user interface.
- [UISceneDelegate](uiscenedelegate.md): The core methods you use to respond to life-cycle events occurring within a scene.
