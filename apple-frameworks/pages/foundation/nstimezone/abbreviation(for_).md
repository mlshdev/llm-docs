> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nstimezone/abbreviation(for:)](https://developer.apple.com/documentation/foundation/nstimezone/abbreviation(for:))

# abbreviation(for:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the abbreviation for the receiver at a given date.

## Declaration

```swift
func abbreviation(for aDate: Date) -> String?
```

## Parameters

- `aDate`: The date for which to get the abbreviation for the receiver.

<a id="return-value"></a>

## Return Value

The abbreviation for the receiver at `aDate`.

<a id="Discussion"></a>

## Discussion

Note that the abbreviation may be different at different dates. For example, during daylight saving time the US/Eastern time zone has an abbreviation of “EDT.” At other times, its abbreviation is “EST.”

## See Also

### Getting Time Zone Information

- [name](name.md): The geopolitical region ID that identifies the receiver.
- [abbreviation](abbreviation.md): The abbreviation for the receiver, such as “EDT” (Eastern Daylight Time).
- [secondsFromGMT](secondsfromgmt.md): The current difference in seconds between the receiver and Greenwich Mean Time.
- [secondsFromGMT(for:)](secondsfromgmt%28for_%29.md): Returns the difference in seconds between the receiver and Greenwich Mean Time at a given date.
- [data](data.md): The data that stores the information used by the receiver.
- [timeZoneDataVersion](timezonedataversion.md): Returns the time zone data version.
- [NSTimeZone.NameStyle](namestyle.md): Constants you use to specify a style when presenting time zone names.

# abbreviationForDate: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the abbreviation for the receiver at a given date.

## Declaration

```objectivec
- (NSString *) abbreviationForDate:(NSDate *) aDate;
```

## Parameters

- `aDate`: The date for which to get the abbreviation for the receiver.

<a id="return-value"></a>

## Return Value

The abbreviation for the receiver at `aDate`.

<a id="Discussion"></a>

## Discussion

Note that the abbreviation may be different at different dates. For example, during daylight saving time the US/Eastern time zone has an abbreviation of “EDT.” At other times, its abbreviation is “EST.”

## See Also

### Getting Time Zone Information

- [name](name.md): The geopolitical region ID that identifies the receiver.
- [abbreviation](abbreviation.md): The abbreviation for the receiver, such as “EDT” (Eastern Daylight Time).
- [secondsFromGMT](secondsfromgmt.md): The current difference in seconds between the receiver and Greenwich Mean Time.
- [secondsFromGMTForDate:](secondsfromgmt%28for_%29.md): Returns the difference in seconds between the receiver and Greenwich Mean Time at a given date.
- [data](data.md): The data that stores the information used by the receiver.
- [timeZoneDataVersion](timezonedataversion.md): Returns the time zone data version.
- [NSTimeZoneNameStyle](namestyle.md): Constants you use to specify a style when presenting time zone names.
