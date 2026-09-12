> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/date/iso8601formatstyle/timezone(separator:)](https://developer.apple.com/documentation/foundation/date/iso8601formatstyle/timezone(separator:))

# timeZone(separator:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Modifies the ISO 8601 date format style to include the time zone in the formatted output.

## Declaration

```swift
func timeZone(separator: Date.ISO8601FormatStyle.TimeZoneSeparator) -> Date.ISO8601FormatStyle
```

## Parameters

- `separator`: Character used to separate the time and time zone in a date.

<a id="return-value"></a>

## Return Value

An ISO 8601 date format style modified to include the time zone.

<a id="Discussion"></a>

## Discussion

The default [Date.ISO8601FormatStyle](../iso8601formatstyle.md) doesn’t include the time zone.

For more information about formatting dates, see the [Date.FormatStyle](../formatstyle.md).

## See Also

### Modifying Times in an ISO 8601 Format Style

- [time(includingFractionalSeconds:)](time%28includingfractionalseconds_%29.md): Modifies the ISO 8601 date format style to include the time in the formatted output.
- [timeSeparator(\_:)](timeseparator%28__%29.md): Modifies the ISO 8601 date format style to use the specified time separator.
- [timeZoneSeparator(\_:)](timezoneseparator%28__%29.md): Modifies the ISO 8601 date format style to use the specified time zone separator.
