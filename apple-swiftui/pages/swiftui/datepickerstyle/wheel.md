> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/datepickerstyle/wheel

# wheel

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 10.0+

A date picker style that displays each component as columns in a scrollable wheel.

## Declaration

```swift
@MainActor @export(implementation) @preconcurrency static var wheel: WheelDatePickerStyle { get }
```

## See Also

### Getting built-in date picker styles

- [automatic](automatic.md): Conforms when `Self` is `DefaultDatePickerStyle`. The default style for date pickers.
- [compact](compact.md): Conforms when `Self` is `CompactDatePickerStyle`. A date picker style that displays the components in a compact, textual format.
- [field](field.md): Conforms when `Self` is `FieldDatePickerStyle`. A date picker style that displays the components in an editable field.
- [graphical](graphical.md): Conforms when `Self` is `GraphicalDatePickerStyle`. A date picker style that displays an interactive calendar or clock.
- [stepperField](stepperfield.md): Conforms when `Self` is `StepperFieldDatePickerStyle`. A system style that displays the components in an editable field, with adjoining stepper that can increment/decrement the selected component.
