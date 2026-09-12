> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/istorchmodesupported(_:)](https://developer.apple.com/documentation/avfoundation/avcapturedevice/istorchmodesupported(_:))

# isTorchModeSupported(\_:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

Returns a Boolean value that indicates whether the device supports the specified torch mode.

## Declaration

```swift
func isTorchModeSupported(_ torchMode: AVCaptureDevice.TorchMode) -> Bool
```

## Parameters

- `torchMode`: The desired torch mode.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the device supports the torch mode; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring torch settings

- [hasTorch](hastorch.md): A Boolean value that specifies whether the capture device has a torch.
- [isTorchAvailable](istorchavailable.md): A Boolean value that indicates whether the torch is currently available for use.
- [isTorchActive](istorchactive.md): A Boolean value that indicates whether the device’s torch is currently active.
- [torchLevel](torchlevel.md): The current torch brightness level.
- [torchMode](torchmode-swift.property.md): The current torch mode.
- [AVCaptureDevice.TorchMode](torchmode-swift.enum.md): Constants to specify the capture device’s torch mode.
- [setTorchModeOn(level:)](settorchmodeon%28level_%29.md): Sets the illumination level when in torch mode.
- [maxAvailableTorchLevel](maxavailabletorchlevel.md): A constant that indicates to set the torch to its maximum level.

# isTorchModeSupported: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

Returns a Boolean value that indicates whether the device supports the specified torch mode.

## Declaration

```objectivec
- (BOOL) isTorchModeSupported:(AVCaptureTorchMode) torchMode;
```

## Parameters

- `torchMode`: The desired torch mode.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the device supports the torch mode; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring torch settings

- [hasTorch](hastorch.md): A Boolean value that specifies whether the capture device has a torch.
- [torchAvailable](istorchavailable.md): A Boolean value that indicates whether the torch is currently available for use.
- [torchActive](istorchactive.md): A Boolean value that indicates whether the device’s torch is currently active.
- [torchLevel](torchlevel.md): The current torch brightness level.
- [torchMode](torchmode-swift.property.md): The current torch mode.
- [AVCaptureTorchMode](torchmode-swift.enum.md): Constants to specify the capture device’s torch mode.
- [setTorchModeOnWithLevel:error:](settorchmodeon%28level_%29.md): Sets the illumination level when in torch mode.
- [AVCaptureMaxAvailableTorchLevel](maxavailabletorchlevel.md): A constant that indicates to set the torch to its maximum level.
