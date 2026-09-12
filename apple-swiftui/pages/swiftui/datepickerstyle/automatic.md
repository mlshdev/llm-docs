> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/datepickerstyle/automatic](https://developer.apple.com/documentation/swiftui/datepickerstyle/automatic)

# automatic

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+ · watchOS 10.0+

The default style for date pickers.

## Declaration

```swift
@MainActor @export(implementation) @preconcurrency static var automatic: DefaultDatePickerStyle { get }
```

## See Also

### Getting built-in date picker styles

- [compact](compact.md): Conforms when `Self` is `CompactDatePickerStyle`. A date picker style that displays the components in a compact, textual format.
- [field](field.md): Conforms when `Self` is `FieldDatePickerStyle`. A date picker style that displays the components in an editable field.
- [graphical](graphical.md): Conforms when `Self` is `GraphicalDatePickerStyle`. A date picker style that displays an interactive calendar or clock.
- [stepperField](stepperfield.md): Conforms when `Self` is `StepperFieldDatePickerStyle`. A system style that displays the components in an editable field, with adjoining stepper that can increment/decrement the selected component.
- [wheel](wheel.md): Conforms when `Self` is `WheelDatePickerStyle`. A date picker style that displays each component as columns in a scrollable wheel.
