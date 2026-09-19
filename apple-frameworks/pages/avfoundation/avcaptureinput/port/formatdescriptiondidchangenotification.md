> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avcaptureinput/port/formatdescriptiondidchangenotification

# formatDescriptionDidChangeNotification (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

A notification the system posts when the capture input port’s format description changes.

## Declaration

```swift
class let formatDescriptionDidChangeNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The notification’s [object](../../../foundation/notification/object.md) property contains the [AVCaptureInput.Port](../port.md) object whose format changed.

# AVCaptureInputPortFormatDescriptionDidChangeNotification (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

A notification the system posts when the capture input port’s format description changes.

## Declaration

```objectivec
extern NSNotificationName const AVCaptureInputPortFormatDescriptionDidChangeNotification;
```

<a id="Discussion"></a>

## Discussion

The notification’s [object](../../../foundation/notification/object.md) property contains the [AVCaptureInputPort](../port.md) object whose format changed.
