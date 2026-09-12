> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/isautofocusrangerestrictionsupported](https://developer.apple.com/documentation/avfoundation/avcapturedevice/isautofocusrangerestrictionsupported)

# isAutoFocusRangeRestrictionSupported (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A Boolean value that indicates whether the device supports focus range restrictions.

## Declaration

```swift
var isAutoFocusRangeRestrictionSupported: Bool { get }
```

<a id="Discussion"></a>

## Discussion

Focus range restriction is available only on compatible devices. If this property’s value is [false](https://developer.apple.com/documentation/swift/false), setting the value of [autoFocusRangeRestriction](autofocusrangerestriction-swift.property.md) raises an exception.

## See Also

### Configuring automatic focus

- [isFocusModeSupported(\_:)](isfocusmodesupported%28__%29.md): Returns a Boolean value that indicates whether the device supports the specified focus mode.
- [focusMode](focusmode-swift.property.md): The capture device’s focus mode.
- [AVCaptureDevice.FocusMode](focusmode-swift.enum.md): Constants to specify the focus mode of a capture device.
- [isSmoothAutoFocusSupported](issmoothautofocussupported.md): A Boolean value that indicates whether the device supports smooth autofocus.
- [isSmoothAutoFocusEnabled](issmoothautofocusenabled.md): A Boolean value that indicates whether smooth autofocus is in an enabled state on the device.
- [isFaceDrivenAutoFocusEnabled](isfacedrivenautofocusenabled.md): A Boolean value that indicates whether the device has face-driven autofocus enabled.
- [automaticallyAdjustsFaceDrivenAutoFocusEnabled](automaticallyadjustsfacedrivenautofocusenabled.md): A Boolean value that indicates whether the device automatically adjusts face-driven autofocus.
- [autoFocusRangeRestriction](autofocusrangerestriction-swift.property.md): A value that controls the allowable range for automatic focusing.
- [AVCaptureDevice.AutoFocusRangeRestriction](autofocusrangerestriction-swift.enum.md): Constants to specify the autofocus range of a capture device.

# autoFocusRangeRestrictionSupported (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A Boolean value that indicates whether the device supports focus range restrictions.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isAutoFocusRangeRestrictionSupported) BOOL autoFocusRangeRestrictionSupported;
```

<a id="Discussion"></a>

## Discussion

Focus range restriction is available only on compatible devices. If this property’s value is [false](https://developer.apple.com/documentation/swift/false), setting the value of [autoFocusRangeRestriction](autofocusrangerestriction-swift.property.md) raises an exception.

## See Also

### Configuring automatic focus

- [isFocusModeSupported:](isfocusmodesupported%28__%29.md): Returns a Boolean value that indicates whether the device supports the specified focus mode.
- [focusMode](focusmode-swift.property.md): The capture device’s focus mode.
- [AVCaptureFocusMode](focusmode-swift.enum.md): Constants to specify the focus mode of a capture device.
- [smoothAutoFocusSupported](issmoothautofocussupported.md): A Boolean value that indicates whether the device supports smooth autofocus.
- [smoothAutoFocusEnabled](issmoothautofocusenabled.md): A Boolean value that indicates whether smooth autofocus is in an enabled state on the device.
- [faceDrivenAutoFocusEnabled](isfacedrivenautofocusenabled.md): A Boolean value that indicates whether the device has face-driven autofocus enabled.
- [automaticallyAdjustsFaceDrivenAutoFocusEnabled](automaticallyadjustsfacedrivenautofocusenabled.md): A Boolean value that indicates whether the device automatically adjusts face-driven autofocus.
- [autoFocusRangeRestriction](autofocusrangerestriction-swift.property.md): A value that controls the allowable range for automatic focusing.
- [AVCaptureAutoFocusRangeRestriction](autofocusrangerestriction-swift.enum.md): Constants to specify the autofocus range of a capture device.
