> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/iodataqueuedispatchsource/isdataavailable](https://developer.apple.com/documentation/driverkit/iodataqueuedispatchsource/isdataavailable)

# IsDataAvailable

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Checks whether the data queue contains data to process.

## Declaration

```objectivec
bool IsDataAvailable();
```

<a id="return-value"></a>

## Return Value

`true` if the queue contains data to process, or `false` if it is empty.

## See Also

### Removing Work from the Queue

- [SetDataAvailableHandler](setdataavailablehandler.md): Sets the handler block to run when another object adds data to the queue.
- [DataAvailable](dataavailable.md): Responds to the addition of new data to the queue.
- [Peek](peek.md): Returns the next queue entry without removing it from the queue.
- [Dequeue](dequeue.md): Removes the next entry from the queue.
- [DequeueWithCoalesce](dequeuewithcoalesce.md): Removes the next queue entry, but doesn’t automatically send notifications.
- [SendDataServiced](senddataserviced.md): Notifies interested parties that you removed data from the queue.
- [IODataQueueClientDequeueEntryBlock](../iodataqueueclientdequeueentryblock.md): The handler block you use to remove data from a queue.
