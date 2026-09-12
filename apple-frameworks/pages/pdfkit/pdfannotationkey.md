> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfannotationkey](https://developer.apple.com/documentation/pdfkit/pdfannotationkey)

# PDFAnnotationKey (Swift)

**Framework:** PDFKit  
**Kind:** Structure  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.4+ · tvOS · visionOS 1.0+

Keys for setting properties of annotations.

## Declaration

```swift
struct PDFAnnotationKey
```

## Topics

### Configuring General Properties

- [contents](pdfannotationkey/contents.md): The text that the annotation displays or represents.
- [date](pdfannotationkey/date.md): The date, or string representation of a date, of the annotation’s most recent modification.
- [flags](pdfannotationkey/flags.md): An integer value that specifies flags for the annotation.
- [name](pdfannotationkey/name.md): A string that uniquely identifies the annotation among all annotations on the same page.
- [page](pdfannotationkey/page.md): A dictionary or PDF page object that includes the annotation.
- [parent](pdfannotationkey/parent.md): A dictionary or annotation object that a pop-up or widget belongs to.
- [quadPoints](pdfannotationkey/quadpoints.md): An array of floating point values that specifies a rectangular region of a page.
- [rect](pdfannotationkey/rect.md): The rectangle that the annotation occupies on the page, in page-space coordinates.
- [subtype](pdfannotationkey/subtype.md): The type of annotation that the entries in a dictionary describe.
- [textLabel](pdfannotationkey/textlabel.md): A string that represents the title of the annotation.

### Configuring Annotation Appearance

- [appearanceDictionary](pdfannotationkey/appearancedictionary.md): A dictionary that contains properties for controlling the annotation’s visual appearance.
- [appearanceState](pdfannotationkey/appearancestate.md): A string that specifies the appearance stream for the annotation.
- [border](pdfannotationkey/border.md): An array of integers or border objects that describes the border of the annotation.
- [borderStyle](pdfannotationkey/borderstyle.md): A dictionary that contains the properties of the annotation’s border.
- [color](pdfannotationkey/color.md): An array of floats or a color object that specifies the annotation’s color.
- [defaultAppearance](pdfannotationkey/defaultappearance.md): A string value a free text annotation uses to format the text.
- [highlightingMode](pdfannotationkey/highlightingmode.md): A string value that defines the way an annotation highlights when the user activates it, such as when clicking or tapping a link.
- [PDFAnnotationHighlightingMode](pdfannotationhighlightingmode.md)
- [iconName](pdfannotationkey/iconname.md): A string value that specifies the name of an icon for a text or stamp annotation.
- [interiorColor](pdfannotationkey/interiorcolor.md): An array of floating point values or a PDF color object that annotations use to fill interior space, such as line endings, squares, or circles.
- [quadding](pdfannotationkey/quadding.md): An integer value that specifies left, right, or center justification.

### Configuring Line Properties

- [lineEndingStyles](pdfannotationkey/lineendingstyles.md): An array of string values that specifies the styles to use for the ends of lines.
- [PDFLineStyle](pdflinestyle.md): The following constants specify the available line ending styles.
- [linePoints](pdfannotationkey/linepoints.md): An array of floating point values that specifies the starting and ending points, in page-space coordinates, of a line.
- [PDFAnnotationLineEndingStyle](pdfannotationlineendingstyle.md)

### Configuring Pop-Up Annotations

- [popup](pdfannotationkey/popup.md): A dictionary or annotation object that specifies the annotation to pop up for text entry or editing.
- [open](pdfannotationkey/open.md): A Boolean value that specifies whether the pop-up is in an opened state, showing its text content, or in a closed state and showing an icon.

### Configuring Widget Annotations

- [widgetAppearanceDictionary](pdfannotationkey/widgetappearancedictionary.md): A dictionary or appearance characteristic object that contains properties for controlling the widget’s visual appearance.
- [widgetBackgroundColor](pdfannotationkey/widgetbackgroundcolor.md): An array of floating point values or a PDF color object that specifies the widget’s background color.
- [widgetBorderColor](pdfannotationkey/widgetbordercolor.md): An array of floating point values or a PDF color object that specifies the widget’s border color.
- [widgetCaption](pdfannotationkey/widgetcaption.md): A string that a push button widget displays when it isn’t in a pressed state.
- [widgetDefaultValue](pdfannotationkey/widgetdefaultvalue.md): A default value for the widget.
- [widgetDownCaption](pdfannotationkey/widgetdowncaption.md): A string that a push button widgets displays when it’s in a pressed state.
- [widgetFieldFlags](pdfannotationkey/widgetfieldflags.md): An integer value that specifies flags for a widget.
- [widgetFieldType](pdfannotationkey/widgetfieldtype.md): A string that specifies the type of widget, such as button, checkbox, or signature field.
- [widgetMaxLen](pdfannotationkey/widgetmaxlen.md): An integer value that specifies the maximum length of a text field, in characters.
- [widgetOptions](pdfannotationkey/widgetoptions.md): An array that specifies the options to present in radio buttons or choice lists.
- [widgetRolloverCaption](pdfannotationkey/widgetrollovercaption.md): A string that push button widgets display when the pointer is over the button, but not clicking it.
- [widgetRotation](pdfannotationkey/widgetrotation.md): An integer value that specifies the rotation of the widget.
- [widgetTextLabelUI](pdfannotationkey/widgettextlabelui.md): A user-visible alternative field name that identifies the widget, typically for accessibility purposes.
- [widgetValue](pdfannotationkey/widgetvalue.md): The widget’s value, typically for text and choice widgets.
- [PDFAnnotationWidgetSubtype](pdfannotationwidgetsubtype.md)

### Configuring Actions

- [destination](pdfannotationkey/destination.md): An array, name, or string that represents the destination of an action.
- [action](pdfannotationkey/action.md): A dictionary or PDF action object that represents an action to take, such as when the user clicks or taps a button.
- [additionalActions](pdfannotationkey/additionalactions.md): A dictionary or PDF action object that represents additional actions an annotation can perform, such as when it receives input focus.

### Configuring Ink Annotations

- [inklist](pdfannotationkey/inklist.md): An array of arrays that represents stroked paths.

### Creating an Annotation Key

- [init(rawValue:)](pdfannotationkey/init%28rawvalue_%29.md): Creates an annotation key using the specified raw string value.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Modifying Annotation Attributes

- [annotationKeyValues](pdfannotation/annotationkeyvalues.md): A dictionary that contains a deep copy of the widget’s properties.
- [value(forAnnotationKey:)](pdfannotation/value%28forannotationkey_%29.md): Returns a deep copy of the key-value pairs of properties for the specified key.
- [setValue(\_:forAnnotationKey:)](pdfannotation/setvalue%28__forannotationkey_%29.md): Sets a value in the annotation’s dictionary.
- [setBoolean(\_:forAnnotationKey:)](pdfannotation/setboolean%28__forannotationkey_%29.md): Sets a Boolean value in the annotation’s dictionary.
- [setRect(\_:forAnnotationKey:)](pdfannotation/setrect%28__forannotationkey_%29.md): Sets a rectangle value in the annotation’s dictionary.
- [removeValue(forAnnotationKey:)](pdfannotation/removevalue%28forannotationkey_%29.md): Removes a value from the annotation’s dictionary.

# PDFAnnotationKey (Objective-C)

**Framework:** PDFKit  
**Kind:** Type Alias  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.4+ · tvOS · visionOS 1.0+

Keys for setting properties of annotations.

## Declaration

```objectivec
typedef NSString * const PDFAnnotationKey;
```

## Topics

### Configuring General Properties

- [PDFAnnotationKeyContents](pdfannotationkey/contents.md): The text that the annotation displays or represents.
- [PDFAnnotationKeyDate](pdfannotationkey/date.md): The date, or string representation of a date, of the annotation’s most recent modification.
- [PDFAnnotationKeyFlags](pdfannotationkey/flags.md): An integer value that specifies flags for the annotation.
- [PDFAnnotationKeyName](pdfannotationkey/name.md): A string that uniquely identifies the annotation among all annotations on the same page.
- [PDFAnnotationKeyPage](pdfannotationkey/page.md): A dictionary or PDF page object that includes the annotation.
- [PDFAnnotationKeyParent](pdfannotationkey/parent.md): A dictionary or annotation object that a pop-up or widget belongs to.
- [PDFAnnotationKeyQuadPoints](pdfannotationkey/quadpoints.md): An array of floating point values that specifies a rectangular region of a page.
- [PDFAnnotationKeyRect](pdfannotationkey/rect.md): The rectangle that the annotation occupies on the page, in page-space coordinates.
- [PDFAnnotationKeySubtype](pdfannotationkey/subtype.md): The type of annotation that the entries in a dictionary describe.
- [PDFAnnotationKeyTextLabel](pdfannotationkey/textlabel.md): A string that represents the title of the annotation.

### Configuring Annotation Appearance

- [PDFAnnotationKeyAppearanceDictionary](pdfannotationkey/appearancedictionary.md): A dictionary that contains properties for controlling the annotation’s visual appearance.
- [PDFAnnotationKeyAppearanceState](pdfannotationkey/appearancestate.md): A string that specifies the appearance stream for the annotation.
- [PDFAnnotationKeyBorder](pdfannotationkey/border.md): An array of integers or border objects that describes the border of the annotation.
- [PDFAnnotationKeyBorderStyle](pdfannotationkey/borderstyle.md): A dictionary that contains the properties of the annotation’s border.
- [PDFAnnotationKeyColor](pdfannotationkey/color.md): An array of floats or a color object that specifies the annotation’s color.
- [PDFAnnotationKeyDefaultAppearance](pdfannotationkey/defaultappearance.md): A string value a free text annotation uses to format the text.
- [PDFAnnotationKeyHighlightingMode](pdfannotationkey/highlightingmode.md): A string value that defines the way an annotation highlights when the user activates it, such as when clicking or tapping a link.
- [PDFAnnotationHighlightingMode](pdfannotationhighlightingmode.md)
- [PDFAnnotationKeyIconName](pdfannotationkey/iconname.md): A string value that specifies the name of an icon for a text or stamp annotation.
- [PDFAnnotationKeyInteriorColor](pdfannotationkey/interiorcolor.md): An array of floating point values or a PDF color object that annotations use to fill interior space, such as line endings, squares, or circles.
- [PDFAnnotationKeyQuadding](pdfannotationkey/quadding.md): An integer value that specifies left, right, or center justification.

### Configuring Line Properties

- [PDFAnnotationKeyLineEndingStyles](pdfannotationkey/lineendingstyles.md): An array of string values that specifies the styles to use for the ends of lines.
- [PDFLineStyle](pdflinestyle.md): The following constants specify the available line ending styles.
- [PDFAnnotationKeyLinePoints](pdfannotationkey/linepoints.md): An array of floating point values that specifies the starting and ending points, in page-space coordinates, of a line.
- [PDFAnnotationLineEndingStyle](pdfannotationlineendingstyle.md)

### Configuring Pop-Up Annotations

- [PDFAnnotationKeyPopup](pdfannotationkey/popup.md): A dictionary or annotation object that specifies the annotation to pop up for text entry or editing.
- [PDFAnnotationKeyOpen](pdfannotationkey/open.md): A Boolean value that specifies whether the pop-up is in an opened state, showing its text content, or in a closed state and showing an icon.

### Configuring Widget Annotations

- [PDFAnnotationKeyWidgetAppearanceDictionary](pdfannotationkey/widgetappearancedictionary.md): A dictionary or appearance characteristic object that contains properties for controlling the widget’s visual appearance.
- [PDFAnnotationKeyWidgetBackgroundColor](pdfannotationkey/widgetbackgroundcolor.md): An array of floating point values or a PDF color object that specifies the widget’s background color.
- [PDFAnnotationKeyWidgetBorderColor](pdfannotationkey/widgetbordercolor.md): An array of floating point values or a PDF color object that specifies the widget’s border color.
- [PDFAnnotationKeyWidgetCaption](pdfannotationkey/widgetcaption.md): A string that a push button widget displays when it isn’t in a pressed state.
- [PDFAnnotationKeyWidgetDefaultValue](pdfannotationkey/widgetdefaultvalue.md): A default value for the widget.
- [PDFAnnotationKeyWidgetDownCaption](pdfannotationkey/widgetdowncaption.md): A string that a push button widgets displays when it’s in a pressed state.
- [PDFAnnotationKeyWidgetFieldFlags](pdfannotationkey/widgetfieldflags.md): An integer value that specifies flags for a widget.
- [PDFAnnotationKeyWidgetFieldType](pdfannotationkey/widgetfieldtype.md): A string that specifies the type of widget, such as button, checkbox, or signature field.
- [PDFAnnotationKeyWidgetMaxLen](pdfannotationkey/widgetmaxlen.md): An integer value that specifies the maximum length of a text field, in characters.
- [PDFAnnotationKeyWidgetOptions](pdfannotationkey/widgetoptions.md): An array that specifies the options to present in radio buttons or choice lists.
- [PDFAnnotationKeyWidgetRolloverCaption](pdfannotationkey/widgetrollovercaption.md): A string that push button widgets display when the pointer is over the button, but not clicking it.
- [PDFAnnotationKeyWidgetRotation](pdfannotationkey/widgetrotation.md): An integer value that specifies the rotation of the widget.
- [PDFAnnotationKeyWidgetTextLabelUI](pdfannotationkey/widgettextlabelui.md): A user-visible alternative field name that identifies the widget, typically for accessibility purposes.
- [PDFAnnotationKeyWidgetValue](pdfannotationkey/widgetvalue.md): The widget’s value, typically for text and choice widgets.
- [PDFAnnotationWidgetSubtype](pdfannotationwidgetsubtype.md)

### Configuring Actions

- [PDFAnnotationKeyDestination](pdfannotationkey/destination.md): An array, name, or string that represents the destination of an action.
- [PDFAnnotationKeyAction](pdfannotationkey/action.md): A dictionary or PDF action object that represents an action to take, such as when the user clicks or taps a button.
- [PDFAnnotationKeyAdditionalActions](pdfannotationkey/additionalactions.md): A dictionary or PDF action object that represents additional actions an annotation can perform, such as when it receives input focus.

### Configuring Ink Annotations

- [PDFAnnotationKeyInklist](pdfannotationkey/inklist.md): An array of arrays that represents stroked paths.

## See Also

### Modifying Annotation Attributes

- [annotationKeyValues](pdfannotation/annotationkeyvalues.md): A dictionary that contains a deep copy of the widget’s properties.
- [valueForAnnotationKey:](pdfannotation/value%28forannotationkey_%29.md): Returns a deep copy of the key-value pairs of properties for the specified key.
- [setValue:forAnnotationKey:](pdfannotation/setvalue%28__forannotationkey_%29.md): Sets a value in the annotation’s dictionary.
- [setBoolean:forAnnotationKey:](pdfannotation/setboolean%28__forannotationkey_%29.md): Sets a Boolean value in the annotation’s dictionary.
- [setRect:forAnnotationKey:](pdfannotation/setrect%28__forannotationkey_%29.md): Sets a rectangle value in the annotation’s dictionary.
- [removeValueForAnnotationKey:](pdfannotation/removevalue%28forannotationkey_%29.md): Removes a value from the annotation’s dictionary.
