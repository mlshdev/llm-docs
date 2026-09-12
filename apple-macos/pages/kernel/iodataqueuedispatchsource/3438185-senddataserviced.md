> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iodataqueuedispatchsource/3438185-senddataserviced](https://developer.apple.com/documentation/kernel/iodataqueuedispatchsource/3438185-senddataserviced)

# SendDataServiced

**Interface language:** Objective-C

**Framework:** DriverKit, Kernel  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS 10.15.2+

Notifies interested parties that you removed data from the queue.

## Declaration

```objectivec
void SendDataServiced(void);
```

<a id="discussion"></a>

## Discussion

Use this method to send a single notification after dequeueing multiple entries with the [DequeueWithCoalesce](3438179-dequeuewithcoalesce.md) method. The [DequeueWithCoalesce](3438179-dequeuewithcoalesce.md) method doesn't call the [DataServiced](https://developer.apple.com/documentation/driverkit/iodataqueuedispatchsource/dataserviced) handler automatically after removing an entry. Instead, you call this method after the successful removal of entries from the queue.

## See Also

### Removing Work from the Queue

- [SetDataAvailableHandler](https://developer.apple.com/documentation/driverkit/iodataqueuedispatchsource/setdataavailablehandler): Sets the handler block to run when another object adds data to the queue.
- [DataAvailable](https://developer.apple.com/documentation/driverkit/iodataqueuedispatchsource/dataavailable): Responds to the addition of new data to the queue.
- [IsDataAvailable](3438182-isdataavailable.md): Checks whether the data queue contains data to process.
- [Peek](3438183-peek.md): Returns the next queue entry without removing it from the queue.
- [Dequeue](3438178-dequeue.md): Removes the next entry from the queue.
- [DequeueWithCoalesce](3438179-dequeuewithcoalesce.md): Removes the next queue entry, but doesn't automatically send notifications.
- [IODataQueueClientDequeueEntryBlock](https://developer.apple.com/documentation/driverkit/iodataqueueclientdequeueentryblock): The handler block you use to remove data from a queue.
