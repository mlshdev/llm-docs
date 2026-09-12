> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/datepickerstyle/stepperfield](https://developer.apple.com/documentation/swiftui/datepickerstyle/stepperfield)

# stepperField

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** macOS 10.15+

A system style that displays the components in an editable field, with adjoining stepper that can increment/decrement the selected component.

## Declaration

```swift
@MainActor @export(implementation) @preconcurrency static var stepperField: StepperFieldDatePickerStyle { get }
```

<a id="discussion"></a>

## Discussion

This style is useful when space is constrained and users expect to make specific date and time selections.

## See Also

### Getting built-in date picker styles

- [automatic](automatic.md): Conforms when `Self` is `DefaultDatePickerStyle`. The default style for date pickers.
- [compact](compact.md): Conforms when `Self` is `CompactDatePickerStyle`. A date picker style that displays the components in a compact, textual format.
- [field](field.md): Conforms when `Self` is `FieldDatePickerStyle`. A date picker style that displays the components in an editable field.
- [graphical](graphical.md): Conforms when `Self` is `GraphicalDatePickerStyle`. A date picker style that displays an interactive calendar or clock.
- [wheel](wheel.md): Conforms when `Self` is `WheelDatePickerStyle`. A date picker style that displays each component as columns in a scrollable wheel.
