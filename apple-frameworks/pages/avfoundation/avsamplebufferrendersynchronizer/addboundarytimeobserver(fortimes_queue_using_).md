> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsamplebufferrendersynchronizer/addboundarytimeobserver(fortimes:queue:using:)](https://developer.apple.com/documentation/avfoundation/avsamplebufferrendersynchronizer/addboundarytimeobserver(fortimes:queue:using:))

# addBoundaryTimeObserver(forTimes:queue:using:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Requests invocation of a block when specified times are traversed during normal rendering.

## Declaration

```swift
func addBoundaryTimeObserver(forTimes times: [NSValue], queue: dispatch_queue_t?, using block: @escaping @Sendable () -> Void) -> Any
```

## Parameters

- `times`: An array containing the times for which the observer requests notification.
- `queue`: The serial queue the block should be unqueued on. If you pass `NULL`, the main queue is used. Passing a concurrent queue results in undefined behavior.
- `block`: The block to be invoked when any of the specified times is crossed during normal rendering.

<a id="return-value"></a>

## Return Value

An object that conforms to [NSObject](../../objectivec/nsobject-swift.class.md). You must retain this value as long as you want the time observer to be invoked by the synchronizer. Pass this object to [removeTimeObserver(\_:)](removetimeobserver%28__%29.md) to cancel time observation.

<a id="Discussion"></a>

## Discussion

Always pair a call to this method with a call to [removeTimeObserver(\_:)](removetimeobserver%28__%29.md). Releasing the observer without calling `removeTimeObserver(_:)` results in undefined behavior.

## See Also

### Observing time

- [addPeriodicTimeObserver(forInterval:queue:using:)](addperiodictimeobserver%28forinterval_queue_using_%29.md): Requests invocation of a block during rendering at specified time intervals.
- [removeTimeObserver(\_:)](removetimeobserver%28__%29.md): Cancels the specified time observer.

# addBoundaryTimeObserverForTimes:queue:usingBlock: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Requests invocation of a block when specified times are traversed during normal rendering.

## Declaration

```objectivec
- (id) addBoundaryTimeObserverForTimes:(NSArray<NSValue *> *) times queue:(dispatch_queue_t) queue usingBlock:(void (^)()) block;
```

## Parameters

- `times`: An array containing the times for which the observer requests notification.
- `queue`: The serial queue the block should be unqueued on. If you pass `NULL`, the main queue is used. Passing a concurrent queue results in undefined behavior.
- `block`: The block to be invoked when any of the specified times is crossed during normal rendering.

<a id="return-value"></a>

## Return Value

An object that conforms to [NSObject](../../objectivec/nsobject-swift.class.md). You must retain this value as long as you want the time observer to be invoked by the synchronizer. Pass this object to [removeTimeObserver:](removetimeobserver%28__%29.md) to cancel time observation.

<a id="Discussion"></a>

## Discussion

Always pair a call to this method with a call to [removeTimeObserver:](removetimeobserver%28__%29.md). Releasing the observer without calling `removeTimeObserver(_:)` results in undefined behavior.

## See Also

### Observing time

- [addPeriodicTimeObserverForInterval:queue:usingBlock:](addperiodictimeobserver%28forinterval_queue_using_%29.md): Requests invocation of a block during rendering at specified time intervals.
- [removeTimeObserver:](removetimeobserver%28__%29.md): Cancels the specified time observer.
