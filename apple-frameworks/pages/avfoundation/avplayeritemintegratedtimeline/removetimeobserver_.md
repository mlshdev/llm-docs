> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritemintegratedtimeline/removetimeobserver:](https://developer.apple.com/documentation/avfoundation/avplayeritemintegratedtimeline/removetimeobserver:)

# removeTimeObserver:

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Cancels a previously registered time observer.

## Declaration

```objectivec
- (void) removeTimeObserver:(id<AVPlayerItemIntegratedTimelineObserver>) observer;
```

## See Also

### Observing time changes

- [addPeriodicTimeObserverForInterval:queue:usingBlock:](addperiodictimeobserverforinterval_queue_usingblock_.md): Requests invocation of a block during playback to report changing time.
- [addBoundaryTimeObserverForSegment:offsetsIntoSegment:queue:usingBlock:](addboundarytimeobserverforsegment_offsetsintosegment_queue_usingblock_.md): Requests invocation of a block when traversing an offset in a segment during playback.
- [AVPlayerItemIntegratedTimelineObserver](../avplayeritemintegratedtimelineobserver.md): A protocol for objects that perform timeline observations.
