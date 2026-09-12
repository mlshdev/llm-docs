> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/datepickerstyle/compact](https://developer.apple.com/documentation/swiftui/datepickerstyle/compact)

# compact

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · visionOS 1.0+

A date picker style that displays the components in a compact, textual format.

## Declaration

```swift
@MainActor @export(implementation) @preconcurrency static var compact: CompactDatePickerStyle { get }
```

<a id="discussion"></a>

## Discussion

Use this style when space is constrained and users expect to make specific date and time selections. Some variants may include rich editing controls in a pop up.

## See Also

### Getting built-in date picker styles

- [automatic](automatic.md): Conforms when `Self` is `DefaultDatePickerStyle`. The default style for date pickers.
- [field](field.md): Conforms when `Self` is `FieldDatePickerStyle`. A date picker style that displays the components in an editable field.
- [graphical](graphical.md): Conforms when `Self` is `GraphicalDatePickerStyle`. A date picker style that displays an interactive calendar or clock.
- [stepperField](stepperfield.md): Conforms when `Self` is `StepperFieldDatePickerStyle`. A system style that displays the components in an editable field, with adjoining stepper that can increment/decrement the selected component.
- [wheel](wheel.md): Conforms when `Self` is `WheelDatePickerStyle`. A date picker style that displays each component as columns in a scrollable wheel.
