> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfannotationink](https://developer.apple.com/documentation/pdfkit/pdfannotationink)

# PDFAnnotationInk (Swift)

**Framework:** PDFKit  
**Kind:** Class  
**Availability:** macOS 10.4+ (deprecated in 10.12)

> Use [PDFAnnotationSubtype](pdfannotationsubtype.md) instead.

## Declaration

```swift
class PDFAnnotationInk
```

<a id="Overview"></a>

## Overview

A `PDFAnnotationInk` object displays one or more disjoint Bezier paths on a page. This is typically used to represent a freehand jotting or “scribble” of handwritten text.

The [lineWidth](pdfborder/linewidth.md) and [style](pdfborder/style.md) properties of the annotation’s associated `PDFBorder` object determines the stroke thickness and style. The [color](pdfannotation/color.md) property of the `PDFAnnotation` class determines the stroke color.

## Topics

### Accessor methods

- [paths()](pdfannotationink/paths%28%29.md): Deprecated. Returns an array containing the Bezier paths that make up an annotation.

### Working with Bezier paths

- [add(\_:)](pdfannotationink/add%28__%29.md): Deprecated. Adds a Bezier path to an annotation.
- [remove(\_:)](pdfannotationink/remove%28__%29.md): Deprecated. Removes a Bezier path from an annotation.

## Relationships

### Inherits From

- [PDFAnnotation](pdfannotation.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Deprecated Annotation Types

- [PDFAnnotationButtonWidget](pdfannotationbuttonwidget.md): Deprecated. A `PDFAnnotationButtonWidget` object provides user interactivity on a page of a PDF document. There are three types of buttons available: push button, radio button, and checkbox.
- [PDFAnnotationChoiceWidget](pdfannotationchoicewidget.md): Deprecated. A `PDFAnnotationChoiceWidget` object provides user interactivity on a page of a PDF document, in the form of pop-up menus and lists.
- [PDFAnnotationCircle](pdfannotationcircle.md): Deprecated.
- [PDFAnnotationFreeText](pdfannotationfreetext.md): Deprecated. A `PDFAnnotationFreeText` object displays text on a page.
- [PDFAnnotationLine](pdfannotationline.md): Deprecated. A `PDFAnnotationLine` object displays a single line on a page.
- [PDFAnnotationLink](pdfannotationlink.md): Deprecated.
- [PDFAnnotationMarkup](pdfannotationmarkup.md): Deprecated. A `PDFAnnotationMarkup` object appears as highlighting, underlining, or a strikethrough style applied to the text of a document.
- [PDFAnnotationPopup](pdfannotationpopup.md): Deprecated. A `PDFAnnotationPopup` object provides user interactivity on a PDF page in the form of a pop-up menu.
- [PDFAnnotationSquare](pdfannotationsquare.md): Deprecated. A rectangle annotation on a page.
- [PDFAnnotationStamp](pdfannotationstamp.md): Deprecated. A `PDFAnnotationStamp` object allows you to display a word or phrase, such as “Confidential,” in a PDF page.
- [PDFAnnotationText](pdfannotationtext.md): Deprecated. A `PDFAnnotationText` object displays as an icon (such as a “sticky note”) attached to a specified point in the PDF document.
- [PDFAnnotationTextWidget](pdfannotationtextwidget.md): Deprecated. A `PDFAnnotationTextWidget` object allows you to manage the appearance and content of text fields.

# PDFAnnotationInk (Objective-C)

**Framework:** PDFKit  
**Kind:** Class  
**Availability:** macOS 10.4+ (deprecated in 10.12)

> Use [PDFAnnotationSubtype](pdfannotationsubtype.md) instead.

## Declaration

```objectivec
@interface PDFAnnotationInk : PDFAnnotation
```

<a id="Overview"></a>

## Overview

A `PDFAnnotationInk` object displays one or more disjoint Bezier paths on a page. This is typically used to represent a freehand jotting or “scribble” of handwritten text.

The [lineWidth](pdfborder/linewidth.md) and [style](pdfborder/style.md) properties of the annotation’s associated `PDFBorder` object determines the stroke thickness and style. The [color](pdfannotation/color.md) property of the `PDFAnnotation` class determines the stroke color.

## Topics

### Accessor methods

- [paths](pdfannotationink/paths%28%29.md): Deprecated. Returns an array containing the Bezier paths that make up an annotation.

### Working with Bezier paths

- [addBezierPath:](pdfannotationink/add%28__%29.md): Deprecated. Adds a Bezier path to an annotation.
- [removeBezierPath:](pdfannotationink/remove%28__%29.md): Deprecated. Removes a Bezier path from an annotation.

## Relationships

### Inherits From

- [PDFAnnotation](pdfannotation.md)

### Conforms To

- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)

## See Also

### Deprecated Annotation Types

- [PDFAnnotationButtonWidget](pdfannotationbuttonwidget.md): Deprecated. A `PDFAnnotationButtonWidget` object provides user interactivity on a page of a PDF document. There are three types of buttons available: push button, radio button, and checkbox.
- [PDFAnnotationChoiceWidget](pdfannotationchoicewidget.md): Deprecated. A `PDFAnnotationChoiceWidget` object provides user interactivity on a page of a PDF document, in the form of pop-up menus and lists.
- [PDFAnnotationCircle](pdfannotationcircle.md): Deprecated.
- [PDFAnnotationFreeText](pdfannotationfreetext.md): Deprecated. A `PDFAnnotationFreeText` object displays text on a page.
- [PDFAnnotationLine](pdfannotationline.md): Deprecated. A `PDFAnnotationLine` object displays a single line on a page.
- [PDFAnnotationLink](pdfannotationlink.md): Deprecated.
- [PDFAnnotationMarkup](pdfannotationmarkup.md): Deprecated. A `PDFAnnotationMarkup` object appears as highlighting, underlining, or a strikethrough style applied to the text of a document.
- [PDFAnnotationPopup](pdfannotationpopup.md): Deprecated. A `PDFAnnotationPopup` object provides user interactivity on a PDF page in the form of a pop-up menu.
- [PDFAnnotationSquare](pdfannotationsquare.md): Deprecated. A rectangle annotation on a page.
- [PDFAnnotationStamp](pdfannotationstamp.md): Deprecated. A `PDFAnnotationStamp` object allows you to display a word or phrase, such as “Confidential,” in a PDF page.
- [PDFAnnotationText](pdfannotationtext.md): Deprecated. A `PDFAnnotationText` object displays as an icon (such as a “sticky note”) attached to a specified point in the PDF document.
- [PDFAnnotationTextWidget](pdfannotationtextwidget.md): Deprecated. A `PDFAnnotationTextWidget` object allows you to manage the appearance and content of text fields.
