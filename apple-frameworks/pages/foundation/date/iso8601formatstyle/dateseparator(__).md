> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/date/iso8601formatstyle/dateseparator(_:)](https://developer.apple.com/documentation/foundation/date/iso8601formatstyle/dateseparator(_:))

# dateSeparator(\_:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Modifies the ISO 8601 date format style to use the specified date separator.

## Declaration

```swift
func dateSeparator(_ separator: Date.ISO8601FormatStyle.DateSeparator) -> Date.ISO8601FormatStyle
```

## Parameters

- `separator`: Character used to separate the year, month, and day in a date.

<a id="return-value"></a>

## Return Value

An ISO 8601 date format style modified to include the specified date separator style.

<a id="Discussion"></a>

## Discussion

Possible values of [Date.ISO8601FormatStyle.DateSeparator](dateseparator-swift.enum.md) are [Date.ISO8601FormatStyle.DateSeparator.dash](dateseparator-swift.enum/dash.md) and [Date.ISO8601FormatStyle.DateSeparator.omitted](dateseparator-swift.enum/omitted.md).

The following example shows a variety of [Date.ISO8601FormatStyle.DateSeparator](dateseparator-swift.enum.md) formats applied to an ISO 8601 date format.

```swift
let meetingDate = Date() // Jun 23, 2021 at 6:13 AM
meetingDate.formatted(.iso8601.dateSeparator(.omitted)) // 20210623T111325Z
meetingDate.formatted(.iso8601.dateSeparator(.dash)) // 2021-06-23T111325Z
meetingDate.formatted(.iso8601) // 20210623T111325Z
```

If no format is specified as a parameter, the [Date.ISO8601FormatStyle.DateSeparator.omitted](dateseparator-swift.enum/omitted.md) case is the default format.

For more information about ISO 8601 formatted dates, see the [Date.ISO8601FormatStyle](../iso8601formatstyle.md).

## See Also

### Modifying Dates in an ISO 8601 Format Style

- [year()](year%28%29.md): Modifies the ISO 8601 date format style to include the year in the formatted output.
- [month()](month%28%29.md): Modifies the ISO 8601 date format style to include the month in the formatted output.
- [weekOfYear()](weekofyear%28%29.md): Modifies the ISO 8601 date format style to include the week of the year in the formatted output.
- [day()](day%28%29.md): Modifies the ISO 8601 date format style to include the day in the formatted output.
