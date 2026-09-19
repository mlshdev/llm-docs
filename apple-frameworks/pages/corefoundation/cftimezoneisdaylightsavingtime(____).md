> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corefoundation/cftimezoneisdaylightsavingtime(_:_:)

# CFTimeZoneIsDaylightSavingTime(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns whether or not a time zone is in daylight savings time at a specified date.

## Declaration

```swift
func CFTimeZoneIsDaylightSavingTime(_ tz: CFTimeZone!, _ at: CFAbsoluteTime) -> Bool
```

## Parameters

- `tz`: The time zone to analyze.
- `at`: The date in `tz` to test for daylight savings.

<a id="return-value"></a>

## Return Value

`true` if `tz` is in daylight savings time at `at`, otherwise `false`.

## See Also

### Getting Daylight Savings Time Information

- [CFTimeZoneGetDaylightSavingTimeOffset(\_:\_:)](cftimezonegetdaylightsavingtimeoffset%28____%29.md): Returns the daylight saving time offset for a time zone at a given time.
- [CFTimeZoneGetNextDaylightSavingTimeTransition(\_:\_:)](cftimezonegetnextdaylightsavingtimetransition%28____%29.md): Returns the time in a given time zone of the next daylight saving time transition after a given time.

# CFTimeZoneIsDaylightSavingTime (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns whether or not a time zone is in daylight savings time at a specified date.

## Declaration

```objectivec
extern Boolean CFTimeZoneIsDaylightSavingTime(CFTimeZoneRef tz, CFAbsoluteTime at);
```

## Parameters

- `tz`: The time zone to analyze.
- `at`: The date in `tz` to test for daylight savings.

<a id="return-value"></a>

## Return Value

`true` if `tz` is in daylight savings time at `at`, otherwise `false`.

## See Also

### Getting Daylight Savings Time Information

- [CFTimeZoneGetDaylightSavingTimeOffset](cftimezonegetdaylightsavingtimeoffset%28____%29.md): Returns the daylight saving time offset for a time zone at a given time.
- [CFTimeZoneGetNextDaylightSavingTimeTransition](cftimezonegetnextdaylightsavingtimetransition%28____%29.md): Returns the time in a given time zone of the next daylight saving time transition after a given time.
