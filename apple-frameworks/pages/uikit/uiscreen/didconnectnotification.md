> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscreen/didconnectnotification](https://developer.apple.com/documentation/uikit/uiscreen/didconnectnotification)

# didConnectNotification (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 3.2+ (deprecated in 16.0) · iPadOS 3.2+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · tvOS  (deprecated in 16.0)

A notification the system posts when a new screen connects to the device.

> Use the [scene(\_:willConnectTo:options:)](../uiscenedelegate/scene%28__willconnectto_options_%29.md) method on a scene delegate or [willConnectNotification](../uiscene/willconnectnotification.md) to recieve notification of connecting scenes from other screens.

## Declaration

```swift
nonisolated class let didConnectNotification: NSNotification.Name
```

## Mentioned In

- [Processing queued notifications](../processing-queued-notifications.md)

<a id="Discussion"></a>

## Discussion

Connection notifications aren’t sent for screens that are already present when the app launches. The app can instead use the [screens](screens.md) method to get the current set of screens at launch time.

The object of the notification is the [UIScreen](../uiscreen.md) object representing the new screen. There’s no `userInfo` dictionary.

## See Also

### Deprecated notifications

- [didDisconnectNotification](diddisconnectnotification.md): Deprecated. A notification the system posts when a screen disconnects from the device.

# UIScreenDidConnectNotification (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 3.2+ (deprecated in 16.0) · iPadOS 3.2+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · tvOS  (deprecated in 16.0)

A notification the system posts when a new screen connects to the device.

> Use the [scene:willConnectToSession:options:](../uiscenedelegate/scene%28__willconnectto_options_%29.md) method on a scene delegate or [UISceneWillConnectNotification](../uiscene/willconnectnotification.md) to recieve notification of connecting scenes from other screens.

## Declaration

```objectivec
extern NSNotificationName const UIScreenDidConnectNotification;
```

## Mentioned In

- [Processing queued notifications](../processing-queued-notifications.md)

<a id="Discussion"></a>

## Discussion

Connection notifications aren’t sent for screens that are already present when the app launches. The app can instead use the [screens](screens.md) method to get the current set of screens at launch time.

The object of the notification is the [UIScreen](../uiscreen.md) object representing the new screen. There’s no `userInfo` dictionary.

## See Also

### Deprecated notifications

- [UIScreenDidDisconnectNotification](diddisconnectnotification.md): Deprecated. A notification the system posts when a screen disconnects from the device.
