> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iodataqueuedispatchsource/3438184-senddataavailable](https://developer.apple.com/documentation/kernel/iodataqueuedispatchsource/3438184-senddataavailable)

# SendDataAvailable

**Interface language:** Objective-C

**Framework:** DriverKit, Kernel  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS 10.15.2+

Sends a notification to observers that indicates more data is available for processing.

## Declaration

```objectivec
void SendDataAvailable(void);
```

## See Also

### Adding Work to the Queue

- [SetDataServicedHandler](https://developer.apple.com/documentation/driverkit/iodataqueuedispatchsource/setdataservicedhandler): Installs the handler block to execute when data is removed from the queue.
- [DataServiced](https://developer.apple.com/documentation/driverkit/iodataqueuedispatchsource/dataserviced): Responds to the removal of data from the queue.
- [Enqueue](3438180-enqueue.md): Adds a single entry to the shared data queue.
- [EnqueueWithCoalesce](3438181-enqueuewithcoalesce.md): Adds an entry to the queue, but doesn't automatically send a data-available notification.
- [IODataQueueClientEnqueueEntryBlock](https://developer.apple.com/documentation/driverkit/iodataqueueclientenqueueentryblock): The handler block you use to add data to a queue.
