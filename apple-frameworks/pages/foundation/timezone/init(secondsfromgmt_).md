> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/timezone/init(secondsfromgmt:)](https://developer.apple.com/documentation/foundation/timezone/init(secondsfromgmt:))

# init(secondsFromGMT:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a time zone initialized with a specific number of seconds from GMT.

## Declaration

```swift
init?(secondsFromGMT seconds: Int)
```

## Parameters

- `seconds`: The number of seconds from GMT.

<a id="return-value"></a>

## Return Value

A time zone, or `nil` if a valid time zone could not be created from `seconds`.

<a id="Discussion"></a>

## Discussion

Time zones created with this never have daylight savings and the offset is constant no matter the date. The identifier and abbreviation do NOT follow the POSIX convention (of minutes-west).

## See Also

### Creating a Time Zone

- [knownTimeZoneIdentifiers](knowntimezoneidentifiers.md): Returns an array of strings listing the identifier of all the time zones known to the system.
- [abbreviationDictionary](abbreviationdictionary.md): Returns the mapping of abbreviations to time zone identifiers.
