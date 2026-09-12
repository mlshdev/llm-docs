> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/date/iso8601formatstyle/timeseparator(_:)](https://developer.apple.com/documentation/foundation/date/iso8601formatstyle/timeseparator(_:))

# timeSeparator(\_:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Modifies the ISO 8601 date format style to use the specified time separator.

## Declaration

```swift
func timeSeparator(_ separator: Date.ISO8601FormatStyle.TimeSeparator) -> Date.ISO8601FormatStyle
```

## Parameters

- `separator`: Character used to separate the hour and minute in a date.

<a id="return-value"></a>

## Return Value

An ISO 8601 date format style modified to include the specified time separator style.

<a id="Discussion"></a>

## Discussion

Possible values of [Date.ISO8601FormatStyle.TimeSeparator](timeseparator-swift.enum.md) are [Date.ISO8601FormatStyle.TimeSeparator.colon](timeseparator-swift.enum/colon.md) and [Date.ISO8601FormatStyle.TimeSeparator.omitted](timeseparator-swift.enum/omitted.md).

This example shows a variety of ISO 8601 time separator formats applied to an ISO 8601 date format:

```swift
let meetingDate = Date() // Jun 23, 2021 at 1:41 PM
meetingDate.formatted(.iso8601.timeSeparator(.omitted)) // 20210623T184148Z
meetingDate.formatted(.iso8601.timeSeparator(.colon)) // 20210623T18:41:48Z
meetingDate.formatted(.iso8601) // 20210623T184148Z
```

If no format is specified as a parameter, the [Date.ISO8601FormatStyle.DateSeparator.omitted](dateseparator-swift.enum/omitted.md) case is the default format.

For more information about ISO 8601 formatted dates, see the [Date.ISO8601FormatStyle](../iso8601formatstyle.md).

## See Also

### Modifying Times in an ISO 8601 Format Style

- [time(includingFractionalSeconds:)](time%28includingfractionalseconds_%29.md): Modifies the ISO 8601 date format style to include the time in the formatted output.
- [timeZone(separator:)](timezone%28separator_%29.md): Modifies the ISO 8601 date format style to include the time zone in the formatted output.
- [timeZoneSeparator(\_:)](timezoneseparator%28__%29.md): Modifies the ISO 8601 date format style to use the specified time zone separator.
