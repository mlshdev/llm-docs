> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsamplebufferrendersynchronizer/removetimeobserver(_:)](https://developer.apple.com/documentation/avfoundation/avsamplebufferrendersynchronizer/removetimeobserver(_:))

# removeTimeObserver(\_:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Cancels the specified time observer.

## Declaration

```swift
func removeTimeObserver(_ observer: Any)
```

## Parameters

- `observer`: The time observer to be cancelled.

<a id="Discussion"></a>

## Discussion

Use this method to explicitly cancel time observers added using [addPeriodicTimeObserver(forInterval:queue:using:)](addperiodictimeobserver%28forinterval_queue_using_%29.md) or [addBoundaryTimeObserver(forTimes:queue:using:)](addboundarytimeobserver%28fortimes_queue_using_%29.md)

Upon return, the caller is guaranteed that no new time observer blocks will begin executing. Depending on the calling thread and the queue used to add the time observer, an in-flight block may continue to execute after this method returns. You can guarantee synchronous time observer removal by enqueuing the call to `removeTimeObserver:` on that queue. Call [sync(execute:)](../../dispatch/dispatchqueue/sync%28execute_%29-3segw.md) after `removeTimeObserver:` to wait for any in-flight blocks to finish executing.

## See Also

### Observing time

- [addPeriodicTimeObserver(forInterval:queue:using:)](addperiodictimeobserver%28forinterval_queue_using_%29.md): Requests invocation of a block during rendering at specified time intervals.
- [addBoundaryTimeObserver(forTimes:queue:using:)](addboundarytimeobserver%28fortimes_queue_using_%29.md): Requests invocation of a block when specified times are traversed during normal rendering.

# removeTimeObserver: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Cancels the specified time observer.

## Declaration

```objectivec
- (void) removeTimeObserver:(id) observer;
```

## Parameters

- `observer`: The time observer to be cancelled.

<a id="Discussion"></a>

## Discussion

Use this method to explicitly cancel time observers added using [addPeriodicTimeObserverForInterval:queue:usingBlock:](addperiodictimeobserver%28forinterval_queue_using_%29.md) or [addBoundaryTimeObserverForTimes:queue:usingBlock:](addboundarytimeobserver%28fortimes_queue_using_%29.md)

Upon return, the caller is guaranteed that no new time observer blocks will begin executing. Depending on the calling thread and the queue used to add the time observer, an in-flight block may continue to execute after this method returns. You can guarantee synchronous time observer removal by enqueuing the call to `removeTimeObserver:` on that queue. Call [dispatch_sync](../../dispatch/dispatchqueue/sync%28execute_%29-3segw.md) after `removeTimeObserver:` to wait for any in-flight blocks to finish executing.

## See Also

### Observing time

- [addPeriodicTimeObserverForInterval:queue:usingBlock:](addperiodictimeobserver%28forinterval_queue_using_%29.md): Requests invocation of a block during rendering at specified time intervals.
- [addBoundaryTimeObserverForTimes:queue:usingBlock:](addboundarytimeobserver%28fortimes_queue_using_%29.md): Requests invocation of a block when specified times are traversed during normal rendering.
