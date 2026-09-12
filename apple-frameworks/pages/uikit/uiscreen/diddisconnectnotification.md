> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscreen/diddisconnectnotification](https://developer.apple.com/documentation/uikit/uiscreen/diddisconnectnotification)

# didDisconnectNotification (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 3.2+ (deprecated in 16.0) · iPadOS 3.2+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · tvOS  (deprecated in 16.0)

A notification the system posts when a screen disconnects from the device.

> Use the [sceneDidDisconnect(\_:)](../uiscenedelegate/scenediddisconnect%28__%29.md) method on a scene delegate or [didDisconnectNotification](../uiscene/diddisconnectnotification.md) to recieve notification of disconnecting scenes from other screens.

## Declaration

```swift
nonisolated class let didDisconnectNotification: NSNotification.Name
```

## Mentioned In

- [Processing queued notifications](../processing-queued-notifications.md)

<a id="Discussion"></a>

## Discussion

The object of the notification is the [UIScreen](../uiscreen.md) object that represented the now-disconnected screen. There’s no `userInfo` dictionary.

## See Also

### Deprecated notifications

- [didConnectNotification](didconnectnotification.md): Deprecated. A notification the system posts when a new screen connects to the device.

# UIScreenDidDisconnectNotification (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 3.2+ (deprecated in 16.0) · iPadOS 3.2+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · tvOS  (deprecated in 16.0)

A notification the system posts when a screen disconnects from the device.

> Use the [sceneDidDisconnect:](../uiscenedelegate/scenediddisconnect%28__%29.md) method on a scene delegate or [UISceneDidDisconnectNotification](../uiscene/diddisconnectnotification.md) to recieve notification of disconnecting scenes from other screens.

## Declaration

```objectivec
extern NSNotificationName const UIScreenDidDisconnectNotification;
```

## Mentioned In

- [Processing queued notifications](../processing-queued-notifications.md)

<a id="Discussion"></a>

## Discussion

The object of the notification is the [UIScreen](../uiscreen.md) object that represented the now-disconnected screen. There’s no `userInfo` dictionary.

## See Also

### Deprecated notifications

- [UIScreenDidConnectNotification](didconnectnotification.md): Deprecated. A notification the system posts when a new screen connects to the device.
