> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfappearancecharacteristics](https://developer.apple.com/documentation/pdfkit/pdfappearancecharacteristics)

# PDFAppearanceCharacteristics (Swift)

**Framework:** PDFKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

An object that represents appearance characteristics of a widget annotation.

## Declaration

```swift
class PDFAppearanceCharacteristics
```

## Topics

### Configuring a Widget’s Appearance

- [backgroundColor](pdfappearancecharacteristics/backgroundcolor.md): The background color of the widget annotation.
- [borderColor](pdfappearancecharacteristics/bordercolor.md): The border color of the widget annotation.
- [caption](pdfappearancecharacteristics/caption.md): The text that the button widget annotation displays when the user isn’t interacting with it.
- [controlType](pdfappearancecharacteristics/controltype.md): The type of button widget annotation.
- [downCaption](pdfappearancecharacteristics/downcaption.md): The text that the button widget annotation displays when the user holds down on it.
- [rolloverCaption](pdfappearancecharacteristics/rollovercaption.md): The text that the widget annotation displays when the user hovers the pointer over it.
- [rotation](pdfappearancecharacteristics/rotation.md): The number of degrees, in multiples of 90, that the widget annotation rotates counterclockwise relative to the page.
- [appearanceCharacteristicsKeyValues](pdfappearancecharacteristics/appearancecharacteristicskeyvalues.md): A dictionary that contains a deep copy of the appearance characteristic key-value pairs.
- [PDFAppearanceCharacteristicsKey](pdfappearancecharacteristicskey.md): Keys to control a widget’s appearance.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Configuring Widget Annotations

- [widgetFieldType](pdfannotation/widgetfieldtype.md): The type of widget annotation, such as button, choice, or text.
- [widgetStringValue](pdfannotation/widgetstringvalue.md): The string value of the widget annotation.
- [widgetDefaultStringValue](pdfannotation/widgetdefaultstringvalue.md): The string value that the widget reverts to when performing a reset form action.
- [fieldName](pdfannotation/fieldname.md): The widget identifier for form annotation actions and behaviors.
- [backgroundColor](pdfannotation/backgroundcolor.md): The color of the widget’s background.
- [isReadOnly](pdfannotation/isreadonly.md): A Boolean value that determines whether the widget is editable.
- [PDFWidgetControlType](pdfwidgetcontroltype.md): The types of annotation buttons.

# PDFAppearanceCharacteristics (Objective-C)

**Framework:** PDFKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

An object that represents appearance characteristics of a widget annotation.

## Declaration

```objectivec
@interface PDFAppearanceCharacteristics : NSObject
```

## Topics

### Configuring a Widget’s Appearance

- [backgroundColor](pdfappearancecharacteristics/backgroundcolor.md): The background color of the widget annotation.
- [borderColor](pdfappearancecharacteristics/bordercolor.md): The border color of the widget annotation.
- [caption](pdfappearancecharacteristics/caption.md): The text that the button widget annotation displays when the user isn’t interacting with it.
- [controlType](pdfappearancecharacteristics/controltype.md): The type of button widget annotation.
- [downCaption](pdfappearancecharacteristics/downcaption.md): The text that the button widget annotation displays when the user holds down on it.
- [rolloverCaption](pdfappearancecharacteristics/rollovercaption.md): The text that the widget annotation displays when the user hovers the pointer over it.
- [rotation](pdfappearancecharacteristics/rotation.md): The number of degrees, in multiples of 90, that the widget annotation rotates counterclockwise relative to the page.
- [appearanceCharacteristicsKeyValues](pdfappearancecharacteristics/appearancecharacteristicskeyvalues.md): A dictionary that contains a deep copy of the appearance characteristic key-value pairs.
- [PDFAppearanceCharacteristicsKey](pdfappearancecharacteristicskey.md): Keys to control a widget’s appearance.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Configuring Widget Annotations

- [widgetFieldType](pdfannotation/widgetfieldtype.md): The type of widget annotation, such as button, choice, or text.
- [widgetStringValue](pdfannotation/widgetstringvalue.md): The string value of the widget annotation.
- [widgetDefaultStringValue](pdfannotation/widgetdefaultstringvalue.md): The string value that the widget reverts to when performing a reset form action.
- [fieldName](pdfannotation/fieldname.md): The widget identifier for form annotation actions and behaviors.
- [backgroundColor](pdfannotation/backgroundcolor.md): The color of the widget’s background.
- [readOnly](pdfannotation/isreadonly.md): A Boolean value that determines whether the widget is editable.
- [PDFWidgetControlType](pdfwidgetcontroltype.md): The types of annotation buttons.
