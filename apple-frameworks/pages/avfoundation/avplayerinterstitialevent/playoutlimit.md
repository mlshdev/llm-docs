> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayerinterstitialevent/playoutlimit](https://developer.apple.com/documentation/avfoundation/avplayerinterstitialevent/playoutlimit)

# playoutLimit (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The time offset at which playback of the interstitial ends.

## Declaration

```swift
var playoutLimit: CMTime { get set }
```

<a id="Discussion"></a>

## Discussion

This value can be any positive numeric value, or [invalid](../../coremedia/cmtime/invalid.md) (the default) which indicates no limit.

## See Also

### Inspecting timing

- [time](time.md): A time within the timeline of the primary content that playback of interstitial content begins.
- [date](date.md): A date within the date range of the primary content that playback of interstitial content begins.
- [willPlayOnce](willplayonce.md): A Boolean value that indicates whether to schedule this event one time only and suppress subsequent replay.
- [resumptionOffset](resumptionoffset.md): A time offset at which playback of primary content resumes after interstitial content finishes.
- [alignsStartWithPrimarySegmentBoundary](alignsstartwithprimarysegmentboundary.md): A Boolean value that indicates whether the start time of interstitial playback should snap to a segment boundary of the primary asset.
- [alignsResumptionWithPrimarySegmentBoundary](alignsresumptionwithprimarysegmentboundary.md): A Boolean value that indicates whether the resumption time of primary playback should snap to a segment boundary of the primary asset.

# playoutLimit (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The time offset at which playback of the interstitial ends.

## Declaration

```objectivec
@property (nonatomic, readonly) CMTime playoutLimit;
```

<a id="Discussion"></a>

## Discussion

This value can be any positive numeric value, or [kCMTimeInvalid](../../coremedia/cmtime/invalid.md) (the default) which indicates no limit.

## See Also

### Inspecting timing

- [time](time.md): A time within the timeline of the primary content that playback of interstitial content begins.
- [date](date.md): A date within the date range of the primary content that playback of interstitial content begins.
- [willPlayOnce](willplayonce.md): A Boolean value that indicates whether to schedule this event one time only and suppress subsequent replay.
- [resumptionOffset](resumptionoffset.md): A time offset at which playback of primary content resumes after interstitial content finishes.
- [alignsStartWithPrimarySegmentBoundary](alignsstartwithprimarysegmentboundary.md): A Boolean value that indicates whether the start time of interstitial playback should snap to a segment boundary of the primary asset.
- [alignsResumptionWithPrimarySegmentBoundary](alignsresumptionwithprimarysegmentboundary.md): A Boolean value that indicates whether the resumption time of primary playback should snap to a segment boundary of the primary asset.
