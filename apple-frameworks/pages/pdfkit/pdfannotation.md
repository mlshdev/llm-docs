> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfannotation](https://developer.apple.com/documentation/pdfkit/pdfannotation)

# PDFAnnotation (Swift)

**Framework:** PDFKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

An annotation in a PDF document.

## Declaration

```swift
class PDFAnnotation
```

## Mentioned In

- [Adding Custom Graphics to a PDF](adding-custom-graphics-to-a-pdf.md)
- [Adding Widgets to a PDF Document](adding-widgets-to-a-pdf-document.md)

<a id="overview"></a>

## Overview

In addition to its primary textual content, a PDF file can contain annotations that represent links, form elements, highlighting circles, textual notes, and so on. Each annotation has a specific location on a page and may offer interactivity with the user.

## Topics

### Creating an Annotation

- [init(bounds:forType:withProperties:)](pdfannotation/init%28bounds_fortype_withproperties_%29.md): Creates a PDF annotation with the specified bounds, type, and optional properties.
- [PDFAnnotationSubtype](pdfannotationsubtype.md): The type of annotation, such as circle, text, or ink.

### Accessing Information About an Annotation

- [page](pdfannotation/page.md): Returns the page that the annotation is associated with.
- [modificationDate](pdfannotation/modificationdate.md): Returns the modification date of the annotation.
- [userName](pdfannotation/username.md): Returns the name of the user who created the annotation.
- [type](pdfannotation/type.md): Returns the type of the annotation.
- [action](pdfannotation/action.md): An object that represents an action for a PDF element, such as a link annotation.
- [PDFAction](pdfaction.md): An action that is performed when, for example, a PDF annotation is activated or an outline item is clicked.
- [PDFDestination](pdfdestination.md): A `PDFDestination` object describes a point on a PDF page.

### Managing Annotation Drawing and Output

- [draw(with:in:)](pdfannotation/draw%28with_in_%29.md): Draws the annotation in a graphics context using page-space coordinates relative to the origin of the specified box.
- [shouldDisplay](pdfannotation/shoulddisplay.md): Returns a Boolean value indicating whether the annotation should be displayed.
- [shouldPrint](pdfannotation/shouldprint.md): Returns a Boolean value indicating whether the annotation should appear when the document is printed.

### Modifying Annotation Attributes

- [annotationKeyValues](pdfannotation/annotationkeyvalues.md): A dictionary that contains a deep copy of the widget’s properties.
- [value(forAnnotationKey:)](pdfannotation/value%28forannotationkey_%29.md): Returns a deep copy of the key-value pairs of properties for the specified key.
- [setValue(\_:forAnnotationKey:)](pdfannotation/setvalue%28__forannotationkey_%29.md): Sets a value in the annotation’s dictionary.
- [setBoolean(\_:forAnnotationKey:)](pdfannotation/setboolean%28__forannotationkey_%29.md): Sets a Boolean value in the annotation’s dictionary.
- [setRect(\_:forAnnotationKey:)](pdfannotation/setrect%28__forannotationkey_%29.md): Sets a rectangle value in the annotation’s dictionary.
- [removeValue(forAnnotationKey:)](pdfannotation/removevalue%28forannotationkey_%29.md): Removes a value from the annotation’s dictionary.
- [PDFAnnotationKey](pdfannotationkey.md): Keys for setting properties of annotations.

### Managing Annotation Display Characteristics

- [alignment](pdfannotation/alignment.md): The alignment of the free text and text widget annotation’s text content.
- [bounds](pdfannotation/bounds.md): Returns the bounding box for the annotation in page space.
- [contents](pdfannotation/contents.md): Returns the textual content (if any) associated with the annotation.
- [font](pdfannotation/font.md): The font the annotation uses to display text.
- [fontColor](pdfannotation/fontcolor.md): The font color the annotation uses to display text.
- [border](pdfannotation/border.md): Sets the border style for the annotation.
- [PDFBorder](pdfborder.md): An optional border for an annotation that lies completely within the annotation rectangle.
- [isHighlighted](pdfannotation/ishighlighted.md): A Boolean value that indicates whether the annotation is in a highlighted state, such as when the mouse is down on a link annotation.
- [color](pdfannotation/color.md): Sets the stroke color for the annotation.
- [hasAppearanceStream](pdfannotation/hasappearancestream.md): Returns a Boolean value that indicates whether the annotation has an appearance stream associated with it.

### Configuring Shape Annotations

- [interiorColor](pdfannotation/interiorcolor.md): The fill color for drawing a circle, line, or square annotation.

### Configuring Line Annotations

- [startPoint](pdfannotation/startpoint.md): The point where a line begins, in annotation-space coordinates.
- [endPoint](pdfannotation/endpoint.md): The point where a line ends, in annotation-space coordinates.
- [startLineStyle](pdfannotation/startlinestyle.md): The style of the line annotation’s starting point, such as square or filled arrowhead.
- [endLineStyle](pdfannotation/endlinestyle.md): The style of the line annotation’s ending point, such as square or filled arrowhead.
- [lineStyle(fromName:)](pdfannotation/linestyle%28fromname_%29.md): Returns a line style that corresponds to the specified name.
- [name(for:)](pdfannotation/name%28for_%29.md): Returns the name of the line style, which matches the definition in the Adobe PDF Specification.

### Configuring Link Annotations

- [destination](pdfannotation/destination.md): The destination for a link annotation.
- [url](pdfannotation/url.md): A URL for a link annotation.

### Configuring Text Annotations

- [iconType](pdfannotation/icontype.md): The type of icon to display for a pop-up text annotation.
- [PDFTextAnnotationIconType](pdftextannotationicontype.md): The types of icons that a text annotation can use.
- [PDFAnnotationTextIconType](pdfannotationtexticontype.md): Constants for icon type values in text annotation property dictionaries.

### Configuring Pop-Up Annotations

- [popup](pdfannotation/popup.md): Returns the pop-up annotation associated with an annotation.
- [isOpen](pdfannotation/isopen.md): A Boolean value that indicates whether the pop-up annotation is in an opened state, displaying its text content, or in a closed state, displaying an icon.

### Configuring Text Markup Annotations

- [markupType](pdfannotation/markuptype.md): The markup type that the annotation displays, either highlight, strikethrough, underline, or redact.
- [PDFMarkupType](pdfmarkuptype.md): The styles available for markup annotations in PDFKit.
- [quadrilateralPoints](pdfannotation/quadrilateralpoints.md): An array of values that represents the points bounding the marked-up text.

### Configuring Widget Annotations

- [widgetFieldType](pdfannotation/widgetfieldtype.md): The type of widget annotation, such as button, choice, or text.
- [widgetStringValue](pdfannotation/widgetstringvalue.md): The string value of the widget annotation.
- [widgetDefaultStringValue](pdfannotation/widgetdefaultstringvalue.md): The string value that the widget reverts to when performing a reset form action.
- [fieldName](pdfannotation/fieldname.md): The widget identifier for form annotation actions and behaviors.
- [backgroundColor](pdfannotation/backgroundcolor.md): The color of the widget’s background.
- [isReadOnly](pdfannotation/isreadonly.md): A Boolean value that determines whether the widget is editable.
- [PDFWidgetControlType](pdfwidgetcontroltype.md): The types of annotation buttons.
- [PDFAppearanceCharacteristics](pdfappearancecharacteristics.md): An object that represents appearance characteristics of a widget annotation.

### Configuring Text Widget Annotations

- [isMultiline](pdfannotation/ismultiline.md): A Boolean value that indicates whether the text widget annotation displays multiple lines.
- [isPasswordField](pdfannotation/ispasswordfield.md): A Boolean value that indicates whether the text widget annotation displays a password field using bullet characters.
- [maximumLength](pdfannotation/maximumlength.md): The maximum number of characters the text widget annotation allows.
- [hasComb](pdfannotation/hascomb.md): A Boolean value that indicates whether the annotation divides the text widget’s bounds into equally spaced segments, such as in a form entry field.

### Configuring Button Widget Annotations

- [widgetControlType](pdfannotation/widgetcontroltype.md): The type of button widget control, either radio button, push button, or checkbox.
- [buttonWidgetState](pdfannotation/buttonwidgetstate.md): The current state of the button widget annotation.
- [PDFWidgetCellState](pdfwidgetcellstate.md): The state of a button annotation, either on, off, or mixed.
- [buttonWidgetStateString](pdfannotation/buttonwidgetstatestring.md): A string value that differentiates button widgets in the same group, such as to identify mutually exclusive radio buttons from each other.
- [caption](pdfannotation/caption.md): The title of push button widget annotations.
- [allowsToggleToOff](pdfannotation/allowstoggletooff.md): A Boolean value that indicates whether clicking or tapping a selected radio button toggles it to an unselected state.
- [radiosInUnison](pdfannotation/radiosinunison.md): A Boolean value that indicates whether radio buttons in a group turn on and off in unison.

### Configuring Choice Widget Annotations

- [choices](pdfannotation/choices.md): An array of strings that specifies the options in either a list or a pop-up menu.
- [isListChoice](pdfannotation/islistchoice.md): A Boolean value that indicates whether the choice widget annotation is a list or a pop-up menu.
- [values](pdfannotation/values.md): An array of strings that specifies the export values for items in a list or a pop-up menu.

### Configuring Ink Annotations

- [paths](pdfannotation/paths.md): An array of bezier paths, in annotation-space coordinates, that compose the annotation.
- [add(\_:)](pdfannotation/add%28__%29.md): Adds a bezier path to the ink annotation.
- [remove(\_:)](pdfannotation/remove%28__%29.md): Removes a bezier path from an ink annotation.

### Configuring Stamp Annotations

- [stampName](pdfannotation/stampname.md): The name of the stamp, a text or graphics annotation that emulates a rubber stamp effect.

### Deprecated

- [Deprecated Symbols](deprecated-symbols.md): Review unsupported symbols and their replacements.

### Instance Properties

- [isActivatableTextField](pdfannotation/isactivatabletextfield.md)

### Initializers

- [init(coder:)](pdfannotation/init%28coder_%29.md)
- [init(dictionary:for:)](pdfannotation/init%28dictionary_for_%29.md): Deprecated.

### Default Implementations

- [PDFAnnotation Implementations](pdfannotation/pdfannotation-implementations.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [PDFAnnotationButtonWidget](pdfannotationbuttonwidget.md)
- [PDFAnnotationChoiceWidget](pdfannotationchoicewidget.md)
- [PDFAnnotationCircle](pdfannotationcircle.md)
- [PDFAnnotationFreeText](pdfannotationfreetext.md)
- [PDFAnnotationInk](pdfannotationink.md)
- [PDFAnnotationLine](pdfannotationline.md)
- [PDFAnnotationLink](pdfannotationlink.md)
- [PDFAnnotationMarkup](pdfannotationmarkup.md)
- [PDFAnnotationPopup](pdfannotationpopup.md)
- [PDFAnnotationSquare](pdfannotationsquare.md)
- [PDFAnnotationStamp](pdfannotationstamp.md)
- [PDFAnnotationText](pdfannotationtext.md)
- [PDFAnnotationTextWidget](pdfannotationtextwidget.md)

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

### Annotations

- [Adding Widgets to a PDF Document](adding-widgets-to-a-pdf-document.md): Add text, button, and choice widgets to a PDF document.
- [Adding Custom Graphics to a PDF](adding-custom-graphics-to-a-pdf.md): Create and add custom annotation and page graphics to your PDF document.
- [Custom Graphics](custom-graphics.md): Demonstrates adding a watermark to a PDF page.
- [PDF Widgets](pdf-widgets.md): Demonstrates adding widgets—interactive form elements—to a PDF document.

# PDFAnnotation (Objective-C)

**Framework:** PDFKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

An annotation in a PDF document.

## Declaration

```objectivec
@interface PDFAnnotation : NSObject
```

## Mentioned In

- [Adding Custom Graphics to a PDF](adding-custom-graphics-to-a-pdf.md)
- [Adding Widgets to a PDF Document](adding-widgets-to-a-pdf-document.md)

<a id="overview"></a>

## Overview

In addition to its primary textual content, a PDF file can contain annotations that represent links, form elements, highlighting circles, textual notes, and so on. Each annotation has a specific location on a page and may offer interactivity with the user.

## Topics

### Creating an Annotation

- [initWithBounds:forType:withProperties:](pdfannotation/init%28bounds_fortype_withproperties_%29.md): Creates a PDF annotation with the specified bounds, type, and optional properties.
- [PDFAnnotationSubtype](pdfannotationsubtype.md): The type of annotation, such as circle, text, or ink.

### Accessing Information About an Annotation

- [page](pdfannotation/page.md): Returns the page that the annotation is associated with.
- [modificationDate](pdfannotation/modificationdate.md): Returns the modification date of the annotation.
- [userName](pdfannotation/username.md): Returns the name of the user who created the annotation.
- [type](pdfannotation/type.md): Returns the type of the annotation.
- [action](pdfannotation/action.md): An object that represents an action for a PDF element, such as a link annotation.
- [PDFAction](pdfaction.md): An action that is performed when, for example, a PDF annotation is activated or an outline item is clicked.
- [PDFDestination](pdfdestination.md): A `PDFDestination` object describes a point on a PDF page.

### Managing Annotation Drawing and Output

- [drawWithBox:inContext:](pdfannotation/draw%28with_in_%29.md): Draws the annotation in a graphics context using page-space coordinates relative to the origin of the specified box.
- [shouldDisplay](pdfannotation/shoulddisplay.md): Returns a Boolean value indicating whether the annotation should be displayed.
- [shouldPrint](pdfannotation/shouldprint.md): Returns a Boolean value indicating whether the annotation should appear when the document is printed.

### Modifying Annotation Attributes

- [annotationKeyValues](pdfannotation/annotationkeyvalues.md): A dictionary that contains a deep copy of the widget’s properties.
- [valueForAnnotationKey:](pdfannotation/value%28forannotationkey_%29.md): Returns a deep copy of the key-value pairs of properties for the specified key.
- [setValue:forAnnotationKey:](pdfannotation/setvalue%28__forannotationkey_%29.md): Sets a value in the annotation’s dictionary.
- [setBoolean:forAnnotationKey:](pdfannotation/setboolean%28__forannotationkey_%29.md): Sets a Boolean value in the annotation’s dictionary.
- [setRect:forAnnotationKey:](pdfannotation/setrect%28__forannotationkey_%29.md): Sets a rectangle value in the annotation’s dictionary.
- [removeValueForAnnotationKey:](pdfannotation/removevalue%28forannotationkey_%29.md): Removes a value from the annotation’s dictionary.
- [PDFAnnotationKey](pdfannotationkey.md): Keys for setting properties of annotations.

### Managing Annotation Display Characteristics

- [alignment](pdfannotation/alignment.md): The alignment of the free text and text widget annotation’s text content.
- [bounds](pdfannotation/bounds.md): Returns the bounding box for the annotation in page space.
- [contents](pdfannotation/contents.md): Returns the textual content (if any) associated with the annotation.
- [font](pdfannotation/font.md): The font the annotation uses to display text.
- [fontColor](pdfannotation/fontcolor.md): The font color the annotation uses to display text.
- [border](pdfannotation/border.md): Sets the border style for the annotation.
- [PDFBorder](pdfborder.md): An optional border for an annotation that lies completely within the annotation rectangle.
- [highlighted](pdfannotation/ishighlighted.md): A Boolean value that indicates whether the annotation is in a highlighted state, such as when the mouse is down on a link annotation.
- [color](pdfannotation/color.md): Sets the stroke color for the annotation.
- [hasAppearanceStream](pdfannotation/hasappearancestream.md): Returns a Boolean value that indicates whether the annotation has an appearance stream associated with it.

### Configuring Shape Annotations

- [interiorColor](pdfannotation/interiorcolor.md): The fill color for drawing a circle, line, or square annotation.

### Configuring Line Annotations

- [startPoint](pdfannotation/startpoint.md): The point where a line begins, in annotation-space coordinates.
- [endPoint](pdfannotation/endpoint.md): The point where a line ends, in annotation-space coordinates.
- [startLineStyle](pdfannotation/startlinestyle.md): The style of the line annotation’s starting point, such as square or filled arrowhead.
- [endLineStyle](pdfannotation/endlinestyle.md): The style of the line annotation’s ending point, such as square or filled arrowhead.
- [lineStyleFromName:](pdfannotation/linestyle%28fromname_%29.md): Returns a line style that corresponds to the specified name.
- [nameForLineStyle:](pdfannotation/name%28for_%29.md): Returns the name of the line style, which matches the definition in the Adobe PDF Specification.

### Configuring Link Annotations

- [destination](pdfannotation/destination.md): The destination for a link annotation.
- [URL](pdfannotation/url.md): A URL for a link annotation.

### Configuring Text Annotations

- [iconType](pdfannotation/icontype.md): The type of icon to display for a pop-up text annotation.
- [PDFTextAnnotationIconType](pdftextannotationicontype.md): The types of icons that a text annotation can use.
- [PDFAnnotationTextIconType](pdfannotationtexticontype.md): Constants for icon type values in text annotation property dictionaries.

### Configuring Pop-Up Annotations

- [popup](pdfannotation/popup.md): Returns the pop-up annotation associated with an annotation.
- [open](pdfannotation/isopen.md): A Boolean value that indicates whether the pop-up annotation is in an opened state, displaying its text content, or in a closed state, displaying an icon.

### Configuring Text Markup Annotations

- [markupType](pdfannotation/markuptype.md): The markup type that the annotation displays, either highlight, strikethrough, underline, or redact.
- [PDFMarkupType](pdfmarkuptype.md): The styles available for markup annotations in PDFKit.
- [quadrilateralPoints](pdfannotation/quadrilateralpoints.md): An array of values that represents the points bounding the marked-up text.

### Configuring Widget Annotations

- [widgetFieldType](pdfannotation/widgetfieldtype.md): The type of widget annotation, such as button, choice, or text.
- [widgetStringValue](pdfannotation/widgetstringvalue.md): The string value of the widget annotation.
- [widgetDefaultStringValue](pdfannotation/widgetdefaultstringvalue.md): The string value that the widget reverts to when performing a reset form action.
- [fieldName](pdfannotation/fieldname.md): The widget identifier for form annotation actions and behaviors.
- [backgroundColor](pdfannotation/backgroundcolor.md): The color of the widget’s background.
- [readOnly](pdfannotation/isreadonly.md): A Boolean value that determines whether the widget is editable.
- [PDFWidgetControlType](pdfwidgetcontroltype.md): The types of annotation buttons.
- [PDFAppearanceCharacteristics](pdfappearancecharacteristics.md): An object that represents appearance characteristics of a widget annotation.

### Configuring Text Widget Annotations

- [multiline](pdfannotation/ismultiline.md): A Boolean value that indicates whether the text widget annotation displays multiple lines.
- [isPasswordField](pdfannotation/ispasswordfield.md): A Boolean value that indicates whether the text widget annotation displays a password field using bullet characters.
- [maximumLength](pdfannotation/maximumlength.md): The maximum number of characters the text widget annotation allows.
- [comb](pdfannotation/hascomb.md): A Boolean value that indicates whether the annotation divides the text widget’s bounds into equally spaced segments, such as in a form entry field.

### Configuring Button Widget Annotations

- [widgetControlType](pdfannotation/widgetcontroltype.md): The type of button widget control, either radio button, push button, or checkbox.
- [buttonWidgetState](pdfannotation/buttonwidgetstate.md): The current state of the button widget annotation.
- [PDFWidgetCellState](pdfwidgetcellstate.md): The state of a button annotation, either on, off, or mixed.
- [buttonWidgetStateString](pdfannotation/buttonwidgetstatestring.md): A string value that differentiates button widgets in the same group, such as to identify mutually exclusive radio buttons from each other.
- [caption](pdfannotation/caption.md): The title of push button widget annotations.
- [allowsToggleToOff](pdfannotation/allowstoggletooff.md): A Boolean value that indicates whether clicking or tapping a selected radio button toggles it to an unselected state.
- [radiosInUnison](pdfannotation/radiosinunison.md): A Boolean value that indicates whether radio buttons in a group turn on and off in unison.

### Configuring Choice Widget Annotations

- [choices](pdfannotation/choices.md): An array of strings that specifies the options in either a list or a pop-up menu.
- [listChoice](pdfannotation/islistchoice.md): A Boolean value that indicates whether the choice widget annotation is a list or a pop-up menu.
- [values](pdfannotation/values.md): An array of strings that specifies the export values for items in a list or a pop-up menu.

### Configuring Ink Annotations

- [paths](pdfannotation/paths.md): An array of bezier paths, in annotation-space coordinates, that compose the annotation.
- [addBezierPath:](pdfannotation/add%28__%29.md): Adds a bezier path to the ink annotation.
- [removeBezierPath:](pdfannotation/remove%28__%29.md): Removes a bezier path from an ink annotation.

### Configuring Stamp Annotations

- [stampName](pdfannotation/stampname.md): The name of the stamp, a text or graphics annotation that emulates a rubber stamp effect.

### Deprecated

- [Deprecated Symbols](deprecated-symbols.md): Review unsupported symbols and their replacements.

### Instance Properties

- [activatableTextField](pdfannotation/isactivatabletextfield.md)

### Instance Methods

- [initWithDictionary:forPage:](pdfannotation/init%28dictionary_for_%29.md): Deprecated.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [PDFAnnotationButtonWidget](pdfannotationbuttonwidget.md)
- [PDFAnnotationChoiceWidget](pdfannotationchoicewidget.md)
- [PDFAnnotationCircle](pdfannotationcircle.md)
- [PDFAnnotationFreeText](pdfannotationfreetext.md)
- [PDFAnnotationInk](pdfannotationink.md)
- [PDFAnnotationLine](pdfannotationline.md)
- [PDFAnnotationLink](pdfannotationlink.md)
- [PDFAnnotationMarkup](pdfannotationmarkup.md)
- [PDFAnnotationPopup](pdfannotationpopup.md)
- [PDFAnnotationSquare](pdfannotationsquare.md)
- [PDFAnnotationStamp](pdfannotationstamp.md)
- [PDFAnnotationText](pdfannotationtext.md)
- [PDFAnnotationTextWidget](pdfannotationtextwidget.md)

### Conforms To

- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)

## See Also

### Annotations

- [Adding Widgets to a PDF Document](adding-widgets-to-a-pdf-document.md): Add text, button, and choice widgets to a PDF document.
- [Adding Custom Graphics to a PDF](adding-custom-graphics-to-a-pdf.md): Create and add custom annotation and page graphics to your PDF document.
- [Custom Graphics](custom-graphics.md): Demonstrates adding a watermark to a PDF page.
- [PDF Widgets](pdf-widgets.md): Demonstrates adding widgets—interactive form elements—to a PDF document.
