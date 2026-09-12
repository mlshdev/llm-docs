> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmheadphoneactivitymanager/startactivityupdates(to:withhandler:)](https://developer.apple.com/documentation/coremotion/cmheadphoneactivitymanager/startactivityupdates(to:withhandler:))

# startActivityUpdates(to:withHandler:) (Swift)

**Framework:** Core Motion  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · watchOS 11.0+

Starts headphone activity updates, providing data to the given handler through the given queue.

## Declaration

```swift
func startActivityUpdates(to queue: OperationQueue, withHandler handler: @escaping CMHeadphoneActivityManager.ActivityHandler)
```

## See Also

### Starting and Stopping Updates

- [stopActivityUpdates()](stopactivityupdates%28%29.md): Stops headphone activity updates.
- [startStatusUpdates(to:withHandler:)](startstatusupdates%28to_withhandler_%29.md): Starts headphone status updates, providing data to the given handler through the given queue.
- [stopStatusUpdates()](stopstatusupdates%28%29.md): Stops headphone status updates.

# startActivityUpdatesToQueue:withHandler: (Objective-C)

**Framework:** Core Motion  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · watchOS 11.0+

Starts headphone activity updates, providing data to the given handler through the given queue.

## Declaration

```objectivec
- (void) startActivityUpdatesToQueue:(NSOperationQueue *) queue withHandler:(CMHeadphoneActivityHandler) handler;
```

## See Also

### Starting and Stopping Updates

- [stopActivityUpdates](stopactivityupdates%28%29.md): Stops headphone activity updates.
- [startStatusUpdatesToQueue:withHandler:](startstatusupdates%28to_withhandler_%29.md): Starts headphone status updates, providing data to the given handler through the given queue.
- [stopStatusUpdates](stopstatusupdates%28%29.md): Stops headphone status updates.
