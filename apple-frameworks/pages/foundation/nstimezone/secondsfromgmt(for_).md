> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nstimezone/secondsfromgmt(for:)](https://developer.apple.com/documentation/foundation/nstimezone/secondsfromgmt(for:))

# secondsFromGMT(for:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the difference in seconds between the receiver and Greenwich Mean Time at a given date.

## Declaration

```swift
func secondsFromGMT(for aDate: Date) -> Int
```

## Parameters

- `aDate`: The date against which to test the receiver.

<a id="return-value"></a>

## Return Value

The difference in seconds between the receiver and Greenwich Mean Time at `aDate`.

<a id="Discussion"></a>

## Discussion

The difference may be different from the current difference if the time zone changes its offset from GMT at different points in the year—for example, the U.S. time zones change with daylight saving time.

## See Also

### Getting Time Zone Information

- [name](name.md): The geopolitical region ID that identifies the receiver.
- [abbreviation](abbreviation.md): The abbreviation for the receiver, such as “EDT” (Eastern Daylight Time).
- [abbreviation(for:)](abbreviation%28for_%29.md): Returns the abbreviation for the receiver at a given date.
- [secondsFromGMT](secondsfromgmt.md): The current difference in seconds between the receiver and Greenwich Mean Time.
- [data](data.md): The data that stores the information used by the receiver.
- [timeZoneDataVersion](timezonedataversion.md): Returns the time zone data version.
- [NSTimeZone.NameStyle](namestyle.md): Constants you use to specify a style when presenting time zone names.

# secondsFromGMTForDate: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the difference in seconds between the receiver and Greenwich Mean Time at a given date.

## Declaration

```objectivec
- (NSInteger) secondsFromGMTForDate:(NSDate *) aDate;
```

## Parameters

- `aDate`: The date against which to test the receiver.

<a id="return-value"></a>

## Return Value

The difference in seconds between the receiver and Greenwich Mean Time at `aDate`.

<a id="Discussion"></a>

## Discussion

The difference may be different from the current difference if the time zone changes its offset from GMT at different points in the year—for example, the U.S. time zones change with daylight saving time.

## See Also

### Getting Time Zone Information

- [name](name.md): The geopolitical region ID that identifies the receiver.
- [abbreviation](abbreviation.md): The abbreviation for the receiver, such as “EDT” (Eastern Daylight Time).
- [abbreviationForDate:](abbreviation%28for_%29.md): Returns the abbreviation for the receiver at a given date.
- [secondsFromGMT](secondsfromgmt.md): The current difference in seconds between the receiver and Greenwich Mean Time.
- [data](data.md): The data that stores the information used by the receiver.
- [timeZoneDataVersion](timezonedataversion.md): Returns the time zone data version.
- [NSTimeZoneNameStyle](namestyle.md): Constants you use to specify a style when presenting time zone names.
