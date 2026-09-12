> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspictimagerep](https://developer.apple.com/documentation/appkit/nspictimagerep)

# NSPICTImageRep (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

An object that renders an image from a PICT format data stream of version 1, version 2, and extended version 2.

## Declaration

```swift
class NSPICTImageRep
```

<a id="overview"></a>

## Overview

> **Warning**

>  There is no guarantee that the image will render exactly the same as it would under QuickDraw because of the differences between the display medium and QuickDraw. In particular, some transfer modes and region operations may not be supported.

## Topics

### Creating Representations of Images from PICT Data

- [init(data:)](nspictimagerep/init%28data_%29.md): Returns a representation of an image from the specified data in the PICT file format.

### Getting Data

- [boundingBox](nspictimagerep/boundingbox.md): The rectangle that bounds the image representation.
- [pictRepresentation](nspictimagerep/pictrepresentation.md): The image representation’s PICT data.

## Relationships

### Inherits From

- [NSImageRep](nsimagerep.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Bitmap Formats

- [NSBitmapImageRep](nsbitmapimagerep.md): An object that renders an image from bitmap data.
- [NSCIImageRep](nsciimagerep.md): An object that can render an image from a Core Image object.

# NSPICTImageRep (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

An object that renders an image from a PICT format data stream of version 1, version 2, and extended version 2.

## Declaration

```objectivec
@interface NSPICTImageRep : NSImageRep
```

<a id="overview"></a>

## Overview

> **Warning**

>  There is no guarantee that the image will render exactly the same as it would under QuickDraw because of the differences between the display medium and QuickDraw. In particular, some transfer modes and region operations may not be supported.

## Topics

### Creating Representations of Images from PICT Data

- [imageRepWithData:](nspictimagerep/imagerepwithdata_.md): Creates and returns a representation of an image from the specified data in the PICT file format.
- [initWithData:](nspictimagerep/init%28data_%29.md): Returns a representation of an image from the specified data in the PICT file format.

### Getting Data

- [boundingBox](nspictimagerep/boundingbox.md): The rectangle that bounds the image representation.
- [PICTRepresentation](nspictimagerep/pictrepresentation.md): The image representation’s PICT data.

## Relationships

### Inherits From

- [NSImageRep](nsimagerep.md)

## See Also

### Bitmap Formats

- [NSBitmapImageRep](nsbitmapimagerep.md): An object that renders an image from bitmap data.
- [NSCIImageRep](nsciimagerep.md): An object that can render an image from a Core Image object.
