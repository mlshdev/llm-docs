> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscreen/captureddidchangenotification](https://developer.apple.com/documentation/uikit/uiscreen/captureddidchangenotification)

# capturedDidChangeNotification (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+

A notification that posts when the capture status of a screen changes.

## Declaration

```swift
nonisolated class let capturedDidChangeNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The contents of a screen can be recorded, mirrored, sent over AirPlay, or otherwise cloned to another destination. UIKit sends this notification when the capture status of the screen changes.

The object of the notification is the [UIScreen](../uiscreen.md) object whose [isCaptured](iscaptured.md) property changed. There is no `userInfo` dictionary.

The system posts this notification on the main actor.

## See Also

### Notifications

- [brightnessDidChangeNotification](brightnessdidchangenotification.md): A notification that posts when a screen’s brightness changes.
- [modeDidChangeNotification](modedidchangenotification.md): A notification that posts when a screen’s mode changes.
- [referenceDisplayModeStatusDidChangeNotification](referencedisplaymodestatusdidchangenotification.md): A notification that posts when there’s a change to a screen’s reference display mode status.

# UIScreenCapturedDidChangeNotification (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+

A notification that posts when the capture status of a screen changes.

## Declaration

```objectivec
extern NSNotificationName const UIScreenCapturedDidChangeNotification;
```

<a id="Discussion"></a>

## Discussion

The contents of a screen can be recorded, mirrored, sent over AirPlay, or otherwise cloned to another destination. UIKit sends this notification when the capture status of the screen changes.

The object of the notification is the [UIScreen](../uiscreen.md) object whose [captured](iscaptured.md) property changed. There is no `userInfo` dictionary.

The system posts this notification on the main actor.

## See Also

### Notifications

- [UIScreenBrightnessDidChangeNotification](brightnessdidchangenotification.md): A notification that posts when a screen’s brightness changes.
- [UIScreenModeDidChangeNotification](modedidchangenotification.md): A notification that posts when a screen’s mode changes.
- [UIScreenReferenceDisplayModeStatusDidChangeNotification](referencedisplaymodestatusdidchangenotification.md): A notification that posts when there’s a change to a screen’s reference display mode status.
