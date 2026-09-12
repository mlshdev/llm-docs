> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayerinterstitialevent/alignsstartwithprimarysegmentboundary](https://developer.apple.com/documentation/avfoundation/avplayerinterstitialevent/alignsstartwithprimarysegmentboundary)

# alignsStartWithPrimarySegmentBoundary (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A Boolean value that indicates whether the start time of interstitial playback should snap to a segment boundary of the primary asset.

## Declaration

```swift
var alignsStartWithPrimarySegmentBoundary: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If the value is [true](https://developer.apple.com/documentation/swift/true), the system adjusts the start time or date of the interstitial to the nearest segment boundary when the primary player is playing an HTTP Live Streaming asset.

## See Also

### Inspecting timing

- [time](time.md): A time within the timeline of the primary content that playback of interstitial content begins.
- [date](date.md): A date within the date range of the primary content that playback of interstitial content begins.
- [willPlayOnce](willplayonce.md): A Boolean value that indicates whether to schedule this event one time only and suppress subsequent replay.
- [resumptionOffset](resumptionoffset.md): A time offset at which playback of primary content resumes after interstitial content finishes.
- [playoutLimit](playoutlimit.md): The time offset at which playback of the interstitial ends.
- [alignsResumptionWithPrimarySegmentBoundary](alignsresumptionwithprimarysegmentboundary.md): A Boolean value that indicates whether the resumption time of primary playback should snap to a segment boundary of the primary asset.

# alignsStartWithPrimarySegmentBoundary (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A Boolean value that indicates whether the start time of interstitial playback should snap to a segment boundary of the primary asset.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL alignsStartWithPrimarySegmentBoundary;
```

<a id="Discussion"></a>

## Discussion

If the value is [true](https://developer.apple.com/documentation/swift/true), the system adjusts the start time or date of the interstitial to the nearest segment boundary when the primary player is playing an HTTP Live Streaming asset.

## See Also

### Inspecting timing

- [time](time.md): A time within the timeline of the primary content that playback of interstitial content begins.
- [date](date.md): A date within the date range of the primary content that playback of interstitial content begins.
- [willPlayOnce](willplayonce.md): A Boolean value that indicates whether to schedule this event one time only and suppress subsequent replay.
- [resumptionOffset](resumptionoffset.md): A time offset at which playback of primary content resumes after interstitial content finishes.
- [playoutLimit](playoutlimit.md): The time offset at which playback of the interstitial ends.
- [alignsResumptionWithPrimarySegmentBoundary](alignsresumptionwithprimarysegmentboundary.md): A Boolean value that indicates whether the resumption time of primary playback should snap to a segment boundary of the primary asset.
