> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/timezone/abbreviation(for:)](https://developer.apple.com/documentation/foundation/timezone/abbreviation(for:))

# abbreviation(for:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the abbreviation for the time zone at a given date.

## Declaration

```swift
func abbreviation(for date: Date = Date()) -> String?
```

## Parameters

- `date`: The date to use for the calculation. The default value is the current date.

<a id="Discussion"></a>

## Discussion

Note that the abbreviation may be different at different dates. For example, during daylight saving time the US/Eastern time zone has an abbreviation of “EDT.” At other times, its abbreviation is “EST.”

## See Also

### Getting Time Zone Information

- [identifier](identifier.md): The geopolitical region identifier that identifies the time zone.
- [secondsFromGMT(for:)](secondsfromgmt%28for_%29.md): The current difference in seconds between the time zone and Greenwich Mean Time.
- [timeZoneDataVersion](timezonedataversion.md): Returns the time zone data version.
