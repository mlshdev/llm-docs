> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/flashmode-swift.enum](https://developer.apple.com/documentation/avfoundation/avcapturedevice/flashmode-swift.enum)

# AVCaptureDevice.FlashMode (Swift)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

Constants that specify the flash modes of a capture device.

## Declaration

```swift
enum FlashMode
```

## Topics

### Flash modes

- [AVCaptureDevice.FlashMode.off](flashmode-swift.enum/off.md): A mode that indicates the flash is off.
- [AVCaptureDevice.FlashMode.on](flashmode-swift.enum/on.md): A mode that indicates the flash is on.
- [AVCaptureDevice.FlashMode.auto](flashmode-swift.enum/auto.md): A mode that indicates the device continuously monitors light levels and uses the flash when necessary.

### Initializers

- [init(rawValue:)](flashmode-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring flash settings

- [hasFlash](hasflash.md): A Boolean value that indicates whether the capture device has a flash.
- [isFlashAvailable](isflashavailable.md): A Boolean value that indicates whether the flash is currently available for use.
- [isFlashActive](isflashactive.md): Deprecated. A Boolean value that indicates whether the flash is currently active.
- [flashMode](flashmode-swift.property.md): Deprecated. The device’s current flash mode.
- [isFlashModeSupported(\_:)](isflashmodesupported%28__%29.md): Deprecated. Returns a Boolean value that indicates whether the device supports the given flash mode.

# AVCaptureFlashMode (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

Constants that specify the flash modes of a capture device.

## Declaration

```objectivec
enum AVCaptureFlashMode : NSInteger;
```

## Topics

### Flash modes

- [AVCaptureFlashModeOff](flashmode-swift.enum/off.md): A mode that indicates the flash is off.
- [AVCaptureFlashModeOn](flashmode-swift.enum/on.md): A mode that indicates the flash is on.
- [AVCaptureFlashModeAuto](flashmode-swift.enum/auto.md): A mode that indicates the device continuously monitors light levels and uses the flash when necessary.

## See Also

### Configuring flash settings

- [hasFlash](hasflash.md): A Boolean value that indicates whether the capture device has a flash.
- [flashAvailable](isflashavailable.md): A Boolean value that indicates whether the flash is currently available for use.
- [flashActive](isflashactive.md): Deprecated. A Boolean value that indicates whether the flash is currently active.
- [flashMode](flashmode-swift.property.md): Deprecated. The device’s current flash mode.
- [isFlashModeSupported:](isflashmodesupported%28__%29.md): Deprecated. Returns a Boolean value that indicates whether the device supports the given flash mode.
