> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspdfinfo](https://developer.apple.com/documentation/appkit/nspdfinfo)

# NSPDFInfo (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.9+

An object that stores information associated with the creation of a PDF file, such as its URL, tag names, page orientation, and paper size.

## Declaration

```swift
class NSPDFInfo
```

<a id="overview"></a>

## Overview

Typically, a PDF panel—that is, a panel created by an [NSPDFPanel](nspdfpanel.md) object—displays the information supplied by an [NSPDFInfo](nspdfinfo.md) object when the user wants to export content as a PDF file. A PDF panel can also update a PDF info object with information it receives from the user.

## Topics

### Specifying PDF Information

- [url](nspdfinfo/url.md): The URL identifying the location at which the PDF file will be created.
- [isFileExtensionHidden](nspdfinfo/isfileextensionhidden.md): A Boolean value that indicates whether the file extension should appear after the filename.
- [tagNames](nspdfinfo/tagnames.md): An array of tag names that should be applied to the PDF file after it’s created.
- [orientation](nspdfinfo/orientation.md): The paper orientation to use when exporting content as a PDF file.
- [paperSize](nspdfinfo/papersize.md): The paper size to use when exporting content as a PDF file.
- [attributes](nspdfinfo/attributes.md): A dictionary of additional attributes that describe how to export content as a PDF file.

### Initializers

- [init(coder:)](nspdfinfo/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Vector Formats

- [NSPDFImageRep](nspdfimagerep.md): An object that can render an image from a PDF format data stream.
- [NSEPSImageRep](nsepsimagerep.md): Deprecated. An object that can render an image from encapsulated PostScript (EPS) code.

# NSPDFInfo (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.9+

An object that stores information associated with the creation of a PDF file, such as its URL, tag names, page orientation, and paper size.

## Declaration

```objectivec
@interface NSPDFInfo : NSObject
```

<a id="overview"></a>

## Overview

Typically, a PDF panel—that is, a panel created by an [NSPDFPanel](nspdfpanel.md) object—displays the information supplied by an [NSPDFInfo](nspdfinfo.md) object when the user wants to export content as a PDF file. A PDF panel can also update a PDF info object with information it receives from the user.

## Topics

### Specifying PDF Information

- [URL](nspdfinfo/url.md): The URL identifying the location at which the PDF file will be created.
- [fileExtensionHidden](nspdfinfo/isfileextensionhidden.md): A Boolean value that indicates whether the file extension should appear after the filename.
- [tagNames](nspdfinfo/tagnames.md): An array of tag names that should be applied to the PDF file after it’s created.
- [orientation](nspdfinfo/orientation.md): The paper orientation to use when exporting content as a PDF file.
- [paperSize](nspdfinfo/papersize.md): The paper size to use when exporting content as a PDF file.
- [attributes](nspdfinfo/attributes.md): A dictionary of additional attributes that describe how to export content as a PDF file.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)

## See Also

### Vector Formats

- [NSPDFImageRep](nspdfimagerep.md): An object that can render an image from a PDF format data stream.
- [NSEPSImageRep](nsepsimagerep.md): Deprecated. An object that can render an image from encapsulated PostScript (EPS) code.
