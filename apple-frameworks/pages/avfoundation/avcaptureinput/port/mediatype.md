> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptureinput/port/mediatype](https://developer.apple.com/documentation/avfoundation/avcaptureinput/port/mediatype)

# mediaType (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

The media type of the port.

## Declaration

```swift
var mediaType: AVMediaType { get }
```

## See Also

### Inspecting an input port

- [isEnabled](isenabled.md): A Boolean value that indicates whether the port is in an enabled state.
- [formatDescription](formatdescription.md): A description of the port format.
- [sourceDeviceType](sourcedevicetype.md): The device type of the source camera that provides data to the port.
- [sourceDevicePosition](sourcedeviceposition.md): The position of the source device providing input through this port.
- [clock](clock.md): An object that represents the capture device’s clock.

# mediaType (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

The media type of the port.

## Declaration

```objectivec
@property (nonatomic, readonly) AVMediaType mediaType;
```

## See Also

### Inspecting an input port

- [enabled](isenabled.md): A Boolean value that indicates whether the port is in an enabled state.
- [formatDescription](formatdescription.md): A description of the port format.
- [sourceDeviceType](sourcedevicetype.md): The device type of the source camera that provides data to the port.
- [sourceDevicePosition](sourcedeviceposition.md): The position of the source device providing input through this port.
- [clock](clock.md): An object that represents the capture device’s clock.
