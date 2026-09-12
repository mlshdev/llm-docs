> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/formatstyle/relative(presentation:unitsstyle:)](https://developer.apple.com/documentation/foundation/formatstyle/relative(presentation:unitsstyle:))

# relative(presentation:unitsStyle:)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns a style for formatting a date as relative to the current date.

## Declaration

```swift
static func relative(presentation: Date.RelativeFormatStyle.Presentation, unitsStyle: Date.RelativeFormatStyle.UnitsStyle = .wide) -> Self
```

## Parameters

- `presentation`: The style to use when describing a relative date; for example, “1 day ago” or “yesterday”.
- `unitsStyle`: The style to use when formatting the quantity or the name of the unit; for example, “1 day ago” or “one day ago”.

<a id="return-value"></a>

## Return Value

A relative date format style customized with the specified presentation and unit styles.

<a id="Discussion"></a>

## Discussion

Use this static method when the call point allows the use of [Date.RelativeFormatStyle](../date/relativeformatstyle.md). You typically do this when calling the [formatted(\_:)](../date/formatted%28__%29.md) method of [Date](../date.md).

The following example shows the [relative(presentation:unitsStyle:)](relative%28presentation_unitsstyle_%29.md) relative format style with two different presentations.

```swift
if let past = Calendar.current.date(byAdding: .day, value: -7, to: Date()) {
    let formattedNumeric = past.formatted(
        .relative(presentation: .numeric)) // "1 week ago"
    let formattedNamed = past.formatted(
        .relative(presentation: .named)) // "last week"
}
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
- [Date.RelativeFormatStyle](../date/relativeformatstyle.md): A format style that forms locale-aware string representations of a relative date or time.
- [components(style:fields:)](components%28style_fields_%29.md): Conforms when `Self` is `Date.ComponentsFormatStyle`. Returns a style for formatting a date interval in terms of specific date components.
- [Date.ComponentsFormatStyle](../date/componentsformatstyle.md): A style for formatting a date interval in terms of specific date components.
