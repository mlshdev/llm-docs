> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfannotationtextwidget](https://developer.apple.com/documentation/pdfkit/pdfannotationtextwidget)

# PDFAnnotationTextWidget (Swift)

**Framework:** PDFKit  
**Kind:** Class  
**Availability:** macOS 10.4+ (deprecated in 10.12)

A `PDFAnnotationTextWidget` object allows you to manage the appearance and content of text fields.

> Use [PDFAnnotationSubtype](pdfannotationsubtype.md) instead.

## Declaration

```swift
class PDFAnnotationTextWidget
```

<a id="overview"></a>

## Overview

`PDFAnnotationTextWidget` objects support interactive forms in a PDF document. This object is comparable to an editable `NSTextField` in Cocoa or an edit text view in Carbon.

## Topics

### Working with Annotation Strings

- [stringValue()](pdfannotationtextwidget/stringvalue%28%29.md): Deprecated. Returns the string assigned to the annotation.
- [setStringValue(\_:)](pdfannotationtextwidget/setstringvalue%28__%29.md): Deprecated. Sets the string for the annotation.
- [maximumLength()](pdfannotationtextwidget/maximumlength%28%29.md): Deprecated. Returns the maximum number of characters allowed in the annotation string.
- [setMaximumLength(\_:)](pdfannotationtextwidget/setmaximumlength%28__%29.md): Deprecated. Sets the maximum number of characters allowed in the annotation string.

### Managing the Font and Font Color

- [font()](pdfannotationtextwidget/font%28%29.md): Deprecated. Returns the font used for the annotation’s text field.
- [setFont(\_:)](pdfannotationtextwidget/setfont%28__%29.md): Deprecated. Sets the font used in the text field of the annotation.
- [fontColor()](pdfannotationtextwidget/fontcolor%28%29.md): Deprecated. Returns the font color used for the annotation’s text field.
- [setFontColor(\_:)](pdfannotationtextwidget/setfontcolor%28__%29.md): Deprecated. Sets the font color used for the annotation’s text field.

### Managing Background Color, Alignment, and Rotation

- [backgroundColor()](pdfannotationtextwidget/backgroundcolor%28%29.md): Deprecated. Returns the background color of the annotation text field.
- [setBackgroundColor(\_:)](pdfannotationtextwidget/setbackgroundcolor%28__%29.md): Deprecated. Sets the background color of the annotation text field.
- [alignment()](pdfannotationtextwidget/alignment%28%29.md): Deprecated. Returns the text alignment setting for the annotation.
- [setAlignment(\_:)](pdfannotationtextwidget/setalignment%28__%29.md): Deprecated. Sets the text alignment for the annotation.
- [rotation()](pdfannotationtextwidget/rotation%28%29.md): Deprecated. Returns the rotation angle of the annotation text field in degrees.
- [setRotation(\_:)](pdfannotationtextwidget/setrotation%28__%29.md): Deprecated. Sets the rotation angle of the annotation text field in degrees.

### Working with Field Names

- [fieldName()](pdfannotationtextwidget/fieldname%28%29.md): Deprecated. Returns the internal name for the annotation text field.
- [setFieldName(\_:)](pdfannotationtextwidget/setfieldname%28__%29.md): Deprecated. Sets the internal field name for the annotation text field.

### Instance Methods

- [attributedStringValue()](pdfannotationtextwidget/attributedstringvalue%28%29.md): Deprecated.
- [isMultiline()](pdfannotationtextwidget/ismultiline%28%29.md): Deprecated.
- [setAttributedStringValue(\_:)](pdfannotationtextwidget/setattributedstringvalue%28__%29.md): Deprecated.
- [setIsMultiline(\_:)](pdfannotationtextwidget/setismultiline%28__%29.md): Deprecated.

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
- [PDFAnnotationText](pdfannotationtext.md): Deprecated. A `PDFAnnotationText` object displays as an icon (such as a “sticky note”) attached to a specified point in the PDF document.

# PDFAnnotationTextWidget (Objective-C)

**Framework:** PDFKit  
**Kind:** Class  
**Availability:** macOS 10.4+ (deprecated in 10.12)

A `PDFAnnotationTextWidget` object allows you to manage the appearance and content of text fields.

> Use [PDFAnnotationSubtype](pdfannotationsubtype.md) instead.

## Declaration

```objectivec
@interface PDFAnnotationTextWidget : PDFAnnotation
```

<a id="overview"></a>

## Overview

`PDFAnnotationTextWidget` objects support interactive forms in a PDF document. This object is comparable to an editable `NSTextField` in Cocoa or an edit text view in Carbon.

## Topics

### Working with Annotation Strings

- [stringValue](pdfannotationtextwidget/stringvalue%28%29.md): Deprecated. Returns the string assigned to the annotation.
- [setStringValue:](pdfannotationtextwidget/setstringvalue%28__%29.md): Deprecated. Sets the string for the annotation.
- [maximumLength](pdfannotationtextwidget/maximumlength%28%29.md): Deprecated. Returns the maximum number of characters allowed in the annotation string.
- [setMaximumLength:](pdfannotationtextwidget/setmaximumlength%28__%29.md): Deprecated. Sets the maximum number of characters allowed in the annotation string.

### Managing the Font and Font Color

- [font](pdfannotationtextwidget/font%28%29.md): Deprecated. Returns the font used for the annotation’s text field.
- [setFont:](pdfannotationtextwidget/setfont%28__%29.md): Deprecated. Sets the font used in the text field of the annotation.
- [fontColor](pdfannotationtextwidget/fontcolor%28%29.md): Deprecated. Returns the font color used for the annotation’s text field.
- [setFontColor:](pdfannotationtextwidget/setfontcolor%28__%29.md): Deprecated. Sets the font color used for the annotation’s text field.

### Managing Background Color, Alignment, and Rotation

- [backgroundColor](pdfannotationtextwidget/backgroundcolor%28%29.md): Deprecated. Returns the background color of the annotation text field.
- [setBackgroundColor:](pdfannotationtextwidget/setbackgroundcolor%28__%29.md): Deprecated. Sets the background color of the annotation text field.
- [alignment](pdfannotationtextwidget/alignment%28%29.md): Deprecated. Returns the text alignment setting for the annotation.
- [setAlignment:](pdfannotationtextwidget/setalignment%28__%29.md): Deprecated. Sets the text alignment for the annotation.
- [rotation](pdfannotationtextwidget/rotation%28%29.md): Deprecated. Returns the rotation angle of the annotation text field in degrees.
- [setRotation:](pdfannotationtextwidget/setrotation%28__%29.md): Deprecated. Sets the rotation angle of the annotation text field in degrees.

### Working with Field Names

- [fieldName](pdfannotationtextwidget/fieldname%28%29.md): Deprecated. Returns the internal name for the annotation text field.
- [setFieldName:](pdfannotationtextwidget/setfieldname%28__%29.md): Deprecated. Sets the internal field name for the annotation text field.

### Instance Methods

- [attributedStringValue](pdfannotationtextwidget/attributedstringvalue%28%29.md): Deprecated.
- [isMultiline](pdfannotationtextwidget/ismultiline%28%29.md): Deprecated.
- [setAttributedStringValue:](pdfannotationtextwidget/setattributedstringvalue%28__%29.md): Deprecated.
- [setIsMultiline:](pdfannotationtextwidget/setismultiline%28__%29.md): Deprecated.

## Relationships

### Inherits From

- [PDFAnnotation](pdfannotation.md)

### Conforms To

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
- [PDFAnnotationText](pdfannotationtext.md): Deprecated. A `PDFAnnotationText` object displays as an icon (such as a “sticky note”) attached to a specified point in the PDF document.
