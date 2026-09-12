> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/datepickerstyle/graphical](https://developer.apple.com/documentation/swiftui/datepickerstyle/graphical)

# graphical

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · visionOS 1.0+

A date picker style that displays an interactive calendar or clock.

## Declaration

```swift
@MainActor @export(implementation) @preconcurrency static var graphical: GraphicalDatePickerStyle { get }
```

<a id="discussion"></a>

## Discussion

This style is useful when you want to allow browsing through days in a calendar, or when the look of a clock face is appropriate.

## See Also

### Getting built-in date picker styles

- [automatic](automatic.md): Conforms when `Self` is `DefaultDatePickerStyle`. The default style for date pickers.
- [compact](compact.md): Conforms when `Self` is `CompactDatePickerStyle`. A date picker style that displays the components in a compact, textual format.
- [field](field.md): Conforms when `Self` is `FieldDatePickerStyle`. A date picker style that displays the components in an editable field.
- [stepperField](stepperfield.md): Conforms when `Self` is `StepperFieldDatePickerStyle`. A system style that displays the components in an editable field, with adjoining stepper that can increment/decrement the selected component.
- [wheel](wheel.md): Conforms when `Self` is `WheelDatePickerStyle`. A date picker style that displays each component as columns in a scrollable wheel.
