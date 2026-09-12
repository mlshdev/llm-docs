> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/date/iso8601formatstyle/year()](https://developer.apple.com/documentation/foundation/date/iso8601formatstyle/year())

# year()

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Modifies the ISO 8601 date format style to include the year in the formatted output.

## Declaration

```swift
func year() -> Date.ISO8601FormatStyle
```

<a id="return-value"></a>

## Return Value

An ISO 8601 date format style modified to include the year.

<a id="Discussion"></a>

## Discussion

This example shows an ISO 8601 format with, and without, a year.

```swift
let meetingDate = Date() // Jun 23, 2021 at 12:51 PM
meetingDate.formatted(.iso8601
    .year()
    .month()
    .day()
) 
// 20210623

meetingDate.formatted(.iso8601
    .month()
    .day()
) 
// 0623
```

The default [Date.ISO8601FormatStyle](../iso8601formatstyle.md) includes the year.

For more information about formatting dates, see the [Date.FormatStyle](../formatstyle.md).

## See Also

### Modifying Dates in an ISO 8601 Format Style

- [dateSeparator(\_:)](dateseparator%28__%29.md): Modifies the ISO 8601 date format style to use the specified date separator.
- [month()](month%28%29.md): Modifies the ISO 8601 date format style to include the month in the formatted output.
- [weekOfYear()](weekofyear%28%29.md): Modifies the ISO 8601 date format style to include the week of the year in the formatted output.
- [day()](day%28%29.md): Modifies the ISO 8601 date format style to include the day in the formatted output.
