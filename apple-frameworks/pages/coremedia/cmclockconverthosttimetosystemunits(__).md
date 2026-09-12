> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmclockconverthosttimetosystemunits(_:)](https://developer.apple.com/documentation/coremedia/cmclockconverthosttimetosystemunits(_:))

# CMClockConvertHostTimeToSystemUnits(\_:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Converts a host time from a core media time structure to the host time’s native units.

## Declaration

```swift
func CMClockConvertHostTimeToSystemUnits(_ hostTime: CMTime) -> UInt64
```

## Parameters

- `hostTime`: The host time to convert.

<a id="Discussion"></a>

## Discussion

This function performs a scale conversion, not a clock conversion. It can be more accurate than [CMTimeConvertScale(\_:timescale:method:)](cmtimeconvertscale%28__timescale_method_%29.md) because the system units may have a non-integer timescale.

In macOS, this function converts to the units of `mach_absolute_time`.

## See Also

### Accessing and Converting Time

- [CMClockGetTime(\_:)](cmclockgettime%28__%29.md): Returns the current time from a clock.
- [CMClockGetAnchorTime(\_:clockTimeOut:referenceClockTimeOut:)](cmclockgetanchortime%28__clocktimeout_referenceclocktimeout_%29.md): Returns the current time from a clock and the matching time from the clock’s reference clock.
- [CMClockMakeHostTimeFromSystemUnits(\_:)](cmclockmakehosttimefromsystemunits%28__%29.md): Converts a host time from native units to a core media time structure.

# CMClockConvertHostTimeToSystemUnits (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Converts a host time from a core media time structure to the host time’s native units.

## Declaration

```objectivec
extern uint64_t CMClockConvertHostTimeToSystemUnits(CMTime hostTime);
```

## Parameters

- `hostTime`: The host time to convert.

<a id="Discussion"></a>

## Discussion

This function performs a scale conversion, not a clock conversion. It can be more accurate than [CMTimeConvertScale](cmtimeconvertscale%28__timescale_method_%29.md) because the system units may have a non-integer timescale.

In macOS, this function converts to the units of `mach_absolute_time`.

## See Also

### Accessing and Converting Time

- [CMClockGetTime](cmclockgettime%28__%29.md): Returns the current time from a clock.
- [CMClockGetAnchorTime](cmclockgetanchortime%28__clocktimeout_referenceclocktimeout_%29.md): Returns the current time from a clock and the matching time from the clock’s reference clock.
- [CMClockMakeHostTimeFromSystemUnits](cmclockmakehosttimefromsystemunits%28__%29.md): Converts a host time from native units to a core media time structure.
