> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptureinput/port/isenabled](https://developer.apple.com/documentation/avfoundation/avcaptureinput/port/isenabled)

# isEnabled (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

A Boolean value that indicates whether the port is in an enabled state.

## Declaration

```swift
var isEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Ports are in an enabled state by default. If you want to capture only a subset of the media streams provided by a capture input, use this property to selectively disable streams.

## See Also

### Inspecting an input port

- [mediaType](mediatype.md): The media type of the port.
- [formatDescription](formatdescription.md): A description of the port format.
- [sourceDeviceType](sourcedevicetype.md): The device type of the source camera that provides data to the port.
- [sourceDevicePosition](sourcedeviceposition.md): The position of the source device providing input through this port.
- [clock](clock.md): An object that represents the capture device’s clock.

# enabled (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

A Boolean value that indicates whether the port is in an enabled state.

## Declaration

```objectivec
@property (nonatomic, getter=isEnabled) BOOL enabled;
```

<a id="Discussion"></a>

## Discussion

Ports are in an enabled state by default. If you want to capture only a subset of the media streams provided by a capture input, use this property to selectively disable streams.

## See Also

### Inspecting an input port

- [mediaType](mediatype.md): The media type of the port.
- [formatDescription](formatdescription.md): A description of the port format.
- [sourceDeviceType](sourcedevicetype.md): The device type of the source camera that provides data to the port.
- [sourceDevicePosition](sourcedeviceposition.md): The position of the source device providing input through this port.
- [clock](clock.md): An object that represents the capture device’s clock.
