> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsamplebufferrendersynchronizer/addperiodictimeobserver(forinterval:queue:using:)](https://developer.apple.com/documentation/avfoundation/avsamplebufferrendersynchronizer/addperiodictimeobserver(forinterval:queue:using:))

# addPeriodicTimeObserver(forInterval:queue:using:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Requests invocation of a block during rendering at specified time intervals.

## Declaration

```swift
func addPeriodicTimeObserver(forInterval interval: CMTime, queue: dispatch_queue_t?, using block: @escaping @Sendable (CMTime) -> Void) -> Any
```

## Parameters

- `interval`: The specified time interval requesting block invocation during rendering.
- `queue`: The serial queue the block should be unqueued on. If you pass `NULL`, the main queue is used. Passing a concurrent queue results in undefined behavior.
- `block`: The block to be invoked periodically.

<a id="return-value"></a>

## Return Value

An object that conforms to [NSObject](../../objectivec/nsobject-swift.class.md). You must retain this value as long as you want the time observer to be invoked by the synchronizer. Pass this object to [removeTimeObserver(\_:)](removetimeobserver%28__%29.md) to cancel time observation.

<a id="Discussion"></a>

## Discussion

The block associated with this method is invoked at the specified time intervals, interpreted according to the timeline of the timebase. The block is also invoked whenever there is a time jump or rendering starts or stops.

If a very short time interval is used, the synchronizer may invoke the block less frequently than requested. However, the synchronizer will invoke the block often enough for the client to update indications of the current time appropriately in its end-user interface.

Always pair a call to this method with a call to [removeTimeObserver(\_:)](removetimeobserver%28__%29.md). Releasing the observer without calling `removeTimeObserver(_:)` results in undefined behavior.

## See Also

### Observing time

- [addBoundaryTimeObserver(forTimes:queue:using:)](addboundarytimeobserver%28fortimes_queue_using_%29.md): Requests invocation of a block when specified times are traversed during normal rendering.
- [removeTimeObserver(\_:)](removetimeobserver%28__%29.md): Cancels the specified time observer.

# addPeriodicTimeObserverForInterval:queue:usingBlock: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Requests invocation of a block during rendering at specified time intervals.

## Declaration

```objectivec
- (id) addPeriodicTimeObserverForInterval:(CMTime) interval queue:(dispatch_queue_t) queue usingBlock:(void (^)(CMTime time)) block;
```

## Parameters

- `interval`: The specified time interval requesting block invocation during rendering.
- `queue`: The serial queue the block should be unqueued on. If you pass `NULL`, the main queue is used. Passing a concurrent queue results in undefined behavior.
- `block`: The block to be invoked periodically.

<a id="return-value"></a>

## Return Value

An object that conforms to [NSObject](../../objectivec/nsobject-swift.class.md). You must retain this value as long as you want the time observer to be invoked by the synchronizer. Pass this object to [removeTimeObserver:](removetimeobserver%28__%29.md) to cancel time observation.

<a id="Discussion"></a>

## Discussion

The block associated with this method is invoked at the specified time intervals, interpreted according to the timeline of the timebase. The block is also invoked whenever there is a time jump or rendering starts or stops.

If a very short time interval is used, the synchronizer may invoke the block less frequently than requested. However, the synchronizer will invoke the block often enough for the client to update indications of the current time appropriately in its end-user interface.

Always pair a call to this method with a call to [removeTimeObserver:](removetimeobserver%28__%29.md). Releasing the observer without calling `removeTimeObserver(_:)` results in undefined behavior.

## See Also

### Observing time

- [addBoundaryTimeObserverForTimes:queue:usingBlock:](addboundarytimeobserver%28fortimes_queue_using_%29.md): Requests invocation of a block when specified times are traversed during normal rendering.
- [removeTimeObserver:](removetimeobserver%28__%29.md): Cancels the specified time observer.
