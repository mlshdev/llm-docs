> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/datepickerstyle/field](https://developer.apple.com/documentation/swiftui/datepickerstyle/field)

# field

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** macOS 10.15+

A date picker style that displays the components in an editable field.

## Declaration

```swift
@MainActor @export(implementation) @preconcurrency static var field: FieldDatePickerStyle { get }
```

<a id="discussion"></a>

## Discussion

You can use this style when space is constrained and users expect to make specific date and time selections. However, you should generally use [stepperField](stepperfield.md) instead of this style, unless your your app requires hiding the stepper.

## See Also

### Getting built-in date picker styles

- [automatic](automatic.md): Conforms when `Self` is `DefaultDatePickerStyle`. The default style for date pickers.
- [compact](compact.md): Conforms when `Self` is `CompactDatePickerStyle`. A date picker style that displays the components in a compact, textual format.
- [graphical](graphical.md): Conforms when `Self` is `GraphicalDatePickerStyle`. A date picker style that displays an interactive calendar or clock.
- [stepperField](stepperfield.md): Conforms when `Self` is `StepperFieldDatePickerStyle`. A system style that displays the components in an editable field, with adjoining stepper that can increment/decrement the selected component.
- [wheel](wheel.md): Conforms when `Self` is `WheelDatePickerStyle`. A date picker style that displays each component as columns in a scrollable wheel.
