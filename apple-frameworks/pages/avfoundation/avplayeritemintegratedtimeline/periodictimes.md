> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritemintegratedtimeline/periodictimes](https://developer.apple.com/documentation/avfoundation/avplayeritemintegratedtimeline/periodictimes)

# AVPlayerItemIntegratedTimeline.PeriodicTimes

**Framework:** AVFoundation  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

An asynchronous sequence of periodic time values.

## Declaration

```swift
struct PeriodicTimes
```

## Topics

### Iterating elements

- [AVPlayerItemIntegratedTimeline.PeriodicTimes.Iterator](periodictimes/iterator.md)

## Relationships

### Conforms To

- [AsyncSequence](https://developer.apple.com/documentation/swift/asyncsequence)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Observing time changes

- [periodicTimes(forInterval:)](periodictimes%28forinterval_%29.md): Returns an asynchronous sequence of times periodically as playback progresses.
- [boundaryTimes(for:offsetsIntoSegment:)](boundarytimes%28for_offsetsintosegment_%29.md): Returns an asynchronous sequence of times whenever playback reaches a segment time in the segment.
- [AVPlayerItemIntegratedTimeline.BoundaryTimes](boundarytimes.md): An asynchronous sequence of boundary time values.
- [AVPlayerItemIntegratedTimelineObserver](../avplayeritemintegratedtimelineobserver.md): A protocol for objects that perform timeline observations.
