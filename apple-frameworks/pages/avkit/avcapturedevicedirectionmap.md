> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avkit/avcapturedevicedirectionmap

# AVCaptureDeviceDirectionMap (Swift)

**Framework:** AVKit  
**Kind:** Class  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta

An object that groups the cameras a coordinator tracks by the direction they face.

## Declaration

```swift
class AVCaptureDeviceDirectionMap
```

## Mentioned In

- [Choosing a camera by the direction it faces](choosing-a-camera-by-the-direction-it-faces.md)

<a id="overview"></a>

## Overview

You don’t create instances of `AVCaptureDeviceDirectionMap` directly. An [AVCaptureDeviceDirectionCoordinator](avcapturedevicedirectioncoordinator.md) object creates a map for the view you give it, and passes an updated map to your change handler each time a camera changes direction.

A map groups the device types you gave the coordinator into two arrays, using the view as the point of reference. The [forwardFacingDeviceDescriptors](avcapturedevicedirectionmap/forwardfacingdevicedescriptors.md) array describes the cameras that face the same direction as the view, toward the person looking at it. The [backwardFacingDeviceDescriptors](avcapturedevicedirectionmap/backwardfacingdevicedescriptors.md) array describes the cameras that face the other way, toward the scene beyond it. Each array holds [AVCaptureDeviceDescriptor](avcapturedevicedescriptor.md) values rather than capture devices.

> **Note**

> Either array can be empty when no camera is available or applicable for the current configuration.

## Topics

### Reading the camera directions

- [forwardFacingDeviceDescriptors](avcapturedevicedirectionmap/forwardfacingdevicedescriptors.md): Beta. Descriptions of the capture devices that face the same direction as the view.
- [backwardFacingDeviceDescriptors](avcapturedevicedirectionmap/backwardfacingdevicedescriptors.md): Beta. Descriptions of the capture devices that face away from the view.

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
- [AVCaptureDeviceDirectionCoordinator](avcapturedevicedirectioncoordinator.md): Beta. An object that tracks the direction each camera faces in relation to a view.
- [AVCaptureDeviceDescriptor](avcapturedevicedescriptor.md): Beta. An object that identifies a capture device and is safe to pass between actors.

# AVCaptureDeviceDirectionMap (Objective-C)

**Framework:** AVKit  
**Kind:** Class  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta

An object that groups the cameras a coordinator tracks by the direction they face.

## Declaration

```objectivec
@interface AVCaptureDeviceDirectionMap : NSObject
```

## Mentioned In

- [Choosing a camera by the direction it faces](choosing-a-camera-by-the-direction-it-faces.md)

<a id="overview"></a>

## Overview

You don’t create instances of `AVCaptureDeviceDirectionMap` directly. An [AVCaptureDeviceDirectionCoordinator](avcapturedevicedirectioncoordinator.md) object creates a map for the view you give it, and passes an updated map to your change handler each time a camera changes direction.

A map groups the device types you gave the coordinator into two arrays, using the view as the point of reference. The [forwardFacingDeviceDescriptors](avcapturedevicedirectionmap/forwardfacingdevicedescriptors.md) array describes the cameras that face the same direction as the view, toward the person looking at it. The [backwardFacingDeviceDescriptors](avcapturedevicedirectionmap/backwardfacingdevicedescriptors.md) array describes the cameras that face the other way, toward the scene beyond it. Each array holds [AVCaptureDeviceDescriptor](avcapturedevicedescriptor.md) values rather than capture devices.

> **Note**

> Either array can be empty when no camera is available or applicable for the current configuration.

## Topics

### Reading the camera directions

- [forwardFacingDeviceDescriptors](avcapturedevicedirectionmap/forwardfacingdevicedescriptors.md): Beta. Descriptions of the capture devices that face the same direction as the view.
- [backwardFacingDeviceDescriptors](avcapturedevicedirectionmap/backwardfacingdevicedescriptors.md): Beta. Descriptions of the capture devices that face away from the view.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Camera facing direction

- [Choosing a camera by the direction it faces](choosing-a-camera-by-the-direction-it-faces.md): Find out which way each camera faces, and follow the change as someone opens and closes the device.
- [AVCaptureDeviceDirectionCoordinator](avcapturedevicedirectioncoordinator.md): Beta. An object that tracks the direction each camera faces in relation to a view.
- [AVCaptureDeviceDescriptor](avcapturedevicedescriptor.md): Beta. An object that identifies a capture device and is safe to pass between actors.
