> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/timezone/secondsfromgmt(for:)](https://developer.apple.com/documentation/foundation/timezone/secondsfromgmt(for:))

# secondsFromGMT(for:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The current difference in seconds between the time zone and Greenwich Mean Time.

## Declaration

```swift
func secondsFromGMT(for date: Date = Date()) -> Int
```

## Parameters

- `date`: The date to use for the calculation. The default value is the current date.

## See Also

### Getting Time Zone Information

- [identifier](identifier.md): The geopolitical region identifier that identifies the time zone.
- [abbreviation(for:)](abbreviation%28for_%29.md): Returns the abbreviation for the time zone at a given date.
- [timeZoneDataVersion](timezonedataversion.md): Returns the time zone data version.
