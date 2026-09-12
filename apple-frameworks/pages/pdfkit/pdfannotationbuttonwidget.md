> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfannotationbuttonwidget](https://developer.apple.com/documentation/pdfkit/pdfannotationbuttonwidget)

# PDFAnnotationButtonWidget (Swift)

**Framework:** PDFKit  
**Kind:** Class  
**Availability:** macOS 10.4+ (deprecated in 10.12)

A `PDFAnnotationButtonWidget` object provides user interactivity on a page of a PDF document. There are three types of buttons available: push button, radio button, and checkbox.

> Use [PDFAnnotationSubtype](pdfannotationsubtype.md) instead.

## Declaration

```swift
class PDFAnnotationButtonWidget
```

<a id="overview"></a>

## Overview

`PDFAnnotationButtonWidget` inherits general annotation behavior from the `PDFAnnotation` class. If you use a `PDFAnnotationButtonWidget` object, your application must handle hit testing, unless you are simply using `PDFView` to display content. This is because `PDFView` automatically handles hit testing for you.

## Topics

### Getting and Setting the Control Type

- [controlType()](pdfannotationbuttonwidget/controltype%28%29.md): Deprecated. Returns the type of the control.
- [setControlType(\_:)](pdfannotationbuttonwidget/setcontroltype%28__%29.md): Deprecated. Sets the type of the control.

### Getting and Setting the Control’s State

- [state()](pdfannotationbuttonwidget/state%28%29.md): Deprecated. Returns the state of the control.
- [setState(\_:)](pdfannotationbuttonwidget/setstate%28__%29.md): Deprecated. Sets the state of the control.

### Getting and Setting the Control’s Appearance

- [backgroundColor()](pdfannotationbuttonwidget/backgroundcolor%28%29.md): Deprecated. Returns the background color of the control.
- [setBackgroundColor(\_:)](pdfannotationbuttonwidget/setbackgroundcolor%28__%29.md): Deprecated. Sets the control’s background color.

### Getting and Setting the Control Label Font Attributes

- [font()](pdfannotationbuttonwidget/font%28%29.md): Deprecated. Returns the font used in the control’s label.
- [setFont(\_:)](pdfannotationbuttonwidget/setfont%28__%29.md): Deprecated. Sets the font of the control’s label.
- [fontColor()](pdfannotationbuttonwidget/fontcolor%28%29.md): Deprecated. Returns the font color used in the control’s label.
- [setFontColor(\_:)](pdfannotationbuttonwidget/setfontcolor%28__%29.md): Deprecated. Sets the font color used in the control’s label.

### Getting and Setting the Control Label Text

- [caption()](pdfannotationbuttonwidget/caption%28%29.md): Deprecated. Returns the text of the label on a push button control.
- [setCaption(\_:)](pdfannotationbuttonwidget/setcaption%28__%29.md): Deprecated. Sets the text of the label on a push button control.

### Managing Radio Button Behavior

- [allowsToggleToOff()](pdfannotationbuttonwidget/allowstoggletooff%28%29.md): Deprecated. Returns a Boolean value indicating whether a radio button behaves in a toggling manner.

### Managing Control State Values and Form Fields

- [onStateValue()](pdfannotationbuttonwidget/onstatevalue%28%29.md): Deprecated. Returns the string associated with the on state of a radio button or checkbox control.
- [setOnStateValue(\_:)](pdfannotationbuttonwidget/setonstatevalue%28__%29.md): Deprecated. Sets the string that is associated with the on state of a radio button or checkbox control.
- [fieldName()](pdfannotationbuttonwidget/fieldname%28%29.md): Deprecated. Returns the internal name of a field (used for reset-form actions).
- [setFieldName(\_:)](pdfannotationbuttonwidget/setfieldname%28__%29.md): Deprecated. Sets the internal name of a field (used for reset-form actions).

### Constants

- [PDFWidgetControlType](pdfwidgetcontroltype.md): The types of annotation buttons.

### Instance Methods

- [setAllowsToggleToOff(\_:)](pdfannotationbuttonwidget/setallowstoggletooff%28__%29.md): Deprecated.

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
- [PDFAnnotationTextWidget](pdfannotationtextwidget.md): Deprecated. A `PDFAnnotationTextWidget` object allows you to manage the appearance and content of text fields.

# PDFAnnotationButtonWidget (Objective-C)

**Framework:** PDFKit  
**Kind:** Class  
**Availability:** macOS 10.4+ (deprecated in 10.12)

A `PDFAnnotationButtonWidget` object provides user interactivity on a page of a PDF document. There are three types of buttons available: push button, radio button, and checkbox.

> Use [PDFAnnotationSubtype](pdfannotationsubtype.md) instead.

## Declaration

```objectivec
@interface PDFAnnotationButtonWidget : PDFAnnotation
```

<a id="overview"></a>

## Overview

`PDFAnnotationButtonWidget` inherits general annotation behavior from the `PDFAnnotation` class. If you use a `PDFAnnotationButtonWidget` object, your application must handle hit testing, unless you are simply using `PDFView` to display content. This is because `PDFView` automatically handles hit testing for you.

## Topics

### Getting and Setting the Control Type

- [controlType](pdfannotationbuttonwidget/controltype%28%29.md): Deprecated. Returns the type of the control.
- [setControlType:](pdfannotationbuttonwidget/setcontroltype%28__%29.md): Deprecated. Sets the type of the control.

### Getting and Setting the Control’s State

- [state](pdfannotationbuttonwidget/state%28%29.md): Deprecated. Returns the state of the control.
- [setState:](pdfannotationbuttonwidget/setstate%28__%29.md): Deprecated. Sets the state of the control.

### Getting and Setting the Control’s Appearance

- [backgroundColor](pdfannotationbuttonwidget/backgroundcolor%28%29.md): Deprecated. Returns the background color of the control.
- [setBackgroundColor:](pdfannotationbuttonwidget/setbackgroundcolor%28__%29.md): Deprecated. Sets the control’s background color.

### Getting and Setting the Control Label Font Attributes

- [font](pdfannotationbuttonwidget/font%28%29.md): Deprecated. Returns the font used in the control’s label.
- [setFont:](pdfannotationbuttonwidget/setfont%28__%29.md): Deprecated. Sets the font of the control’s label.
- [fontColor](pdfannotationbuttonwidget/fontcolor%28%29.md): Deprecated. Returns the font color used in the control’s label.
- [setFontColor:](pdfannotationbuttonwidget/setfontcolor%28__%29.md): Deprecated. Sets the font color used in the control’s label.

### Getting and Setting the Control Label Text

- [caption](pdfannotationbuttonwidget/caption%28%29.md): Deprecated. Returns the text of the label on a push button control.
- [setCaption:](pdfannotationbuttonwidget/setcaption%28__%29.md): Deprecated. Sets the text of the label on a push button control.

### Managing Radio Button Behavior

- [allowsToggleToOff](pdfannotationbuttonwidget/allowstoggletooff%28%29.md): Deprecated. Returns a Boolean value indicating whether a radio button behaves in a toggling manner.

### Managing Control State Values and Form Fields

- [onStateValue](pdfannotationbuttonwidget/onstatevalue%28%29.md): Deprecated. Returns the string associated with the on state of a radio button or checkbox control.
- [setOnStateValue:](pdfannotationbuttonwidget/setonstatevalue%28__%29.md): Deprecated. Sets the string that is associated with the on state of a radio button or checkbox control.
- [fieldName](pdfannotationbuttonwidget/fieldname%28%29.md): Deprecated. Returns the internal name of a field (used for reset-form actions).
- [setFieldName:](pdfannotationbuttonwidget/setfieldname%28__%29.md): Deprecated. Sets the internal name of a field (used for reset-form actions).

### Constants

- [PDFWidgetControlType](pdfwidgetcontroltype.md): The types of annotation buttons.

### Instance Methods

- [setAllowsToggleToOff:](pdfannotationbuttonwidget/setallowstoggletooff%28__%29.md): Deprecated.

## Relationships

### Inherits From

- [PDFAnnotation](pdfannotation.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Deprecated Annotation Types

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
- [PDFAnnotationTextWidget](pdfannotationtextwidget.md): Deprecated. A `PDFAnnotationTextWidget` object allows you to manage the appearance and content of text fields.
