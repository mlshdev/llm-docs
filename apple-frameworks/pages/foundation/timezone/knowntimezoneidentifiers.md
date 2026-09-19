> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/timezone/knowntimezoneidentifiers

# knownTimeZoneIdentifiers

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an array of strings listing the identifier of all the time zones known to the system.

## Declaration

```swift
static var knownTimeZoneIdentifiers: [String] { get }
```

## See Also

### Creating a Time Zone

- [init(secondsFromGMT:)](init%28secondsfromgmt_%29.md): Returns a time zone initialized with a specific number of seconds from GMT.
- [abbreviationDictionary](abbreviationdictionary.md): Returns the mapping of abbreviations to time zone identifiers.
