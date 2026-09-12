> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptureinput/port/clock](https://developer.apple.com/documentation/avfoundation/avcaptureinput/port/clock)

# clock (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 14.0+ · macOS 10.9+ · tvOS 17.0+

An object that represents the capture device’s clock.

## Declaration

```swift
var clock: CMClock? { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is readonly and may not reflect the actual clock in the capture device.

## See Also

### Inspecting an input port

- [isEnabled](isenabled.md): A Boolean value that indicates whether the port is in an enabled state.
- [mediaType](mediatype.md): The media type of the port.
- [formatDescription](formatdescription.md): A description of the port format.
- [sourceDeviceType](sourcedevicetype.md): The device type of the source camera that provides data to the port.
- [sourceDevicePosition](sourcedeviceposition.md): The position of the source device providing input through this port.

# clock (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 14.0+ · macOS 10.9+ · tvOS 17.0+

An object that represents the capture device’s clock.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) CMClockRef clock;
```

<a id="Discussion"></a>

## Discussion

The value of this property is readonly and may not reflect the actual clock in the capture device.

## See Also

### Inspecting an input port

- [enabled](isenabled.md): A Boolean value that indicates whether the port is in an enabled state.
- [mediaType](mediatype.md): The media type of the port.
- [formatDescription](formatdescription.md): A description of the port format.
- [sourceDeviceType](sourcedevicetype.md): The device type of the source camera that provides data to the port.
- [sourceDevicePosition](sourcedeviceposition.md): The position of the source device providing input through this port.
