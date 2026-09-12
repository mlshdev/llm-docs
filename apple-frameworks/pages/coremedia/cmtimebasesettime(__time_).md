> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtimebasesettime(_:time:)](https://developer.apple.com/documentation/coremedia/cmtimebasesettime(_:time:))

# CMTimebaseSetTime(\_:time:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Sets the current time of a timebase.

## Declaration

```swift
func CMTimebaseSetTime(_ timebase: CMTimebase, time: CMTime) -> OSStatus
```

## See Also

### Getting and Setting Time

- [CMTimebaseGetTime(\_:)](cmtimebasegettime%28__%29.md): Returns the current time from a timebase.
- [CMTimebaseGetTimeWithTimeScale(\_:timescale:method:)](cmtimebasegettimewithtimescale%28__timescale_method_%29.md): Returns the current time from a timebase in the specified timescale.
- [CMTimebaseGetTimeAndRate(\_:timeOut:rateOut:)](cmtimebasegettimeandrate%28__timeout_rateout_%29.md): Returns the current time and rate of a timebase.
- [CMTimebaseSetSourceClock(\_:\_:)](cmtimebasesetsourceclock%28____%29.md): Sets the source clock of a timebase.
- [CMTimebaseSetSourceTimebase(\_:\_:)](cmtimebasesetsourcetimebase%28____%29.md): Sets the source timebase of a timebase.
- [CMTimebaseSetAnchorTime(\_:timebaseTime:immediateSourceTime:)](cmtimebasesetanchortime%28__timebasetime_immediatesourcetime_%29.md): Sets the time of a timebase at a particular host time.

# CMTimebaseSetTime (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Sets the current time of a timebase.

## Declaration

```objectivec
extern OSStatus CMTimebaseSetTime(CMTimebaseRef timebase, CMTime time);
```

## See Also

### Getting and Setting Time

- [CMTimebaseGetTime](cmtimebasegettime%28__%29.md): Returns the current time from a timebase.
- [CMTimebaseGetTimeWithTimeScale](cmtimebasegettimewithtimescale%28__timescale_method_%29.md): Returns the current time from a timebase in the specified timescale.
- [CMTimebaseGetTimeAndRate](cmtimebasegettimeandrate%28__timeout_rateout_%29.md): Returns the current time and rate of a timebase.
- [CMTimebaseSetSourceClock](cmtimebasesetsourceclock%28____%29.md): Sets the source clock of a timebase.
- [CMTimebaseSetSourceTimebase](cmtimebasesetsourcetimebase%28____%29.md): Sets the source timebase of a timebase.
- [CMTimebaseSetAnchorTime](cmtimebasesetanchortime%28__timebasetime_immediatesourcetime_%29.md): Sets the time of a timebase at a particular host time.
