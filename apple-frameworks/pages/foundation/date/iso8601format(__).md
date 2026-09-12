> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/date/iso8601format(_:)](https://developer.apple.com/documentation/foundation/date/iso8601format(_:))

# ISO8601Format(\_:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Generates a locale-aware string representation of a date using the ISO 8601 date format.

## Declaration

```swift
func ISO8601Format(_ style: Date.ISO8601FormatStyle = .init()) -> String
```

## Parameters

- `style`: A customized [Date.ISO8601FormatStyle](iso8601formatstyle.md) to apply. By default, the method applies an unmodified ISO 8601 format style.

<a id="return-value"></a>

## Return Value

A string, formatted according to the specified style.

<a id="Discussion"></a>

## Discussion

Calling this method is equivalent to passing a [Date.ISO8601FormatStyle](iso8601formatstyle.md) to a date’s [formatted()](formatted%28%29.md) method.

## See Also

### Formatting a Date

- [formatted()](formatted%28%29.md): Generates a locale-aware string representation of a date using the default date format style.
- [formatted(date:time:)](formatted%28date_time_%29.md): Generates a locale-aware string representation of a date using specified date and time format styles.
- [formatted(\_:)](formatted%28__%29.md): Generates a locale-aware string representation of a date using the specified date format style.
- [Date.FormatStyle](formatstyle.md): A structure that creates a locale-appropriate string representation of a date instance and converts strings of dates and times into date instances.
- [Date.RelativeFormatStyle](relativeformatstyle.md): A format style that forms locale-aware string representations of a relative date or time.
- [Date.IntervalFormatStyle](intervalformatstyle.md): A format style that creates string representations of date intervals.
- [Date.ISO8601FormatStyle](iso8601formatstyle.md): A type that converts between dates and their ISO-8601 string representations.
