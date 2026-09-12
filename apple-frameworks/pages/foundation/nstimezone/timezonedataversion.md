> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nstimezone/timezonedataversion](https://developer.apple.com/documentation/foundation/nstimezone/timezonedataversion)

# timeZoneDataVersion (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the time zone data version.

## Declaration

```swift
class var timeZoneDataVersion: String { get }
```

<a id="return-value"></a>

## Return Value

A string containing the time zone data version.

## See Also

### Getting Time Zone Information

- [name](name.md): The geopolitical region ID that identifies the receiver.
- [abbreviation](abbreviation.md): The abbreviation for the receiver, such as “EDT” (Eastern Daylight Time).
- [abbreviation(for:)](abbreviation%28for_%29.md): Returns the abbreviation for the receiver at a given date.
- [secondsFromGMT](secondsfromgmt.md): The current difference in seconds between the receiver and Greenwich Mean Time.
- [secondsFromGMT(for:)](secondsfromgmt%28for_%29.md): Returns the difference in seconds between the receiver and Greenwich Mean Time at a given date.
- [data](data.md): The data that stores the information used by the receiver.
- [NSTimeZone.NameStyle](namestyle.md): Constants you use to specify a style when presenting time zone names.

# timeZoneDataVersion (Objective-C)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the time zone data version.

## Declaration

```objectivec
@property (class, copy, readonly) NSString * timeZoneDataVersion;
```

<a id="return-value"></a>

## Return Value

A string containing the time zone data version.

## See Also

### Getting Time Zone Information

- [name](name.md): The geopolitical region ID that identifies the receiver.
- [abbreviation](abbreviation.md): The abbreviation for the receiver, such as “EDT” (Eastern Daylight Time).
- [abbreviationForDate:](abbreviation%28for_%29.md): Returns the abbreviation for the receiver at a given date.
- [secondsFromGMT](secondsfromgmt.md): The current difference in seconds between the receiver and Greenwich Mean Time.
- [secondsFromGMTForDate:](secondsfromgmt%28for_%29.md): Returns the difference in seconds between the receiver and Greenwich Mean Time at a given date.
- [data](data.md): The data that stores the information used by the receiver.
- [NSTimeZoneNameStyle](namestyle.md): Constants you use to specify a style when presenting time zone names.
