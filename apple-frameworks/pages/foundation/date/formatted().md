> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/date/formatted()](https://developer.apple.com/documentation/foundation/date/formatted())

# formatted()

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Generates a locale-aware string representation of a date using the default date format style.

## Declaration

```swift
func formatted() -> String
```

<a id="return-value"></a>

## Return Value

A string, formatted according to the default style.

<a id="Discussion"></a>

## Discussion

Use the [formatted()](formatted%28%29.md) method to apply the default format style to a date, as in the following example:

```swift
let birthday = Date()
print(birthday.formatted())
// 6/4/2021, 2:24 PM
```

The default date format style uses the `numeric` date style and the `shortened` time style.

To customize the formatted measurement string, use either the [formatted(\_:)](formatted%28__%29.md) method and include a `Measurement.FormatStyle` or the [formatted(date:time:)](formatted%28date_time_%29.md) and include a date and time style.

For more information about formatting dates, see [Date.FormatStyle](formatstyle.md).

## See Also

### Formatting a Date

- [formatted(date:time:)](formatted%28date_time_%29.md): Generates a locale-aware string representation of a date using specified date and time format styles.
- [formatted(\_:)](formatted%28__%29.md): Generates a locale-aware string representation of a date using the specified date format style.
- [Date.FormatStyle](formatstyle.md): A structure that creates a locale-appropriate string representation of a date instance and converts strings of dates and times into date instances.
- [Date.RelativeFormatStyle](relativeformatstyle.md): A format style that forms locale-aware string representations of a relative date or time.
- [Date.IntervalFormatStyle](intervalformatstyle.md): A format style that creates string representations of date intervals.
- [ISO8601Format(\_:)](iso8601format%28__%29.md): Generates a locale-aware string representation of a date using the ISO 8601 date format.
- [Date.ISO8601FormatStyle](iso8601formatstyle.md): A type that converts between dates and their ISO-8601 string representations.
