> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfoutline](https://developer.apple.com/documentation/pdfkit/pdfoutline)

# PDFOutline (Swift)

**Framework:** PDFKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

A `PDFOutline` object is an element in a tree-structured hierarchy that can represent the structure of a PDF document.

## Declaration

```swift
class PDFOutline
```

<a id="overview"></a>

## Overview

An outline is an optional component of a PDF document, useful for viewing the structure of the document and for navigating within it.

Outlines are created by the document’s author. If you represent a PDF document outline using outline objects, the root of the hierarchy is obtained from the PDF document itself. This root outline is not visible and serves merely as a container for the visible outlines.

## Topics

### Initializing an Outline

- [init()](pdfoutline/init%28%29.md): Initializes a `PDFOutline` object.

### Getting Information About an Outline

- [document](pdfoutline/document.md): Returns the document with which the outline is associated.
- [numberOfChildren](pdfoutline/numberofchildren.md): Returns the number of child outline objects in the outline.
- [parent](pdfoutline/parent.md): Returns the parent outline object of the outline (returns `NULL` if called on the root outline object).
- [child(at:)](pdfoutline/child%28at_%29.md): Returns the child outline object at the specified index.
- [index](pdfoutline/index.md): Returns the index of the outline.

### Managing Outline Labels

- [label](pdfoutline/label.md): Returns the label for the outline.

### Managing Actions and Destinations

- [destination](pdfoutline/destination.md): Returns the destination associated with the outline.
- [action](pdfoutline/action.md): Returns the action performed when users click the outline.

### Changing an Outline Hierarchy

- [insertChild(\_:at:)](pdfoutline/insertchild%28__at_%29.md): Inserts the specified outline object at the specified index.
- [removeFromParent()](pdfoutline/removefromparent%28%29.md): Removes the outline object from its parent (does nothing if outline object is the root outline object).

### Managing the Disclosure of an Outline Object

- [isOpen](pdfoutline/isopen.md): Returns a Boolean value that indicates whether the outline object is initially disclosed.

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

## See Also

### Content Model

- [PDFDocument](pdfdocument.md): An object that represents PDF data or a PDF file and defines methods for writing, searching, and selecting PDF data.
- [PDFPage](pdfpage.md): `PDFPage`, a subclass of `NSObject`, defines methods used to render PDF pages and work with annotations, text, and selections.
- [PDFSelection](pdfselection.md): A `PDFSelection` object identifies a contiguous or noncontiguous selection of text in a PDF document.

# PDFOutline (Objective-C)

**Framework:** PDFKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

A `PDFOutline` object is an element in a tree-structured hierarchy that can represent the structure of a PDF document.

## Declaration

```objectivec
@interface PDFOutline : NSObject
```

<a id="overview"></a>

## Overview

An outline is an optional component of a PDF document, useful for viewing the structure of the document and for navigating within it.

Outlines are created by the document’s author. If you represent a PDF document outline using outline objects, the root of the hierarchy is obtained from the PDF document itself. This root outline is not visible and serves merely as a container for the visible outlines.

## Topics

### Initializing an Outline

- [init](pdfoutline/init%28%29.md): Initializes a `PDFOutline` object.

### Getting Information About an Outline

- [document](pdfoutline/document.md): Returns the document with which the outline is associated.
- [numberOfChildren](pdfoutline/numberofchildren.md): Returns the number of child outline objects in the outline.
- [parent](pdfoutline/parent.md): Returns the parent outline object of the outline (returns `NULL` if called on the root outline object).
- [childAtIndex:](pdfoutline/child%28at_%29.md): Returns the child outline object at the specified index.
- [index](pdfoutline/index.md): Returns the index of the outline.

### Managing Outline Labels

- [label](pdfoutline/label.md): Returns the label for the outline.

### Managing Actions and Destinations

- [destination](pdfoutline/destination.md): Returns the destination associated with the outline.
- [action](pdfoutline/action.md): Returns the action performed when users click the outline.

### Changing an Outline Hierarchy

- [insertChild:atIndex:](pdfoutline/insertchild%28__at_%29.md): Inserts the specified outline object at the specified index.
- [removeFromParent](pdfoutline/removefromparent%28%29.md): Removes the outline object from its parent (does nothing if outline object is the root outline object).

### Managing the Disclosure of an Outline Object

- [isOpen](pdfoutline/isopen.md): Returns a Boolean value that indicates whether the outline object is initially disclosed.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Content Model

- [PDFDocument](pdfdocument.md): An object that represents PDF data or a PDF file and defines methods for writing, searching, and selecting PDF data.
- [PDFPage](pdfpage.md): `PDFPage`, a subclass of `NSObject`, defines methods used to render PDF pages and work with annotations, text, and selections.
- [PDFSelection](pdfselection.md): A `PDFSelection` object identifies a contiguous or noncontiguous selection of text in a PDF document.
