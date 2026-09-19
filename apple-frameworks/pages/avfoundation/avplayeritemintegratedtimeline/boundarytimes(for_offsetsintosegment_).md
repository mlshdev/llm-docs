> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avplayeritemintegratedtimeline/boundarytimes(for:offsetsintosegment:)

# boundaryTimes(for:offsetsIntoSegment:)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Returns an asynchronous sequence of times whenever playback reaches a segment time in the segment.

## Declaration

```swift
func boundaryTimes(for segment: AVPlayerItemSegment, offsetsIntoSegment: [CMTime]) -> AVPlayerItemIntegratedTimeline.BoundaryTimes
```

## See Also

### Observing time changes

- [periodicTimes(forInterval:)](periodictimes%28forinterval_%29.md): Returns an asynchronous sequence of times periodically as playback progresses.
- [AVPlayerItemIntegratedTimeline.BoundaryTimes](boundarytimes.md): An asynchronous sequence of boundary time values.
- [AVPlayerItemIntegratedTimeline.PeriodicTimes](periodictimes.md): An asynchronous sequence of periodic time values.
- [AVPlayerItemIntegratedTimelineObserver](../avplayeritemintegratedtimelineobserver.md): A protocol for objects that perform timeline observations.
