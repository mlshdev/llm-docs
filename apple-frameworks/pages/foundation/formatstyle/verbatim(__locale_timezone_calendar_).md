> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/formatstyle/verbatim(_:locale:timezone:calendar:)](https://developer.apple.com/documentation/foundation/formatstyle/verbatim(_:locale:timezone:calendar:))

# verbatim(\_:locale:timeZone:calendar:)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns a style for formatting a date with an explicitly-specified style.

## Declaration

```swift
static func verbatim(_ format: Date.FormatString, locale: Locale? = nil, timeZone: TimeZone, calendar: Calendar) -> Date.VerbatimFormatStyle
```

## Parameters

- `format`: A [Date.FormatString](../date/formatstring.md) that provides the explicit components and their respective styles to use when formatting a date.
- `locale`: The locale to use when formatting. Defaults to `nil`.
- `timeZone`: The time zone to use when formatting.
- `calendar`: The calendar to use when formatting.

<a id="return-value"></a>

## Return Value

A date format style that uses the provided format string and timekeeping parameters.

<a id="Discussion"></a>

## Discussion

Use this format style only when you need to produce or parse an exact format, such as when working with programmatically-produced date strings. For formatting dates that people read, use [dateTime](datetime.md) to get a localized [Date.FormatStyle](../date/formatstyle.md) instead. To use the ISO-8601 standard, use `FormatStyle/iso8601` to get a [Date.ISO8601FormatStyle](../date/iso8601formatstyle.md).

Use the dot-notation form of this type method when the call point allows the use of [Date.VerbatimFormatStyle](../date/verbatimformatstyle.md). You typically do this when calling the [formatted(\_:)](../date/formatted%28__%29.md) method of [Date](../date.md).

The following example formats the current date with a verbatim format that uses a two-digit month, two-digit day, and default-digits year, separated by slashes. The format style zero-pads the month and day components. This style isn’t localized — while this format string mimicks `en_US` conventions, it uses this format in any locale, ignoring locale-apporpriate conventions.

```swift
let date = Date()
let formatted = date.formatted(
    .verbatim("\(month: .twoDigits)/\(day: .twoDigits)/\(year: .defaultDigits)" as Date.FormatString,
              locale: .autoupdatingCurrent,
              timeZone: .current,
              calendar: .current)) // 12/05/2022
```

## See Also

### Applying date and time styles

- [dateTime](datetime.md): Conforms when `Self` is `Date.FormatStyle`. A style for formatting a date and time.
- [Date.FormatStyle](../date/formatstyle.md): A structure that creates a locale-appropriate string representation of a date instance and converts strings of dates and times into date instances.
- [Date.ISO8601FormatStyle](../date/iso8601formatstyle.md): A type that converts between dates and their ISO-8601 string representations.
- [Date.VerbatimFormatStyle](../date/verbatimformatstyle.md): A style that formats a date with an explicitly-specified style.
- [interval](interval.md): Conforms when `Self` is `Date.IntervalFormatStyle`. A style for formatting a date interval.
- [Date.IntervalFormatStyle](../date/intervalformatstyle.md): A format style that creates string representations of date intervals.
- [relative(presentation:unitsStyle:)](relative%28presentation_unitsstyle_%29.md): Conforms when `Self` is `Date.RelativeFormatStyle`. Returns a style for formatting a date as relative to the current date.
- [Date.RelativeFormatStyle](../date/relativeformatstyle.md): A format style that forms locale-aware string representations of a relative date or time.
- [components(style:fields:)](components%28style_fields_%29.md): Conforms when `Self` is `Date.ComponentsFormatStyle`. Returns a style for formatting a date interval in terms of specific date components.
- [Date.ComponentsFormatStyle](../date/componentsformatstyle.md): A style for formatting a date interval in terms of specific date components.
