> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/iodataqueuedispatchsource/dequeue](https://developer.apple.com/documentation/driverkit/iodataqueuedispatchsource/dequeue)

# Dequeue

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Removes the next entry from the queue.

## Declaration

```objectivec
kern_return_t Dequeue(IODataQueueClientDequeueEntryBlock callback);
```

## Parameters

- `callback`: The callback you use to process the next entry in the queue.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../kioreturnsuccess.md) on success, [kIOReturnUnderrun](../kioreturnunderrun.md) if the queue is empty, or [kIOReturnError](../kioreturnerror.md) if the queue is corrupt. See [Error Codes](../error-codes.md).

## See Also

### Removing Work from the Queue

- [SetDataAvailableHandler](setdataavailablehandler.md): Sets the handler block to run when another object adds data to the queue.
- [DataAvailable](dataavailable.md): Responds to the addition of new data to the queue.
- [IsDataAvailable](isdataavailable.md): Checks whether the data queue contains data to process.
- [Peek](peek.md): Returns the next queue entry without removing it from the queue.
- [DequeueWithCoalesce](dequeuewithcoalesce.md): Removes the next queue entry, but doesn’t automatically send notifications.
- [SendDataServiced](senddataserviced.md): Notifies interested parties that you removed data from the queue.
- [IODataQueueClientDequeueEntryBlock](../iodataqueueclientdequeueentryblock.md): The handler block you use to remove data from a queue.
