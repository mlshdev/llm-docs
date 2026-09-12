> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtimebasegeteffectiverate(_:)](https://developer.apple.com/documentation/coremedia/cmtimebasegeteffectiverate(_:))

# CMTimebaseGetEffectiveRate(\_:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns the effective rate of a timebase, which combines its rate with the rates of all its host timebases.

## Declaration

```swift
func CMTimebaseGetEffectiveRate(_ timebase: CMTimebase) -> Float64
```

<a id="Discussion"></a>

## Discussion

Calling `CMTimebaseGetEffectiveRate(timebase)` is equivalent to calling `CMSyncGetRelativeRate(timebase, CMTimebaseGetUltimateMasterClock(timebase))`.

## See Also

### Getting and Setting the Time Rate

- [CMTimebaseGetRate(\_:)](cmtimebasegetrate%28__%29.md): Returns the current rate of a timebase.
- [CMTimebaseSetRate(\_:rate:)](cmtimebasesetrate%28__rate_%29.md): Sets the rate of a timebase.
- [CMTimebaseSetRateAndAnchorTime(\_:rate:anchorTime:immediateSourceTime:)](cmtimebasesetrateandanchortime%28__rate_anchortime_immediatesourcetime_%29.md): Sets the time of a timebase at a particular host time, and changes the rate at exactly that time.

# CMTimebaseGetEffectiveRate (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns the effective rate of a timebase, which combines its rate with the rates of all its host timebases.

## Declaration

```objectivec
extern Float64 CMTimebaseGetEffectiveRate(CMTimebaseRef timebase);
```

<a id="Discussion"></a>

## Discussion

Calling `CMTimebaseGetEffectiveRate(timebase)` is equivalent to calling `CMSyncGetRelativeRate(timebase, CMTimebaseGetUltimateMasterClock(timebase))`.

## See Also

### Getting and Setting the Time Rate

- [CMTimebaseGetRate](cmtimebasegetrate%28__%29.md): Returns the current rate of a timebase.
- [CMTimebaseSetRate](cmtimebasesetrate%28__rate_%29.md): Sets the rate of a timebase.
- [CMTimebaseSetRateAndAnchorTime](cmtimebasesetrateandanchortime%28__rate_anchortime_immediatesourcetime_%29.md): Sets the time of a timebase at a particular host time, and changes the rate at exactly that time.
