> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmetadatabodyobject](https://developer.apple.com/documentation/avfoundation/avmetadatabodyobject)

# AVMetadataBodyObject (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 17.0+

An abstract class that defines the interface for a metadata body object.

## Declaration

```swift
class AVMetadataBodyObject
```

<a id="overview"></a>

## Overview

A metadata body object represents a single detected body in a picture. It’s the base object used to represent bodies, for example [AVMetadataHumanBodyObject](avmetadatahumanbodyobject.md), [AVMetadataDogBodyObject](avmetadatadogbodyobject.md), and [AVMetadataCatBodyObject](avmetadatacatbodyobject.md).

## Topics

### Inspecting metadata

- [bodyID](avmetadatabodyobject/bodyid.md): An integer value that defines the unique identifier of an object in a picture.

## Relationships

### Inherits From

- [AVMetadataObject](avmetadataobject.md)

### Inherited By

- [AVMetadataCatBodyObject](avmetadatacatbodyobject.md)
- [AVMetadataDogBodyObject](avmetadatadogbodyobject.md)
- [AVMetadataHumanBodyObject](avmetadatahumanbodyobject.md)
- [AVMetadataHumanFullBodyObject](avmetadatahumanfullbodyobject.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Bodies

- [AVMetadataCatBodyObject](avmetadatacatbodyobject.md): An object representing a single detected cat body in a picture.
- [AVMetadataDogBodyObject](avmetadatadogbodyobject.md): An object representing a single detected dog body in a picture.
- [AVMetadataHumanBodyObject](avmetadatahumanbodyobject.md): An object representing a single detected human body in a picture.
- [AVMetadataHumanFullBodyObject](avmetadatahumanfullbodyobject.md): An object that represents a detected human full body in a picture.

# AVMetadataBodyObject (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 17.0+

An abstract class that defines the interface for a metadata body object.

## Declaration

```objectivec
@interface AVMetadataBodyObject : AVMetadataObject
```

<a id="overview"></a>

## Overview

A metadata body object represents a single detected body in a picture. It’s the base object used to represent bodies, for example [AVMetadataHumanBodyObject](avmetadatahumanbodyobject.md), [AVMetadataDogBodyObject](avmetadatadogbodyobject.md), and [AVMetadataCatBodyObject](avmetadatacatbodyobject.md).

## Topics

### Inspecting metadata

- [bodyID](avmetadatabodyobject/bodyid.md): An integer value that defines the unique identifier of an object in a picture.

## Relationships

### Inherits From

- [AVMetadataObject](avmetadataobject.md)

### Inherited By

- [AVMetadataCatBodyObject](avmetadatacatbodyobject.md)
- [AVMetadataDogBodyObject](avmetadatadogbodyobject.md)
- [AVMetadataHumanBodyObject](avmetadatahumanbodyobject.md)
- [AVMetadataHumanFullBodyObject](avmetadatahumanfullbodyobject.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Bodies

- [AVMetadataCatBodyObject](avmetadatacatbodyobject.md): An object representing a single detected cat body in a picture.
- [AVMetadataDogBodyObject](avmetadatadogbodyobject.md): An object representing a single detected dog body in a picture.
- [AVMetadataHumanBodyObject](avmetadatahumanbodyobject.md): An object representing a single detected human body in a picture.
- [AVMetadataHumanFullBodyObject](avmetadatahumanfullbodyobject.md): An object that represents a detected human full body in a picture.
