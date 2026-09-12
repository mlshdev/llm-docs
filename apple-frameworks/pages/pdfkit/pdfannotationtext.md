> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfannotationtext](https://developer.apple.com/documentation/pdfkit/pdfannotationtext)

# PDFAnnotationText (Swift)

**Framework:** PDFKit  
**Kind:** Class  
**Availability:** macOS 10.4+ (deprecated in 10.12)

A `PDFAnnotationText` object displays as an icon (such as a “sticky note”) attached to a specified point in the PDF document.

> Use [PDFAnnotationSubtype](pdfannotationsubtype.md) instead.

## Declaration

```swift
class PDFAnnotationText
```

<a id="overview"></a>

## Overview

Each `PDFAnnotationText` object has a `PDFAnnotationPopup` object associated with it. In its closed state, the annotation appears as an icon. In its open state, it displays as a pop-up window containing the text of the note. Note that your application must do the work to put up a window containing the text in response to a [PDFViewAnnotationHitNotification](pdfviewannotationhitnotification.md). Currently, text annotations do not scale and rotate with the page.

## Topics

### Managing the Annotation Icon’s Type

- [iconType()](pdfannotationtext/icontype%28%29.md): Deprecated. Returns the icon type for the annotation.
- [setIconType(\_:)](pdfannotationtext/seticontype%28__%29.md): Deprecated. Sets the icon type for the annotation.

### Constants

- [PDFTextAnnotationIconType](pdftextannotationicontype.md): The types of icons that a text annotation can use.

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
- [PDFAnnotationMarkup](pdfannotationmarkup.md): Deprecated. A `PDFAnnotationMarkup` object appears as highlighting, underlining, or a strikethrough style applied to the text of a document.
- [PDFAnnotationPopup](pdfannotationpopup.md): Deprecated. A `PDFAnnotationPopup` object provides user interactivity on a PDF page in the form of a pop-up menu.
- [PDFAnnotationSquare](pdfannotationsquare.md): Deprecated. A rectangle annotation on a page.
- [PDFAnnotationStamp](pdfannotationstamp.md): Deprecated. A `PDFAnnotationStamp` object allows you to display a word or phrase, such as “Confidential,” in a PDF page.
- [PDFAnnotationTextWidget](pdfannotationtextwidget.md): Deprecated. A `PDFAnnotationTextWidget` object allows you to manage the appearance and content of text fields.

# PDFAnnotationText (Objective-C)

**Framework:** PDFKit  
**Kind:** Class  
**Availability:** macOS 10.4+ (deprecated in 10.12)

A `PDFAnnotationText` object displays as an icon (such as a “sticky note”) attached to a specified point in the PDF document.

> Use [PDFAnnotationSubtype](pdfannotationsubtype.md) instead.

## Declaration

```objectivec
@interface PDFAnnotationText : PDFAnnotation
```

<a id="overview"></a>

## Overview

Each `PDFAnnotationText` object has a `PDFAnnotationPopup` object associated with it. In its closed state, the annotation appears as an icon. In its open state, it displays as a pop-up window containing the text of the note. Note that your application must do the work to put up a window containing the text in response to a [PDFViewAnnotationHitNotification](pdfviewannotationhitnotification.md). Currently, text annotations do not scale and rotate with the page.

## Topics

### Managing the Annotation Icon’s Type

- [iconType](pdfannotationtext/icontype%28%29.md): Deprecated. Returns the icon type for the annotation.
- [setIconType:](pdfannotationtext/seticontype%28__%29.md): Deprecated. Sets the icon type for the annotation.

### Constants

- [PDFTextAnnotationIconType](pdftextannotationicontype.md): The types of icons that a text annotation can use.

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
- [PDFAnnotationMarkup](pdfannotationmarkup.md): Deprecated. A `PDFAnnotationMarkup` object appears as highlighting, underlining, or a strikethrough style applied to the text of a document.
- [PDFAnnotationPopup](pdfannotationpopup.md): Deprecated. A `PDFAnnotationPopup` object provides user interactivity on a PDF page in the form of a pop-up menu.
- [PDFAnnotationSquare](pdfannotationsquare.md): Deprecated. A rectangle annotation on a page.
- [PDFAnnotationStamp](pdfannotationstamp.md): Deprecated. A `PDFAnnotationStamp` object allows you to display a word or phrase, such as “Confidential,” in a PDF page.
- [PDFAnnotationTextWidget](pdfannotationtextwidget.md): Deprecated. A `PDFAnnotationTextWidget` object allows you to manage the appearance and content of text fields.
