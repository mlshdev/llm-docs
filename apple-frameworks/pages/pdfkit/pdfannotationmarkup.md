> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfannotationmarkup](https://developer.apple.com/documentation/pdfkit/pdfannotationmarkup)

# PDFAnnotationMarkup (Swift)

**Framework:** PDFKit  
**Kind:** Class  
**Availability:** macOS 10.4+ (deprecated in 10.12)

A `PDFAnnotationMarkup` object appears as highlighting, underlining, or a strikethrough style applied to the text of a document.

> Use [PDFAnnotationSubtype](pdfannotationsubtype.md) instead.

## Declaration

```swift
class PDFAnnotationMarkup
```

<a id="overview"></a>

## Overview

The [lineWidth](pdfborder/linewidth.md) and [style](pdfborder/style.md) properties of the annotation’s associated `PDFBorder` object determines the stroke thickness and style. The [color](pdfannotation/color.md) property of the `PDFAnnotation` class determines the stroke color.

## Topics

### Working with Markup Boundaries

- [quadrilateralPoints()](pdfannotationmarkup/quadrilateralpoints%28%29.md): Deprecated. Gets the array of quadrilateral points defining the bounds of the markup.
- [setQuadrilateralPoints(\_:)](pdfannotationmarkup/setquadrilateralpoints%28__%29.md): Deprecated. Sets the array of quadrilateral points defining the bounds of the markup.

### Working with Markup Style

- [markupType()](pdfannotationmarkup/markuptype%28%29.md): Deprecated. Gets the markup style.
- [setMarkupType(\_:)](pdfannotationmarkup/setmarkuptype%28__%29.md): Deprecated. Sets the markup style.

### Constants

- [PDFMarkupType](pdfmarkuptype.md): The styles available for markup annotations in PDFKit.

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
- [PDFAnnotationInk](pdfannotationink.md): Deprecated.
- [PDFAnnotationLine](pdfannotationline.md): Deprecated. A `PDFAnnotationLine` object displays a single line on a page.
- [PDFAnnotationLink](pdfannotationlink.md): Deprecated.
- [PDFAnnotationPopup](pdfannotationpopup.md): Deprecated. A `PDFAnnotationPopup` object provides user interactivity on a PDF page in the form of a pop-up menu.
- [PDFAnnotationSquare](pdfannotationsquare.md): Deprecated. A rectangle annotation on a page.
- [PDFAnnotationStamp](pdfannotationstamp.md): Deprecated. A `PDFAnnotationStamp` object allows you to display a word or phrase, such as “Confidential,” in a PDF page.
- [PDFAnnotationText](pdfannotationtext.md): Deprecated. A `PDFAnnotationText` object displays as an icon (such as a “sticky note”) attached to a specified point in the PDF document.
- [PDFAnnotationTextWidget](pdfannotationtextwidget.md): Deprecated. A `PDFAnnotationTextWidget` object allows you to manage the appearance and content of text fields.

# PDFAnnotationMarkup (Objective-C)

**Framework:** PDFKit  
**Kind:** Class  
**Availability:** macOS 10.4+ (deprecated in 10.12)

A `PDFAnnotationMarkup` object appears as highlighting, underlining, or a strikethrough style applied to the text of a document.

> Use [PDFAnnotationSubtype](pdfannotationsubtype.md) instead.

## Declaration

```objectivec
@interface PDFAnnotationMarkup : PDFAnnotation
```

<a id="overview"></a>

## Overview

The [lineWidth](pdfborder/linewidth.md) and [style](pdfborder/style.md) properties of the annotation’s associated `PDFBorder` object determines the stroke thickness and style. The [color](pdfannotation/color.md) property of the `PDFAnnotation` class determines the stroke color.

## Topics

### Working with Markup Boundaries

- [quadrilateralPoints](pdfannotationmarkup/quadrilateralpoints%28%29.md): Deprecated. Gets the array of quadrilateral points defining the bounds of the markup.
- [setQuadrilateralPoints:](pdfannotationmarkup/setquadrilateralpoints%28__%29.md): Deprecated. Sets the array of quadrilateral points defining the bounds of the markup.

### Working with Markup Style

- [markupType](pdfannotationmarkup/markuptype%28%29.md): Deprecated. Gets the markup style.
- [setMarkupType:](pdfannotationmarkup/setmarkuptype%28__%29.md): Deprecated. Sets the markup style.

### Constants

- [PDFMarkupType](pdfmarkuptype.md): The styles available for markup annotations in PDFKit.

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
- [PDFAnnotationInk](pdfannotationink.md): Deprecated.
- [PDFAnnotationLine](pdfannotationline.md): Deprecated. A `PDFAnnotationLine` object displays a single line on a page.
- [PDFAnnotationLink](pdfannotationlink.md): Deprecated.
- [PDFAnnotationPopup](pdfannotationpopup.md): Deprecated. A `PDFAnnotationPopup` object provides user interactivity on a PDF page in the form of a pop-up menu.
- [PDFAnnotationSquare](pdfannotationsquare.md): Deprecated. A rectangle annotation on a page.
- [PDFAnnotationStamp](pdfannotationstamp.md): Deprecated. A `PDFAnnotationStamp` object allows you to display a word or phrase, such as “Confidential,” in a PDF page.
- [PDFAnnotationText](pdfannotationtext.md): Deprecated. A `PDFAnnotationText` object displays as an icon (such as a “sticky note”) attached to a specified point in the PDF document.
- [PDFAnnotationTextWidget](pdfannotationtextwidget.md): Deprecated. A `PDFAnnotationTextWidget` object allows you to manage the appearance and content of text fields.
