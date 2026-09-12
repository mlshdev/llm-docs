> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/exposuremode-swift.property](https://developer.apple.com/documentation/avfoundation/avcapturedevice/exposuremode-swift.property)

# exposureMode (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

The exposure mode for the device.

## Declaration

```swift
var exposureMode: AVCaptureDevice.ExposureMode { get set }
```

<a id="Discussion"></a>

## Discussion

Before changing the value of this property, you must call [lockForConfiguration()](lockforconfiguration%28%29.md) to acquire exclusive access to the device’s configuration properties. Otherwise, setting the value of this property raises an exception. When you’re done configuring the device, call [unlockForConfiguration()](unlockforconfiguration%28%29.md) to release the lock and allow other devices to configure the settings.

This property is key-value observable.

## See Also

### Managing the exposure mode

- [isExposureModeSupported(\_:)](isexposuremodesupported%28__%29.md): Returns a Boolean value that indicates whether a device supports the specified exposure mode.
- [AVCaptureDevice.ExposureMode](exposuremode-swift.enum.md): Constants that specify the exposure mode of a capture device.

# exposureMode (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

The exposure mode for the device.

## Declaration

```objectivec
@property (nonatomic) AVCaptureExposureMode exposureMode;
```

<a id="Discussion"></a>

## Discussion

Before changing the value of this property, you must call [lockForConfiguration:](lockforconfiguration%28%29.md) to acquire exclusive access to the device’s configuration properties. Otherwise, setting the value of this property raises an exception. When you’re done configuring the device, call [unlockForConfiguration](unlockforconfiguration%28%29.md) to release the lock and allow other devices to configure the settings.

This property is key-value observable.

## See Also

### Managing the exposure mode

- [isExposureModeSupported:](isexposuremodesupported%28__%29.md): Returns a Boolean value that indicates whether a device supports the specified exposure mode.
- [AVCaptureExposureMode](exposuremode-swift.enum.md): Constants that specify the exposure mode of a capture device.
