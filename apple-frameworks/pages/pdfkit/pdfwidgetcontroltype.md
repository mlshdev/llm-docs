> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfwidgetcontroltype](https://developer.apple.com/documentation/pdfkit/pdfwidgetcontroltype)

# PDFWidgetControlType (Swift)

**Framework:** PDFKit  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.4+ · tvOS · visionOS 1.0+

The types of annotation buttons.

## Declaration

```swift
enum PDFWidgetControlType
```

## Topics

### Constants

- [PDFWidgetControlType.unknownControl](pdfwidgetcontroltype/unknowncontrol.md): Unknown control type.
- [PDFWidgetControlType.pushButtonControl](pdfwidgetcontroltype/pushbuttoncontrol.md): Push button control.
- [PDFWidgetControlType.radioButtonControl](pdfwidgetcontroltype/radiobuttoncontrol.md): Radio button control.
- [PDFWidgetControlType.checkBoxControl](pdfwidgetcontroltype/checkboxcontrol.md): Check box control.

### Initializers

- [init(rawValue:)](pdfwidgetcontroltype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring Widget Annotations

- [widgetFieldType](pdfannotation/widgetfieldtype.md): The type of widget annotation, such as button, choice, or text.
- [widgetStringValue](pdfannotation/widgetstringvalue.md): The string value of the widget annotation.
- [widgetDefaultStringValue](pdfannotation/widgetdefaultstringvalue.md): The string value that the widget reverts to when performing a reset form action.
- [fieldName](pdfannotation/fieldname.md): The widget identifier for form annotation actions and behaviors.
- [backgroundColor](pdfannotation/backgroundcolor.md): The color of the widget’s background.
- [isReadOnly](pdfannotation/isreadonly.md): A Boolean value that determines whether the widget is editable.
- [PDFAppearanceCharacteristics](pdfappearancecharacteristics.md): An object that represents appearance characteristics of a widget annotation.

# PDFWidgetControlType (Objective-C)

**Framework:** PDFKit  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.4+ · tvOS · visionOS 1.0+

The types of annotation buttons.

## Declaration

```objectivec
enum PDFWidgetControlType : NSInteger;
```

## Topics

### Constants

- [kPDFWidgetUnknownControl](pdfwidgetcontroltype/unknowncontrol.md): Unknown control type.
- [kPDFWidgetPushButtonControl](pdfwidgetcontroltype/pushbuttoncontrol.md): Push button control.
- [kPDFWidgetRadioButtonControl](pdfwidgetcontroltype/radiobuttoncontrol.md): Radio button control.
- [kPDFWidgetCheckBoxControl](pdfwidgetcontroltype/checkboxcontrol.md): Check box control.

## See Also

### Configuring Widget Annotations

- [widgetFieldType](pdfannotation/widgetfieldtype.md): The type of widget annotation, such as button, choice, or text.
- [widgetStringValue](pdfannotation/widgetstringvalue.md): The string value of the widget annotation.
- [widgetDefaultStringValue](pdfannotation/widgetdefaultstringvalue.md): The string value that the widget reverts to when performing a reset form action.
- [fieldName](pdfannotation/fieldname.md): The widget identifier for form annotation actions and behaviors.
- [backgroundColor](pdfannotation/backgroundcolor.md): The color of the widget’s background.
- [readOnly](pdfannotation/isreadonly.md): A Boolean value that determines whether the widget is editable.
- [PDFAppearanceCharacteristics](pdfappearancecharacteristics.md): An object that represents appearance characteristics of a widget annotation.
