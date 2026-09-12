> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/iodataqueueclientenqueueentryblock](https://developer.apple.com/documentation/driverkit/iodataqueueclientenqueueentryblock)

# IODataQueueClientEnqueueEntryBlock

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Type Alias  
**Availability:** DriverKit · iOS · iPadOS · macOS

The handler block you use to add data to a queue.

## Declaration

```objectivec
typedef void (^)(void *, unsigned long) IODataQueueClientEnqueueEntryBlock;
```

## See Also

### Adding Work to the Queue

- [SetDataServicedHandler](iodataqueuedispatchsource/setdataservicedhandler.md): Installs the handler block to execute when data is removed from the queue.
- [DataServiced](iodataqueuedispatchsource/dataserviced.md): Responds to the removal of data from the queue.
- [Enqueue](iodataqueuedispatchsource/enqueue.md): Adds a single entry to the shared data queue.
- [EnqueueWithCoalesce](iodataqueuedispatchsource/enqueuewithcoalesce.md): Adds an entry to the queue, but doesn’t automatically send a data-available notification.
- [SendDataAvailable](iodataqueuedispatchsource/senddataavailable.md): Sends a notification to observers that indicates more data is available for processing.
