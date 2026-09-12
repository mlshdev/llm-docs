> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfannotationchoicewidget](https://developer.apple.com/documentation/pdfkit/pdfannotationchoicewidget)

# PDFAnnotationChoiceWidget (Swift)

**Framework:** PDFKit  
**Kind:** Class  
**Availability:** macOS 10.4+ (deprecated in 10.12)

A `PDFAnnotationChoiceWidget` object provides user interactivity on a page of a PDF document, in the form of pop-up menus and lists.

> Use [PDFAnnotationSubtype](pdfannotationsubtype.md) instead.

## Declaration

```swift
class PDFAnnotationChoiceWidget
```

<a id="overview"></a>

## Overview

`PDFAnnotationChoiceWidget` inherits general annotation behavior from the `PDFAnnotation` class. If you use a `PDFAnnotationChoiceWidget` object, your application must handle hit testing, unless you are simply using `PDFView` to display content. This is because `PDFView` automatically handles hit testing for you.

## Topics

### Getting and Setting the String Value

- [stringValue()](pdfannotationchoicewidget/stringvalue%28%29.md): Deprecated. Returns the selection in the widget annotation.
- [setStringValue(\_:)](pdfannotationchoicewidget/setstringvalue%28__%29.md): Deprecated. Sets the selection in the widget annotation.

### Managing Font and Background Color Characteristics

- [backgroundColor()](pdfannotationchoicewidget/backgroundcolor%28%29.md): Deprecated. Returns the color of the widget annotation background.
- [setBackgroundColor(\_:)](pdfannotationchoicewidget/setbackgroundcolor%28__%29.md): Deprecated. Sets the background color of the widget annotation.
- [font()](pdfannotationchoicewidget/font%28%29.md): Deprecated. Returns the font used to display the text in the widget annotation.
- [setFont(\_:)](pdfannotationchoicewidget/setfont%28__%29.md): Deprecated. Sets the font used to display the text in the widget annotation.
- [fontColor()](pdfannotationchoicewidget/fontcolor%28%29.md): Deprecated. Returns the font color used to display the text in the widget annotation.
- [setFontColor(\_:)](pdfannotationchoicewidget/setfontcolor%28__%29.md): Deprecated. Sets the font color used to display the text in the widget annotation.

### Managing the Associated Field Name

- [fieldName()](pdfannotationchoicewidget/fieldname%28%29.md): Deprecated. Returns the internal field name associated with the widget annotation.
- [setFieldName(\_:)](pdfannotationchoicewidget/setfieldname%28__%29.md): Deprecated. Sets the internal field name associated with the widget annotation’s value.

### Determining the Type of Choice Widget Annotation

- [isListChoice()](pdfannotationchoicewidget/islistchoice%28%29.md): Deprecated. Returns a Boolean value indicating whether the widget annotation is a list.
- [setIsListChoice(\_:)](pdfannotationchoicewidget/setislistchoice%28__%29.md): Deprecated. Sets whether the widget annotation is a list.

### Accessing the Items in the Choice Widget Annotation

- [choices()](pdfannotationchoicewidget/choices%28%29.md): Deprecated. Returns an array of strings that represent the items available in the list or pop-up menu of the choice widget annotation.
- [setChoices(\_:)](pdfannotationchoicewidget/setchoices%28__%29.md): Deprecated. Sets the items available in the list or pop-up menu of the choice widget annotation.

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
- [PDFAnnotationTextWidget](pdfannotationtextwidget.md): Deprecated. A `PDFAnnotationTextWidget` object allows you to manage the appearance and content of text fields.

# PDFAnnotationChoiceWidget (Objective-C)

**Framework:** PDFKit  
**Kind:** Class  
**Availability:** macOS 10.4+ (deprecated in 10.12)

A `PDFAnnotationChoiceWidget` object provides user interactivity on a page of a PDF document, in the form of pop-up menus and lists.

> Use [PDFAnnotationSubtype](pdfannotationsubtype.md) instead.

## Declaration

```objectivec
@interface PDFAnnotationChoiceWidget : PDFAnnotation
```

<a id="overview"></a>

## Overview

`PDFAnnotationChoiceWidget` inherits general annotation behavior from the `PDFAnnotation` class. If you use a `PDFAnnotationChoiceWidget` object, your application must handle hit testing, unless you are simply using `PDFView` to display content. This is because `PDFView` automatically handles hit testing for you.

## Topics

### Getting and Setting the String Value

- [stringValue](pdfannotationchoicewidget/stringvalue%28%29.md): Deprecated. Returns the selection in the widget annotation.
- [setStringValue:](pdfannotationchoicewidget/setstringvalue%28__%29.md): Deprecated. Sets the selection in the widget annotation.

### Managing Font and Background Color Characteristics

- [backgroundColor](pdfannotationchoicewidget/backgroundcolor%28%29.md): Deprecated. Returns the color of the widget annotation background.
- [setBackgroundColor:](pdfannotationchoicewidget/setbackgroundcolor%28__%29.md): Deprecated. Sets the background color of the widget annotation.
- [font](pdfannotationchoicewidget/font%28%29.md): Deprecated. Returns the font used to display the text in the widget annotation.
- [setFont:](pdfannotationchoicewidget/setfont%28__%29.md): Deprecated. Sets the font used to display the text in the widget annotation.
- [fontColor](pdfannotationchoicewidget/fontcolor%28%29.md): Deprecated. Returns the font color used to display the text in the widget annotation.
- [setFontColor:](pdfannotationchoicewidget/setfontcolor%28__%29.md): Deprecated. Sets the font color used to display the text in the widget annotation.

### Managing the Associated Field Name

- [fieldName](pdfannotationchoicewidget/fieldname%28%29.md): Deprecated. Returns the internal field name associated with the widget annotation.
- [setFieldName:](pdfannotationchoicewidget/setfieldname%28__%29.md): Deprecated. Sets the internal field name associated with the widget annotation’s value.

### Determining the Type of Choice Widget Annotation

- [isListChoice](pdfannotationchoicewidget/islistchoice%28%29.md): Deprecated. Returns a Boolean value indicating whether the widget annotation is a list.
- [setIsListChoice:](pdfannotationchoicewidget/setislistchoice%28__%29.md): Deprecated. Sets whether the widget annotation is a list.

### Accessing the Items in the Choice Widget Annotation

- [choices](pdfannotationchoicewidget/choices%28%29.md): Deprecated. Returns an array of strings that represent the items available in the list or pop-up menu of the choice widget annotation.
- [setChoices:](pdfannotationchoicewidget/setchoices%28__%29.md): Deprecated. Sets the items available in the list or pop-up menu of the choice widget annotation.

## Relationships

### Inherits From

- [PDFAnnotation](pdfannotation.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Deprecated Annotation Types

- [PDFAnnotationButtonWidget](pdfannotationbuttonwidget.md): Deprecated. A `PDFAnnotationButtonWidget` object provides user interactivity on a page of a PDF document. There are three types of buttons available: push button, radio button, and checkbox.
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
- [PDFAnnotationTextWidget](pdfannotationtextwidget.md): Deprecated. A `PDFAnnotationTextWidget` object allows you to manage the appearance and content of text fields.
