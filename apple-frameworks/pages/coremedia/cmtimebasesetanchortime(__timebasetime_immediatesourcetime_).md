> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtimebasesetanchortime(_:timebasetime:immediatesourcetime:)](https://developer.apple.com/documentation/coremedia/cmtimebasesetanchortime(_:timebasetime:immediatesourcetime:))

# CMTimebaseSetAnchorTime(\_:timebaseTime:immediateSourceTime:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Sets the time of a timebase at a particular host time.

## Declaration

```swift
func CMTimebaseSetAnchorTime(_ timebase: CMTimebase, timebaseTime: CMTime, immediateSourceTime: CMTime) -> OSStatus
```

<a id="Discussion"></a>

## Discussion

The system interpolates `CMTimebaseGetTime`’s results from the anchor time.

`CMTimebaseSetTime(timebase, time)` is equivalent to calling `CMTimebaseSetAnchorTime(timebase, time, CMSyncGetTime(CMTimebaseCopySource(timebase)))`.

## See Also

### Getting and Setting Time

- [CMTimebaseGetTime(\_:)](cmtimebasegettime%28__%29.md): Returns the current time from a timebase.
- [CMTimebaseGetTimeWithTimeScale(\_:timescale:method:)](cmtimebasegettimewithtimescale%28__timescale_method_%29.md): Returns the current time from a timebase in the specified timescale.
- [CMTimebaseGetTimeAndRate(\_:timeOut:rateOut:)](cmtimebasegettimeandrate%28__timeout_rateout_%29.md): Returns the current time and rate of a timebase.
- [CMTimebaseSetTime(\_:time:)](cmtimebasesettime%28__time_%29.md): Sets the current time of a timebase.
- [CMTimebaseSetSourceClock(\_:\_:)](cmtimebasesetsourceclock%28____%29.md): Sets the source clock of a timebase.
- [CMTimebaseSetSourceTimebase(\_:\_:)](cmtimebasesetsourcetimebase%28____%29.md): Sets the source timebase of a timebase.

# CMTimebaseSetAnchorTime (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Sets the time of a timebase at a particular host time.

## Declaration

```objectivec
extern OSStatus CMTimebaseSetAnchorTime(CMTimebaseRef timebase, CMTime timebaseTime, CMTime immediateSourceTime);
```

<a id="Discussion"></a>

## Discussion

The system interpolates `CMTimebaseGetTime`’s results from the anchor time.

`CMTimebaseSetTime(timebase, time)` is equivalent to calling `CMTimebaseSetAnchorTime(timebase, time, CMSyncGetTime(CMTimebaseCopySource(timebase)))`.

## See Also

### Getting and Setting Time

- [CMTimebaseGetTime](cmtimebasegettime%28__%29.md): Returns the current time from a timebase.
- [CMTimebaseGetTimeWithTimeScale](cmtimebasegettimewithtimescale%28__timescale_method_%29.md): Returns the current time from a timebase in the specified timescale.
- [CMTimebaseGetTimeAndRate](cmtimebasegettimeandrate%28__timeout_rateout_%29.md): Returns the current time and rate of a timebase.
- [CMTimebaseSetTime](cmtimebasesettime%28__time_%29.md): Sets the current time of a timebase.
- [CMTimebaseSetSourceClock](cmtimebasesetsourceclock%28____%29.md): Sets the source clock of a timebase.
- [CMTimebaseSetSourceTimebase](cmtimebasesetsourcetimebase%28____%29.md): Sets the source timebase of a timebase.
