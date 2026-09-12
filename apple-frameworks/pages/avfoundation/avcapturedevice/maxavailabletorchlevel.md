> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/maxavailabletorchlevel](https://developer.apple.com/documentation/avfoundation/avcapturedevice/maxavailabletorchlevel)

# maxAvailableTorchLevel (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 17.0+

A constant that indicates to set the torch to its maximum level.

## Declaration

```swift
class let maxAvailableTorchLevel: Float
```

<a id="Discussion"></a>

## Discussion

Pass this value to the [setTorchModeOn(level:)](settorchmodeon%28level_%29.md) method to set the torch to the maximum level currently available. Under thermal duress, the maximum available torch level may be less than 1.0.

## See Also

### Configuring torch settings

- [hasTorch](hastorch.md): A Boolean value that specifies whether the capture device has a torch.
- [isTorchAvailable](istorchavailable.md): A Boolean value that indicates whether the torch is currently available for use.
- [isTorchActive](istorchactive.md): A Boolean value that indicates whether the device’s torch is currently active.
- [torchLevel](torchlevel.md): The current torch brightness level.
- [torchMode](torchmode-swift.property.md): The current torch mode.
- [AVCaptureDevice.TorchMode](torchmode-swift.enum.md): Constants to specify the capture device’s torch mode.
- [isTorchModeSupported(\_:)](istorchmodesupported%28__%29.md): Returns a Boolean value that indicates whether the device supports the specified torch mode.
- [setTorchModeOn(level:)](settorchmodeon%28level_%29.md): Sets the illumination level when in torch mode.

# AVCaptureMaxAvailableTorchLevel (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 17.0+

A constant that indicates to set the torch to its maximum level.

## Declaration

```objectivec
extern const float AVCaptureMaxAvailableTorchLevel;
```

<a id="Discussion"></a>

## Discussion

Pass this value to the [setTorchModeOnWithLevel:error:](settorchmodeon%28level_%29.md) method to set the torch to the maximum level currently available. Under thermal duress, the maximum available torch level may be less than 1.0.

## See Also

### Configuring torch settings

- [hasTorch](hastorch.md): A Boolean value that specifies whether the capture device has a torch.
- [torchAvailable](istorchavailable.md): A Boolean value that indicates whether the torch is currently available for use.
- [torchActive](istorchactive.md): A Boolean value that indicates whether the device’s torch is currently active.
- [torchLevel](torchlevel.md): The current torch brightness level.
- [torchMode](torchmode-swift.property.md): The current torch mode.
- [AVCaptureTorchMode](torchmode-swift.enum.md): Constants to specify the capture device’s torch mode.
- [isTorchModeSupported:](istorchmodesupported%28__%29.md): Returns a Boolean value that indicates whether the device supports the specified torch mode.
- [setTorchModeOnWithLevel:error:](settorchmodeon%28level_%29.md): Sets the illumination level when in torch mode.
