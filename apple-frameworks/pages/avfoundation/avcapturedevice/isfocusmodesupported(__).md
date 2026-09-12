> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/isfocusmodesupported(_:)](https://developer.apple.com/documentation/avfoundation/avcapturedevice/isfocusmodesupported(_:))

# isFocusModeSupported(\_:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

Returns a Boolean value that indicates whether the device supports the specified focus mode.

## Declaration

```swift
func isFocusModeSupported(_ focusMode: AVCaptureDevice.FocusMode) -> Bool
```

## Parameters

- `focusMode`: A focus mode to query.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the device supports the focus mode; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring automatic focus

- [focusMode](focusmode-swift.property.md): The capture device’s focus mode.
- [AVCaptureDevice.FocusMode](focusmode-swift.enum.md): Constants to specify the focus mode of a capture device.
- [isSmoothAutoFocusSupported](issmoothautofocussupported.md): A Boolean value that indicates whether the device supports smooth autofocus.
- [isSmoothAutoFocusEnabled](issmoothautofocusenabled.md): A Boolean value that indicates whether smooth autofocus is in an enabled state on the device.
- [isFaceDrivenAutoFocusEnabled](isfacedrivenautofocusenabled.md): A Boolean value that indicates whether the device has face-driven autofocus enabled.
- [automaticallyAdjustsFaceDrivenAutoFocusEnabled](automaticallyadjustsfacedrivenautofocusenabled.md): A Boolean value that indicates whether the device automatically adjusts face-driven autofocus.
- [isAutoFocusRangeRestrictionSupported](isautofocusrangerestrictionsupported.md): A Boolean value that indicates whether the device supports focus range restrictions.
- [autoFocusRangeRestriction](autofocusrangerestriction-swift.property.md): A value that controls the allowable range for automatic focusing.
- [AVCaptureDevice.AutoFocusRangeRestriction](autofocusrangerestriction-swift.enum.md): Constants to specify the autofocus range of a capture device.

# isFocusModeSupported: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

Returns a Boolean value that indicates whether the device supports the specified focus mode.

## Declaration

```objectivec
- (BOOL) isFocusModeSupported:(AVCaptureFocusMode) focusMode;
```

## Parameters

- `focusMode`: A focus mode to query.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the device supports the focus mode; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring automatic focus

- [focusMode](focusmode-swift.property.md): The capture device’s focus mode.
- [AVCaptureFocusMode](focusmode-swift.enum.md): Constants to specify the focus mode of a capture device.
- [smoothAutoFocusSupported](issmoothautofocussupported.md): A Boolean value that indicates whether the device supports smooth autofocus.
- [smoothAutoFocusEnabled](issmoothautofocusenabled.md): A Boolean value that indicates whether smooth autofocus is in an enabled state on the device.
- [faceDrivenAutoFocusEnabled](isfacedrivenautofocusenabled.md): A Boolean value that indicates whether the device has face-driven autofocus enabled.
- [automaticallyAdjustsFaceDrivenAutoFocusEnabled](automaticallyadjustsfacedrivenautofocusenabled.md): A Boolean value that indicates whether the device automatically adjusts face-driven autofocus.
- [autoFocusRangeRestrictionSupported](isautofocusrangerestrictionsupported.md): A Boolean value that indicates whether the device supports focus range restrictions.
- [autoFocusRangeRestriction](autofocusrangerestriction-swift.property.md): A value that controls the allowable range for automatic focusing.
- [AVCaptureAutoFocusRangeRestriction](autofocusrangerestriction-swift.enum.md): Constants to specify the autofocus range of a capture device.
