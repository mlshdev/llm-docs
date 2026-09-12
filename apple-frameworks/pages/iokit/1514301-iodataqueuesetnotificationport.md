> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/1514301-iodataqueuesetnotificationport](https://developer.apple.com/documentation/iokit/1514301-iodataqueuesetnotificationport)

# IODataQueueSetNotificationPort(\_:\_:) (Swift)

**Framework:** IOKit  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · visionOS 1.0+

Creates a simple mach message targeting the mach port specified in port.

## Declaration

```swift
func IODataQueueSetNotificationPort(_ dataQueue: UnsafeMutablePointer<IODataQueueMemory>!, _ notifyPort: mach_port_t) -> IOReturn
```

## Parameters

- `dataQueue`: The IODataQueueMemory region mapped from the kernel created from an IOSharedDataQueue.
- `notifyPort`: The mach port to target with the notification message.

<a id="return_value"></a>

## Return Value

Returns kIOReturnSuccess on success. Returns kIOReturnBadArgument if either dataQueue is 0 (NULL).

<a id="discussion"></a>

## Discussion

This message is sent when data is added to an empty queue. It is to notify another user process that new data has become available. **Please note that using this method without mapped memory create from an IOSharedDataQueue will result in undefined behavior. **

## See Also

### Miscellaneous

- [IODataQueueAllocateNotificationPort()](1514495-iodataqueueallocatenotificationp.md): Allocates and returns a new mach port able to receive data available notifications from an IODataQueue.
- [IODataQueueDataAvailable(\_:)](1514386-iodataqueuedataavailable.md): Used to determine if more data is avilable on the queue.
- [IODataQueueDequeue(\_:\_:\_:)](1514287-iodataqueuedequeue.md): Dequeues the next available entry on the queue and copies it into the given data pointer.
- [IODataQueueEnqueue(\_:\_:\_:)](1514482-iodataqueueenqueue.md): Enqueues a new entry on the queue.
- [IODataQueuePeek(\_:)](1514649-iodataqueuepeek.md): Used to peek at the next entry on the queue.
- [IODataQueueWaitForAvailableData(\_:\_:)](1514696-iodataqueuewaitforavailabledata.md): Wait for an incoming dataAvailable message on the given notifyPort.

# IODataQueueSetNotificationPort (Objective-C)

**Framework:** IOKit  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · visionOS 1.0+

Creates a simple mach message targeting the mach port specified in port.

## Declaration

```objectivec
IOReturn IODataQueueSetNotificationPort(IODataQueueMemory *dataQueue, mach_port_t notifyPort);
```

## Parameters

- `dataQueue`: The IODataQueueMemory region mapped from the kernel created from an IOSharedDataQueue.
- `notifyPort`: The mach port to target with the notification message.

<a id="return_value"></a>

## Return Value

Returns kIOReturnSuccess on success. Returns kIOReturnBadArgument if either dataQueue is 0 (NULL).

<a id="discussion"></a>

## Discussion

This message is sent when data is added to an empty queue. It is to notify another user process that new data has become available. **Please note that using this method without mapped memory create from an IOSharedDataQueue will result in undefined behavior. **

## See Also

### Miscellaneous

- [IODataQueueAllocateNotificationPort](1514495-iodataqueueallocatenotificationp.md): Allocates and returns a new mach port able to receive data available notifications from an IODataQueue.
- [IODataQueueDataAvailable](1514386-iodataqueuedataavailable.md): Used to determine if more data is avilable on the queue.
- [IODataQueueDequeue](1514287-iodataqueuedequeue.md): Dequeues the next available entry on the queue and copies it into the given data pointer.
- [IODataQueueEnqueue](1514482-iodataqueueenqueue.md): Enqueues a new entry on the queue.
- [IODataQueuePeek](1514649-iodataqueuepeek.md): Used to peek at the next entry on the queue.
- [IODataQueueWaitForAvailableData](1514696-iodataqueuewaitforavailabledata.md): Wait for an incoming dataAvailable message on the given notifyPort.
