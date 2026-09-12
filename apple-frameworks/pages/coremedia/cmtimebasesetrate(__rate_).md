> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtimebasesetrate(_:rate:)](https://developer.apple.com/documentation/coremedia/cmtimebasesetrate(_:rate:))

# CMTimebaseSetRate(\_:rate:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Sets the rate of a timebase.

## Declaration

```swift
func CMTimebaseSetRate(_ timebase: CMTimebase, rate: Float64) -> OSStatus
```

## See Also

### Getting and Setting the Time Rate

- [CMTimebaseGetRate(\_:)](cmtimebasegetrate%28__%29.md): Returns the current rate of a timebase.
- [CMTimebaseGetEffectiveRate(\_:)](cmtimebasegeteffectiverate%28__%29.md): Returns the effective rate of a timebase, which combines its rate with the rates of all its host timebases.
- [CMTimebaseSetRateAndAnchorTime(\_:rate:anchorTime:immediateSourceTime:)](cmtimebasesetrateandanchortime%28__rate_anchortime_immediatesourcetime_%29.md): Sets the time of a timebase at a particular host time, and changes the rate at exactly that time.

# CMTimebaseSetRate (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Sets the rate of a timebase.

## Declaration

```objectivec
extern OSStatus CMTimebaseSetRate(CMTimebaseRef timebase, Float64 rate);
```

## See Also

### Getting and Setting the Time Rate

- [CMTimebaseGetRate](cmtimebasegetrate%28__%29.md): Returns the current rate of a timebase.
- [CMTimebaseGetEffectiveRate](cmtimebasegeteffectiverate%28__%29.md): Returns the effective rate of a timebase, which combines its rate with the rates of all its host timebases.
- [CMTimebaseSetRateAndAnchorTime](cmtimebasesetrateandanchortime%28__rate_anchortime_immediatesourcetime_%29.md): Sets the time of a timebase at a particular host time, and changes the rate at exactly that time.
