> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscenedelegate](https://developer.apple.com/documentation/uikit/uiscenedelegate)

# UISceneDelegate (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The core methods you use to respond to life-cycle events occurring within a scene.

## Declaration

```swift
@MainActor protocol UISceneDelegate : NSObjectProtocol
```

## Mentioned In

- [Transitioning to the UIKit scene-based life cycle](transitioning-to-the-uikit-scene-based-life-cycle.md)

<a id="overview"></a>

## Overview

Use your [UISceneDelegate](uiscenedelegate.md) object to manage life-cycle events in one instance of your app’s user interface. This interface defines methods for responding to state transitions that affect the scene, including when the scene enters the foreground and becomes active, and when it enters the background. Use your delegate to provide appropriate behavior when these transitions occur. For example, finish critical tasks and quiet your app when it enters the background.

Don’t create [UISceneDelegate](uiscenedelegate.md) objects directly. Instead, specify the name of your custom delegate class as part of the configuration data for your scenes. You can specify this information in your app’s `Info.plist` file, or in the [UISceneConfiguration](uisceneconfiguration.md) object you return from your app delegate’s [application(\_:configurationForConnecting:options:)](uiapplicationdelegate/application%28__configurationforconnecting_options_%29.md) method. For more information about how to configure scenes, see [Specifying the scenes your app supports](specifying-the-scenes-your-app-supports.md).

## Topics

### Working with window scenes

- [Supporting multiple windows on iPad](supporting-multiple-windows-on-ipad.md): Support side-by-side instances of your app’s interface and create new windows.

### Connecting and disconnecting the scene

- [scene(\_:willConnectTo:options:)](uiscenedelegate/scene%28__willconnectto_options_%29.md): Tells the delegate about the addition of a scene to the app.
- [sceneDidDisconnect(\_:)](uiscenedelegate/scenediddisconnect%28__%29.md): Tells the delegate that UIKit removed a scene from your app.
- [UIScene.ConnectionOptions](uiscene/connectionoptions.md): A data object containing information about the reasons why UIKit created the scene.

### Transitioning to the foreground

- [sceneWillEnterForeground(\_:)](uiscenedelegate/scenewillenterforeground%28__%29.md): Tells the delegate that the scene is about to begin running in the foreground and become visible to the user.
- [sceneDidBecomeActive(\_:)](uiscenedelegate/scenedidbecomeactive%28__%29.md): Tells the delegate that the scene became active and is now responding to user events.

### Transitioning to the background

- [sceneWillResignActive(\_:)](uiscenedelegate/scenewillresignactive%28__%29.md): Tells the delegate that the scene is about to resign the active state and stop responding to user events.
- [sceneDidEnterBackground(\_:)](uiscenedelegate/scenedidenterbackground%28__%29.md): Tells the delegate that the scene is running in the background and is no longer onscreen.

### Opening URLs

- [scene(\_:openURLContexts:)](uiscenedelegate/scene%28__openurlcontexts_%29.md): Asks the delegate to open one or more URLs.

### Continuing user activities

- [scene(\_:willContinueUserActivityWithType:)](uiscenedelegate/scene%28__willcontinueuseractivitywithtype_%29.md): Tells the delegate that it’s about to receive Handoff-related data.
- [scene(\_:continue:)](uiscenedelegate/scene%28__continue_%29.md): Tells the delegate to handle the specified Handoff-related activity.
- [scene(\_:didFailToContinueUserActivityWithType:error:)](uiscenedelegate/scene%28__didfailtocontinueuseractivitywithtype_error_%29.md): Tells the delegate that the activity couldn’t be continued.

### Saving the state of the scene

- [Restoring your app’s state](restoring-your-app-s-state.md): Provide continuity for the user by preserving current activities.
- [stateRestorationActivity(for:)](uiscenedelegate/staterestorationactivity%28for_%29.md): Returns a user activity object encapsulating the current state of the specified scene.
- [scene(\_:restoreInteractionStateWith:)](uiscenedelegate/scene%28__restoreinteractionstatewith_%29.md)
- [scene(\_:didUpdate:)](uiscenedelegate/scene%28__didupdate_%29.md): Tells the delegate that the specified activity object was updated.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Inherited By

- [UIWindowSceneDelegate](uiwindowscenedelegate.md)

## See Also

### Window scenes

- [Supporting multiple windows on iPad](supporting-multiple-windows-on-ipad.md): Support side-by-side instances of your app’s interface and create new windows.
- [UIWindowSceneDelegate](uiwindowscenedelegate.md): Additional methods that you use to manage app-specific tasks occurring in a scene.
- [UIWindowScene](uiwindowscene.md): A scene that manages one or more windows for your app.
- [UIScene](uiscene.md): An object that represents one instance of your app’s user interface.

# UISceneDelegate (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The core methods you use to respond to life-cycle events occurring within a scene.

## Declaration

```objectivec
@protocol UISceneDelegate <NSObject>
```

## Mentioned In

- [Transitioning to the UIKit scene-based life cycle](transitioning-to-the-uikit-scene-based-life-cycle.md)

<a id="overview"></a>

## Overview

Use your [UISceneDelegate](uiscenedelegate.md) object to manage life-cycle events in one instance of your app’s user interface. This interface defines methods for responding to state transitions that affect the scene, including when the scene enters the foreground and becomes active, and when it enters the background. Use your delegate to provide appropriate behavior when these transitions occur. For example, finish critical tasks and quiet your app when it enters the background.

Don’t create [UISceneDelegate](uiscenedelegate.md) objects directly. Instead, specify the name of your custom delegate class as part of the configuration data for your scenes. You can specify this information in your app’s `Info.plist` file, or in the [UISceneConfiguration](uisceneconfiguration.md) object you return from your app delegate’s [application:configurationForConnectingSceneSession:options:](uiapplicationdelegate/application%28__configurationforconnecting_options_%29.md) method. For more information about how to configure scenes, see [Specifying the scenes your app supports](specifying-the-scenes-your-app-supports.md).

## Topics

### Connecting and disconnecting the scene

- [scene:willConnectToSession:options:](uiscenedelegate/scene%28__willconnectto_options_%29.md): Tells the delegate about the addition of a scene to the app.
- [sceneDidDisconnect:](uiscenedelegate/scenediddisconnect%28__%29.md): Tells the delegate that UIKit removed a scene from your app.
- [UISceneConnectionOptions](uiscene/connectionoptions.md): A data object containing information about the reasons why UIKit created the scene.

### Transitioning to the foreground

- [sceneWillEnterForeground:](uiscenedelegate/scenewillenterforeground%28__%29.md): Tells the delegate that the scene is about to begin running in the foreground and become visible to the user.
- [sceneDidBecomeActive:](uiscenedelegate/scenedidbecomeactive%28__%29.md): Tells the delegate that the scene became active and is now responding to user events.

### Transitioning to the background

- [sceneWillResignActive:](uiscenedelegate/scenewillresignactive%28__%29.md): Tells the delegate that the scene is about to resign the active state and stop responding to user events.
- [sceneDidEnterBackground:](uiscenedelegate/scenedidenterbackground%28__%29.md): Tells the delegate that the scene is running in the background and is no longer onscreen.

### Opening URLs

- [scene:openURLContexts:](uiscenedelegate/scene%28__openurlcontexts_%29.md): Asks the delegate to open one or more URLs.

### Continuing user activities

- [scene:willContinueUserActivityWithType:](uiscenedelegate/scene%28__willcontinueuseractivitywithtype_%29.md): Tells the delegate that it’s about to receive Handoff-related data.
- [scene:continueUserActivity:](uiscenedelegate/scene%28__continue_%29.md): Tells the delegate to handle the specified Handoff-related activity.
- [scene:didFailToContinueUserActivityWithType:error:](uiscenedelegate/scene%28__didfailtocontinueuseractivitywithtype_error_%29.md): Tells the delegate that the activity couldn’t be continued.

### Saving the state of the scene

- [Restoring your app’s state](restoring-your-app-s-state.md): Provide continuity for the user by preserving current activities.
- [stateRestorationActivityForScene:](uiscenedelegate/staterestorationactivity%28for_%29.md): Returns a user activity object encapsulating the current state of the specified scene.
- [scene:restoreInteractionStateWithUserActivity:](uiscenedelegate/scene%28__restoreinteractionstatewith_%29.md)
- [scene:didUpdateUserActivity:](uiscenedelegate/scene%28__didupdate_%29.md): Tells the delegate that the specified activity object was updated.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Inherited By

- [UIWindowSceneDelegate](uiwindowscenedelegate.md)

## See Also

### Window scenes

- [UIWindowSceneDelegate](uiwindowscenedelegate.md): Additional methods that you use to manage app-specific tasks occurring in a scene.
- [UIWindowScene](uiwindowscene.md): A scene that manages one or more windows for your app.
- [UIScene](uiscene.md): An object that represents one instance of your app’s user interface.
