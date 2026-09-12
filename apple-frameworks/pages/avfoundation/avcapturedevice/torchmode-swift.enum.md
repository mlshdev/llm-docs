> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/torchmode-swift.enum](https://developer.apple.com/documentation/avfoundation/avcapturedevice/torchmode-swift.enum)

# AVCaptureDevice.TorchMode (Swift)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

Constants to specify the capture device’s torch mode.

## Declaration

```swift
enum TorchMode
```

## Topics

### Torch modes

- [AVCaptureDevice.TorchMode.off](torchmode-swift.enum/off.md): The capture device torch is always off.
- [AVCaptureDevice.TorchMode.on](torchmode-swift.enum/on.md): The capture device torch is always on.
- [AVCaptureDevice.TorchMode.auto](torchmode-swift.enum/auto.md): The capture device continuously monitors light levels and uses the torch when necessary.

### Initializers

- [init(rawValue:)](torchmode-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring torch settings

- [hasTorch](hastorch.md): A Boolean value that specifies whether the capture device has a torch.
- [isTorchAvailable](istorchavailable.md): A Boolean value that indicates whether the torch is currently available for use.
- [isTorchActive](istorchactive.md): A Boolean value that indicates whether the device’s torch is currently active.
- [torchLevel](torchlevel.md): The current torch brightness level.
- [torchMode](torchmode-swift.property.md): The current torch mode.
- [isTorchModeSupported(\_:)](istorchmodesupported%28__%29.md): Returns a Boolean value that indicates whether the device supports the specified torch mode.
- [setTorchModeOn(level:)](settorchmodeon%28level_%29.md): Sets the illumination level when in torch mode.
- [maxAvailableTorchLevel](maxavailabletorchlevel.md): A constant that indicates to set the torch to its maximum level.

# AVCaptureTorchMode (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

Constants to specify the capture device’s torch mode.

## Declaration

```objectivec
enum AVCaptureTorchMode : NSInteger;
```

## Topics

### Torch modes

- [AVCaptureTorchModeOff](torchmode-swift.enum/off.md): The capture device torch is always off.
- [AVCaptureTorchModeOn](torchmode-swift.enum/on.md): The capture device torch is always on.
- [AVCaptureTorchModeAuto](torchmode-swift.enum/auto.md): The capture device continuously monitors light levels and uses the torch when necessary.

## See Also

### Configuring torch settings

- [hasTorch](hastorch.md): A Boolean value that specifies whether the capture device has a torch.
- [torchAvailable](istorchavailable.md): A Boolean value that indicates whether the torch is currently available for use.
- [torchActive](istorchactive.md): A Boolean value that indicates whether the device’s torch is currently active.
- [torchLevel](torchlevel.md): The current torch brightness level.
- [torchMode](torchmode-swift.property.md): The current torch mode.
- [isTorchModeSupported:](istorchmodesupported%28__%29.md): Returns a Boolean value that indicates whether the device supports the specified torch mode.
- [setTorchModeOnWithLevel:error:](settorchmodeon%28level_%29.md): Sets the illumination level when in torch mode.
- [AVCaptureMaxAvailableTorchLevel](maxavailabletorchlevel.md): A constant that indicates to set the torch to its maximum level.
