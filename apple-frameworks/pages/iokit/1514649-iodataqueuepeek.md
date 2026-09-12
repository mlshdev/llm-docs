> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/1514649-iodataqueuepeek](https://developer.apple.com/documentation/iokit/1514649-iodataqueuepeek)

# IODataQueuePeek(\_:) (Swift)

**Framework:** IOKit  
**Kind:** Function  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 13.0+ · macOS 10.0+ · visionOS 2.4+

Used to peek at the next entry on the queue.

## Declaration

```swift
func IODataQueuePeek(_ dataQueue: UnsafeMutablePointer<IODataQueueMemory>!) -> UnsafeMutablePointer<IODataQueueEntry>!
```

## Parameters

- `dataQueue`: The IODataQueueMemory region mapped from the kernel.

<a id="return_value"></a>

## Return Value

Returns a pointer to the next IODataQueueEntry if one is available. Zero is returned if the queue is empty.

<a id="discussion"></a>

## Discussion

This function can be used to look at the next entry which allows the entry to be received without having to copy it with IODataQueueDequeue. In order to do this, call IODataQueuePeek to get the entry. Then call IODataQueueDequeue with a NULL data pointer. That will cause the head to be moved to the next entry, but no memory to be copied.

## See Also

### Miscellaneous

- [IODataQueueAllocateNotificationPort()](1514495-iodataqueueallocatenotificationp.md): Allocates and returns a new mach port able to receive data available notifications from an IODataQueue.
- [IODataQueueDataAvailable(\_:)](1514386-iodataqueuedataavailable.md): Used to determine if more data is avilable on the queue.
- [IODataQueueDequeue(\_:\_:\_:)](1514287-iodataqueuedequeue.md): Dequeues the next available entry on the queue and copies it into the given data pointer.
- [IODataQueueEnqueue(\_:\_:\_:)](1514482-iodataqueueenqueue.md): Enqueues a new entry on the queue.
- [IODataQueueSetNotificationPort(\_:\_:)](1514301-iodataqueuesetnotificationport.md): Creates a simple mach message targeting the mach port specified in port.
- [IODataQueueWaitForAvailableData(\_:\_:)](1514696-iodataqueuewaitforavailabledata.md): Wait for an incoming dataAvailable message on the given notifyPort.

# IODataQueuePeek (Objective-C)

**Framework:** IOKit  
**Kind:** Function  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 13.0+ · macOS 10.0+ · visionOS 2.4+

Used to peek at the next entry on the queue.

## Declaration

```objectivec
IODataQueueEntry * IODataQueuePeek(IODataQueueMemory *dataQueue);
```

## Parameters

- `dataQueue`: The IODataQueueMemory region mapped from the kernel.

<a id="return_value"></a>

## Return Value

Returns a pointer to the next IODataQueueEntry if one is available. Zero is returned if the queue is empty.

<a id="discussion"></a>

## Discussion

This function can be used to look at the next entry which allows the entry to be received without having to copy it with IODataQueueDequeue. In order to do this, call IODataQueuePeek to get the entry. Then call IODataQueueDequeue with a NULL data pointer. That will cause the head to be moved to the next entry, but no memory to be copied.

## See Also

### Miscellaneous

- [IODataQueueAllocateNotificationPort](1514495-iodataqueueallocatenotificationp.md): Allocates and returns a new mach port able to receive data available notifications from an IODataQueue.
- [IODataQueueDataAvailable](1514386-iodataqueuedataavailable.md): Used to determine if more data is avilable on the queue.
- [IODataQueueDequeue](1514287-iodataqueuedequeue.md): Dequeues the next available entry on the queue and copies it into the given data pointer.
- [IODataQueueEnqueue](1514482-iodataqueueenqueue.md): Enqueues a new entry on the queue.
- [IODataQueueSetNotificationPort](1514301-iodataqueuesetnotificationport.md): Creates a simple mach message targeting the mach port specified in port.
- [IODataQueueWaitForAvailableData](1514696-iodataqueuewaitforavailabledata.md): Wait for an incoming dataAvailable message on the given notifyPort.
