> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritemintegratedtimeline/periodictimes(forinterval:)](https://developer.apple.com/documentation/avfoundation/avplayeritemintegratedtimeline/periodictimes(forinterval:))

# periodicTimes(forInterval:)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Returns an asynchronous sequence of times periodically as playback progresses.

## Declaration

```swift
func periodicTimes(forInterval: CMTime) -> AVPlayerItemIntegratedTimeline.PeriodicTimes
```

## See Also

### Observing time changes

- [boundaryTimes(for:offsetsIntoSegment:)](boundarytimes%28for_offsetsintosegment_%29.md): Returns an asynchronous sequence of times whenever playback reaches a segment time in the segment.
- [AVPlayerItemIntegratedTimeline.BoundaryTimes](boundarytimes.md): An asynchronous sequence of boundary time values.
- [AVPlayerItemIntegratedTimeline.PeriodicTimes](periodictimes.md): An asynchronous sequence of periodic time values.
- [AVPlayerItemIntegratedTimelineObserver](../avplayeritemintegratedtimelineobserver.md): A protocol for objects that perform timeline observations.
