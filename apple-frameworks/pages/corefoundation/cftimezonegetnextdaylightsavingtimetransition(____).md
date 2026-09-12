> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cftimezonegetnextdaylightsavingtimetransition(_:_:)](https://developer.apple.com/documentation/corefoundation/cftimezonegetnextdaylightsavingtimetransition(_:_:))

# CFTimeZoneGetNextDaylightSavingTimeTransition(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the time in a given time zone of the next daylight saving time transition after a given time.

## Declaration

```swift
func CFTimeZoneGetNextDaylightSavingTimeTransition(_ tz: CFTimeZone!, _ at: CFAbsoluteTime) -> CFAbsoluteTime
```

## Parameters

- `tz`: The time zone to analyze.
- `at`: A time in `tz`.

<a id="return-value"></a>

## Return Value

The time in `tz` of the next daylight saving time transition after `at`.

## See Also

### Getting Daylight Savings Time Information

- [CFTimeZoneIsDaylightSavingTime(\_:\_:)](cftimezoneisdaylightsavingtime%28____%29.md): Returns whether or not a time zone is in daylight savings time at a specified date.
- [CFTimeZoneGetDaylightSavingTimeOffset(\_:\_:)](cftimezonegetdaylightsavingtimeoffset%28____%29.md): Returns the daylight saving time offset for a time zone at a given time.

# CFTimeZoneGetNextDaylightSavingTimeTransition (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the time in a given time zone of the next daylight saving time transition after a given time.

## Declaration

```objectivec
extern CFAbsoluteTime CFTimeZoneGetNextDaylightSavingTimeTransition(CFTimeZoneRef tz, CFAbsoluteTime at);
```

## Parameters

- `tz`: The time zone to analyze.
- `at`: A time in `tz`.

<a id="return-value"></a>

## Return Value

The time in `tz` of the next daylight saving time transition after `at`.

## See Also

### Getting Daylight Savings Time Information

- [CFTimeZoneIsDaylightSavingTime](cftimezoneisdaylightsavingtime%28____%29.md): Returns whether or not a time zone is in daylight savings time at a specified date.
- [CFTimeZoneGetDaylightSavingTimeOffset](cftimezonegetdaylightsavingtimeoffset%28____%29.md): Returns the daylight saving time offset for a time zone at a given time.
