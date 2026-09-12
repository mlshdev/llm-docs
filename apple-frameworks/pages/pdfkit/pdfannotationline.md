> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfannotationline](https://developer.apple.com/documentation/pdfkit/pdfannotationline)

# PDFAnnotationLine (Swift)

**Framework:** PDFKit  
**Kind:** Class  
**Availability:** macOS 10.4+ (deprecated in 10.12)

A `PDFAnnotationLine` object displays a single line on a page.

> Use [PDFAnnotationSubtype](pdfannotationsubtype.md) instead.

## Declaration

```swift
class PDFAnnotationLine
```

<a id="overview"></a>

## Overview

The [lineWidth](pdfborder/linewidth.md) and [style](pdfborder/style.md) properties of the annotation’s associated `PDFBorder` object determines the stroke thickness and style. The [color](pdfannotation/color.md) property of the `PDFAnnotation` class determines the stroke color.

## Topics

### Specifying the Starting and Ending Points

- [startPoint()](pdfannotationline/startpoint%28%29.md): Deprecated. Returns the starting point for the line.
- [setStart(\_:)](pdfannotationline/setstart%28__%29-86is0.md): Deprecated. Sets the starting point for the line.
- [endPoint()](pdfannotationline/endpoint%28%29.md): Deprecated. Returns the ending point for the line in page space.
- [setEnd(\_:)](pdfannotationline/setend%28__%29-2qn58.md): Deprecated. Sets the ending point for the line.

### Specifying the Line Ending Styles

- [startLineStyle()](pdfannotationline/startlinestyle%28%29.md): Deprecated. Returns the line ending style for the starting point of the line.
- [setStart(\_:)](pdfannotationline/setstart%28__%29-57pe0.md): Deprecated. Sets the line ending style for the starting point of the line.
- [endLineStyle()](pdfannotationline/endlinestyle%28%29.md): Deprecated. Returns the line ending style for the ending point of the line.
- [setEnd(\_:)](pdfannotationline/setend%28__%29-9cp0t.md): Deprecated. Sets the line ending style for the ending point of the line.

### Specifying the Color of Line-end Ornaments

- [interiorColor()](pdfannotationline/interiorcolor%28%29.md): Deprecated. Returns the color used to fill the ornament at the ends of the line.
- [setInteriorColor(\_:)](pdfannotationline/setinteriorcolor%28__%29.md): Deprecated. Sets the color used to fill the ornament at the ends of the line.

### Constants

- [PDFLineStyle](pdflinestyle.md): The following constants specify the available line ending styles.

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
- [PDFAnnotationLink](pdfannotationlink.md): Deprecated.
- [PDFAnnotationMarkup](pdfannotationmarkup.md): Deprecated. A `PDFAnnotationMarkup` object appears as highlighting, underlining, or a strikethrough style applied to the text of a document.
- [PDFAnnotationPopup](pdfannotationpopup.md): Deprecated. A `PDFAnnotationPopup` object provides user interactivity on a PDF page in the form of a pop-up menu.
- [PDFAnnotationSquare](pdfannotationsquare.md): Deprecated. A rectangle annotation on a page.
- [PDFAnnotationStamp](pdfannotationstamp.md): Deprecated. A `PDFAnnotationStamp` object allows you to display a word or phrase, such as “Confidential,” in a PDF page.
- [PDFAnnotationText](pdfannotationtext.md): Deprecated. A `PDFAnnotationText` object displays as an icon (such as a “sticky note”) attached to a specified point in the PDF document.
- [PDFAnnotationTextWidget](pdfannotationtextwidget.md): Deprecated. A `PDFAnnotationTextWidget` object allows you to manage the appearance and content of text fields.

# PDFAnnotationLine (Objective-C)

**Framework:** PDFKit  
**Kind:** Class  
**Availability:** macOS 10.4+ (deprecated in 10.12)

A `PDFAnnotationLine` object displays a single line on a page.

> Use [PDFAnnotationSubtype](pdfannotationsubtype.md) instead.

## Declaration

```objectivec
@interface PDFAnnotationLine : PDFAnnotation
```

<a id="overview"></a>

## Overview

The [lineWidth](pdfborder/linewidth.md) and [style](pdfborder/style.md) properties of the annotation’s associated `PDFBorder` object determines the stroke thickness and style. The [color](pdfannotation/color.md) property of the `PDFAnnotation` class determines the stroke color.

## Topics

### Specifying the Starting and Ending Points

- [startPoint](pdfannotationline/startpoint%28%29.md): Deprecated. Returns the starting point for the line.
- [setStartPoint:](pdfannotationline/setstart%28__%29-86is0.md): Deprecated. Sets the starting point for the line.
- [endPoint](pdfannotationline/endpoint%28%29.md): Deprecated. Returns the ending point for the line in page space.
- [setEndPoint:](pdfannotationline/setend%28__%29-2qn58.md): Deprecated. Sets the ending point for the line.

### Specifying the Line Ending Styles

- [startLineStyle](pdfannotationline/startlinestyle%28%29.md): Deprecated. Returns the line ending style for the starting point of the line.
- [setStartLineStyle:](pdfannotationline/setstart%28__%29-57pe0.md): Deprecated. Sets the line ending style for the starting point of the line.
- [endLineStyle](pdfannotationline/endlinestyle%28%29.md): Deprecated. Returns the line ending style for the ending point of the line.
- [setEndLineStyle:](pdfannotationline/setend%28__%29-9cp0t.md): Deprecated. Sets the line ending style for the ending point of the line.

### Specifying the Color of Line-end Ornaments

- [interiorColor](pdfannotationline/interiorcolor%28%29.md): Deprecated. Returns the color used to fill the ornament at the ends of the line.
- [setInteriorColor:](pdfannotationline/setinteriorcolor%28__%29.md): Deprecated. Sets the color used to fill the ornament at the ends of the line.

### Constants

- [PDFLineStyle](pdflinestyle.md): The following constants specify the available line ending styles.

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
- [PDFAnnotationLink](pdfannotationlink.md): Deprecated.
- [PDFAnnotationMarkup](pdfannotationmarkup.md): Deprecated. A `PDFAnnotationMarkup` object appears as highlighting, underlining, or a strikethrough style applied to the text of a document.
- [PDFAnnotationPopup](pdfannotationpopup.md): Deprecated. A `PDFAnnotationPopup` object provides user interactivity on a PDF page in the form of a pop-up menu.
- [PDFAnnotationSquare](pdfannotationsquare.md): Deprecated. A rectangle annotation on a page.
- [PDFAnnotationStamp](pdfannotationstamp.md): Deprecated. A `PDFAnnotationStamp` object allows you to display a word or phrase, such as “Confidential,” in a PDF page.
- [PDFAnnotationText](pdfannotationtext.md): Deprecated. A `PDFAnnotationText` object displays as an icon (such as a “sticky note”) attached to a specified point in the PDF document.
- [PDFAnnotationTextWidget](pdfannotationtextwidget.md): Deprecated. A `PDFAnnotationTextWidget` object allows you to manage the appearance and content of text fields.
