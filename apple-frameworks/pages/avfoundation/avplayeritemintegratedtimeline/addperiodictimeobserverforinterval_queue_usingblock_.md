> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avplayeritemintegratedtimeline/addperiodictimeobserverforinterval:queue:usingblock:

# addPeriodicTimeObserverForInterval:queue:usingBlock:

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Requests invocation of a block during playback to report changing time.

## Declaration

```objectivec
- (id<AVPlayerItemIntegratedTimelineObserver>) addPeriodicTimeObserverForInterval:(CMTime) interval queue:(dispatch_queue_t) queue usingBlock:(void (^)(CMTime time)) block;
```

## See Also

### Observing time changes

- [addBoundaryTimeObserverForSegment:offsetsIntoSegment:queue:usingBlock:](addboundarytimeobserverforsegment_offsetsintosegment_queue_usingblock_.md): Requests invocation of a block when traversing an offset in a segment during playback.
- [removeTimeObserver:](removetimeobserver_.md): Cancels a previously registered time observer.
- [AVPlayerItemIntegratedTimelineObserver](../avplayeritemintegratedtimelineobserver.md): A protocol for objects that perform timeline observations.
