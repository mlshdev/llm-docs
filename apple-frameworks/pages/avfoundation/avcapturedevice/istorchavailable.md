> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/istorchavailable](https://developer.apple.com/documentation/avfoundation/avcapturedevice/istorchavailable)

# isTorchAvailable (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 17.0+

A Boolean value that indicates whether the torch is currently available for use.

## Declaration

```swift
var isTorchAvailable: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The torch may become unavailable if, for example, the device overheats and needs to cool off.

This property is key-value observable.

## See Also

### Configuring torch settings

- [hasTorch](hastorch.md): A Boolean value that specifies whether the capture device has a torch.
- [isTorchActive](istorchactive.md): A Boolean value that indicates whether the device’s torch is currently active.
- [torchLevel](torchlevel.md): The current torch brightness level.
- [torchMode](torchmode-swift.property.md): The current torch mode.
- [AVCaptureDevice.TorchMode](torchmode-swift.enum.md): Constants to specify the capture device’s torch mode.
- [isTorchModeSupported(\_:)](istorchmodesupported%28__%29.md): Returns a Boolean value that indicates whether the device supports the specified torch mode.
- [setTorchModeOn(level:)](settorchmodeon%28level_%29.md): Sets the illumination level when in torch mode.
- [maxAvailableTorchLevel](maxavailabletorchlevel.md): A constant that indicates to set the torch to its maximum level.

# torchAvailable (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 17.0+

A Boolean value that indicates whether the torch is currently available for use.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isTorchAvailable) BOOL torchAvailable;
```

<a id="Discussion"></a>

## Discussion

The torch may become unavailable if, for example, the device overheats and needs to cool off.

This property is key-value observable.

## See Also

### Configuring torch settings

- [hasTorch](hastorch.md): A Boolean value that specifies whether the capture device has a torch.
- [torchActive](istorchactive.md): A Boolean value that indicates whether the device’s torch is currently active.
- [torchLevel](torchlevel.md): The current torch brightness level.
- [torchMode](torchmode-swift.property.md): The current torch mode.
- [AVCaptureTorchMode](torchmode-swift.enum.md): Constants to specify the capture device’s torch mode.
- [isTorchModeSupported:](istorchmodesupported%28__%29.md): Returns a Boolean value that indicates whether the device supports the specified torch mode.
- [setTorchModeOnWithLevel:error:](settorchmodeon%28level_%29.md): Sets the illumination level when in torch mode.
- [AVCaptureMaxAvailableTorchLevel](maxavailabletorchlevel.md): A constant that indicates to set the torch to its maximum level.
