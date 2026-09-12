> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscene/didactivatenotification](https://developer.apple.com/documentation/uikit/uiscene/didactivatenotification)

# didActivateNotification (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

A notification that indicates that the scene is now onscreen and responding to user events.

## Declaration

```swift
nonisolated class let didActivateNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

Use this notification to prepare your scene to be onscreen. UIKit posts this notification after loading the interface for your scene, but before that interface appears onscreen. Use it to refresh the contents of views, start timers, or increase frame rates for your UI. UIKit places the scene object in the [object](../../foundation/nsnotification/object.md) property of the notification.

UIKit also calls the [sceneDidBecomeActive(\_:)](../uiscenedelegate/scenedidbecomeactive%28__%29.md) method of your scene delegate object.

For more information on what to do when your app becomes active, see [Preparing your UI to run in the foreground](../preparing-your-ui-to-run-in-the-foreground.md).

## See Also

### Responding to life cycle notifications

- [willConnectNotification](willconnectnotification.md): A notification that indicates that UIKit added a scene to your app.
- [didDisconnectNotification](diddisconnectnotification.md): A notification that indicates that UIKit removed a scene from your app.
- [willEnterForegroundNotification](willenterforegroundnotification.md): A notification that indicates that a scene is about to begin running in the foreground and become visible to the user.
- [willDeactivateNotification](willdeactivatenotification.md): A notification that indicates that the scene is about to resign the active state and stop responding to user events.
- [didEnterBackgroundNotification](didenterbackgroundnotification.md): A notification that indicates that the scene is running in the background and is no longer onscreen.

# UISceneDidActivateNotification (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

A notification that indicates that the scene is now onscreen and responding to user events.

## Declaration

```objectivec
extern NSNotificationName const UISceneDidActivateNotification;
```

<a id="Discussion"></a>

## Discussion

Use this notification to prepare your scene to be onscreen. UIKit posts this notification after loading the interface for your scene, but before that interface appears onscreen. Use it to refresh the contents of views, start timers, or increase frame rates for your UI. UIKit places the scene object in the [object](../../foundation/nsnotification/object.md) property of the notification.

UIKit also calls the [sceneDidBecomeActive:](../uiscenedelegate/scenedidbecomeactive%28__%29.md) method of your scene delegate object.

For more information on what to do when your app becomes active, see [Preparing your UI to run in the foreground](../preparing-your-ui-to-run-in-the-foreground.md).

## See Also

### Responding to life cycle notifications

- [UISceneWillConnectNotification](willconnectnotification.md): A notification that indicates that UIKit added a scene to your app.
- [UISceneDidDisconnectNotification](diddisconnectnotification.md): A notification that indicates that UIKit removed a scene from your app.
- [UISceneWillEnterForegroundNotification](willenterforegroundnotification.md): A notification that indicates that a scene is about to begin running in the foreground and become visible to the user.
- [UISceneWillDeactivateNotification](willdeactivatenotification.md): A notification that indicates that the scene is about to resign the active state and stop responding to user events.
- [UISceneDidEnterBackgroundNotification](didenterbackgroundnotification.md): A notification that indicates that the scene is running in the background and is no longer onscreen.
