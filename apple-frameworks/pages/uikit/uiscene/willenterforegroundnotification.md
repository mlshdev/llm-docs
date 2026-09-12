> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscene/willenterforegroundnotification](https://developer.apple.com/documentation/uikit/uiscene/willenterforegroundnotification)

# willEnterForegroundNotification (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

A notification that indicates that a scene is about to begin running in the foreground and become visible to the user.

## Declaration

```swift
nonisolated class let willEnterForegroundNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

UIKit posts this notification before moving a scene to the foreground. This transition occurs both for newly created and connected scenes and for scenes that were running in the background and were brought to the foreground by the system or a user action. A scene enters the foreground as a precursor to becoming visible onscreen, so this method is invariably followed by the posting of a [didActivateNotification](didactivatenotification.md) notification. UIKit places the scene object in the [object](../../foundation/nsnotification/object.md) property of the notification.

UIKit also calls the [sceneWillEnterForeground(\_:)](../uiscenedelegate/scenewillenterforeground%28__%29.md) method of your scene delegate object.

## See Also

### Responding to life cycle notifications

- [willConnectNotification](willconnectnotification.md): A notification that indicates that UIKit added a scene to your app.
- [didDisconnectNotification](diddisconnectnotification.md): A notification that indicates that UIKit removed a scene from your app.
- [didActivateNotification](didactivatenotification.md): A notification that indicates that the scene is now onscreen and responding to user events.
- [willDeactivateNotification](willdeactivatenotification.md): A notification that indicates that the scene is about to resign the active state and stop responding to user events.
- [didEnterBackgroundNotification](didenterbackgroundnotification.md): A notification that indicates that the scene is running in the background and is no longer onscreen.

# UISceneWillEnterForegroundNotification (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

A notification that indicates that a scene is about to begin running in the foreground and become visible to the user.

## Declaration

```objectivec
extern NSNotificationName const UISceneWillEnterForegroundNotification;
```

<a id="Discussion"></a>

## Discussion

UIKit posts this notification before moving a scene to the foreground. This transition occurs both for newly created and connected scenes and for scenes that were running in the background and were brought to the foreground by the system or a user action. A scene enters the foreground as a precursor to becoming visible onscreen, so this method is invariably followed by the posting of a [UISceneDidActivateNotification](didactivatenotification.md) notification. UIKit places the scene object in the [object](../../foundation/nsnotification/object.md) property of the notification.

UIKit also calls the [sceneWillEnterForeground:](../uiscenedelegate/scenewillenterforeground%28__%29.md) method of your scene delegate object.

## See Also

### Responding to life cycle notifications

- [UISceneWillConnectNotification](willconnectnotification.md): A notification that indicates that UIKit added a scene to your app.
- [UISceneDidDisconnectNotification](diddisconnectnotification.md): A notification that indicates that UIKit removed a scene from your app.
- [UISceneDidActivateNotification](didactivatenotification.md): A notification that indicates that the scene is now onscreen and responding to user events.
- [UISceneWillDeactivateNotification](willdeactivatenotification.md): A notification that indicates that the scene is about to resign the active state and stop responding to user events.
- [UISceneDidEnterBackgroundNotification](didenterbackgroundnotification.md): A notification that indicates that the scene is running in the background and is no longer onscreen.
