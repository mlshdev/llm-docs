> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptureinput/port/formatdescription](https://developer.apple.com/documentation/avfoundation/avcaptureinput/port/formatdescription)

# formatDescription (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

A description of the port format.

## Declaration

```swift
var formatDescription: CMFormatDescription? { get }
```

<a id="Discussion"></a>

## Discussion

A format description object describes the format of the media the port currently provides. To observe changes to a port’s format, observe notifications of type [formatDescriptionDidChangeNotification](formatdescriptiondidchangenotification.md).

## See Also

### Inspecting an input port

- [isEnabled](isenabled.md): A Boolean value that indicates whether the port is in an enabled state.
- [mediaType](mediatype.md): The media type of the port.
- [sourceDeviceType](sourcedevicetype.md): The device type of the source camera that provides data to the port.
- [sourceDevicePosition](sourcedeviceposition.md): The position of the source device providing input through this port.
- [clock](clock.md): An object that represents the capture device’s clock.

# formatDescription (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

A description of the port format.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) CMFormatDescriptionRef formatDescription;
```

<a id="Discussion"></a>

## Discussion

A format description object describes the format of the media the port currently provides. To observe changes to a port’s format, observe notifications of type [AVCaptureInputPortFormatDescriptionDidChangeNotification](formatdescriptiondidchangenotification.md).

## See Also

### Inspecting an input port

- [enabled](isenabled.md): A Boolean value that indicates whether the port is in an enabled state.
- [mediaType](mediatype.md): The media type of the port.
- [sourceDeviceType](sourcedevicetype.md): The device type of the source camera that provides data to the port.
- [sourceDevicePosition](sourcedeviceposition.md): The position of the source device providing input through this port.
- [clock](clock.md): An object that represents the capture device’s clock.
