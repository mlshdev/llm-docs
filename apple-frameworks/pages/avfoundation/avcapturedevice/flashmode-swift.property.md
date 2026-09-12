> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/flashmode-swift.property](https://developer.apple.com/documentation/avfoundation/avcapturedevice/flashmode-swift.property)

# flashMode (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 10.0) · iPadOS 4.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.7+

The device’s current flash mode.

> Use [flashMode](../avcapturephotosettings/flashmode.md) on [AVCapturePhotoSettings](../avcapturephotosettings.md) instead.

## Declaration

```swift
var flashMode: AVCaptureDevice.FlashMode { get set }
```

<a id="Discussion"></a>

## Discussion

Before changing the value of this property, you must call [lockForConfiguration()](lockforconfiguration%28%29.md) to acquire exclusive access to the device’s configuration properties. Otherwise, setting the value of this property raises an exception. When you finish configuring the device, call [unlockForConfiguration()](unlockforconfiguration%28%29.md) to release the lock and allow other devices to configure the settings.

This property is key-value observable.

## See Also

### Configuring flash settings

- [hasFlash](hasflash.md): A Boolean value that indicates whether the capture device has a flash.
- [isFlashAvailable](isflashavailable.md): A Boolean value that indicates whether the flash is currently available for use.
- [isFlashActive](isflashactive.md): Deprecated. A Boolean value that indicates whether the flash is currently active.
- [isFlashModeSupported(\_:)](isflashmodesupported%28__%29.md): Deprecated. Returns a Boolean value that indicates whether the device supports the given flash mode.
- [AVCaptureDevice.FlashMode](flashmode-swift.enum.md): Constants that specify the flash modes of a capture device.

# flashMode (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 10.0) · iPadOS 4.0+ (deprecated in 10.0) · Mac Catalyst 14.0+ (deprecated in 13.1) · macOS 10.7+

The device’s current flash mode.

> Use [flashMode](../avcapturephotosettings/flashmode.md) on [AVCapturePhotoSettings](../avcapturephotosettings.md) instead.

## Declaration

```objectivec
@property (nonatomic) AVCaptureFlashMode flashMode;
```

<a id="Discussion"></a>

## Discussion

Before changing the value of this property, you must call [lockForConfiguration:](lockforconfiguration%28%29.md) to acquire exclusive access to the device’s configuration properties. Otherwise, setting the value of this property raises an exception. When you finish configuring the device, call [unlockForConfiguration](unlockforconfiguration%28%29.md) to release the lock and allow other devices to configure the settings.

This property is key-value observable.

## See Also

### Configuring flash settings

- [hasFlash](hasflash.md): A Boolean value that indicates whether the capture device has a flash.
- [flashAvailable](isflashavailable.md): A Boolean value that indicates whether the flash is currently available for use.
- [flashActive](isflashactive.md): Deprecated. A Boolean value that indicates whether the flash is currently active.
- [isFlashModeSupported:](isflashmodesupported%28__%29.md): Deprecated. Returns a Boolean value that indicates whether the device supports the given flash mode.
- [AVCaptureFlashMode](flashmode-swift.enum.md): Constants that specify the flash modes of a capture device.
