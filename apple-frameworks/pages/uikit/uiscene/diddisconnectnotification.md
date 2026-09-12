> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscene/diddisconnectnotification](https://developer.apple.com/documentation/uikit/uiscene/diddisconnectnotification)

# didDisconnectNotification (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

A notification that indicates that UIKit removed a scene from your app.

## Declaration

```swift
nonisolated class let didDisconnectNotification: NSNotification.Name
```

## Mentioned In

- [Presenting content on a connected display](../presenting-content-on-a-connected-display.md)

<a id="Discussion"></a>

## Discussion

Use this notification to perform any final cleanup before your scene is purged from memory. For example, use it to release references to files or shared resources and to save user data. UIKit places the affected scene in the [object](../../foundation/nsnotification/object.md) property of the notification.

The removal of a scene is a precursor to the destruction of that scene. UIKit disconnects a scene when the user explicitly closes it in the app switcher. UIKit may also disconnect a scene in order to reclaim memory for other processes. UIKit does not automatically disconnect a scene when the user switches to another app.

UIKit also calls the [sceneDidDisconnect(\_:)](../uiscenedelegate/scenediddisconnect%28__%29.md) method of your scene delegate object.

## See Also

### Responding to life cycle notifications

- [willConnectNotification](willconnectnotification.md): A notification that indicates that UIKit added a scene to your app.
- [willEnterForegroundNotification](willenterforegroundnotification.md): A notification that indicates that a scene is about to begin running in the foreground and become visible to the user.
- [didActivateNotification](didactivatenotification.md): A notification that indicates that the scene is now onscreen and responding to user events.
- [willDeactivateNotification](willdeactivatenotification.md): A notification that indicates that the scene is about to resign the active state and stop responding to user events.
- [didEnterBackgroundNotification](didenterbackgroundnotification.md): A notification that indicates that the scene is running in the background and is no longer onscreen.

# UISceneDidDisconnectNotification (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

A notification that indicates that UIKit removed a scene from your app.

## Declaration

```objectivec
extern NSNotificationName const UISceneDidDisconnectNotification;
```

## Mentioned In

- [Presenting content on a connected display](../presenting-content-on-a-connected-display.md)

<a id="Discussion"></a>

## Discussion

Use this notification to perform any final cleanup before your scene is purged from memory. For example, use it to release references to files or shared resources and to save user data. UIKit places the affected scene in the [object](../../foundation/nsnotification/object.md) property of the notification.

The removal of a scene is a precursor to the destruction of that scene. UIKit disconnects a scene when the user explicitly closes it in the app switcher. UIKit may also disconnect a scene in order to reclaim memory for other processes. UIKit does not automatically disconnect a scene when the user switches to another app.

UIKit also calls the [sceneDidDisconnect:](../uiscenedelegate/scenediddisconnect%28__%29.md) method of your scene delegate object.

## See Also

### Responding to life cycle notifications

- [UISceneWillConnectNotification](willconnectnotification.md): A notification that indicates that UIKit added a scene to your app.
- [UISceneWillEnterForegroundNotification](willenterforegroundnotification.md): A notification that indicates that a scene is about to begin running in the foreground and become visible to the user.
- [UISceneDidActivateNotification](didactivatenotification.md): A notification that indicates that the scene is now onscreen and responding to user events.
- [UISceneWillDeactivateNotification](willdeactivatenotification.md): A notification that indicates that the scene is about to resign the active state and stop responding to user events.
- [UISceneDidEnterBackgroundNotification](didenterbackgroundnotification.md): A notification that indicates that the scene is running in the background and is no longer onscreen.
