> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/formatstyle/components(style:fields:)](https://developer.apple.com/documentation/foundation/formatstyle/components(style:fields:))

# components(style:fields:)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns a style for formatting a date interval in terms of specific date components.

## Declaration

```swift
static func components(style: Date.ComponentsFormatStyle.Style, fields: Set<Date.ComponentsFormatStyle.Field>? = nil) -> Self
```

## Parameters

- `style`: The style to use for the fields, such as [abbreviated](../date/componentsformatstyle/style-swift.struct/abbreviated.md) or [narrow](../date/componentsformatstyle/style-swift.struct/narrow.md).
- `fields`: A set of date component fields to include in the formatted output.

<a id="return-value"></a>

## Return Value

A date format style that uses the specified style and fields.

<a id="Discussion"></a>

## Discussion

Use this type method when the call point allows the use of [Date.ComponentsFormatStyle](../date/componentsformatstyle.md). You typically do this when calling the [formatted(\_:)](https://developer.apple.com/documentation/swift/range/formatted%28_:%29) method of a `Range<Date>`.

The following example creates a 120-day date range, and then uses a [Date.ComponentsFormatStyle](../date/componentsformatstyle.md) to express this as a count of weeks and days:

```swift
let date = Date()
let futureDate = Calendar.current.date(byAdding: .day, value: 120, to: date)!
let interval = (date..<futureDate)
let formatted = interval.formatted(
    .components(style: .wide,
                fields: [.week, .day])) // 17 weeks, 1 day
```

## See Also

### Applying date and time styles

- [dateTime](datetime.md): Conforms when `Self` is `Date.FormatStyle`. A style for formatting a date and time.
- [Date.FormatStyle](../date/formatstyle.md): A structure that creates a locale-appropriate string representation of a date instance and converts strings of dates and times into date instances.
- [Date.ISO8601FormatStyle](../date/iso8601formatstyle.md): A type that converts between dates and their ISO-8601 string representations.
- [verbatim(\_:locale:timeZone:calendar:)](verbatim%28__locale_timezone_calendar_%29.md): Conforms when `Self` is `Date.VerbatimFormatStyle`. Returns a style for formatting a date with an explicitly-specified style.
- [Date.VerbatimFormatStyle](../date/verbatimformatstyle.md): A style that formats a date with an explicitly-specified style.
- [interval](interval.md): Conforms when `Self` is `Date.IntervalFormatStyle`. A style for formatting a date interval.
- [Date.IntervalFormatStyle](../date/intervalformatstyle.md): A format style that creates string representations of date intervals.
- [relative(presentation:unitsStyle:)](relative%28presentation_unitsstyle_%29.md): Conforms when `Self` is `Date.RelativeFormatStyle`. Returns a style for formatting a date as relative to the current date.
- [Date.RelativeFormatStyle](../date/relativeformatstyle.md): A format style that forms locale-aware string representations of a relative date or time.
- [Date.ComponentsFormatStyle](../date/componentsformatstyle.md): A style for formatting a date interval in terms of specific date components.
