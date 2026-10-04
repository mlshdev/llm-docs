> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avkit/avcapturedevicedescriptor

# AVCaptureDeviceDescriptor (Swift)

**Framework:** AVKit  
**Kind:** Class  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta · Mac Catalyst 27.1+

An object that identifies a capture device and is safe to pass between actors.

## Declaration

```swift
class AVCaptureDeviceDescriptor
```

## Mentioned In

- [Choosing a camera by the direction it faces](choosing-a-camera-by-the-direction-it-faces.md)

<a id="overview"></a>

## Overview

A descriptor is a [Sendable](https://developer.apple.com/documentation/swift/sendable) representation of a capture device. An [AVCaptureDeviceDirectionCoordinator](avcapturedevicedirectioncoordinator.md) object reports descriptors on the main actor, where the capture APIs in AVFoundation shouldn’t run. Pass a descriptor to a background actor and create the [AVCaptureDevice](../avfoundation/avcapturedevice.md) there. Read its properties on the main actor to update your interface.

You don’t create `AVCaptureDeviceDescriptor` objects directly. An [AVCaptureDeviceDirectionMap](avcapturedevicedirectionmap.md) object reports the cameras facing each direction as arrays of descriptors.

## Topics

### Identifying the device

- [uniqueID](avcapturedevicedescriptor/uniqueid.md): An identifier that uniquely identifies the device’s camera.
- [localizedName](avcapturedevicedescriptor/localizedname.md): A name for the camera that’s suitable for display in your interface.

### Inspecting the device’s characteristics

- [deviceType](avcapturedevicedescriptor/devicetype.md): The kind of camera, such as a wide-angle or telephoto camera.
- [mediaTypes](avcapturedevicedescriptor/mediatypes.md): The kinds of media the camera captures.
- [position](avcapturedevicedescriptor/position.md): The physical position of the camera on the device.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Camera facing direction

- [Choosing a camera by the direction it faces](choosing-a-camera-by-the-direction-it-faces.md): Find out which way each camera faces, and follow the change as someone opens and closes the device.
- [AVCaptureDeviceDirectionCoordinator](avcapturedevicedirectioncoordinator.md): An object that tracks the direction each camera faces in relation to a view.
- [AVCaptureDeviceDirectionMap](avcapturedevicedirectionmap.md): An object that groups the cameras a coordinator tracks by the direction they face.

# AVCaptureDeviceDescriptor (Objective-C)

**Framework:** AVKit  
**Kind:** Class  
**Availability:** Mac Catalyst 27.1+

An object that identifies a capture device and is safe to pass between actors.

## Declaration

```objectivec
@interface AVCaptureDeviceDescriptor : NSObject
```

## Mentioned In

- [Choosing a camera by the direction it faces](choosing-a-camera-by-the-direction-it-faces.md)

<a id="overview"></a>

## Overview

A descriptor is a [Sendable](https://developer.apple.com/documentation/swift/sendable) representation of a capture device. An [AVCaptureDeviceDirectionCoordinator](avcapturedevicedirectioncoordinator.md) object reports descriptors on the main actor, where the capture APIs in AVFoundation shouldn’t run. Pass a descriptor to a background actor and create the [AVCaptureDevice](../avfoundation/avcapturedevice.md) there. Read its properties on the main actor to update your interface.

You don’t create `AVCaptureDeviceDescriptor` objects directly. An [AVCaptureDeviceDirectionMap](avcapturedevicedirectionmap.md) object reports the cameras facing each direction as arrays of descriptors.

## Topics

### Identifying the device

- [uniqueID](avcapturedevicedescriptor/uniqueid.md): An identifier that uniquely identifies the device’s camera.
- [localizedName](avcapturedevicedescriptor/localizedname.md): A name for the camera that’s suitable for display in your interface.

### Inspecting the device’s characteristics

- [deviceType](avcapturedevicedescriptor/devicetype.md): The kind of camera, such as a wide-angle or telephoto camera.
- [mediaTypes](avcapturedevicedescriptor/mediatypes.md): The kinds of media the camera captures.
- [position](avcapturedevicedescriptor/position.md): The physical position of the camera on the device.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Camera facing direction

- [Choosing a camera by the direction it faces](choosing-a-camera-by-the-direction-it-faces.md): Find out which way each camera faces, and follow the change as someone opens and closes the device.
- [AVCaptureDeviceDirectionCoordinator](avcapturedevicedirectioncoordinator.md): An object that tracks the direction each camera faces in relation to a view.
- [AVCaptureDeviceDirectionMap](avcapturedevicedirectionmap.md): An object that groups the cameras a coordinator tracks by the direction they face.
