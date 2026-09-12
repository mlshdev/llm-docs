> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpdfdocument](https://developer.apple.com/documentation/coregraphics/cgpdfdocument)

# CGPDFDocument (Swift)

**Framework:** Core Graphics  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A document that contains PDF (Portable Document Format) drawing information.

## Declaration

```swift
class CGPDFDocument
```

<a id="overview"></a>

## Overview

PDF provides an efficient format for cross-platform exchange of documents with rich content. PDF files can contain multiple pages of images and text. A PDF document object contains all the information relating to a PDF document, including its catalog and contents.

Note that PDF documents may be encrypted, and that some operations may be restricted until a valid password is supplied—see the functions listed in [Working with an Encrypted PDF Document](cgpdfdocument.md#Working-with-an-Encrypted-PDF-Document).  Core Graphics also supports decrypting encrypted documents.

Core Graphics can both display and generate files that are compliant with the PDF standard.

## Topics

### Creating PDF Documents

- [init(\_:)](cgpdfdocument/init%28__%29-gbq6.md): Creates a Core Graphics PDF document using a data provider.
- [init(\_:)](cgpdfdocument/init%28__%29-2gtsd.md): Creates a Core Graphics PDF document using data specified by a URL.

### Examining a PDF Document

- [catalog](cgpdfdocument/catalog.md): Returns the document catalog of a Core Graphics PDF document.
- [fileIdentifier](cgpdfdocument/fileidentifier.md): Gets the file identifier for a PDF document.
- [info](cgpdfdocument/info.md): Gets the information dictionary for a PDF document.
- [numberOfPages](cgpdfdocument/numberofpages.md): Returns the number of pages in a PDF document.
- [getVersion(majorVersion:minorVersion:)](cgpdfdocument/getversion%28majorversion_minorversion_%29.md): Returns the major and minor version numbers of a Core Graphics PDF document.
- [page(at:)](cgpdfdocument/page%28at_%29.md): Returns a page from a Core Graphics PDF document.

### Working with an Encrypted PDF Document

- [isEncrypted](cgpdfdocument/isencrypted.md): Returns whether the specified PDF file is encrypted.
- [allowsCopying](cgpdfdocument/allowscopying.md): Returns whether the specified PDF document allows copying.
- [allowsPrinting](cgpdfdocument/allowsprinting.md): Returns whether a PDF document allows printing.
- [isUnlocked](cgpdfdocument/isunlocked.md): Returns whether the specified PDF document is currently unlocked.
- [unlockWithPassword(\_:)](cgpdfdocument/unlockwithpassword%28__%29.md): Unlocks an encrypted PDF document when a valid password is supplied.

### Working with Core Foundation Types

- [typeID](cgpdfdocument/typeid.md): Returns the type identifier for Core Graphics PDF documents.

### Abstract Types for PDF Document Content

Use these abstract types and related functions to work with the content of a [CGPDFDocument](cgpdfdocument.md) object.

- [CGPDFPage](cgpdfpage.md): A type that represents a page in a PDF document.
- [CGPDFArray](cgpdfarray.md): An array structure within a PDF document.
- [CGPDFObject](cgpdfobject.md): An object representing content within a PDF document.
- [CGPDFStream](cgpdfstream.md): A stream or sequence of data bytes in a PDF document.
- [CGPDFString](cgpdfstring.md): A text string in a PDF document.
- [CGPDFScanner](cgpdfscanner.md): A parser object for handling content and operators in a PDF content stream.
- [CGPDFDictionary](cgpdfdictionary.md): A dictionary structure within a PDF document.
- [CGPDFContentStream](cgpdfcontentstream.md): A representation of one or more content data streams in a PDF page.
- [CGPDFOperatorTable](cgpdfoperatortable.md): A set of callback functions for operators used when scanning content in a PDF document.

### Instance Properties

- [accessPermissions](cgpdfdocument/accesspermissions.md)
- [outline](cgpdfdocument/outline.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

# CGPDFDocumentRef (Objective-C)

**Framework:** Core Graphics  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A document that contains PDF (Portable Document Format) drawing information.

## Declaration

```objectivec
typedef struct CGPDFDocument * CGPDFDocumentRef;
```

<a id="overview"></a>

## Overview

PDF provides an efficient format for cross-platform exchange of documents with rich content. PDF files can contain multiple pages of images and text. A PDF document object contains all the information relating to a PDF document, including its catalog and contents.

Note that PDF documents may be encrypted, and that some operations may be restricted until a valid password is supplied—see the functions listed in [Working with an Encrypted PDF Document](cgpdfdocument.md#Working-with-an-Encrypted-PDF-Document).  Core Graphics also supports decrypting encrypted documents.

Core Graphics can both display and generate files that are compliant with the PDF standard.

## Topics

### Creating PDF Documents

- [CGPDFDocumentCreateWithProvider](cgpdfdocument/init%28__%29-gbq6.md): Creates a Core Graphics PDF document using a data provider.
- [CGPDFDocumentCreateWithURL](cgpdfdocument/init%28__%29-2gtsd.md): Creates a Core Graphics PDF document using data specified by a URL.

### Retaining and Releasing PDF Documents

- [CGPDFDocumentRelease](cgpdfdocumentrelease.md): Decrements the retain count of a PDF document.
- [CGPDFDocumentRetain](cgpdfdocumentretain.md): Increments the retain count of a Core Graphics PDF document.

### Examining a PDF Document

- [CGPDFDocumentGetCatalog](cgpdfdocument/catalog.md): Returns the document catalog of a Core Graphics PDF document.
- [CGPDFDocumentGetID](cgpdfdocument/fileidentifier.md): Gets the file identifier for a PDF document.
- [CGPDFDocumentGetInfo](cgpdfdocument/info.md): Gets the information dictionary for a PDF document.
- [CGPDFDocumentGetNumberOfPages](cgpdfdocument/numberofpages.md): Returns the number of pages in a PDF document.
- [CGPDFDocumentGetVersion](cgpdfdocument/getversion%28majorversion_minorversion_%29.md): Returns the major and minor version numbers of a Core Graphics PDF document.
- [CGPDFDocumentGetPage](cgpdfdocument/page%28at_%29.md): Returns a page from a Core Graphics PDF document.

### Working with an Encrypted PDF Document

- [CGPDFDocumentIsEncrypted](cgpdfdocument/isencrypted.md): Returns whether the specified PDF file is encrypted.
- [CGPDFDocumentAllowsCopying](cgpdfdocument/allowscopying.md): Returns whether the specified PDF document allows copying.
- [CGPDFDocumentAllowsPrinting](cgpdfdocument/allowsprinting.md): Returns whether a PDF document allows printing.
- [CGPDFDocumentIsUnlocked](cgpdfdocument/isunlocked.md): Returns whether the specified PDF document is currently unlocked.
- [CGPDFDocumentUnlockWithPassword](cgpdfdocument/unlockwithpassword%28__%29.md): Unlocks an encrypted PDF document when a valid password is supplied.

### Getting Page Information

- [CGPDFDocumentGetArtBox](cgpdfdocumentgetartbox.md): Deprecated. Returns the art box of a page in a PDF document.
- [CGPDFDocumentGetBleedBox](cgpdfdocumentgetbleedbox.md): Deprecated. Returns the bleed box of a page in a PDF document.
- [CGPDFDocumentGetCropBox](cgpdfdocumentgetcropbox.md): Deprecated. Returns the crop box of a page in a PDF document.
- [CGPDFDocumentGetMediaBox](cgpdfdocumentgetmediabox.md): Deprecated. Returns the media box of a page in a PDF document.
- [CGPDFDocumentGetRotationAngle](cgpdfdocumentgetrotationangle.md): Deprecated. Returns the rotation angle of a page in a PDF document.
- [CGPDFDocumentGetTrimBox](cgpdfdocumentgettrimbox.md): Deprecated. Returns the trim box of a page in a PDF document.

### Working with Core Foundation Types

- [CGPDFDocumentGetTypeID](cgpdfdocument/typeid.md): Returns the type identifier for Core Graphics PDF documents.

### Abstract Types for PDF Document Content

Use these abstract types and related functions to work with the content of a [CGPDFDocumentRef](cgpdfdocument.md) object.

- [CGPDFPageRef](cgpdfpage.md): A type that represents a page in a PDF document.
- [CGPDFArray](cgpdfarray.md): An array structure within a PDF document.
- [CGPDFObject](cgpdfobject.md): An object representing content within a PDF document.
- [CGPDFStream](cgpdfstream.md): A stream or sequence of data bytes in a PDF document.
- [CGPDFString](cgpdfstring.md): A text string in a PDF document.
- [CGPDFScanner](cgpdfscanner.md): A parser object for handling content and operators in a PDF content stream.
- [CGPDFDictionary](cgpdfdictionary.md): A dictionary structure within a PDF document.
- [CGPDFContentStream](cgpdfcontentstream.md): A representation of one or more content data streams in a PDF page.
- [CGPDFOperatorTable](cgpdfoperatortable.md): A set of callback functions for operators used when scanning content in a PDF document.

## See Also

### Opaque Types

- [CGContextRef](cgcontext.md): A Quartz 2D drawing environment.
- [CGColorRef](cgcolor.md): A set of components that define a color, with a color space specifying how to interpret them.
- [CGColorConversionInfoRef](cgcolorconversioninfo.md): An object that describes how to convert between color spaces for use by other system services.
- [CGColorSpaceRef](cgcolorspace.md): A profile that specifies how to interpret a color value for display.
- [CGDataConsumerRef](cgdataconsumer.md): An abstraction for data-writing tasks that eliminates the need to manage a raw memory buffer.
- [CGDataProviderRef](cgdataprovider.md): An abstraction for data-reading tasks that eliminates the need to manage a raw memory buffer.
- [CGFontRef](cgfont.md): A set of character glyphs and layout information for drawing text.
- [CGFunctionRef](cgfunction.md): A general facility for defining and using callback functions.
- [CGGradientRef](cggradient.md): A definition for a smooth transition between colors for drawing radial and axial gradient fills.
- [CGImageRef](cgimage.md): A bitmap image or image mask.
- [CGLayerRef](cglayer.md): An offscreen context for reusing content drawn with Core Graphics.
- [CGPathRef](cgpath.md): An immutable graphics path: a mathematical description of shapes or lines to be drawn in a graphics context.
- [CGPatternRef](cgpattern.md): A 2D pattern to be used for drawing graphics paths.
- [CGPDFArray](cgpdfarray.md): An array structure within a PDF document.
- [CGPDFContentStream](cgpdfcontentstream.md): A representation of one or more content data streams in a PDF page.
