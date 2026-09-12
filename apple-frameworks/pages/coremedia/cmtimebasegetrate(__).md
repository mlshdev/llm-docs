> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtimebasegetrate(_:)](https://developer.apple.com/documentation/coremedia/cmtimebasegetrate(_:))

# CMTimebaseGetRate(\_:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns the current rate of a timebase.

## Declaration

```swift
func CMTimebaseGetRate(_ timebase: CMTimebase) -> Float64
```

<a id="Discussion"></a>

## Discussion

This is the rate relative to its immediate host clock or timebase. For example, if a timebase is running at twice the rate of its host, its rate is 2.0.

## See Also

### Getting and Setting the Time Rate

- [CMTimebaseGetEffectiveRate(\_:)](cmtimebasegeteffectiverate%28__%29.md): Returns the effective rate of a timebase, which combines its rate with the rates of all its host timebases.
- [CMTimebaseSetRate(\_:rate:)](cmtimebasesetrate%28__rate_%29.md): Sets the rate of a timebase.
- [CMTimebaseSetRateAndAnchorTime(\_:rate:anchorTime:immediateSourceTime:)](cmtimebasesetrateandanchortime%28__rate_anchortime_immediatesourcetime_%29.md): Sets the time of a timebase at a particular host time, and changes the rate at exactly that time.

# CMTimebaseGetRate (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns the current rate of a timebase.

## Declaration

```objectivec
extern Float64 CMTimebaseGetRate(CMTimebaseRef timebase);
```

<a id="Discussion"></a>

## Discussion

This is the rate relative to its immediate host clock or timebase. For example, if a timebase is running at twice the rate of its host, its rate is 2.0.

## See Also

### Getting and Setting the Time Rate

- [CMTimebaseGetEffectiveRate](cmtimebasegeteffectiverate%28__%29.md): Returns the effective rate of a timebase, which combines its rate with the rates of all its host timebases.
- [CMTimebaseSetRate](cmtimebasesetrate%28__rate_%29.md): Sets the rate of a timebase.
- [CMTimebaseSetRateAndAnchorTime](cmtimebasesetrateandanchortime%28__rate_anchortime_immediatesourcetime_%29.md): Sets the time of a timebase at a particular host time, and changes the rate at exactly that time.
