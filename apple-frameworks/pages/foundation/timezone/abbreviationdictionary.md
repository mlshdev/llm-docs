> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/timezone/abbreviationdictionary](https://developer.apple.com/documentation/foundation/timezone/abbreviationdictionary)

# abbreviationDictionary

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the mapping of abbreviations to time zone identifiers.

## Declaration

```swift
static var abbreviationDictionary: [String : String] { get set }
```

## See Also

### Creating a Time Zone

- [init(secondsFromGMT:)](init%28secondsfromgmt_%29.md): Returns a time zone initialized with a specific number of seconds from GMT.
- [knownTimeZoneIdentifiers](knowntimezoneidentifiers.md): Returns an array of strings listing the identifier of all the time zones known to the system.
