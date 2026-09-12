> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsepsimagerep](https://developer.apple.com/documentation/appkit/nsepsimagerep)

# NSEPSImageRep (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.0+ (deprecated in 14.0)

An object that can render an image from encapsulated PostScript (EPS) code.

> \`NSEPSImageRep\` instances cannot be created on macOS 14.0 and later

## Declaration

```swift
class NSEPSImageRep
```

## Topics

### Creating Representations of Images from EPS Data

- [init(data:)](nsepsimagerep/init%28data_%29.md): Deprecated. Returns a representation of an image initialized with the specified EPS data.

### Getting Data

- [boundingBox](nsepsimagerep/boundingbox.md): Deprecated. The rectangle that bounds the image representation.
- [epsRepresentation](nsepsimagerep/epsrepresentation.md): Deprecated. The EPS representation of the image representation.

### Drawing Images

- [prepareGState()](nsepsimagerep/preparegstate%28%29.md): Deprecated. Implemented by subclasses to configure the graphics state prior to drawing.

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

### Vector Formats

- [NSPDFImageRep](nspdfimagerep.md): An object that can render an image from a PDF format data stream.
- [NSPDFInfo](nspdfinfo.md): An object that stores information associated with the creation of a PDF file, such as its URL, tag names, page orientation, and paper size.

# NSEPSImageRep (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.0+ (deprecated in 14.0)

An object that can render an image from encapsulated PostScript (EPS) code.

> \`NSEPSImageRep\` instances cannot be created on macOS 14.0 and later

## Declaration

```objectivec
@interface NSEPSImageRep : NSImageRep
```

## Topics

### Creating Representations of Images from EPS Data

- [imageRepWithData:](nsepsimagerep/imagerepwithdata_.md): Deprecated. Creates and returns a representation of an image initialized with the specified EPS data.
- [initWithData:](nsepsimagerep/init%28data_%29.md): Deprecated. Returns a representation of an image initialized with the specified EPS data.

### Getting Data

- [boundingBox](nsepsimagerep/boundingbox.md): Deprecated. The rectangle that bounds the image representation.
- [EPSRepresentation](nsepsimagerep/epsrepresentation.md): Deprecated. The EPS representation of the image representation.

### Drawing Images

- [prepareGState](nsepsimagerep/preparegstate%28%29.md): Deprecated. Implemented by subclasses to configure the graphics state prior to drawing.

## Relationships

### Inherits From

- [NSImageRep](nsimagerep.md)

## See Also

### Vector Formats

- [NSPDFImageRep](nspdfimagerep.md): An object that can render an image from a PDF format data stream.
- [NSPDFInfo](nspdfinfo.md): An object that stores information associated with the creation of a PDF file, such as its URL, tag names, page orientation, and paper size.
