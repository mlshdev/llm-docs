> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayerinterstitialevent/time](https://developer.apple.com/documentation/avfoundation/avplayerinterstitialevent/time)

# time (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A time within the timeline of the primary content that playback of interstitial content begins.

## Declaration

```swift
var time: CMTime { get set }
```

<a id="Discussion"></a>

## Discussion

This property value is [invalid](../../coremedia/cmtime/invalid.md) if you initialized the event with a date instead of a time.

## See Also

### Inspecting timing

- [date](date.md): A date within the date range of the primary content that playback of interstitial content begins.
- [willPlayOnce](willplayonce.md): A Boolean value that indicates whether to schedule this event one time only and suppress subsequent replay.
- [resumptionOffset](resumptionoffset.md): A time offset at which playback of primary content resumes after interstitial content finishes.
- [playoutLimit](playoutlimit.md): The time offset at which playback of the interstitial ends.
- [alignsStartWithPrimarySegmentBoundary](alignsstartwithprimarysegmentboundary.md): A Boolean value that indicates whether the start time of interstitial playback should snap to a segment boundary of the primary asset.
- [alignsResumptionWithPrimarySegmentBoundary](alignsresumptionwithprimarysegmentboundary.md): A Boolean value that indicates whether the resumption time of primary playback should snap to a segment boundary of the primary asset.

# time (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A time within the timeline of the primary content that playback of interstitial content begins.

## Declaration

```objectivec
@property (nonatomic, readonly) CMTime time;
```

<a id="Discussion"></a>

## Discussion

This property value is [kCMTimeInvalid](../../coremedia/cmtime/invalid.md) if you initialized the event with a date instead of a time.

## See Also

### Inspecting timing

- [date](date.md): A date within the date range of the primary content that playback of interstitial content begins.
- [willPlayOnce](willplayonce.md): A Boolean value that indicates whether to schedule this event one time only and suppress subsequent replay.
- [resumptionOffset](resumptionoffset.md): A time offset at which playback of primary content resumes after interstitial content finishes.
- [playoutLimit](playoutlimit.md): The time offset at which playback of the interstitial ends.
- [alignsStartWithPrimarySegmentBoundary](alignsstartwithprimarysegmentboundary.md): A Boolean value that indicates whether the start time of interstitial playback should snap to a segment boundary of the primary asset.
- [alignsResumptionWithPrimarySegmentBoundary](alignsresumptionwithprimarysegmentboundary.md): A Boolean value that indicates whether the resumption time of primary playback should snap to a segment boundary of the primary asset.
