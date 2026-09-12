> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/hasmediatype(_:)](https://developer.apple.com/documentation/avfoundation/avcapturedevice/hasmediatype(_:))

# hasMediaType(\_:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+

Returns a Boolean value that indicates whether the device captures media of a particular type.

## Declaration

```swift
func hasMediaType(_ mediaType: AVMediaType) -> Bool
```

## Parameters

- `mediaType`: A media type, such as [video](../avmediatype/video.md), [audio](../avmediatype/audio.md), or [muxed](../avmediatype/muxed.md).

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the device captures media of the specified type; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Inspecting device characteristics

- [isVirtualDevice](isvirtualdevice.md): A Boolean value that indicates whether the device consists of two or more physical devices.
- [constituentDevices](constituentdevices.md): An array of physical devices that make up a virtual device.
- [transportType](transporttype.md): The transport type of the device.
- [supportsSessionPreset(\_:)](supportssessionpreset%28__%29.md): Returns a Boolean value that indicates whether you can use the device with capture session configured with the specified preset.

# hasMediaType: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+

Returns a Boolean value that indicates whether the device captures media of a particular type.

## Declaration

```objectivec
- (BOOL) hasMediaType:(AVMediaType) mediaType;
```

## Parameters

- `mediaType`: A media type, such as [AVMediaTypeVideo](../avmediatype/video.md), [AVMediaTypeAudio](../avmediatype/audio.md), or [AVMediaTypeMuxed](../avmediatype/muxed.md).

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the device captures media of the specified type; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Inspecting device characteristics

- [virtualDevice](isvirtualdevice.md): A Boolean value that indicates whether the device consists of two or more physical devices.
- [constituentDevices](constituentdevices.md): An array of physical devices that make up a virtual device.
- [transportType](transporttype.md): The transport type of the device.
- [supportsAVCaptureSessionPreset:](supportssessionpreset%28__%29.md): Returns a Boolean value that indicates whether you can use the device with capture session configured with the specified preset.
