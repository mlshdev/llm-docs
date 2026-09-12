> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritemintegratedtimelineobserver](https://developer.apple.com/documentation/avfoundation/avplayeritemintegratedtimelineobserver)

# AVPlayerItemIntegratedTimelineObserver (Swift)

**Framework:** AVFoundation  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A protocol for objects that perform timeline observations.

## Declaration

```swift
protocol AVPlayerItemIntegratedTimelineObserver : NSObjectProtocol
```

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Observing time changes

- [periodicTimes(forInterval:)](avplayeritemintegratedtimeline/periodictimes%28forinterval_%29.md): Returns an asynchronous sequence of times periodically as playback progresses.
- [boundaryTimes(for:offsetsIntoSegment:)](avplayeritemintegratedtimeline/boundarytimes%28for_offsetsintosegment_%29.md): Returns an asynchronous sequence of times whenever playback reaches a segment time in the segment.
- [AVPlayerItemIntegratedTimeline.BoundaryTimes](avplayeritemintegratedtimeline/boundarytimes.md): An asynchronous sequence of boundary time values.
- [AVPlayerItemIntegratedTimeline.PeriodicTimes](avplayeritemintegratedtimeline/periodictimes.md): An asynchronous sequence of periodic time values.

# AVPlayerItemIntegratedTimelineObserver (Objective-C)

**Framework:** AVFoundation  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A protocol for objects that perform timeline observations.

## Declaration

```objectivec
@protocol AVPlayerItemIntegratedTimelineObserver <NSObject>
```

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Observing time changes

- [addPeriodicTimeObserverForInterval:queue:usingBlock:](avplayeritemintegratedtimeline/addperiodictimeobserverforinterval_queue_usingblock_.md): Requests invocation of a block during playback to report changing time.
- [addBoundaryTimeObserverForSegment:offsetsIntoSegment:queue:usingBlock:](avplayeritemintegratedtimeline/addboundarytimeobserverforsegment_offsetsintosegment_queue_usingblock_.md): Requests invocation of a block when traversing an offset in a segment during playback.
- [removeTimeObserver:](avplayeritemintegratedtimeline/removetimeobserver_.md): Cancels a previously registered time observer.
