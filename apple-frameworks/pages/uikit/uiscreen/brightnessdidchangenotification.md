> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscreen/brightnessdidchangenotification](https://developer.apple.com/documentation/uikit/uiscreen/brightnessdidchangenotification)

# brightnessDidChangeNotification (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS

A notification that posts when a screen’s brightness changes.

## Declaration

```swift
nonisolated class let brightnessDidChangeNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The object of the notification is the [UIScreen](../uiscreen.md) object whose [brightness](brightness.md) property changed. There is no `userInfo` dictionary.

## See Also

### Notifications

- [modeDidChangeNotification](modedidchangenotification.md): A notification that posts when a screen’s mode changes.
- [capturedDidChangeNotification](captureddidchangenotification.md): A notification that posts when the capture status of a screen changes.
- [referenceDisplayModeStatusDidChangeNotification](referencedisplaymodestatusdidchangenotification.md): A notification that posts when there’s a change to a screen’s reference display mode status.

# UIScreenBrightnessDidChangeNotification (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS

A notification that posts when a screen’s brightness changes.

## Declaration

```objectivec
extern NSNotificationName const UIScreenBrightnessDidChangeNotification;
```

<a id="Discussion"></a>

## Discussion

The object of the notification is the [UIScreen](../uiscreen.md) object whose [brightness](brightness.md) property changed. There is no `userInfo` dictionary.

## See Also

### Notifications

- [UIScreenModeDidChangeNotification](modedidchangenotification.md): A notification that posts when a screen’s mode changes.
- [UIScreenCapturedDidChangeNotification](captureddidchangenotification.md): A notification that posts when the capture status of a screen changes.
- [UIScreenReferenceDisplayModeStatusDidChangeNotification](referencedisplaymodestatusdidchangenotification.md): A notification that posts when there’s a change to a screen’s reference display mode status.
