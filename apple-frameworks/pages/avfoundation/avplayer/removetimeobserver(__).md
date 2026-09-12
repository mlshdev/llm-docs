> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayer/removetimeobserver(_:)](https://developer.apple.com/documentation/avfoundation/avplayer/removetimeobserver(_:))

# removeTimeObserver(\_:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Cancels a previously registered periodic or boundary time observer.

## Declaration

```swift
nonisolated func removeTimeObserver(_ observer: Any)
```

## Parameters

- `observer`: An object returned by a previous call to [addPeriodicTimeObserver(forInterval:queue:using:)](addperiodictimeobserver%28forinterval_queue_using_%29.md) or [addBoundaryTimeObserver(forTimes:queue:using:)](addboundarytimeobserver%28fortimes_queue_using_%29.md).

## Mentioned In

- [Monitoring playback progress in your app](../monitoring-playback-progress-in-your-app.md)

<a id="Discussion"></a>

## Discussion

Upon return, the caller is guaranteed that no new time observer blocks will begin executing. Depending on the calling thread and the queue used to add the time observer, an in-flight block may continue to execute after this method returns. You can guarantee synchronous time observer removal by enqueuing the call to `removeTimeObserver` on that queue. Alternatively, call `dispatch_sync(queue, ^{})` after `removeTimeObserver` to wait for any in-flight blocks to finish executing.

You should use this method to explicitly cancel each time observer added using [addPeriodicTimeObserver(forInterval:queue:using:)](addperiodictimeobserver%28forinterval_queue_using_%29.md) and [addBoundaryTimeObserver(forTimes:queue:using:)](addboundarytimeobserver%28fortimes_queue_using_%29.md).

The following shows a common implementation to remove a registered time observer:

**Swift**

```swift
func removePeriodicTimeObserver() {
    // If a time observer exists, remove it
    if let token = timeObserverToken {
        player.removeTimeObserver(token)
        timeObserverToken = nil
    }
}
```

**Objective-C**

```objc
- (void)removeBoundaryTimeObserver {
    if (self.timeObserverToken) {
        [self.player removeTimeObserver:self.timeObserverToken];
        self.timeObserverToken = nil;
    }
}
```

## See Also

### Observing playback time

- [currentTime()](currenttime%28%29.md): Returns the current time of the current player item.
- [addPeriodicTimeObserver(forInterval:queue:using:)](addperiodictimeobserver%28forinterval_queue_using_%29.md): Requests the periodic invocation of a given block during playback to report changing time.
- [addBoundaryTimeObserver(forTimes:queue:using:)](addboundarytimeobserver%28fortimes_queue_using_%29.md): Requests the invocation of a block when specified times are traversed during normal playback.

# removeTimeObserver: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Cancels a previously registered periodic or boundary time observer.

## Declaration

```objectivec
- (void) removeTimeObserver:(id) observer;
```

## Parameters

- `observer`: An object returned by a previous call to [addPeriodicTimeObserverForInterval:queue:usingBlock:](addperiodictimeobserver%28forinterval_queue_using_%29.md) or [addBoundaryTimeObserverForTimes:queue:usingBlock:](addboundarytimeobserver%28fortimes_queue_using_%29.md).

## Mentioned In

- [Monitoring playback progress in your app](../monitoring-playback-progress-in-your-app.md)

<a id="Discussion"></a>

## Discussion

Upon return, the caller is guaranteed that no new time observer blocks will begin executing. Depending on the calling thread and the queue used to add the time observer, an in-flight block may continue to execute after this method returns. You can guarantee synchronous time observer removal by enqueuing the call to `removeTimeObserver` on that queue. Alternatively, call `dispatch_sync(queue, ^{})` after `removeTimeObserver` to wait for any in-flight blocks to finish executing.

You should use this method to explicitly cancel each time observer added using [addPeriodicTimeObserverForInterval:queue:usingBlock:](addperiodictimeobserver%28forinterval_queue_using_%29.md) and [addBoundaryTimeObserverForTimes:queue:usingBlock:](addboundarytimeobserver%28fortimes_queue_using_%29.md).

The following shows a common implementation to remove a registered time observer:

**Swift**

```swift
func removePeriodicTimeObserver() {
    // If a time observer exists, remove it
    if let token = timeObserverToken {
        player.removeTimeObserver(token)
        timeObserverToken = nil
    }
}
```

**Objective-C**

```objc
- (void)removeBoundaryTimeObserver {
    if (self.timeObserverToken) {
        [self.player removeTimeObserver:self.timeObserverToken];
        self.timeObserverToken = nil;
    }
}
```

## See Also

### Observing playback time

- [currentTime](currenttime%28%29.md): Returns the current time of the current player item.
- [addPeriodicTimeObserverForInterval:queue:usingBlock:](addperiodictimeobserver%28forinterval_queue_using_%29.md): Requests the periodic invocation of a given block during playback to report changing time.
- [addBoundaryTimeObserverForTimes:queue:usingBlock:](addboundarytimeobserver%28fortimes_queue_using_%29.md): Requests the invocation of a block when specified times are traversed during normal playback.
