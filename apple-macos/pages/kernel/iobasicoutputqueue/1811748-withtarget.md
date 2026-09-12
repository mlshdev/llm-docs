> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iobasicoutputqueue/1811748-withtarget](https://developer.apple.com/documentation/kernel/iobasicoutputqueue/1811748-withtarget)

# withTarget(IONetworkController \*, UInt32)

**Interface language:** Objective-C

**Framework:** Kernel

Factory method that constructs and initializes an IOBasicOutputQueue object.

## Declaration

```objectivec
static IOBasicOutputQueue * withTarget(
 IONetworkController *target, 
 UInt32 capacity = 0); 
```

## Parameters

- `target`: An IONetworkController object that will handle packets removed from the queue.
- `capacity`: The initial capacity of the output queue.

<a id="return_value"></a>

## Return Value

Returns an IOBasicOutputQueue object on success, or 0 otherwise.

## See Also

### Miscellaneous

- [enqueue](1811623-enqueue.md): Adds a packet, or a chain of packets, to the queue.
- [flush](1811630-flush.md): Drops and frees all packets currently held by the queue.
- [free](1811636-free.md): Frees the IOBasicOutputQueue object.
- [getCapacity](1811642-getcapacity.md): Gets the number of packets that the queue can hold.
- [getDropCount](1811646-getdropcount.md): Gets the number of packets dropped by the queue.
- [getOutputCount](1811651-getoutputcount.md): Gets the number of packets accepted by the target.
- [getRetryCount](1811660-getretrycount.md): Gets the number of instances when the target has refused to accept the packet provided.
- [getSize](1811664-getsize.md): Gets the number of packets currently held in the queue.
- [getStallCount](1811671-getstallcount.md): Gets the number of instances when the target has stalled the queue.
- [getState](1811677-getstate.md): Gets the state of the queue object.
- [getStatisticsData](1811683-getstatisticsdata.md): Returns an IONetworkData object containing statistics counters updated by the queue.
- [handleNetworkDataAccess](1811690-handlenetworkdataaccess.md): Handles an external access to the IONetworkData object returned by getStatisticsData().
- [init](1811696-init.md): Initializes an IOBasicOutputQueue object.
- [output](1811702-output.md): Transfers all packets in the mbuf queue to the target.
- [service](1811708-service.md): Services a queue that was stalled by the target.
- [serviceThread](1811713-servicethread.md): Provides an implementation for the serviceThread() method defined in IOOutputQueue.
- [setCapacity](1811721-setcapacity.md): Changes the number of packets that the queue can hold before it begins to drop excess packets.
- [start](1811726-start.md): Starts up the packet flow between the queue and its target.
- [stop](1811734-stop.md): Stops the packet flow between the queue and its target.
- [withTarget(IONetworkController \*, UInt32, UInt32)](1811755-withtarget.md): Factory method that constructs and initializes an IOBasicOutputQueue object.
- [withTarget(OSObject \*, IOOutputAction, UInt32)](1811763-withtarget.md): Factory method that constructs and initializes an IOBasicOutputQueue object.
- [withTarget(OSObject \*, IOOutputAction, UInt32, UInt32)](1811770-withtarget.md): Factory method that constructs and initializes an IOBasicOutputQueue object.
