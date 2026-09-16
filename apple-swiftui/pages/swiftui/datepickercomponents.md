> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/datepickercomponents

# DatePickerComponents

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+ · watchOS 10.0+

The date and time components that a date picker shows.

## Declaration

```swift
struct DatePickerComponents
```

<a id="overview"></a>

## Overview

Pass a value of this type as the `displayedComponents` argument of a [DatePicker](datepicker.md) initializer to choose which parts of a date someone can edit. Combine options to show more than one group.

```swift
DatePicker(
    "Departure",
    selection: $departure,
    displayedComponents: [.hourAndMinute, .date]
)
```

A picker shows `[.hourAndMinute, .date]` unless you choose otherwise. Each option respects the current locale, so [date](datepickercomponents/date.md) orders the day, month, and year the way the person’s region expects.

## Topics

### Getting date picker components

- [date](datepickercomponents/date.md): Displays day, month, and year based on the locale
- [hourAndMinute](datepickercomponents/hourandminute.md): Displays hour and minute components based on the locale
- [hourMinuteAndSecond](datepickercomponents/hourminuteandsecond.md): Displays hour, minute and second components based on the locale

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Setting date picker components

- [DatePicker.Components](datepicker/components.md)
