> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfpage](https://developer.apple.com/documentation/pdfkit/pdfpage)

# PDFPage (Swift)

**Framework:** PDFKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

`PDFPage`, a subclass of `NSObject`, defines methods used to render PDF pages and work with annotations, text, and selections.

## Declaration

```swift
class PDFPage
```

## Mentioned In

- [Adding Custom Graphics to a PDF](adding-custom-graphics-to-a-pdf.md)

<a id="overview"></a>

## Overview

`PDFPage` objects are flexible and powerful. With them you can render PDF content onscreen or to a printer, add annotations, count characters, define selections, and get the textual content of a page as an `NSString` object.

Your application instantiates a `PDFPage` object by asking for one from a `PDFDocument` object.

For simple display and navigation of PDF documents within your application, you don’t need to use `PDFPage`. You need only use `PDFView`.

## Topics

### Initializing a Page

- [init(image:)](pdfpage/init%28image_%29.md): Creates a new `PDFPage` object and initializes it with the specified `NSImage` object.

### Getting Information About a Page

- [document](pdfpage/document.md): Returns the `PDFDocument` object with which the page is associated.
- [label](pdfpage/label.md): Returns the label for the page.
- [bounds(for:)](pdfpage/bounds%28for_%29.md): Returns the bounds for the specified PDF display box.
- [setBounds(\_:for:)](pdfpage/setbounds%28__for_%29.md): Sets the bounds for the specified box.
- [rotation](pdfpage/rotation.md): Sets the rotation angle for the page in degrees.

### Working with Annotations

- [annotations](pdfpage/annotations.md): Returns an array containing the page’s annotations.
- [displaysAnnotations](pdfpage/displaysannotations.md): Returns a Boolean value indicating whether annotations are displayed for the page.
- [addAnnotation(\_:)](pdfpage/addannotation%28__%29.md): Adds the specified annotation object to the page.
- [removeAnnotation(\_:)](pdfpage/removeannotation%28__%29.md): Removes the specified annotation from the page.
- [annotation(at:)](pdfpage/annotation%28at_%29.md): Returns the annotation, if there is one, at the specified point.

### Rendering Pages

- [draw(with:)](pdfpage/draw%28with_%29.md): Deprecated. Draws the page within the specified box.
- [transformContext(for:)](pdfpage/transformcontext%28for_%29.md): Deprecated. Transforms the current context, given the specified box.

### Working with Textual Content

- [numberOfCharacters](pdfpage/numberofcharacters.md): Returns the number of characters on the page, including whitespace characters.
- [string](pdfpage/string.md): Returns an `NSString` object representing the text on the page.
- [attributedString](pdfpage/attributedstring.md): Returns an `NSAttributedString` object representing the text on the page.
- [characterBounds(at:)](pdfpage/characterbounds%28at_%29.md): Returns the bounds, in page space, of the character at the specified index.
- [characterIndex(at:)](pdfpage/characterindex%28at_%29.md): Returns the character index value for the specified point in page space.

### Working with Selections

- [selection(for:)](pdfpage/selection%28for_%29-2ckpi.md): Returns the text enclosed within the specified rectangle, expressed in page (user) coordinates.
- [selectionForWord(at:)](pdfpage/selectionforword%28at_%29.md): Returns the whole word that includes the specified point.
- [selectionForLine(at:)](pdfpage/selectionforline%28at_%29.md): Returns the whole line of text that includes the specified point.
- [selection(from:to:)](pdfpage/selection%28from_to_%29.md): Returns the text between the two specified points in page space.
- [selection(for:)](pdfpage/selection%28for_%29-20y9d.md): Returns the text contained within the specified range.

### Supporting Types

- [PDFDisplayBox](pdfdisplaybox.md): The following box types may be used with `PDFPage` drawing and bounds-setting methods. See the Adobe PDF Specification for more information on box types, units, and coordinate systems.
- [PDFDisplayDirection](pdfdisplaydirection.md)

### Type Aliases

- [PDFPage.ImageInitializationOption](pdfpage/imageinitializationoption.md)

### Initializers

- [init()](pdfpage/init%28%29.md)
- [init(image:options:)](pdfpage/init%28image_options_%29.md)

### Instance Properties

- [dataRepresentation](pdfpage/datarepresentation.md): Returns the PDF data (that is, a PDF document) representing this page. This method does not preserve external page links.
- [pageRef](pdfpage/pageref.md)

### Instance Methods

- [draw(with:to:)](pdfpage/draw%28with_to_%29.md)
- [thumbnail(of:for:)](pdfpage/thumbnail%28of_for_%29.md)
- [transform(\_:for:)](pdfpage/transform%28__for_%29.md)
- [transform(for:)](pdfpage/transform%28for_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Content Model

- [PDFDocument](pdfdocument.md): An object that represents PDF data or a PDF file and defines methods for writing, searching, and selecting PDF data.
- [PDFOutline](pdfoutline.md): A `PDFOutline` object is an element in a tree-structured hierarchy that can represent the structure of a PDF document.
- [PDFSelection](pdfselection.md): A `PDFSelection` object identifies a contiguous or noncontiguous selection of text in a PDF document.

# PDFPage (Objective-C)

**Framework:** PDFKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

`PDFPage`, a subclass of `NSObject`, defines methods used to render PDF pages and work with annotations, text, and selections.

## Declaration

```objectivec
@interface PDFPage : NSObject
```

## Mentioned In

- [Adding Custom Graphics to a PDF](adding-custom-graphics-to-a-pdf.md)

<a id="overview"></a>

## Overview

`PDFPage` objects are flexible and powerful. With them you can render PDF content onscreen or to a printer, add annotations, count characters, define selections, and get the textual content of a page as an `NSString` object.

Your application instantiates a `PDFPage` object by asking for one from a `PDFDocument` object.

For simple display and navigation of PDF documents within your application, you don’t need to use `PDFPage`. You need only use `PDFView`.

## Topics

### Initializing a Page

- [initWithImage:](pdfpage/init%28image_%29.md): Creates a new `PDFPage` object and initializes it with the specified `NSImage` object.

### Getting Information About a Page

- [document](pdfpage/document.md): Returns the `PDFDocument` object with which the page is associated.
- [label](pdfpage/label.md): Returns the label for the page.
- [boundsForBox:](pdfpage/bounds%28for_%29.md): Returns the bounds for the specified PDF display box.
- [setBounds:forBox:](pdfpage/setbounds%28__for_%29.md): Sets the bounds for the specified box.
- [rotation](pdfpage/rotation.md): Sets the rotation angle for the page in degrees.

### Working with Annotations

- [annotations](pdfpage/annotations.md): Returns an array containing the page’s annotations.
- [displaysAnnotations](pdfpage/displaysannotations.md): Returns a Boolean value indicating whether annotations are displayed for the page.
- [addAnnotation:](pdfpage/addannotation%28__%29.md): Adds the specified annotation object to the page.
- [removeAnnotation:](pdfpage/removeannotation%28__%29.md): Removes the specified annotation from the page.
- [annotationAtPoint:](pdfpage/annotation%28at_%29.md): Returns the annotation, if there is one, at the specified point.

### Rendering Pages

- [drawWithBox:](pdfpage/draw%28with_%29.md): Deprecated. Draws the page within the specified box.
- [transformContextForBox:](pdfpage/transformcontext%28for_%29.md): Deprecated. Transforms the current context, given the specified box.

### Working with Textual Content

- [numberOfCharacters](pdfpage/numberofcharacters.md): Returns the number of characters on the page, including whitespace characters.
- [string](pdfpage/string.md): Returns an `NSString` object representing the text on the page.
- [attributedString](pdfpage/attributedstring.md): Returns an `NSAttributedString` object representing the text on the page.
- [characterBoundsAtIndex:](pdfpage/characterbounds%28at_%29.md): Returns the bounds, in page space, of the character at the specified index.
- [characterIndexAtPoint:](pdfpage/characterindex%28at_%29.md): Returns the character index value for the specified point in page space.

### Working with Selections

- [selectionForRect:](pdfpage/selection%28for_%29-2ckpi.md): Returns the text enclosed within the specified rectangle, expressed in page (user) coordinates.
- [selectionForWordAtPoint:](pdfpage/selectionforword%28at_%29.md): Returns the whole word that includes the specified point.
- [selectionForLineAtPoint:](pdfpage/selectionforline%28at_%29.md): Returns the whole line of text that includes the specified point.
- [selectionFromPoint:toPoint:](pdfpage/selection%28from_to_%29.md): Returns the text between the two specified points in page space.
- [selectionForRange:](pdfpage/selection%28for_%29-20y9d.md): Returns the text contained within the specified range.

### Supporting Types

- [PDFDisplayBox](pdfdisplaybox.md): The following box types may be used with `PDFPage` drawing and bounds-setting methods. See the Adobe PDF Specification for more information on box types, units, and coordinate systems.
- [PDFDisplayDirection](pdfdisplaydirection.md)

### Type Aliases

- [PDFPageImageInitializationOption](pdfpage/imageinitializationoption.md)

### Initializers

- [init](pdfpage/init%28%29.md)
- [initWithImage:options:](pdfpage/init%28image_options_%29.md)

### Instance Properties

- [dataRepresentation](pdfpage/datarepresentation.md): Returns the PDF data (that is, a PDF document) representing this page. This method does not preserve external page links.
- [pageRef](pdfpage/pageref.md)

### Instance Methods

- [drawWithBox:toContext:](pdfpage/draw%28with_to_%29.md)
- [thumbnailOfSize:forBox:](pdfpage/thumbnail%28of_for_%29.md)
- [transformContext:forBox:](pdfpage/transform%28__for_%29.md)
- [transformForBox:](pdfpage/transform%28for_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Content Model

- [PDFDocument](pdfdocument.md): An object that represents PDF data or a PDF file and defines methods for writing, searching, and selecting PDF data.
- [PDFOutline](pdfoutline.md): A `PDFOutline` object is an element in a tree-structured hierarchy that can represent the structure of a PDF document.
- [PDFSelection](pdfselection.md): A `PDFSelection` object identifies a contiguous or noncontiguous selection of text in a PDF document.
