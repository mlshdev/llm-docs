> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtimebasegettimeandrate(_:timeout:rateout:)](https://developer.apple.com/documentation/coremedia/cmtimebasegettimeandrate(_:timeout:rateout:))

# CMTimebaseGetTimeAndRate(\_:timeOut:rateOut:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns the current time and rate of a timebase.

## Declaration

```swift
func CMTimebaseGetTimeAndRate(_ timebase: CMTimebase, timeOut: UnsafeMutablePointer<CMTime>?, rateOut: UnsafeMutablePointer<Float64>?) -> OSStatus
```

<a id="Discussion"></a>

## Discussion

You can use this function to take a consistent snapshot of the two values, avoiding possible inconsistencies due to external changes between retrieval of time and rate.

## See Also

### Getting and Setting Time

- [CMTimebaseGetTime(\_:)](cmtimebasegettime%28__%29.md): Returns the current time from a timebase.
- [CMTimebaseGetTimeWithTimeScale(\_:timescale:method:)](cmtimebasegettimewithtimescale%28__timescale_method_%29.md): Returns the current time from a timebase in the specified timescale.
- [CMTimebaseSetTime(\_:time:)](cmtimebasesettime%28__time_%29.md): Sets the current time of a timebase.
- [CMTimebaseSetSourceClock(\_:\_:)](cmtimebasesetsourceclock%28____%29.md): Sets the source clock of a timebase.
- [CMTimebaseSetSourceTimebase(\_:\_:)](cmtimebasesetsourcetimebase%28____%29.md): Sets the source timebase of a timebase.
- [CMTimebaseSetAnchorTime(\_:timebaseTime:immediateSourceTime:)](cmtimebasesetanchortime%28__timebasetime_immediatesourcetime_%29.md): Sets the time of a timebase at a particular host time.

# CMTimebaseGetTimeAndRate (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns the current time and rate of a timebase.

## Declaration

```objectivec
extern OSStatus CMTimebaseGetTimeAndRate(CMTimebaseRef timebase, CMTime *timeOut, Float64 *rateOut);
```

<a id="Discussion"></a>

## Discussion

You can use this function to take a consistent snapshot of the two values, avoiding possible inconsistencies due to external changes between retrieval of time and rate.

## See Also

### Getting and Setting Time

- [CMTimebaseGetTime](cmtimebasegettime%28__%29.md): Returns the current time from a timebase.
- [CMTimebaseGetTimeWithTimeScale](cmtimebasegettimewithtimescale%28__timescale_method_%29.md): Returns the current time from a timebase in the specified timescale.
- [CMTimebaseSetTime](cmtimebasesettime%28__time_%29.md): Sets the current time of a timebase.
- [CMTimebaseSetSourceClock](cmtimebasesetsourceclock%28____%29.md): Sets the source clock of a timebase.
- [CMTimebaseSetSourceTimebase](cmtimebasesetsourcetimebase%28____%29.md): Sets the source timebase of a timebase.
- [CMTimebaseSetAnchorTime](cmtimebasesetanchortime%28__timebasetime_immediatesourcetime_%29.md): Sets the time of a timebase at a particular host time.
