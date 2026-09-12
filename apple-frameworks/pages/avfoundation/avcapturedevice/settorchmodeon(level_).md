> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/settorchmodeon(level:)](https://developer.apple.com/documentation/avfoundation/avcapturedevice/settorchmodeon(level:))

# setTorchModeOn(level:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 17.0+

Sets the illumination level when in torch mode.

## Declaration

```swift
func setTorchModeOn(level torchLevel: Float) throws
```

## Parameters

- `torchLevel`: The new torch mode level. This value must be a floating-point number between `0.0` and `1.0`. To set the torch mode level to the currently available maximum, specify the constant [maxAvailableTorchLevel](maxavailabletorchlevel.md) for this parameter.

<a id="Discussion"></a>

## Discussion

This method sets the torch mode to [AVCaptureDevice.TorchMode.on](torchmode-swift.enum/on.md) and sets the level to the specified value. If the device doesn’t support this mode or if you specify a value for `torchLevel` that’s outside the accepted range, this method raises an exception. If the torch value is within the accepted range but greater than the currently supported maximum—perhaps because the device is overheating—this method returns [false](https://developer.apple.com/documentation/swift/false).

Before changing the value of this property, you must call [lockForConfiguration()](lockforconfiguration%28%29.md) to acquire exclusive access to the device’s configuration properties. Otherwise, calling this method raises an exception. When you finish configuring the device, call [unlockForConfiguration()](unlockforconfiguration%28%29.md) to release the lock and allow other devices to configure the settings.

## See Also

### Configuring torch settings

- [hasTorch](hastorch.md): A Boolean value that specifies whether the capture device has a torch.
- [isTorchAvailable](istorchavailable.md): A Boolean value that indicates whether the torch is currently available for use.
- [isTorchActive](istorchactive.md): A Boolean value that indicates whether the device’s torch is currently active.
- [torchLevel](torchlevel.md): The current torch brightness level.
- [torchMode](torchmode-swift.property.md): The current torch mode.
- [AVCaptureDevice.TorchMode](torchmode-swift.enum.md): Constants to specify the capture device’s torch mode.
- [isTorchModeSupported(\_:)](istorchmodesupported%28__%29.md): Returns a Boolean value that indicates whether the device supports the specified torch mode.
- [maxAvailableTorchLevel](maxavailabletorchlevel.md): A constant that indicates to set the torch to its maximum level.

# setTorchModeOnWithLevel:error: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 17.0+

Sets the illumination level when in torch mode.

## Declaration

```objectivec
- (BOOL) setTorchModeOnWithLevel:(float) torchLevel error:(NSError **) outError;
```

## Parameters

- `torchLevel`: The new torch mode level. This value must be a floating-point number between `0.0` and `1.0`. To set the torch mode level to the currently available maximum, specify the constant [AVCaptureMaxAvailableTorchLevel](maxavailabletorchlevel.md) for this parameter.
- `outError`: On input, a pointer to an error object. If an error occurs, this method assigns an error object to the pointer with information about what happened.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the torch mode level was set or [false](https://developer.apple.com/documentation/swift/false) if it was not.

<a id="Discussion"></a>

## Discussion

This method sets the torch mode to [AVCaptureTorchModeOn](torchmode-swift.enum/on.md) and sets the level to the specified value. If the device doesn’t support this mode or if you specify a value for `torchLevel` that’s outside the accepted range, this method raises an exception. If the torch value is within the accepted range but greater than the currently supported maximum—perhaps because the device is overheating—this method returns [false](https://developer.apple.com/documentation/swift/false).

Before changing the value of this property, you must call [lockForConfiguration:](lockforconfiguration%28%29.md) to acquire exclusive access to the device’s configuration properties. Otherwise, calling this method raises an exception. When you finish configuring the device, call [unlockForConfiguration](unlockforconfiguration%28%29.md) to release the lock and allow other devices to configure the settings.

## See Also

### Configuring torch settings

- [hasTorch](hastorch.md): A Boolean value that specifies whether the capture device has a torch.
- [torchAvailable](istorchavailable.md): A Boolean value that indicates whether the torch is currently available for use.
- [torchActive](istorchactive.md): A Boolean value that indicates whether the device’s torch is currently active.
- [torchLevel](torchlevel.md): The current torch brightness level.
- [torchMode](torchmode-swift.property.md): The current torch mode.
- [AVCaptureTorchMode](torchmode-swift.enum.md): Constants to specify the capture device’s torch mode.
- [isTorchModeSupported:](istorchmodesupported%28__%29.md): Returns a Boolean value that indicates whether the device supports the specified torch mode.
- [AVCaptureMaxAvailableTorchLevel](maxavailabletorchlevel.md): A constant that indicates to set the torch to its maximum level.
