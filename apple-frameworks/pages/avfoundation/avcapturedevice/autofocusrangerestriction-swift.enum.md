> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/autofocusrangerestriction-swift.enum](https://developer.apple.com/documentation/avfoundation/avcapturedevice/autofocusrangerestriction-swift.enum)

# AVCaptureDevice.AutoFocusRangeRestriction (Swift)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

Constants to specify the autofocus range of a capture device.

## Declaration

```swift
enum AutoFocusRangeRestriction
```

<a id="overview"></a>

## Overview

If you expect to focus primarily on near or far objects, you can use the [autoFocusRangeRestriction](autofocusrangerestriction-swift.property.md) property to provide a hint to the focusing system. This approach makes autofocus faster, more power efficient, and less error prone. A restriction prioritizes focusing at distances in the specified range, but doesn’t prevent focusing elsewhere if the device finds no focus point within that range.

## Topics

### Constants

- [AVCaptureDevice.AutoFocusRangeRestriction.none](autofocusrangerestriction-swift.enum/none.md): The device attempts to focus on objects at any range.
- [AVCaptureDevice.AutoFocusRangeRestriction.near](autofocusrangerestriction-swift.enum/near.md): The device primarily attempts to focus on subjects near the camera.
- [AVCaptureDevice.AutoFocusRangeRestriction.far](autofocusrangerestriction-swift.enum/far.md): The device primarily attempts to focus on subjects far away from the camera.

### Initializers

- [init(rawValue:)](autofocusrangerestriction-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring automatic focus

- [isFocusModeSupported(\_:)](isfocusmodesupported%28__%29.md): Returns a Boolean value that indicates whether the device supports the specified focus mode.
- [focusMode](focusmode-swift.property.md): The capture device’s focus mode.
- [AVCaptureDevice.FocusMode](focusmode-swift.enum.md): Constants to specify the focus mode of a capture device.
- [isSmoothAutoFocusSupported](issmoothautofocussupported.md): A Boolean value that indicates whether the device supports smooth autofocus.
- [isSmoothAutoFocusEnabled](issmoothautofocusenabled.md): A Boolean value that indicates whether smooth autofocus is in an enabled state on the device.
- [isFaceDrivenAutoFocusEnabled](isfacedrivenautofocusenabled.md): A Boolean value that indicates whether the device has face-driven autofocus enabled.
- [automaticallyAdjustsFaceDrivenAutoFocusEnabled](automaticallyadjustsfacedrivenautofocusenabled.md): A Boolean value that indicates whether the device automatically adjusts face-driven autofocus.
- [isAutoFocusRangeRestrictionSupported](isautofocusrangerestrictionsupported.md): A Boolean value that indicates whether the device supports focus range restrictions.
- [autoFocusRangeRestriction](autofocusrangerestriction-swift.property.md): A value that controls the allowable range for automatic focusing.

# AVCaptureAutoFocusRangeRestriction (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

Constants to specify the autofocus range of a capture device.

## Declaration

```objectivec
enum AVCaptureAutoFocusRangeRestriction : NSInteger;
```

<a id="overview"></a>

## Overview

If you expect to focus primarily on near or far objects, you can use the [autoFocusRangeRestriction](autofocusrangerestriction-swift.property.md) property to provide a hint to the focusing system. This approach makes autofocus faster, more power efficient, and less error prone. A restriction prioritizes focusing at distances in the specified range, but doesn’t prevent focusing elsewhere if the device finds no focus point within that range.

## Topics

### Constants

- [AVCaptureAutoFocusRangeRestrictionNone](autofocusrangerestriction-swift.enum/none.md): The device attempts to focus on objects at any range.
- [AVCaptureAutoFocusRangeRestrictionNear](autofocusrangerestriction-swift.enum/near.md): The device primarily attempts to focus on subjects near the camera.
- [AVCaptureAutoFocusRangeRestrictionFar](autofocusrangerestriction-swift.enum/far.md): The device primarily attempts to focus on subjects far away from the camera.

## See Also

### Configuring automatic focus

- [isFocusModeSupported:](isfocusmodesupported%28__%29.md): Returns a Boolean value that indicates whether the device supports the specified focus mode.
- [focusMode](focusmode-swift.property.md): The capture device’s focus mode.
- [AVCaptureFocusMode](focusmode-swift.enum.md): Constants to specify the focus mode of a capture device.
- [smoothAutoFocusSupported](issmoothautofocussupported.md): A Boolean value that indicates whether the device supports smooth autofocus.
- [smoothAutoFocusEnabled](issmoothautofocusenabled.md): A Boolean value that indicates whether smooth autofocus is in an enabled state on the device.
- [faceDrivenAutoFocusEnabled](isfacedrivenautofocusenabled.md): A Boolean value that indicates whether the device has face-driven autofocus enabled.
- [automaticallyAdjustsFaceDrivenAutoFocusEnabled](automaticallyadjustsfacedrivenautofocusenabled.md): A Boolean value that indicates whether the device automatically adjusts face-driven autofocus.
- [autoFocusRangeRestrictionSupported](isautofocusrangerestrictionsupported.md): A Boolean value that indicates whether the device supports focus range restrictions.
- [autoFocusRangeRestriction](autofocusrangerestriction-swift.property.md): A value that controls the allowable range for automatic focusing.
