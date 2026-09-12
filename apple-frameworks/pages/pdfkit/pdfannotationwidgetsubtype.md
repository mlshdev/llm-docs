> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfannotationwidgetsubtype](https://developer.apple.com/documentation/pdfkit/pdfannotationwidgetsubtype)

# PDFAnnotationWidgetSubtype (Swift)

**Framework:** PDFKit  
**Kind:** Structure  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.4+ · tvOS · visionOS 1.0+

## Declaration

```swift
struct PDFAnnotationWidgetSubtype
```

## Mentioned In

- [Adding Widgets to a PDF Document](adding-widgets-to-a-pdf-document.md)

## Topics

### Configuring a Widget Subtype

- [button](pdfannotationwidgetsubtype/button.md): A button widget type, including push buttons, checkboxes, and radio buttons.
- [choice](pdfannotationwidgetsubtype/choice.md): A type that presents a list of choices the user can choose from.
- [signature](pdfannotationwidgetsubtype/signature.md): A digital signature widget type.
- [text](pdfannotationwidgetsubtype/text.md): A text field the user can type text in.

### Creating a Widget Subtype

- [init(rawValue:)](pdfannotationwidgetsubtype/init%28rawvalue_%29.md): Creates a widget subtype using the specified raw string value.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

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

# PDFAnnotationWidgetSubtype (Objective-C)

**Framework:** PDFKit  
**Kind:** Type Alias  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.4+ · tvOS · visionOS 1.0+

## Declaration

```objectivec
typedef NSString * const PDFAnnotationWidgetSubtype;
```

## Mentioned In

- [Adding Widgets to a PDF Document](adding-widgets-to-a-pdf-document.md)

## Topics

### Configuring a Widget Subtype

- [PDFAnnotationWidgetSubtypeButton](pdfannotationwidgetsubtype/button.md): A button widget type, including push buttons, checkboxes, and radio buttons.
- [PDFAnnotationWidgetSubtypeChoice](pdfannotationwidgetsubtype/choice.md): A type that presents a list of choices the user can choose from.
- [PDFAnnotationWidgetSubtypeSignature](pdfannotationwidgetsubtype/signature.md): A digital signature widget type.
- [PDFAnnotationWidgetSubtypeText](pdfannotationwidgetsubtype/text.md): A text field the user can type text in.

## See Also

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
