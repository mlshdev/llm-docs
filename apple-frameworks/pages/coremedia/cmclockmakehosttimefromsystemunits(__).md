> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmclockmakehosttimefromsystemunits(_:)](https://developer.apple.com/documentation/coremedia/cmclockmakehosttimefromsystemunits(_:))

# CMClockMakeHostTimeFromSystemUnits(\_:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Converts a host time from native units to a core media time structure.

## Declaration

```swift
func CMClockMakeHostTimeFromSystemUnits(_ hostTime: UInt64) -> CMTime
```

## Parameters

- `hostTime`: The host time, in native units, to convert.

<a id="Discussion"></a>

## Discussion

The return value has a large integer timescale (for example, nanoseconds). This function handles situations where the host time’s native units use a non-integer timescale.

In macOS, this function converts from the units of `mach_absolute_time`.

## See Also

### Accessing and Converting Time

- [CMClockGetTime(\_:)](cmclockgettime%28__%29.md): Returns the current time from a clock.
- [CMClockGetAnchorTime(\_:clockTimeOut:referenceClockTimeOut:)](cmclockgetanchortime%28__clocktimeout_referenceclocktimeout_%29.md): Returns the current time from a clock and the matching time from the clock’s reference clock.
- [CMClockConvertHostTimeToSystemUnits(\_:)](cmclockconverthosttimetosystemunits%28__%29.md): Converts a host time from a core media time structure to the host time’s native units.

# CMClockMakeHostTimeFromSystemUnits (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Converts a host time from native units to a core media time structure.

## Declaration

```objectivec
extern CMTime CMClockMakeHostTimeFromSystemUnits(uint64_t hostTime);
```

## Parameters

- `hostTime`: The host time, in native units, to convert.

<a id="Discussion"></a>

## Discussion

The return value has a large integer timescale (for example, nanoseconds). This function handles situations where the host time’s native units use a non-integer timescale.

In macOS, this function converts from the units of `mach_absolute_time`.

## See Also

### Accessing and Converting Time

- [CMClockGetTime](cmclockgettime%28__%29.md): Returns the current time from a clock.
- [CMClockGetAnchorTime](cmclockgetanchortime%28__clocktimeout_referenceclocktimeout_%29.md): Returns the current time from a clock and the matching time from the clock’s reference clock.
- [CMClockConvertHostTimeToSystemUnits](cmclockconverthosttimetosystemunits%28__%29.md): Converts a host time from a core media time structure to the host time’s native units.
