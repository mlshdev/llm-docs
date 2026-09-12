> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfannotation/widgetfieldtype](https://developer.apple.com/documentation/pdfkit/pdfannotation/widgetfieldtype)

# widgetFieldType (Swift)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.4+ · tvOS · visionOS 1.0+

The type of widget annotation, such as button, choice, or text.

## Declaration

```swift
var widgetFieldType: PDFAnnotationWidgetSubtype { get set }
```

## Mentioned In

- [Adding Widgets to a PDF Document](../adding-widgets-to-a-pdf-document.md)

## See Also

### Configuring Widget Annotations

- [widgetStringValue](widgetstringvalue.md): The string value of the widget annotation.
- [widgetDefaultStringValue](widgetdefaultstringvalue.md): The string value that the widget reverts to when performing a reset form action.
- [fieldName](fieldname.md): The widget identifier for form annotation actions and behaviors.
- [backgroundColor](backgroundcolor.md): The color of the widget’s background.
- [isReadOnly](isreadonly.md): A Boolean value that determines whether the widget is editable.
- [PDFWidgetControlType](../pdfwidgetcontroltype.md): The types of annotation buttons.
- [PDFAppearanceCharacteristics](../pdfappearancecharacteristics.md): An object that represents appearance characteristics of a widget annotation.

# widgetFieldType (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.4+ · tvOS · visionOS 1.0+

The type of widget annotation, such as button, choice, or text.

## Declaration

```objectivec
@property (nonatomic, copy) PDFAnnotationWidgetSubtype widgetFieldType;
```

## Mentioned In

- [Adding Widgets to a PDF Document](../adding-widgets-to-a-pdf-document.md)

## See Also

### Configuring Widget Annotations

- [widgetStringValue](widgetstringvalue.md): The string value of the widget annotation.
- [widgetDefaultStringValue](widgetdefaultstringvalue.md): The string value that the widget reverts to when performing a reset form action.
- [fieldName](fieldname.md): The widget identifier for form annotation actions and behaviors.
- [backgroundColor](backgroundcolor.md): The color of the widget’s background.
- [readOnly](isreadonly.md): A Boolean value that determines whether the widget is editable.
- [PDFWidgetControlType](../pdfwidgetcontroltype.md): The types of annotation buttons.
- [PDFAppearanceCharacteristics](../pdfappearancecharacteristics.md): An object that represents appearance characteristics of a widget annotation.
