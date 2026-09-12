> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/iodataqueuedispatchsource/dequeuewithcoalesce](https://developer.apple.com/documentation/driverkit/iodataqueuedispatchsource/dequeuewithcoalesce)

# DequeueWithCoalesce

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Removes the next queue entry, but doesn’t automatically send notifications.

## Declaration

```objectivec
kern_return_t DequeueWithCoalesce(bool *sendDataServiced, IODataQueueClientDequeueEntryBlock callback);
```

## Parameters

- `sendDataServiced`: A Boolean value that indicates that this method would have sent a notification. Initialize the value to `false`, and then make one or more calls to this method. If the value is `true` after all of those calls, call the [SendDataServiced](senddataserviced.md) method yourself to deliver the notification.
- `callback`: The callback that you use to process the dequeued data.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../kioreturnsuccess.md) on success, [kIOReturnUnderrun](../kioreturnunderrun.md) if the queue is empty, or [kIOReturnError](../kioreturnerror.md) if the queue is corrupt. See [Error Codes](../error-codes.md).

## See Also

### Removing Work from the Queue

- [SetDataAvailableHandler](setdataavailablehandler.md): Sets the handler block to run when another object adds data to the queue.
- [DataAvailable](dataavailable.md): Responds to the addition of new data to the queue.
- [IsDataAvailable](isdataavailable.md): Checks whether the data queue contains data to process.
- [Peek](peek.md): Returns the next queue entry without removing it from the queue.
- [Dequeue](dequeue.md): Removes the next entry from the queue.
- [SendDataServiced](senddataserviced.md): Notifies interested parties that you removed data from the queue.
- [IODataQueueClientDequeueEntryBlock](../iodataqueueclientdequeueentryblock.md): The handler block you use to remove data from a queue.
