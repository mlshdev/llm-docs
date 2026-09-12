> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptureinput/port](https://developer.apple.com/documentation/avfoundation/avcaptureinput/port)

# AVCaptureInput.Port (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

An object that represents a stream of data that a capture input provides.

## Declaration

```swift
class Port
```

<a id="overview"></a>

## Overview

Instances of [AVCaptureInput](../avcaptureinput.md) have one or more input ports, one for each data stream they can produce. For example, an [AVCaptureDeviceInput](../avcapturedeviceinput.md) object presenting one video data stream has one port.

## Topics

### Inspecting an input port

- [isEnabled](port/isenabled.md): A Boolean value that indicates whether the port is in an enabled state.
- [mediaType](port/mediatype.md): The media type of the port.
- [formatDescription](port/formatdescription.md): A description of the port format.
- [sourceDeviceType](port/sourcedevicetype.md): The device type of the source camera that provides data to the port.
- [sourceDevicePosition](port/sourcedeviceposition.md): The position of the source device providing input through this port.
- [clock](port/clock.md): An object that represents the capture device’s clock.

### Observing format changes

- [formatDescriptionDidChangeNotification](port/formatdescriptiondidchangenotification.md): A notification the system posts when the capture input port’s format description changes.

### Accessing the input

- [input](port/input.md): The input object that owns the port.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../../objectivec/nsobjectprotocol.md)

## See Also

### Accessing ports

- [ports](ports.md): The ports available on a capture input.

# AVCaptureInputPort (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

An object that represents a stream of data that a capture input provides.

## Declaration

```objectivec
@interface AVCaptureInputPort : NSObject
```

<a id="overview"></a>

## Overview

Instances of [AVCaptureInput](../avcaptureinput.md) have one or more input ports, one for each data stream they can produce. For example, an [AVCaptureDeviceInput](../avcapturedeviceinput.md) object presenting one video data stream has one port.

## Topics

### Inspecting an input port

- [enabled](port/isenabled.md): A Boolean value that indicates whether the port is in an enabled state.
- [mediaType](port/mediatype.md): The media type of the port.
- [formatDescription](port/formatdescription.md): A description of the port format.
- [sourceDeviceType](port/sourcedevicetype.md): The device type of the source camera that provides data to the port.
- [sourceDevicePosition](port/sourcedeviceposition.md): The position of the source device providing input through this port.
- [clock](port/clock.md): An object that represents the capture device’s clock.

### Observing format changes

- [AVCaptureInputPortFormatDescriptionDidChangeNotification](port/formatdescriptiondidchangenotification.md): A notification the system posts when the capture input port’s format description changes.

### Accessing the input

- [input](port/input.md): The input object that owns the port.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

## See Also

### Accessing ports

- [ports](ports.md): The ports available on a capture input.
