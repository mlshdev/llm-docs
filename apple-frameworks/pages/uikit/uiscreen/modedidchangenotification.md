> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscreen/modedidchangenotification](https://developer.apple.com/documentation/uikit/uiscreen/modedidchangenotification)

# modeDidChangeNotification (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS

A notification that posts when a screen’s mode changes.

## Declaration

```swift
nonisolated class let modeDidChangeNotification: NSNotification.Name
```

## Mentioned In

- [Processing queued notifications](../processing-queued-notifications.md)

<a id="Discussion"></a>

## Discussion

Clients can use this notification to detect changes in the screen resolution.

The object of the notification is the [UIScreen](../uiscreen.md) object whose [currentMode](currentmode.md) property changed. There is no `userInfo` dictionary.

The system posts this notification on the main actor.

## See Also

### Notifications

- [brightnessDidChangeNotification](brightnessdidchangenotification.md): A notification that posts when a screen’s brightness changes.
- [capturedDidChangeNotification](captureddidchangenotification.md): A notification that posts when the capture status of a screen changes.
- [referenceDisplayModeStatusDidChangeNotification](referencedisplaymodestatusdidchangenotification.md): A notification that posts when there’s a change to a screen’s reference display mode status.

# UIScreenModeDidChangeNotification (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS

A notification that posts when a screen’s mode changes.

## Declaration

```objectivec
extern NSNotificationName const UIScreenModeDidChangeNotification;
```

## Mentioned In

- [Processing queued notifications](../processing-queued-notifications.md)

<a id="Discussion"></a>

## Discussion

Clients can use this notification to detect changes in the screen resolution.

The object of the notification is the [UIScreen](../uiscreen.md) object whose [currentMode](currentmode.md) property changed. There is no `userInfo` dictionary.

The system posts this notification on the main actor.

## See Also

### Notifications

- [UIScreenBrightnessDidChangeNotification](brightnessdidchangenotification.md): A notification that posts when a screen’s brightness changes.
- [UIScreenCapturedDidChangeNotification](captureddidchangenotification.md): A notification that posts when the capture status of a screen changes.
- [UIScreenReferenceDisplayModeStatusDidChangeNotification](referencedisplaymodestatusdidchangenotification.md): A notification that posts when there’s a change to a screen’s reference display mode status.
