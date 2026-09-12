> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/datepickerstyle](https://developer.apple.com/documentation/swiftui/datepickerstyle)

# DatePickerStyle

**Framework:** SwiftUI  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+ · watchOS 10.0+

A type that specifies the appearance and interaction of all date pickers within a view hierarchy.

## Declaration

```swift
@MainActor @preconcurrency protocol DatePickerStyle
```

<a id="overview"></a>

## Overview

To configure the current date picker style for a view hierarchy, use the [datePickerStyle(\_:)](view/datepickerstyle%28__%29.md) modifier.

A type conforming to this protocol inherits `@preconcurrency @MainActor` isolation from the protocol if the conformance is included in the type’s base declaration:

```swift
struct MyCustomType: Transition {
    // `@preconcurrency @MainActor` isolation by default
}
```

Isolation to the main actor is the default, but it’s not required. Declare the conformance in an extension to opt out of main actor isolation:

```swift
extension MyCustomType: Transition {
    // `nonisolated` by default
}
```

## Topics

### Getting built-in date picker styles

- [automatic](datepickerstyle/automatic.md): Conforms when `Self` is `DefaultDatePickerStyle`. The default style for date pickers.
- [compact](datepickerstyle/compact.md): Conforms when `Self` is `CompactDatePickerStyle`. A date picker style that displays the components in a compact, textual format.
- [field](datepickerstyle/field.md): Conforms when `Self` is `FieldDatePickerStyle`. A date picker style that displays the components in an editable field.
- [graphical](datepickerstyle/graphical.md): Conforms when `Self` is `GraphicalDatePickerStyle`. A date picker style that displays an interactive calendar or clock.
- [stepperField](datepickerstyle/stepperfield.md): Conforms when `Self` is `StepperFieldDatePickerStyle`. A system style that displays the components in an editable field, with adjoining stepper that can increment/decrement the selected component.
- [wheel](datepickerstyle/wheel.md): Conforms when `Self` is `WheelDatePickerStyle`. A date picker style that displays each component as columns in a scrollable wheel.

### Creating custom date picker styles

- [makeBody(configuration:)](datepickerstyle/makebody%28configuration_%29.md): Returns the appearance and interaction content for a `DatePicker`.
- [DatePickerStyleConfiguration](datepickerstyleconfiguration.md): The properties of a `DatePicker`.
- [DatePickerStyle.Configuration](datepickerstyle/configuration.md): A type alias for the properties of a `DatePicker`.
- [Body](datepickerstyle/body.md): A view representing the appearance and interaction of a `DatePicker`.

### Supporting types

- [DefaultDatePickerStyle](defaultdatepickerstyle.md): The default style for date pickers.
- [CompactDatePickerStyle](compactdatepickerstyle.md): A date picker style that displays the components in a compact, textual format.
- [FieldDatePickerStyle](fielddatepickerstyle.md): A date picker style that displays the components in an editable field.
- [GraphicalDatePickerStyle](graphicaldatepickerstyle.md): A date picker style that displays an interactive calendar or clock.
- [StepperFieldDatePickerStyle](stepperfielddatepickerstyle.md): A system style that displays the components in an editable field, with adjoining stepper that can increment/decrement the selected component.
- [WheelDatePickerStyle](wheeldatepickerstyle.md): A date picker style that displays each component as columns in a scrollable wheel.

## Relationships

### Conforming Types

- [CompactDatePickerStyle](compactdatepickerstyle.md)
- [DefaultDatePickerStyle](defaultdatepickerstyle.md)
- [FieldDatePickerStyle](fielddatepickerstyle.md)
- [GraphicalDatePickerStyle](graphicaldatepickerstyle.md)
- [StepperFieldDatePickerStyle](stepperfielddatepickerstyle.md)
- [WheelDatePickerStyle](wheeldatepickerstyle.md)

## See Also

### Styling pickers

- [pickerStyle(\_:)](view/pickerstyle%28__%29.md): Sets the style for pickers within this view.
- [PickerStyle](pickerstyle.md): A type that specifies the appearance and interaction of all pickers within a view hierarchy.
- [datePickerStyle(\_:)](view/datepickerstyle%28__%29.md): Sets the style for date pickers within this view.
