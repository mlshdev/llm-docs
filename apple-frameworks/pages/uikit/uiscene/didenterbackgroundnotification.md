> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscene/didenterbackgroundnotification](https://developer.apple.com/documentation/uikit/uiscene/didenterbackgroundnotification)

# didEnterBackgroundNotification (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

A notification that indicates that the scene is running in the background and is no longer onscreen.

## Declaration

```swift
nonisolated class let didEnterBackgroundNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

Use this notification to reduce your scene’s memory usage, free up any shared resources, and clean up your scene’s user interface. Shortly after your notification handler returns, UIKit takes a snapshot of your scene’s interface for display in the app switcher. Make sure your interface doesn’t contain sensitive user information.

UIKit also calls the [sceneDidEnterBackground(\_:)](../uiscenedelegate/scenedidenterbackground%28__%29.md) method of your scene delegate object.

For more information about what to do when your app enters the background, see [Preparing your UI to run in the background](../preparing-your-ui-to-run-in-the-background.md).

## See Also

### Responding to life cycle notifications

- [willConnectNotification](willconnectnotification.md): A notification that indicates that UIKit added a scene to your app.
- [didDisconnectNotification](diddisconnectnotification.md): A notification that indicates that UIKit removed a scene from your app.
- [willEnterForegroundNotification](willenterforegroundnotification.md): A notification that indicates that a scene is about to begin running in the foreground and become visible to the user.
- [didActivateNotification](didactivatenotification.md): A notification that indicates that the scene is now onscreen and responding to user events.
- [willDeactivateNotification](willdeactivatenotification.md): A notification that indicates that the scene is about to resign the active state and stop responding to user events.

# UISceneDidEnterBackgroundNotification (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

A notification that indicates that the scene is running in the background and is no longer onscreen.

## Declaration

```objectivec
extern NSNotificationName const UISceneDidEnterBackgroundNotification;
```

<a id="Discussion"></a>

## Discussion

Use this notification to reduce your scene’s memory usage, free up any shared resources, and clean up your scene’s user interface. Shortly after your notification handler returns, UIKit takes a snapshot of your scene’s interface for display in the app switcher. Make sure your interface doesn’t contain sensitive user information.

UIKit also calls the [sceneDidEnterBackground:](../uiscenedelegate/scenedidenterbackground%28__%29.md) method of your scene delegate object.

For more information about what to do when your app enters the background, see [Preparing your UI to run in the background](../preparing-your-ui-to-run-in-the-background.md).

## See Also

### Responding to life cycle notifications

- [UISceneWillConnectNotification](willconnectnotification.md): A notification that indicates that UIKit added a scene to your app.
- [UISceneDidDisconnectNotification](diddisconnectnotification.md): A notification that indicates that UIKit removed a scene from your app.
- [UISceneWillEnterForegroundNotification](willenterforegroundnotification.md): A notification that indicates that a scene is about to begin running in the foreground and become visible to the user.
- [UISceneDidActivateNotification](didactivatenotification.md): A notification that indicates that the scene is now onscreen and responding to user events.
- [UISceneWillDeactivateNotification](willdeactivatenotification.md): A notification that indicates that the scene is about to resign the active state and stop responding to user events.
