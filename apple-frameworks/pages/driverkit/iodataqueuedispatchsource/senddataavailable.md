> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/iodataqueuedispatchsource/senddataavailable](https://developer.apple.com/documentation/driverkit/iodataqueuedispatchsource/senddataavailable)

# SendDataAvailable

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Sends a notification to observers that indicates more data is available for processing.

## Declaration

```objectivec
void SendDataAvailable();
```

## See Also

### Adding Work to the Queue

- [SetDataServicedHandler](setdataservicedhandler.md): Installs the handler block to execute when data is removed from the queue.
- [DataServiced](dataserviced.md): Responds to the removal of data from the queue.
- [Enqueue](enqueue.md): Adds a single entry to the shared data queue.
- [EnqueueWithCoalesce](enqueuewithcoalesce.md): Adds an entry to the queue, but doesn’t automatically send a data-available notification.
- [IODataQueueClientEnqueueEntryBlock](../iodataqueueclientenqueueentryblock.md): The handler block you use to add data to a queue.
