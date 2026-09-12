> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/iodataqueuedispatchsource/setdataavailablehandler](https://developer.apple.com/documentation/driverkit/iodataqueuedispatchsource/setdataavailablehandler)

# SetDataAvailableHandler

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Sets the handler block to run when another object adds data to the queue.

## Declaration

```objectivec
virtual kern_return_t SetDataAvailableHandler(OSAction *action);
```

## Parameters

- `action`: The [OSAction](../osaction.md) instance specifying the callback method. The data queue retains this object until you call this method again or call [Cancel](cancel.md). This queue executes the action’s handler method on the action’s own dispatch queue.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../kioreturnsuccess.md) on success, or another value if an error occurs. See [Error Codes](../error-codes.md).

## See Also

### Removing Work from the Queue

- [DataAvailable](dataavailable.md): Responds to the addition of new data to the queue.
- [IsDataAvailable](isdataavailable.md): Checks whether the data queue contains data to process.
- [Peek](peek.md): Returns the next queue entry without removing it from the queue.
- [Dequeue](dequeue.md): Removes the next entry from the queue.
- [DequeueWithCoalesce](dequeuewithcoalesce.md): Removes the next queue entry, but doesn’t automatically send notifications.
- [SendDataServiced](senddataserviced.md): Notifies interested parties that you removed data from the queue.
- [IODataQueueClientDequeueEntryBlock](../iodataqueueclientdequeueentryblock.md): The handler block you use to remove data from a queue.
