> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nstimezone/name](https://developer.apple.com/documentation/foundation/nstimezone/name)

# name (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The geopolitical region ID that identifies the receiver.

## Declaration

```swift
var name: String { get }
```

## See Also

### Getting Time Zone Information

- [abbreviation](abbreviation.md): The abbreviation for the receiver, such as “EDT” (Eastern Daylight Time).
- [abbreviation(for:)](abbreviation%28for_%29.md): Returns the abbreviation for the receiver at a given date.
- [secondsFromGMT](secondsfromgmt.md): The current difference in seconds between the receiver and Greenwich Mean Time.
- [secondsFromGMT(for:)](secondsfromgmt%28for_%29.md): Returns the difference in seconds between the receiver and Greenwich Mean Time at a given date.
- [data](data.md): The data that stores the information used by the receiver.
- [timeZoneDataVersion](timezonedataversion.md): Returns the time zone data version.
- [NSTimeZone.NameStyle](namestyle.md): Constants you use to specify a style when presenting time zone names.

# name (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The geopolitical region ID that identifies the receiver.

## Declaration

```objectivec
@property (copy, readonly) NSString * name;
```

## See Also

### Getting Time Zone Information

- [abbreviation](abbreviation.md): The abbreviation for the receiver, such as “EDT” (Eastern Daylight Time).
- [abbreviationForDate:](abbreviation%28for_%29.md): Returns the abbreviation for the receiver at a given date.
- [secondsFromGMT](secondsfromgmt.md): The current difference in seconds between the receiver and Greenwich Mean Time.
- [secondsFromGMTForDate:](secondsfromgmt%28for_%29.md): Returns the difference in seconds between the receiver and Greenwich Mean Time at a given date.
- [data](data.md): The data that stores the information used by the receiver.
- [timeZoneDataVersion](timezonedataversion.md): Returns the time zone data version.
- [NSTimeZoneNameStyle](namestyle.md): Constants you use to specify a style when presenting time zone names.
