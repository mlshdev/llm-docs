> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmheadphoneactivitymanager/startstatusupdates(to:withhandler:)](https://developer.apple.com/documentation/coremotion/cmheadphoneactivitymanager/startstatusupdates(to:withhandler:))

# startStatusUpdates(to:withHandler:) (Swift)

**Framework:** Core Motion  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · watchOS 11.0+

Starts headphone status updates, providing data to the given handler through the given queue.

## Declaration

```swift
func startStatusUpdates(to queue: OperationQueue, withHandler handler: @escaping CMHeadphoneActivityManager.StatusHandler)
```

<a id="discussion"></a>

## Discussion

If a compatible set of headphones is already connected before you call this method, the handler is called with a status update of [CMHeadphoneActivityManager.Status.connected](status/connected.md) for the connected headphones.

## See Also

### Starting and Stopping Updates

- [startActivityUpdates(to:withHandler:)](startactivityupdates%28to_withhandler_%29.md): Starts headphone activity updates, providing data to the given handler through the given queue.
- [stopActivityUpdates()](stopactivityupdates%28%29.md): Stops headphone activity updates.
- [stopStatusUpdates()](stopstatusupdates%28%29.md): Stops headphone status updates.

# startStatusUpdatesToQueue:withHandler: (Objective-C)

**Framework:** Core Motion  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · watchOS 11.0+

Starts headphone status updates, providing data to the given handler through the given queue.

## Declaration

```objectivec
- (void) startStatusUpdatesToQueue:(NSOperationQueue *) queue withHandler:(CMHeadphoneActivityStatusHandler) handler;
```

<a id="discussion"></a>

## Discussion

If a compatible set of headphones is already connected before you call this method, the handler is called with a status update of [CMHeadphoneActivityStatusConnected](status/connected.md) for the connected headphones.

## See Also

### Starting and Stopping Updates

- [startActivityUpdatesToQueue:withHandler:](startactivityupdates%28to_withhandler_%29.md): Starts headphone activity updates, providing data to the given handler through the given queue.
- [stopActivityUpdates](stopactivityupdates%28%29.md): Stops headphone activity updates.
- [stopStatusUpdates](stopstatusupdates%28%29.md): Stops headphone status updates.
