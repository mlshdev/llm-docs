> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cftimezonegetdaylightsavingtimeoffset(_:_:)](https://developer.apple.com/documentation/corefoundation/cftimezonegetdaylightsavingtimeoffset(_:_:))

# CFTimeZoneGetDaylightSavingTimeOffset(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the daylight saving time offset for a time zone at a given time.

## Declaration

```swift
func CFTimeZoneGetDaylightSavingTimeOffset(_ tz: CFTimeZone!, _ at: CFAbsoluteTime) -> CFTimeInterval
```

## Parameters

- `tz`: The time zone to analyze.
- `at`: The time in `tz` to test for daylight saving time offset.

<a id="return-value"></a>

## Return Value

The daylight saving time offset for `tz` at `at`.

## See Also

### Getting Daylight Savings Time Information

- [CFTimeZoneIsDaylightSavingTime(\_:\_:)](cftimezoneisdaylightsavingtime%28____%29.md): Returns whether or not a time zone is in daylight savings time at a specified date.
- [CFTimeZoneGetNextDaylightSavingTimeTransition(\_:\_:)](cftimezonegetnextdaylightsavingtimetransition%28____%29.md): Returns the time in a given time zone of the next daylight saving time transition after a given time.

# CFTimeZoneGetDaylightSavingTimeOffset (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the daylight saving time offset for a time zone at a given time.

## Declaration

```objectivec
extern CFTimeInterval CFTimeZoneGetDaylightSavingTimeOffset(CFTimeZoneRef tz, CFAbsoluteTime at);
```

## Parameters

- `tz`: The time zone to analyze.
- `at`: The time in `tz` to test for daylight saving time offset.

<a id="return-value"></a>

## Return Value

The daylight saving time offset for `tz` at `at`.

## See Also

### Getting Daylight Savings Time Information

- [CFTimeZoneIsDaylightSavingTime](cftimezoneisdaylightsavingtime%28____%29.md): Returns whether or not a time zone is in daylight savings time at a specified date.
- [CFTimeZoneGetNextDaylightSavingTimeTransition](cftimezonegetnextdaylightsavingtimetransition%28____%29.md): Returns the time in a given time zone of the next daylight saving time transition after a given time.
