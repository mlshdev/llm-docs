> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtimebasesetrateandanchortime(_:rate:anchortime:immediatesourcetime:)](https://developer.apple.com/documentation/coremedia/cmtimebasesetrateandanchortime(_:rate:anchortime:immediatesourcetime:))

# CMTimebaseSetRateAndAnchorTime(\_:rate:anchorTime:immediateSourceTime:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Sets the time of a timebase at a particular host time, and changes the rate at exactly that time.

## Declaration

```swift
func CMTimebaseSetRateAndAnchorTime(_ timebase: CMTimebase, rate: Float64, anchorTime timebaseTime: CMTime, immediateSourceTime: CMTime) -> OSStatus
```

<a id="Discussion"></a>

## Discussion

The system interpolates `CMTimebaseGetTime`’s results from the anchor time as though the timebase has been running at the requested rate since that time.

`CMTimebaseSetRate(timebase, rate)` is approximately equivalent to calling `CMTimebaseSetRateAndAnchorTime(timebase, rate, CMTimebaseGetTime(timebase), CMSyncGetTime(CMTimebaseGetMaster(timebase)))`, except that `CMTimebaseSetRate` doesn’t generate a `TimeJumped` notification.

## See Also

### Getting and Setting the Time Rate

- [CMTimebaseGetRate(\_:)](cmtimebasegetrate%28__%29.md): Returns the current rate of a timebase.
- [CMTimebaseGetEffectiveRate(\_:)](cmtimebasegeteffectiverate%28__%29.md): Returns the effective rate of a timebase, which combines its rate with the rates of all its host timebases.
- [CMTimebaseSetRate(\_:rate:)](cmtimebasesetrate%28__rate_%29.md): Sets the rate of a timebase.

# CMTimebaseSetRateAndAnchorTime (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Sets the time of a timebase at a particular host time, and changes the rate at exactly that time.

## Declaration

```objectivec
extern OSStatus CMTimebaseSetRateAndAnchorTime(CMTimebaseRef timebase, Float64 rate, CMTime timebaseTime, CMTime immediateSourceTime);
```

<a id="Discussion"></a>

## Discussion

The system interpolates `CMTimebaseGetTime`’s results from the anchor time as though the timebase has been running at the requested rate since that time.

`CMTimebaseSetRate(timebase, rate)` is approximately equivalent to calling `CMTimebaseSetRateAndAnchorTime(timebase, rate, CMTimebaseGetTime(timebase), CMSyncGetTime(CMTimebaseGetMaster(timebase)))`, except that `CMTimebaseSetRate` doesn’t generate a `TimeJumped` notification.

## See Also

### Getting and Setting the Time Rate

- [CMTimebaseGetRate](cmtimebasegetrate%28__%29.md): Returns the current rate of a timebase.
- [CMTimebaseGetEffectiveRate](cmtimebasegeteffectiverate%28__%29.md): Returns the effective rate of a timebase, which combines its rate with the rates of all its host timebases.
- [CMTimebaseSetRate](cmtimebasesetrate%28__rate_%29.md): Sets the rate of a timebase.
