> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmclockgetanchortime(_:clocktimeout:referenceclocktimeout:)](https://developer.apple.com/documentation/coremedia/cmclockgetanchortime(_:clocktimeout:referenceclocktimeout:))

# CMClockGetAnchorTime(\_:clockTimeOut:referenceClockTimeOut:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns the current time from a clock and the matching time from the clock’s reference clock.

## Declaration

```swift
func CMClockGetAnchorTime(_ clock: CMClock, clockTimeOut: UnsafeMutablePointer<CMTime>, referenceClockTimeOut: UnsafeMutablePointer<CMTime>) -> OSStatus
```

## Parameters

- `clock`: The clock to retrieve the current time from.
- `clockTimeOut`: On output, points to the current time.
- `referenceClockTimeOut`: On output, points to the reference clock time.

<a id="Discussion"></a>

## Discussion

To make practical use of this, you may need to know what the clock’s reference clock is.

## See Also

### Accessing and Converting Time

- [CMClockGetTime(\_:)](cmclockgettime%28__%29.md): Returns the current time from a clock.
- [CMClockConvertHostTimeToSystemUnits(\_:)](cmclockconverthosttimetosystemunits%28__%29.md): Converts a host time from a core media time structure to the host time’s native units.
- [CMClockMakeHostTimeFromSystemUnits(\_:)](cmclockmakehosttimefromsystemunits%28__%29.md): Converts a host time from native units to a core media time structure.

# CMClockGetAnchorTime (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns the current time from a clock and the matching time from the clock’s reference clock.

## Declaration

```objectivec
extern OSStatus CMClockGetAnchorTime(CMClockRef clock, CMTime *clockTimeOut, CMTime *referenceClockTimeOut);
```

## Parameters

- `clock`: The clock to retrieve the current time from.
- `clockTimeOut`: On output, points to the current time.
- `referenceClockTimeOut`: On output, points to the reference clock time.

<a id="Discussion"></a>

## Discussion

To make practical use of this, you may need to know what the clock’s reference clock is.

## See Also

### Accessing and Converting Time

- [CMClockGetTime](cmclockgettime%28__%29.md): Returns the current time from a clock.
- [CMClockConvertHostTimeToSystemUnits](cmclockconverthosttimetosystemunits%28__%29.md): Converts a host time from a core media time structure to the host time’s native units.
- [CMClockMakeHostTimeFromSystemUnits](cmclockmakehosttimefromsystemunits%28__%29.md): Converts a host time from native units to a core media time structure.
