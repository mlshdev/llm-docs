> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayerinterstitialevent/resumptionoffset](https://developer.apple.com/documentation/avfoundation/avplayerinterstitialevent/resumptionoffset)

# resumptionOffset (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A time offset at which playback of primary content resumes after interstitial content finishes.

## Declaration

```swift
var resumptionOffset: CMTime { get set }
```

<a id="Discussion"></a>

## Discussion

This property supports definite time values. Specify [indefinite](../../coremedia/cmtime/indefinite.md) to indicate that the effective resumption time offset should align with the clock time elapsed during interstitial playback; this value is typically suitable for live broadcasts.

The default value is [zero](../../coremedia/cmtime/zero.md).

## See Also

### Inspecting timing

- [time](time.md): A time within the timeline of the primary content that playback of interstitial content begins.
- [date](date.md): A date within the date range of the primary content that playback of interstitial content begins.
- [willPlayOnce](willplayonce.md): A Boolean value that indicates whether to schedule this event one time only and suppress subsequent replay.
- [playoutLimit](playoutlimit.md): The time offset at which playback of the interstitial ends.
- [alignsStartWithPrimarySegmentBoundary](alignsstartwithprimarysegmentboundary.md): A Boolean value that indicates whether the start time of interstitial playback should snap to a segment boundary of the primary asset.
- [alignsResumptionWithPrimarySegmentBoundary](alignsresumptionwithprimarysegmentboundary.md): A Boolean value that indicates whether the resumption time of primary playback should snap to a segment boundary of the primary asset.

# resumptionOffset (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A time offset at which playback of primary content resumes after interstitial content finishes.

## Declaration

```objectivec
@property (nonatomic, readonly) CMTime resumptionOffset;
```

<a id="Discussion"></a>

## Discussion

This property supports definite time values. Specify [kCMTimeIndefinite](../../coremedia/cmtime/indefinite.md) to indicate that the effective resumption time offset should align with the clock time elapsed during interstitial playback; this value is typically suitable for live broadcasts.

The default value is [kCMTimeZero](../../coremedia/cmtime/zero.md).

## See Also

### Inspecting timing

- [time](time.md): A time within the timeline of the primary content that playback of interstitial content begins.
- [date](date.md): A date within the date range of the primary content that playback of interstitial content begins.
- [willPlayOnce](willplayonce.md): A Boolean value that indicates whether to schedule this event one time only and suppress subsequent replay.
- [playoutLimit](playoutlimit.md): The time offset at which playback of the interstitial ends.
- [alignsStartWithPrimarySegmentBoundary](alignsstartwithprimarysegmentboundary.md): A Boolean value that indicates whether the start time of interstitial playback should snap to a segment boundary of the primary asset.
- [alignsResumptionWithPrimarySegmentBoundary](alignsresumptionwithprimarysegmentboundary.md): A Boolean value that indicates whether the resumption time of primary playback should snap to a segment boundary of the primary asset.
