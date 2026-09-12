> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayer/currenttime()](https://developer.apple.com/documentation/avfoundation/avplayer/currenttime())

# currentTime() (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the current time of the current player item.

## Declaration

```swift
nonisolated func currentTime() -> CMTime
```

<a id="return-value"></a>

## Return Value

The current time of the current player item.

<a id="Discussion"></a>

## Discussion

This property isn’t key-value observable. To observe the player’s time, use [addPeriodicTimeObserver(forInterval:queue:using:)](addperiodictimeobserver%28forinterval_queue_using_%29.md) or [addBoundaryTimeObserver(forTimes:queue:using:)](addboundarytimeobserver%28fortimes_queue_using_%29.md).

## See Also

### Observing playback time

- [addPeriodicTimeObserver(forInterval:queue:using:)](addperiodictimeobserver%28forinterval_queue_using_%29.md): Requests the periodic invocation of a given block during playback to report changing time.
- [addBoundaryTimeObserver(forTimes:queue:using:)](addboundarytimeobserver%28fortimes_queue_using_%29.md): Requests the invocation of a block when specified times are traversed during normal playback.
- [removeTimeObserver(\_:)](removetimeobserver%28__%29.md): Cancels a previously registered periodic or boundary time observer.

# currentTime (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the current time of the current player item.

## Declaration

```objectivec
- (CMTime) currentTime;
```

<a id="return-value"></a>

## Return Value

The current time of the current player item.

<a id="Discussion"></a>

## Discussion

This property isn’t key-value observable. To observe the player’s time, use [addPeriodicTimeObserverForInterval:queue:usingBlock:](addperiodictimeobserver%28forinterval_queue_using_%29.md) or [addBoundaryTimeObserverForTimes:queue:usingBlock:](addboundarytimeobserver%28fortimes_queue_using_%29.md).

## See Also

### Observing playback time

- [addPeriodicTimeObserverForInterval:queue:usingBlock:](addperiodictimeobserver%28forinterval_queue_using_%29.md): Requests the periodic invocation of a given block during playback to report changing time.
- [addBoundaryTimeObserverForTimes:queue:usingBlock:](addboundarytimeobserver%28fortimes_queue_using_%29.md): Requests the invocation of a block when specified times are traversed during normal playback.
- [removeTimeObserver:](removetimeobserver%28__%29.md): Cancels a previously registered periodic or boundary time observer.
