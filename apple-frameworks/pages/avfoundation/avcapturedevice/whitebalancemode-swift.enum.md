> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/whitebalancemode-swift.enum](https://developer.apple.com/documentation/avfoundation/avcapturedevice/whitebalancemode-swift.enum)

# AVCaptureDevice.WhiteBalanceMode (Swift)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

Constants to specify the white balance mode of a capture device.

## Declaration

```swift
enum WhiteBalanceMode
```

## Topics

### White balance modes

- [AVCaptureDevice.WhiteBalanceMode.locked](whitebalancemode-swift.enum/locked.md): A mode that locks the white balance state.
- [AVCaptureDevice.WhiteBalanceMode.autoWhiteBalance](whitebalancemode-swift.enum/autowhitebalance.md): A mode that automatically manages white balance.
- [AVCaptureDevice.WhiteBalanceMode.continuousAutoWhiteBalance](whitebalancemode-swift.enum/continuousautowhitebalance.md): A mode that continuously monitors white balance and adjusts when necessary.

### Initializers

- [init(rawValue:)](whitebalancemode-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring automatic white balance

- [isWhiteBalanceModeSupported(\_:)](iswhitebalancemodesupported%28__%29.md): Returns a Boolean value that indicates whether the device supports the specified white balance mode.
- [whiteBalanceMode](whitebalancemode-swift.property.md): The current white balance mode.

# AVCaptureWhiteBalanceMode (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

Constants to specify the white balance mode of a capture device.

## Declaration

```objectivec
enum AVCaptureWhiteBalanceMode : NSInteger;
```

## Topics

### White balance modes

- [AVCaptureWhiteBalanceModeLocked](whitebalancemode-swift.enum/locked.md): A mode that locks the white balance state.
- [AVCaptureWhiteBalanceModeAutoWhiteBalance](whitebalancemode-swift.enum/autowhitebalance.md): A mode that automatically manages white balance.
- [AVCaptureWhiteBalanceModeContinuousAutoWhiteBalance](whitebalancemode-swift.enum/continuousautowhitebalance.md): A mode that continuously monitors white balance and adjusts when necessary.

## See Also

### Configuring automatic white balance

- [isWhiteBalanceModeSupported:](iswhitebalancemodesupported%28__%29.md): Returns a Boolean value that indicates whether the device supports the specified white balance mode.
- [whiteBalanceMode](whitebalancemode-swift.property.md): The current white balance mode.
