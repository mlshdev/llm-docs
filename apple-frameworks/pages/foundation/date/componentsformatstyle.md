> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/date/componentsformatstyle](https://developer.apple.com/documentation/foundation/date/componentsformatstyle)

# Date.ComponentsFormatStyle

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A style for formatting a date interval in terms of specific date components.

## Declaration

```swift
struct ComponentsFormatStyle
```

## Topics

### Structures

- [Date.ComponentsFormatStyle.Field](componentsformatstyle/field.md)
- [Date.ComponentsFormatStyle.Style](componentsformatstyle/style-swift.struct.md)

### Initializers

- [init(style:locale:calendar:fields:)](componentsformatstyle/init%28style_locale_calendar_fields_%29.md): Shows the date interval with the specified style and the specified date and time fields.

### Instance Properties

- [calendar](componentsformatstyle/calendar.md)
- [fields](componentsformatstyle/fields.md)
- [isPositive](componentsformatstyle/ispositive.md): Controls whether the format input is formatted as a positive or negative range.
- [locale](componentsformatstyle/locale.md)
- [style](componentsformatstyle/style-swift.property.md)

### Instance Methods

- [calendar(\_:)](componentsformatstyle/calendar%28__%29.md)

### Default Implementations

- [DiscreteFormatStyle Implementations](componentsformatstyle/discreteformatstyle-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [DiscreteFormatStyle](../discreteformatstyle.md)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [FormatStyle](../formatstyle.md)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Applying date and time styles

- [dateTime](../formatstyle/datetime.md): Conforms when `Self` is `Date.FormatStyle`. A style for formatting a date and time.
- [Date.FormatStyle](formatstyle.md): A structure that creates a locale-appropriate string representation of a date instance and converts strings of dates and times into date instances.
- [Date.ISO8601FormatStyle](iso8601formatstyle.md): A type that converts between dates and their ISO-8601 string representations.
- [verbatim(\_:locale:timeZone:calendar:)](../formatstyle/verbatim%28__locale_timezone_calendar_%29.md): Conforms when `Self` is `Date.VerbatimFormatStyle`. Returns a style for formatting a date with an explicitly-specified style.
- [Date.VerbatimFormatStyle](verbatimformatstyle.md): A style that formats a date with an explicitly-specified style.
- [interval](../formatstyle/interval.md): Conforms when `Self` is `Date.IntervalFormatStyle`. A style for formatting a date interval.
- [Date.IntervalFormatStyle](intervalformatstyle.md): A format style that creates string representations of date intervals.
- [relative(presentation:unitsStyle:)](../formatstyle/relative%28presentation_unitsstyle_%29.md): Conforms when `Self` is `Date.RelativeFormatStyle`. Returns a style for formatting a date as relative to the current date.
- [Date.RelativeFormatStyle](relativeformatstyle.md): A format style that forms locale-aware string representations of a relative date or time.
- [components(style:fields:)](../formatstyle/components%28style_fields_%29.md): Conforms when `Self` is `Date.ComponentsFormatStyle`. Returns a style for formatting a date interval in terms of specific date components.
