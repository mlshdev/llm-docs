> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/isvirtualdevice](https://developer.apple.com/documentation/avfoundation/avcapturedevice/isvirtualdevice)

# isVirtualDevice (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A Boolean value that indicates whether the device consists of two or more physical devices.

## Declaration

```swift
var isVirtualDevice: Bool { get }
```

<a id="Discussion"></a>

## Discussion

Examples of virtual devices are:

- The dual camera, which supports seamless switching between wide-angle and telephoto cameras while zooming and generating depth data from the disparities between the points of view of the physical cameras.
- The TrueDepth camera, which generates depth data from disparities between YUV and infrared cameras pointed in the same direction.

## See Also

### Inspecting device characteristics

- [constituentDevices](constituentdevices.md): An array of physical devices that make up a virtual device.
- [hasMediaType(\_:)](hasmediatype%28__%29.md): Returns a Boolean value that indicates whether the device captures media of a particular type.
- [transportType](transporttype.md): The transport type of the device.
- [supportsSessionPreset(\_:)](supportssessionpreset%28__%29.md): Returns a Boolean value that indicates whether you can use the device with capture session configured with the specified preset.

# virtualDevice (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A Boolean value that indicates whether the device consists of two or more physical devices.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isVirtualDevice) BOOL virtualDevice;
```

<a id="Discussion"></a>

## Discussion

Examples of virtual devices are:

- The dual camera, which supports seamless switching between wide-angle and telephoto cameras while zooming and generating depth data from the disparities between the points of view of the physical cameras.
- The TrueDepth camera, which generates depth data from disparities between YUV and infrared cameras pointed in the same direction.

## See Also

### Inspecting device characteristics

- [constituentDevices](constituentdevices.md): An array of physical devices that make up a virtual device.
- [hasMediaType:](hasmediatype%28__%29.md): Returns a Boolean value that indicates whether the device captures media of a particular type.
- [transportType](transporttype.md): The transport type of the device.
- [supportsAVCaptureSessionPreset:](supportssessionpreset%28__%29.md): Returns a Boolean value that indicates whether you can use the device with capture session configured with the specified preset.
