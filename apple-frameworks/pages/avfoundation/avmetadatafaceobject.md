> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmetadatafaceobject](https://developer.apple.com/documentation/avfoundation/avmetadatafaceobject)

# AVMetadataFaceObject (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 14.0+ · macOS 10.10+ · tvOS 9.0+

Face information detected by a metadata capture output.

## Declaration

```swift
class AVMetadataFaceObject
```

## Mentioned In

- [Configuring camera capture to collect a Portrait Effects matte](configuring-camera-capture-to-collect-a-portrait-effects-matte.md)

<a id="overview"></a>

## Overview

The `AVMetadataFaceObject` class is a concrete subclass of [AVMetadataObject](avmetadataobject.md) that defines the features of a single detected face. You can retrieve instances of this class from the output of an [AVCaptureMetadataOutput](avcapturemetadataoutput.md) object on devices that support face detection.

## Topics

### Getting the face identifier

- [faceID](avmetadatafaceobject/faceid.md): The unique ID for this face metadata object.

### Accessing the face detection data

- [hasRollAngle](avmetadatafaceobject/hasrollangle.md): A Boolean value indicating whether there is a valid roll angle associated with the face.
- [rollAngle](avmetadatafaceobject/rollangle.md): The roll angle of the face specified in degrees.
- [hasYawAngle](avmetadatafaceobject/hasyawangle.md): A Boolean value indicating whether there is a valid yaw angle associated with the face.
- [yawAngle](avmetadatafaceobject/yawangle.md): The yaw angle of the face specified in degrees.

### Constants

- [Face metadata type](face-metadata-type.md): A metadata type string for face detection metadata.

## Relationships

### Inherits From

- [AVMetadataObject](avmetadataobject.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

# AVMetadataFaceObject (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 14.0+ · macOS 10.10+ · tvOS 9.0+

Face information detected by a metadata capture output.

## Declaration

```objectivec
@interface AVMetadataFaceObject : AVMetadataObject
```

## Mentioned In

- [Configuring camera capture to collect a Portrait Effects matte](configuring-camera-capture-to-collect-a-portrait-effects-matte.md)

<a id="overview"></a>

## Overview

The `AVMetadataFaceObject` class is a concrete subclass of [AVMetadataObject](avmetadataobject.md) that defines the features of a single detected face. You can retrieve instances of this class from the output of an [AVCaptureMetadataOutput](avcapturemetadataoutput.md) object on devices that support face detection.

## Topics

### Getting the face identifier

- [faceID](avmetadatafaceobject/faceid.md): The unique ID for this face metadata object.

### Accessing the face detection data

- [hasRollAngle](avmetadatafaceobject/hasrollangle.md): A Boolean value indicating whether there is a valid roll angle associated with the face.
- [rollAngle](avmetadatafaceobject/rollangle.md): The roll angle of the face specified in degrees.
- [hasYawAngle](avmetadatafaceobject/hasyawangle.md): A Boolean value indicating whether there is a valid yaw angle associated with the face.
- [yawAngle](avmetadatafaceobject/yawangle.md): The yaw angle of the face specified in degrees.

### Constants

- [Face metadata type](face-metadata-type.md): A metadata type string for face detection metadata.

## Relationships

### Inherits From

- [AVMetadataObject](avmetadataobject.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
