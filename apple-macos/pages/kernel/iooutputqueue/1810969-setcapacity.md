> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iooutputqueue/1810969-setcapacity](https://developer.apple.com/documentation/kernel/iooutputqueue/1810969-setcapacity)

# setCapacity

**Interface language:** Objective-C

**Framework:** Kernel

Changes the number of packets that the queue can hold before it begins to drop excess packets.

## Declaration

```objectivec
virtual bool setCapacity(
 UInt32capacity) = 0; 
```

## Parameters

- `capacity`: The new desired capacity.

<a id="return_value"></a>

## Return Value

Returns true if the new capacity was accepted, false otherwise.

## See Also

### Miscellaneous

- [cancelServiceThread](1810578-cancelservicethread.md): Cancels any pending service thread callout.
- [enqueue](1810610-enqueue.md): Adds a packet, or a chain of packets, to the queue.
- [flush](1810640-flush.md): Drops and frees all packets currently held by the queue.
- [free](1810666-free.md): Frees the IOOutputQueue object.
- [getCapacity](1810689-getcapacity.md): Gets the number of packets that the queue can hold.
- [getMbufPriority](1810719-getmbufpriority.md): Determines an mbuf's traffic priority. The highest priority is 0.
- [getOutputHandler](1810744-getoutputhandler.md): Returns the address of a function that is designated to handle incoming packets sent to the queue object.
- [getSize](1810788-getsize.md): Gets the number of packets currently held in the queue.
- [getStatisticsData](1810822-getstatisticsdata.md): Returns an IONetworkData object containing statistics counters updated by the queue.
- [init](1810854-init.md): Initializes an IOOutputQueue object.
- [scheduleServiceThread](1810887-scheduleservicethread.md): Schedules a service thread callout.
- [service](1810919-service.md): Services the queue.
- [serviceThread](1810947-servicethread.md): Method called by the scheduled service thread when it starts to run.
- [start](1810993-start.md): Starts up the queue.
- [stop](1811022-stop.md): Stops the queue.
