> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/whitebalancemode-swift.property](https://developer.apple.com/documentation/avfoundation/avcapturedevice/whitebalancemode-swift.property)

# whiteBalanceMode (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

The current white balance mode.

## Declaration

```swift
var whiteBalanceMode: AVCaptureDevice.WhiteBalanceMode { get set }
```

<a id="Discussion"></a>

## Discussion

Before changing the value of this property, you must call [lockForConfiguration()](lockforconfiguration%28%29.md) to acquire exclusive access to the device’s configuration properties. Otherwise, setting the value of this property raises an exception. When you’re done configuring the device, call [unlockForConfiguration()](unlockforconfiguration%28%29.md) to release the lock and allow other devices to configure the settings.

This property is key-value observable.

## See Also

### Configuring automatic white balance

- [isWhiteBalanceModeSupported(\_:)](iswhitebalancemodesupported%28__%29.md): Returns a Boolean value that indicates whether the device supports the specified white balance mode.
- [AVCaptureDevice.WhiteBalanceMode](whitebalancemode-swift.enum.md): Constants to specify the white balance mode of a capture device.

# whiteBalanceMode (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

The current white balance mode.

## Declaration

```objectivec
@property (nonatomic) AVCaptureWhiteBalanceMode whiteBalanceMode;
```

<a id="Discussion"></a>

## Discussion

Before changing the value of this property, you must call [lockForConfiguration:](lockforconfiguration%28%29.md) to acquire exclusive access to the device’s configuration properties. Otherwise, setting the value of this property raises an exception. When you’re done configuring the device, call [unlockForConfiguration](unlockforconfiguration%28%29.md) to release the lock and allow other devices to configure the settings.

This property is key-value observable.

## See Also

### Configuring automatic white balance

- [isWhiteBalanceModeSupported:](iswhitebalancemodesupported%28__%29.md): Returns a Boolean value that indicates whether the device supports the specified white balance mode.
- [AVCaptureWhiteBalanceMode](whitebalancemode-swift.enum.md): Constants to specify the white balance mode of a capture device.
