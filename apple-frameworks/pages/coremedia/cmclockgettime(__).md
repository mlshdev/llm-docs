> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmclockgettime(_:)](https://developer.apple.com/documentation/coremedia/cmclockgettime(_:))

# CMClockGetTime(\_:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns the current time from a clock.

## Declaration

```swift
func CMClockGetTime(_ clock: CMClock) -> CMTime
```

## Parameters

- `clock`: The clock to retrieve the current time from.

## See Also

### Accessing and Converting Time

- [CMClockGetAnchorTime(\_:clockTimeOut:referenceClockTimeOut:)](cmclockgetanchortime%28__clocktimeout_referenceclocktimeout_%29.md): Returns the current time from a clock and the matching time from the clock’s reference clock.
- [CMClockConvertHostTimeToSystemUnits(\_:)](cmclockconverthosttimetosystemunits%28__%29.md): Converts a host time from a core media time structure to the host time’s native units.
- [CMClockMakeHostTimeFromSystemUnits(\_:)](cmclockmakehosttimefromsystemunits%28__%29.md): Converts a host time from native units to a core media time structure.

# CMClockGetTime (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns the current time from a clock.

## Declaration

```objectivec
extern CMTime CMClockGetTime(CMClockRef clock);
```

## Parameters

- `clock`: The clock to retrieve the current time from.

## See Also

### Accessing and Converting Time

- [CMClockGetAnchorTime](cmclockgetanchortime%28__clocktimeout_referenceclocktimeout_%29.md): Returns the current time from a clock and the matching time from the clock’s reference clock.
- [CMClockConvertHostTimeToSystemUnits](cmclockconverthosttimetosystemunits%28__%29.md): Converts a host time from a core media time structure to the host time’s native units.
- [CMClockMakeHostTimeFromSystemUnits](cmclockmakehosttimefromsystemunits%28__%29.md): Converts a host time from native units to a core media time structure.
