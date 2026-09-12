> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/date/formatted(date:time:)](https://developer.apple.com/documentation/foundation/date/formatted(date:time:))

# formatted(date:time:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Generates a locale-aware string representation of a date using specified date and time format styles.

## Declaration

```swift
func formatted(date: Date.FormatStyle.DateStyle, time: Date.FormatStyle.TimeStyle) -> String
```

## Parameters

- `date`: The date format style to apply to the date.
- `time`: The time format style to apply to the date.

<a id="return-value"></a>

## Return Value

A string, formatted according to the specified date and time styles.

<a id="Discussion"></a>

## Discussion

When displaying a date to a user, use the convenient [formatted(date:time:)](formatted%28date_time_%29.md) instance method to customize the string representation of the date. Set the date and time styles of the date format style separately, according to your particular needs.

For example, to create a string with a full date and no time representation, set the [Date.FormatStyle.DateStyle](formatstyle/datestyle.md) to [complete](formatstyle/datestyle/complete.md) and the [Date.FormatStyle.TimeStyle](formatstyle/timestyle.md) to [omitted](formatstyle/timestyle/omitted.md). Conversely, to create a string representing only the time, set the date style to [omitted](formatstyle/datestyle/omitted.md) and the time style to [complete](formatstyle/timestyle/complete.md).

```swift
let birthday = Date()

birthday.formatted(date: .complete, time: .omitted) // Sunday, January 17, 2021
birthday.formatted(date: .omitted, time: .complete) // 4:03:12 PM CST
```

You can create string representations of a [Date](../date.md) instance with several levels of brevity using a variety of preset date and time styles. This example shows date styles of [long](formatstyle/datestyle/long.md), [abbreviated](formatstyle/datestyle/abbreviated.md), and [numeric](formatstyle/datestyle/numeric.md), and time styles of [shortened](formatstyle/timestyle/shortened.md), [standard](formatstyle/timestyle/standard.md), and [complete](formatstyle/timestyle/complete.md).

```swift
let birthday = Date()

birthday.formatted(date: .long, time: .shortened) // January 17, 2021, 4:03 PM
birthday.formatted(date: .abbreviated, time: .standard) // Jan 17, 2021, 4:03:12 PM
birthday.formatted(date: .numeric, time: .complete) // 1/17/2021, 4:03:12 PM CST

birthday.formatted() // Jan 17, 2021, 4:03 PM
```

The default date style is [abbreviated](formatstyle/datestyle/abbreviated.md) and the default time style is [shortened](formatstyle/timestyle/shortened.md).

For the default date formatting, use the [formatted()](formatted%28%29.md) method. To customize the formatted measurement string, use the [formatted(\_:)](formatted%28__%29.md) method and include a `Date.FormatStyle`.

For more information about formatting dates, see the [Date.FormatStyle](formatstyle.md).

## See Also

### Formatting a Date

- [formatted()](formatted%28%29.md): Generates a locale-aware string representation of a date using the default date format style.
- [formatted(\_:)](formatted%28__%29.md): Generates a locale-aware string representation of a date using the specified date format style.
- [Date.FormatStyle](formatstyle.md): A structure that creates a locale-appropriate string representation of a date instance and converts strings of dates and times into date instances.
- [Date.RelativeFormatStyle](relativeformatstyle.md): A format style that forms locale-aware string representations of a relative date or time.
- [Date.IntervalFormatStyle](intervalformatstyle.md): A format style that creates string representations of date intervals.
- [ISO8601Format(\_:)](iso8601format%28__%29.md): Generates a locale-aware string representation of a date using the ISO 8601 date format.
- [Date.ISO8601FormatStyle](iso8601formatstyle.md): A type that converts between dates and their ISO-8601 string representations.
