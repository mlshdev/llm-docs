> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/date/iso8601formatstyle/timezoneseparator(_:)](https://developer.apple.com/documentation/foundation/date/iso8601formatstyle/timezoneseparator(_:))

# timeZoneSeparator(\_:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Modifies the ISO 8601 date format style to use the specified time zone separator.

## Declaration

```swift
func timeZoneSeparator(_ separator: Date.ISO8601FormatStyle.TimeZoneSeparator) -> Date.ISO8601FormatStyle
```

## Parameters

- `separator`: Character used to separate the time and time zone in a date.

<a id="return-value"></a>

## Return Value

An ISO 8601 date format style modified to include the specified time zone separator style.

<a id="Discussion"></a>

## Discussion

Possible values of [Date.ISO8601FormatStyle.TimeZoneSeparator](timezoneseparator-swift.enum.md) are [Date.ISO8601FormatStyle.TimeZoneSeparator.colon](timezoneseparator-swift.enum/colon.md) and [Date.ISO8601FormatStyle.TimeZoneSeparator.omitted](timezoneseparator-swift.enum/omitted.md).

For more information about ISO 8601 formatted dates, see the [Date.ISO8601FormatStyle](../iso8601formatstyle.md).

## See Also

### Modifying Times in an ISO 8601 Format Style

- [time(includingFractionalSeconds:)](time%28includingfractionalseconds_%29.md): Modifies the ISO 8601 date format style to include the time in the formatted output.
- [timeSeparator(\_:)](timeseparator%28__%29.md): Modifies the ISO 8601 date format style to use the specified time separator.
- [timeZone(separator:)](timezone%28separator_%29.md): Modifies the ISO 8601 date format style to include the time zone in the formatted output.
