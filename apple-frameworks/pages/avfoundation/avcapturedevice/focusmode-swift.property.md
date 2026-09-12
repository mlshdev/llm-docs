> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/focusmode-swift.property](https://developer.apple.com/documentation/avfoundation/avcapturedevice/focusmode-swift.property)

# focusMode (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

The capture device’s focus mode.

## Declaration

```swift
var focusMode: AVCaptureDevice.FocusMode { get set }
```

<a id="Discussion"></a>

## Discussion

Before changing the value of this property, you must call [lockForConfiguration()](lockforconfiguration%28%29.md) to acquire exclusive access to the device’s configuration properties. Otherwise, setting the value of this property raises an exception. When you finish configuring the device, call [unlockForConfiguration()](unlockforconfiguration%28%29.md) to release the lock and allow other devices to configure the settings.

This property is key-value observable.

## See Also

### Configuring automatic focus

- [isFocusModeSupported(\_:)](isfocusmodesupported%28__%29.md): Returns a Boolean value that indicates whether the device supports the specified focus mode.
- [AVCaptureDevice.FocusMode](focusmode-swift.enum.md): Constants to specify the focus mode of a capture device.
- [isSmoothAutoFocusSupported](issmoothautofocussupported.md): A Boolean value that indicates whether the device supports smooth autofocus.
- [isSmoothAutoFocusEnabled](issmoothautofocusenabled.md): A Boolean value that indicates whether smooth autofocus is in an enabled state on the device.
- [isFaceDrivenAutoFocusEnabled](isfacedrivenautofocusenabled.md): A Boolean value that indicates whether the device has face-driven autofocus enabled.
- [automaticallyAdjustsFaceDrivenAutoFocusEnabled](automaticallyadjustsfacedrivenautofocusenabled.md): A Boolean value that indicates whether the device automatically adjusts face-driven autofocus.
- [isAutoFocusRangeRestrictionSupported](isautofocusrangerestrictionsupported.md): A Boolean value that indicates whether the device supports focus range restrictions.
- [autoFocusRangeRestriction](autofocusrangerestriction-swift.property.md): A value that controls the allowable range for automatic focusing.
- [AVCaptureDevice.AutoFocusRangeRestriction](autofocusrangerestriction-swift.enum.md): Constants to specify the autofocus range of a capture device.

# focusMode (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

The capture device’s focus mode.

## Declaration

```objectivec
@property (nonatomic) AVCaptureFocusMode focusMode;
```

<a id="Discussion"></a>

## Discussion

Before changing the value of this property, you must call [lockForConfiguration:](lockforconfiguration%28%29.md) to acquire exclusive access to the device’s configuration properties. Otherwise, setting the value of this property raises an exception. When you finish configuring the device, call [unlockForConfiguration](unlockforconfiguration%28%29.md) to release the lock and allow other devices to configure the settings.

This property is key-value observable.

## See Also

### Configuring automatic focus

- [isFocusModeSupported:](isfocusmodesupported%28__%29.md): Returns a Boolean value that indicates whether the device supports the specified focus mode.
- [AVCaptureFocusMode](focusmode-swift.enum.md): Constants to specify the focus mode of a capture device.
- [smoothAutoFocusSupported](issmoothautofocussupported.md): A Boolean value that indicates whether the device supports smooth autofocus.
- [smoothAutoFocusEnabled](issmoothautofocusenabled.md): A Boolean value that indicates whether smooth autofocus is in an enabled state on the device.
- [faceDrivenAutoFocusEnabled](isfacedrivenautofocusenabled.md): A Boolean value that indicates whether the device has face-driven autofocus enabled.
- [automaticallyAdjustsFaceDrivenAutoFocusEnabled](automaticallyadjustsfacedrivenautofocusenabled.md): A Boolean value that indicates whether the device automatically adjusts face-driven autofocus.
- [autoFocusRangeRestrictionSupported](isautofocusrangerestrictionsupported.md): A Boolean value that indicates whether the device supports focus range restrictions.
- [autoFocusRangeRestriction](autofocusrangerestriction-swift.property.md): A value that controls the allowable range for automatic focusing.
- [AVCaptureAutoFocusRangeRestriction](autofocusrangerestriction-swift.enum.md): Constants to specify the autofocus range of a capture device.
