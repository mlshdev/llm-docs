> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/transporttype](https://developer.apple.com/documentation/avfoundation/avcapturedevice/transporttype)

# transportType (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The transport type of the device.

## Declaration

```swift
var transportType: Int32 { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property represents a capture device’s transport type, such as USB or PCI. The value is an IOKit framework transport type constant (`kIOAudioDeviceTransportType`).

## See Also

### Inspecting device characteristics

- [isVirtualDevice](isvirtualdevice.md): A Boolean value that indicates whether the device consists of two or more physical devices.
- [constituentDevices](constituentdevices.md): An array of physical devices that make up a virtual device.
- [hasMediaType(\_:)](hasmediatype%28__%29.md): Returns a Boolean value that indicates whether the device captures media of a particular type.
- [supportsSessionPreset(\_:)](supportssessionpreset%28__%29.md): Returns a Boolean value that indicates whether you can use the device with capture session configured with the specified preset.

# transportType (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The transport type of the device.

## Declaration

```objectivec
@property (nonatomic, readonly) int32_t transportType;
```

<a id="Discussion"></a>

## Discussion

The value of this property represents a capture device’s transport type, such as USB or PCI. The value is an IOKit framework transport type constant (`kIOAudioDeviceTransportType`).

## See Also

### Inspecting device characteristics

- [virtualDevice](isvirtualdevice.md): A Boolean value that indicates whether the device consists of two or more physical devices.
- [constituentDevices](constituentdevices.md): An array of physical devices that make up a virtual device.
- [hasMediaType:](hasmediatype%28__%29.md): Returns a Boolean value that indicates whether the device captures media of a particular type.
- [supportsAVCaptureSessionPreset:](supportssessionpreset%28__%29.md): Returns a Boolean value that indicates whether you can use the device with capture session configured with the specified preset.
