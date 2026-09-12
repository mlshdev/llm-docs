> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscreen/referencedisplaymodestatusdidchangenotification](https://developer.apple.com/documentation/uikit/uiscreen/referencedisplaymodestatusdidchangenotification)

# referenceDisplayModeStatusDidChangeNotification (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+

A notification that posts when there’s a change to a screen’s reference display mode status.

## Declaration

```swift
nonisolated class let referenceDisplayModeStatusDidChangeNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The notification’s [object](../../foundation/notification/object.md) is the changed screen. Use that object’s [referenceDisplayModeStatus](referencedisplaymodestatus-swift.property.md) property to retrieve the new status.

The system posts this notification on the main actor.

## See Also

### Notifications

- [brightnessDidChangeNotification](brightnessdidchangenotification.md): A notification that posts when a screen’s brightness changes.
- [modeDidChangeNotification](modedidchangenotification.md): A notification that posts when a screen’s mode changes.
- [capturedDidChangeNotification](captureddidchangenotification.md): A notification that posts when the capture status of a screen changes.

# UIScreenReferenceDisplayModeStatusDidChangeNotification (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+

A notification that posts when there’s a change to a screen’s reference display mode status.

## Declaration

```objectivec
extern NSNotificationName const UIScreenReferenceDisplayModeStatusDidChangeNotification;
```

<a id="Discussion"></a>

## Discussion

The notification’s [object](../../foundation/notification/object.md) is the changed screen. Use that object’s [referenceDisplayModeStatus](referencedisplaymodestatus-swift.property.md) property to retrieve the new status.

The system posts this notification on the main actor.

## See Also

### Notifications

- [UIScreenBrightnessDidChangeNotification](brightnessdidchangenotification.md): A notification that posts when a screen’s brightness changes.
- [UIScreenModeDidChangeNotification](modedidchangenotification.md): A notification that posts when a screen’s mode changes.
- [UIScreenCapturedDidChangeNotification](captureddidchangenotification.md): A notification that posts when the capture status of a screen changes.
