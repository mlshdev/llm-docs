> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspdfimagerep](https://developer.apple.com/documentation/appkit/nspdfimagerep)

# NSPDFImageRep (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

An object that can render an image from a PDF format data stream.

## Declaration

```swift
class NSPDFImageRep
```

## Topics

### Creating Representations of Images from PDF Data

- [init(data:)](nspdfimagerep/init%28data_%29.md): Returns a representation of an image initialized with the specified PDF data.

### Getting Data

- [bounds](nspdfimagerep/bounds.md): The image representation’s bounding rectangle.
- [currentPage](nspdfimagerep/currentpage.md): The page currently displayed by the image representation.
- [pageCount](nspdfimagerep/pagecount.md): The number of pages in the image representation.
- [pdfRepresentation](nspdfimagerep/pdfrepresentation.md): The PDF representation of the representation’s image.

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

- [NSPDFInfo](nspdfinfo.md): An object that stores information associated with the creation of a PDF file, such as its URL, tag names, page orientation, and paper size.
- [NSEPSImageRep](nsepsimagerep.md): Deprecated. An object that can render an image from encapsulated PostScript (EPS) code.

# NSPDFImageRep (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

An object that can render an image from a PDF format data stream.

## Declaration

```objectivec
@interface NSPDFImageRep : NSImageRep
```

## Topics

### Creating Representations of Images from PDF Data

- [imageRepWithData:](nspdfimagerep/imagerepwithdata_.md): Creates and returns a representation of an image initialized with the specified PDF data.
- [initWithData:](nspdfimagerep/init%28data_%29.md): Returns a representation of an image initialized with the specified PDF data.

### Getting Data

- [bounds](nspdfimagerep/bounds.md): The image representation’s bounding rectangle.
- [currentPage](nspdfimagerep/currentpage.md): The page currently displayed by the image representation.
- [pageCount](nspdfimagerep/pagecount.md): The number of pages in the image representation.
- [PDFRepresentation](nspdfimagerep/pdfrepresentation.md): The PDF representation of the representation’s image.

## Relationships

### Inherits From

- [NSImageRep](nsimagerep.md)

## See Also

### Vector Formats

- [NSPDFInfo](nspdfinfo.md): An object that stores information associated with the creation of a PDF file, such as its URL, tag names, page orientation, and paper size.
- [NSEPSImageRep](nsepsimagerep.md): Deprecated. An object that can render an image from encapsulated PostScript (EPS) code.
