> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/date/iso8601formatstyle/day()](https://developer.apple.com/documentation/foundation/date/iso8601formatstyle/day())

# day()

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Modifies the ISO 8601 date format style to include the day in the formatted output.

## Declaration

```swift
func day() -> Date.ISO8601FormatStyle
```

<a id="return-value"></a>

## Return Value

An ISO 8601 date format style modified to include the day.

<a id="Discussion"></a>

## Discussion

The following example shows an ISO 8601 format with, and without, a day.

```swift
let meetingDate = Date() // Jun 23, 2021 at 12:51 PM
meetingDate.formatted(.iso8601
    .year()
    .month()
)
// 202106

meetingDate.formatted(.iso8601
    .year()
    .day()
) 
// 2021174

meetingDate.formatted(.iso8601
    .year()
    .month()
    .day()
) 
// 20210623
```

If `month()` isn’t included in the format and `day()` is, the format represents the day as the ordinal date.

The default [Date.ISO8601FormatStyle](../iso8601formatstyle.md) includes the day.

For more information about formatting dates, see the [Date.FormatStyle](../formatstyle.md).

## See Also

### Modifying Dates in an ISO 8601 Format Style

- [dateSeparator(\_:)](dateseparator%28__%29.md): Modifies the ISO 8601 date format style to use the specified date separator.
- [year()](year%28%29.md): Modifies the ISO 8601 date format style to include the year in the formatted output.
- [month()](month%28%29.md): Modifies the ISO 8601 date format style to include the month in the formatted output.
- [weekOfYear()](weekofyear%28%29.md): Modifies the ISO 8601 date format style to include the week of the year in the formatted output.
