> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/supportssessionpreset(_:)](https://developer.apple.com/documentation/avfoundation/avcapturedevice/supportssessionpreset(_:))

# supportsSessionPreset(\_:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

Returns a Boolean value that indicates whether you can use the device with capture session configured with the specified preset.

## Declaration

```swift
func supportsSessionPreset(_ preset: AVCaptureSession.Preset) -> Bool
```

## Parameters

- `preset`: A capture session preset.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if you can use the device; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Inspecting device characteristics

- [isVirtualDevice](isvirtualdevice.md): A Boolean value that indicates whether the device consists of two or more physical devices.
- [constituentDevices](constituentdevices.md): An array of physical devices that make up a virtual device.
- [hasMediaType(\_:)](hasmediatype%28__%29.md): Returns a Boolean value that indicates whether the device captures media of a particular type.
- [transportType](transporttype.md): The transport type of the device.

# supportsAVCaptureSessionPreset: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

Returns a Boolean value that indicates whether you can use the device with capture session configured with the specified preset.

## Declaration

```objectivec
- (BOOL) supportsAVCaptureSessionPreset:(AVCaptureSessionPreset) preset;
```

## Parameters

- `preset`: A capture session preset.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if you can use the device; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Inspecting device characteristics

- [virtualDevice](isvirtualdevice.md): A Boolean value that indicates whether the device consists of two or more physical devices.
- [constituentDevices](constituentdevices.md): An array of physical devices that make up a virtual device.
- [hasMediaType:](hasmediatype%28__%29.md): Returns a Boolean value that indicates whether the device captures media of a particular type.
- [transportType](transporttype.md): The transport type of the device.
