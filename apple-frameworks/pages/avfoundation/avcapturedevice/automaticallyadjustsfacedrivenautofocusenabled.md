> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/automaticallyadjustsfacedrivenautofocusenabled](https://developer.apple.com/documentation/avfoundation/avcapturedevice/automaticallyadjustsfacedrivenautofocusenabled)

# automaticallyAdjustsFaceDrivenAutoFocusEnabled (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · tvOS 17.0+

A Boolean value that indicates whether the device automatically adjusts face-driven autofocus.

## Declaration

```swift
var automaticallyAdjustsFaceDrivenAutoFocusEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property defaults to [true](https://developer.apple.com/documentation/swift/true) for devices that support auto focus. If your app requires explicitly setting the state of [isFaceDrivenAutoFocusEnabled](isfacedrivenautofocusenabled.md), set this value to [false](https://developer.apple.com/documentation/swift/false).

To set this property value, you must call the device’s [lockForConfiguration()](lockforconfiguration%28%29.md) method to obtain exclusive access to configure it. Otherwise, attempting to set a value raises an exception. When you finish configuring the device, call [unlockForConfiguration()](unlockforconfiguration%28%29.md) to release the lock.

## See Also

### Configuring automatic focus

- [isFocusModeSupported(\_:)](isfocusmodesupported%28__%29.md): Returns a Boolean value that indicates whether the device supports the specified focus mode.
- [focusMode](focusmode-swift.property.md): The capture device’s focus mode.
- [AVCaptureDevice.FocusMode](focusmode-swift.enum.md): Constants to specify the focus mode of a capture device.
- [isSmoothAutoFocusSupported](issmoothautofocussupported.md): A Boolean value that indicates whether the device supports smooth autofocus.
- [isSmoothAutoFocusEnabled](issmoothautofocusenabled.md): A Boolean value that indicates whether smooth autofocus is in an enabled state on the device.
- [isFaceDrivenAutoFocusEnabled](isfacedrivenautofocusenabled.md): A Boolean value that indicates whether the device has face-driven autofocus enabled.
- [isAutoFocusRangeRestrictionSupported](isautofocusrangerestrictionsupported.md): A Boolean value that indicates whether the device supports focus range restrictions.
- [autoFocusRangeRestriction](autofocusrangerestriction-swift.property.md): A value that controls the allowable range for automatic focusing.
- [AVCaptureDevice.AutoFocusRangeRestriction](autofocusrangerestriction-swift.enum.md): Constants to specify the autofocus range of a capture device.

# automaticallyAdjustsFaceDrivenAutoFocusEnabled (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · tvOS 17.0+

A Boolean value that indicates whether the device automatically adjusts face-driven autofocus.

## Declaration

```objectivec
@property (nonatomic) BOOL automaticallyAdjustsFaceDrivenAutoFocusEnabled;
```

<a id="Discussion"></a>

## Discussion

The value of this property defaults to [true](https://developer.apple.com/documentation/swift/true) for devices that support auto focus. If your app requires explicitly setting the state of [faceDrivenAutoFocusEnabled](isfacedrivenautofocusenabled.md), set this value to [false](https://developer.apple.com/documentation/swift/false).

To set this property value, you must call the device’s [lockForConfiguration:](lockforconfiguration%28%29.md) method to obtain exclusive access to configure it. Otherwise, attempting to set a value raises an exception. When you finish configuring the device, call [unlockForConfiguration](unlockforconfiguration%28%29.md) to release the lock.

## See Also

### Configuring automatic focus

- [isFocusModeSupported:](isfocusmodesupported%28__%29.md): Returns a Boolean value that indicates whether the device supports the specified focus mode.
- [focusMode](focusmode-swift.property.md): The capture device’s focus mode.
- [AVCaptureFocusMode](focusmode-swift.enum.md): Constants to specify the focus mode of a capture device.
- [smoothAutoFocusSupported](issmoothautofocussupported.md): A Boolean value that indicates whether the device supports smooth autofocus.
- [smoothAutoFocusEnabled](issmoothautofocusenabled.md): A Boolean value that indicates whether smooth autofocus is in an enabled state on the device.
- [faceDrivenAutoFocusEnabled](isfacedrivenautofocusenabled.md): A Boolean value that indicates whether the device has face-driven autofocus enabled.
- [autoFocusRangeRestrictionSupported](isautofocusrangerestrictionsupported.md): A Boolean value that indicates whether the device supports focus range restrictions.
- [autoFocusRangeRestriction](autofocusrangerestriction-swift.property.md): A value that controls the allowable range for automatic focusing.
- [AVCaptureAutoFocusRangeRestriction](autofocusrangerestriction-swift.enum.md): Constants to specify the autofocus range of a capture device.
