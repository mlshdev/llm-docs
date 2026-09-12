> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfannotation/widgetdefaultstringvalue](https://developer.apple.com/documentation/pdfkit/pdfannotation/widgetdefaultstringvalue)

# widgetDefaultStringValue (Swift)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.4+ · tvOS · visionOS 1.0+

The string value that the widget reverts to when performing a reset form action.

## Declaration

```swift
var widgetDefaultStringValue: String? { get set }
```

<a id="Discussion"></a>

## Discussion

For text and choice widgets, this property specifies the string value that a reset form action sets on a widget.

For radio buttons and checkboxes, set this property to `Off` if the desired default is for the button to be in an unselected state; otherwise, set it to the [buttonWidgetStateString](buttonwidgetstatestring.md).

## See Also

### Configuring Widget Annotations

- [widgetFieldType](widgetfieldtype.md): The type of widget annotation, such as button, choice, or text.
- [widgetStringValue](widgetstringvalue.md): The string value of the widget annotation.
- [fieldName](fieldname.md): The widget identifier for form annotation actions and behaviors.
- [backgroundColor](backgroundcolor.md): The color of the widget’s background.
- [isReadOnly](isreadonly.md): A Boolean value that determines whether the widget is editable.
- [PDFWidgetControlType](../pdfwidgetcontroltype.md): The types of annotation buttons.
- [PDFAppearanceCharacteristics](../pdfappearancecharacteristics.md): An object that represents appearance characteristics of a widget annotation.

# widgetDefaultStringValue (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.4+ · tvOS · visionOS 1.0+

The string value that the widget reverts to when performing a reset form action.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * widgetDefaultStringValue;
```

<a id="Discussion"></a>

## Discussion

For text and choice widgets, this property specifies the string value that a reset form action sets on a widget.

For radio buttons and checkboxes, set this property to `Off` if the desired default is for the button to be in an unselected state; otherwise, set it to the [buttonWidgetStateString](buttonwidgetstatestring.md).

## See Also

### Configuring Widget Annotations

- [widgetFieldType](widgetfieldtype.md): The type of widget annotation, such as button, choice, or text.
- [widgetStringValue](widgetstringvalue.md): The string value of the widget annotation.
- [fieldName](fieldname.md): The widget identifier for form annotation actions and behaviors.
- [backgroundColor](backgroundcolor.md): The color of the widget’s background.
- [readOnly](isreadonly.md): A Boolean value that determines whether the widget is editable.
- [PDFWidgetControlType](../pdfwidgetcontroltype.md): The types of annotation buttons.
- [PDFAppearanceCharacteristics](../pdfappearancecharacteristics.md): An object that represents appearance characteristics of a widget annotation.
