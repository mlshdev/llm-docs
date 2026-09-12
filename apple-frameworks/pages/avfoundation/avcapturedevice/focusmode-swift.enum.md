> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/focusmode-swift.enum](https://developer.apple.com/documentation/avfoundation/avcapturedevice/focusmode-swift.enum)

# AVCaptureDevice.FocusMode (Swift)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

Constants to specify the focus mode of a capture device.

## Declaration

```swift
enum FocusMode
```

## Topics

### Focus modes

- [AVCaptureDevice.FocusMode.locked](focusmode-swift.enum/locked.md): A mode that locks device focus.
- [AVCaptureDevice.FocusMode.autoFocus](focusmode-swift.enum/autofocus.md): A mode that automatically adjusts the focus one time, and then locks focus.
- [AVCaptureDevice.FocusMode.continuousAutoFocus](focusmode-swift.enum/continuousautofocus.md): A mode that continuously monitors focus and autofocuses when necessary.

### Initializers

- [init(rawValue:)](focusmode-swift.enum/init%28rawvalue_%29.md)

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
- [isSmoothAutoFocusSupported](issmoothautofocussupported.md): A Boolean value that indicates whether the device supports smooth autofocus.
- [isSmoothAutoFocusEnabled](issmoothautofocusenabled.md): A Boolean value that indicates whether smooth autofocus is in an enabled state on the device.
- [isFaceDrivenAutoFocusEnabled](isfacedrivenautofocusenabled.md): A Boolean value that indicates whether the device has face-driven autofocus enabled.
- [automaticallyAdjustsFaceDrivenAutoFocusEnabled](automaticallyadjustsfacedrivenautofocusenabled.md): A Boolean value that indicates whether the device automatically adjusts face-driven autofocus.
- [isAutoFocusRangeRestrictionSupported](isautofocusrangerestrictionsupported.md): A Boolean value that indicates whether the device supports focus range restrictions.
- [autoFocusRangeRestriction](autofocusrangerestriction-swift.property.md): A value that controls the allowable range for automatic focusing.
- [AVCaptureDevice.AutoFocusRangeRestriction](autofocusrangerestriction-swift.enum.md): Constants to specify the autofocus range of a capture device.

# AVCaptureFocusMode (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

Constants to specify the focus mode of a capture device.

## Declaration

```objectivec
enum AVCaptureFocusMode : NSInteger;
```

## Topics

### Focus modes

- [AVCaptureFocusModeLocked](focusmode-swift.enum/locked.md): A mode that locks device focus.
- [AVCaptureFocusModeAutoFocus](focusmode-swift.enum/autofocus.md): A mode that automatically adjusts the focus one time, and then locks focus.
- [AVCaptureFocusModeContinuousAutoFocus](focusmode-swift.enum/continuousautofocus.md): A mode that continuously monitors focus and autofocuses when necessary.

## See Also

### Configuring automatic focus

- [isFocusModeSupported:](isfocusmodesupported%28__%29.md): Returns a Boolean value that indicates whether the device supports the specified focus mode.
- [focusMode](focusmode-swift.property.md): The capture device’s focus mode.
- [smoothAutoFocusSupported](issmoothautofocussupported.md): A Boolean value that indicates whether the device supports smooth autofocus.
- [smoothAutoFocusEnabled](issmoothautofocusenabled.md): A Boolean value that indicates whether smooth autofocus is in an enabled state on the device.
- [faceDrivenAutoFocusEnabled](isfacedrivenautofocusenabled.md): A Boolean value that indicates whether the device has face-driven autofocus enabled.
- [automaticallyAdjustsFaceDrivenAutoFocusEnabled](automaticallyadjustsfacedrivenautofocusenabled.md): A Boolean value that indicates whether the device automatically adjusts face-driven autofocus.
- [autoFocusRangeRestrictionSupported](isautofocusrangerestrictionsupported.md): A Boolean value that indicates whether the device supports focus range restrictions.
- [autoFocusRangeRestriction](autofocusrangerestriction-swift.property.md): A value that controls the allowable range for automatic focusing.
- [AVCaptureAutoFocusRangeRestriction](autofocusrangerestriction-swift.enum.md): Constants to specify the autofocus range of a capture device.
