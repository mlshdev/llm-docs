> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/1514482-iodataqueueenqueue](https://developer.apple.com/documentation/iokit/1514482-iodataqueueenqueue)

# IODataQueueEnqueue(\_:\_:\_:) (Swift)

**Framework:** IOKit  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · visionOS 1.0+

Enqueues a new entry on the queue.

## Declaration

```swift
func IODataQueueEnqueue(_ dataQueue: UnsafeMutablePointer<IODataQueueMemory>!, _ data: UnsafeMutableRawPointer!, _ dataSize: UInt32) -> IOReturn
```

## Parameters

- `dataQueue`: The IODataQueueMemory region mapped from the kernel created from an IOSharedDataQueue.
- `data`: Pointer to the data to be added to the queue.
- `dataSize`: Size of the data pointed to by data.

<a id="return_value"></a>

## Return Value

Returns kIOReturnSuccess on success. Other return values possible are: kIOReturnOverrun - queue is full.

<a id="discussion"></a>

## Discussion

This method adds a new data entry of dataSize to the queue. It sets the size parameter of the entry pointed to by the tail value and copies the memory pointed to by the data parameter in place in the queue. Once that is done, it moves the tail to the next available location. When attempting to add a new entry towards the end of the queue and there isn't enough space at the end, it wraps back to the beginning.

If the queue is empty when a new entry is added, the port specified in IODataQueueSetNotificationPort will be used to send a message to the client process that data is now available.

**Please note that using this method without mapped memory create from an IOSharedDataQueue will result in undefined behavior. **

## See Also

### Miscellaneous

- [IODataQueueAllocateNotificationPort()](1514495-iodataqueueallocatenotificationp.md): Allocates and returns a new mach port able to receive data available notifications from an IODataQueue.
- [IODataQueueDataAvailable(\_:)](1514386-iodataqueuedataavailable.md): Used to determine if more data is avilable on the queue.
- [IODataQueueDequeue(\_:\_:\_:)](1514287-iodataqueuedequeue.md): Dequeues the next available entry on the queue and copies it into the given data pointer.
- [IODataQueuePeek(\_:)](1514649-iodataqueuepeek.md): Used to peek at the next entry on the queue.
- [IODataQueueSetNotificationPort(\_:\_:)](1514301-iodataqueuesetnotificationport.md): Creates a simple mach message targeting the mach port specified in port.
- [IODataQueueWaitForAvailableData(\_:\_:)](1514696-iodataqueuewaitforavailabledata.md): Wait for an incoming dataAvailable message on the given notifyPort.

# IODataQueueEnqueue (Objective-C)

**Framework:** IOKit  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · visionOS 1.0+

Enqueues a new entry on the queue.

## Declaration

```objectivec
IOReturn IODataQueueEnqueue(IODataQueueMemory *dataQueue, void *data, uint32_t dataSize);
```

## Parameters

- `dataQueue`: The IODataQueueMemory region mapped from the kernel created from an IOSharedDataQueue.
- `data`: Pointer to the data to be added to the queue.
- `dataSize`: Size of the data pointed to by data.

<a id="return_value"></a>

## Return Value

Returns kIOReturnSuccess on success. Other return values possible are: kIOReturnOverrun - queue is full.

<a id="discussion"></a>

## Discussion

This method adds a new data entry of dataSize to the queue. It sets the size parameter of the entry pointed to by the tail value and copies the memory pointed to by the data parameter in place in the queue. Once that is done, it moves the tail to the next available location. When attempting to add a new entry towards the end of the queue and there isn't enough space at the end, it wraps back to the beginning.

If the queue is empty when a new entry is added, the port specified in IODataQueueSetNotificationPort will be used to send a message to the client process that data is now available.

**Please note that using this method without mapped memory create from an IOSharedDataQueue will result in undefined behavior. **

## See Also

### Miscellaneous

- [IODataQueueAllocateNotificationPort](1514495-iodataqueueallocatenotificationp.md): Allocates and returns a new mach port able to receive data available notifications from an IODataQueue.
- [IODataQueueDataAvailable](1514386-iodataqueuedataavailable.md): Used to determine if more data is avilable on the queue.
- [IODataQueueDequeue](1514287-iodataqueuedequeue.md): Dequeues the next available entry on the queue and copies it into the given data pointer.
- [IODataQueuePeek](1514649-iodataqueuepeek.md): Used to peek at the next entry on the queue.
- [IODataQueueSetNotificationPort](1514301-iodataqueuesetnotificationport.md): Creates a simple mach message targeting the mach port specified in port.
- [IODataQueueWaitForAvailableData](1514696-iodataqueuewaitforavailabledata.md): Wait for an incoming dataAvailable message on the given notifyPort.
