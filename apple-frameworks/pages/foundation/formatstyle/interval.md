> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/formatstyle/interval](https://developer.apple.com/documentation/foundation/formatstyle/interval)

# interval

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A style for formatting a date interval.

## Declaration

```swift
static var interval: Date.IntervalFormatStyle { get }
```

<a id="Discussion"></a>

## Discussion

Use this type property when the call point allows the use of [Date.IntervalFormatStyle](../date/intervalformatstyle.md). You typically do this when calling the [formatted(\_:)](https://developer.apple.com/documentation/swift/range/formatted%28_:%29) method of a `Range<Date>`.

The folllowing example uses [interval](interval.md) to create a date interval string with specific styling of the day, month, and weekday components, omitting the year and time.

```swift
if let today = Calendar.current.date(byAdding: .day, value: -120, to: Date()),
    let thirtyDaysBeforeToday = Calendar.current.date(byAdding: .day, value: -30, to: today) {
    // today: June 5, 2023
    // thirtyDaysBeforeToday: May 6, 2023

    // Create a Range<Date>.
    let last30days = thirtyDaysBeforeToday..<today

    let formatted = last30days.formatted(
        .interval
        .day()
        .month(.wide)
        .weekday(.abbreviated)
    ) // "Sat, May 6 – Mon, June 5"
}
```

## See Also

### Applying date and time styles

- [dateTime](datetime.md): Conforms when `Self` is `Date.FormatStyle`. A style for formatting a date and time.
- [Date.FormatStyle](../date/formatstyle.md): A structure that creates a locale-appropriate string representation of a date instance and converts strings of dates and times into date instances.
- [Date.ISO8601FormatStyle](../date/iso8601formatstyle.md): A type that converts between dates and their ISO-8601 string representations.
- [verbatim(\_:locale:timeZone:calendar:)](verbatim%28__locale_timezone_calendar_%29.md): Conforms when `Self` is `Date.VerbatimFormatStyle`. Returns a style for formatting a date with an explicitly-specified style.
- [Date.VerbatimFormatStyle](../date/verbatimformatstyle.md): A style that formats a date with an explicitly-specified style.
- [Date.IntervalFormatStyle](../date/intervalformatstyle.md): A format style that creates string representations of date intervals.
- [relative(presentation:unitsStyle:)](relative%28presentation_unitsstyle_%29.md): Conforms when `Self` is `Date.RelativeFormatStyle`. Returns a style for formatting a date as relative to the current date.
- [Date.RelativeFormatStyle](../date/relativeformatstyle.md): A format style that forms locale-aware string representations of a relative date or time.
- [components(style:fields:)](components%28style_fields_%29.md): Conforms when `Self` is `Date.ComponentsFormatStyle`. Returns a style for formatting a date interval in terms of specific date components.
- [Date.ComponentsFormatStyle](../date/componentsformatstyle.md): A style for formatting a date interval in terms of specific date components.
