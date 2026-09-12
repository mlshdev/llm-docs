> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/constituentdevices](https://developer.apple.com/documentation/avfoundation/avcapturedevice/constituentdevices)

# constituentDevices (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

An array of physical devices that make up a virtual device.

## Declaration

```swift
var constituentDevices: [AVCaptureDevice] { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is an empty array when called on a device whose [isVirtualDevice](isvirtualdevice.md) property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Inspecting device characteristics

- [isVirtualDevice](isvirtualdevice.md): A Boolean value that indicates whether the device consists of two or more physical devices.
- [hasMediaType(\_:)](hasmediatype%28__%29.md): Returns a Boolean value that indicates whether the device captures media of a particular type.
- [transportType](transporttype.md): The transport type of the device.
- [supportsSessionPreset(\_:)](supportssessionpreset%28__%29.md): Returns a Boolean value that indicates whether you can use the device with capture session configured with the specified preset.

# constituentDevices (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

An array of physical devices that make up a virtual device.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<AVCaptureDevice *> * constituentDevices;
```

<a id="Discussion"></a>

## Discussion

The value of this property is an empty array when called on a device whose [virtualDevice](isvirtualdevice.md) property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Inspecting device characteristics

- [virtualDevice](isvirtualdevice.md): A Boolean value that indicates whether the device consists of two or more physical devices.
- [hasMediaType:](hasmediatype%28__%29.md): Returns a Boolean value that indicates whether the device captures media of a particular type.
- [transportType](transporttype.md): The transport type of the device.
- [supportsAVCaptureSessionPreset:](supportssessionpreset%28__%29.md): Returns a Boolean value that indicates whether you can use the device with capture session configured with the specified preset.
