> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/1514696-iodataqueuewaitforavailabledata](https://developer.apple.com/documentation/iokit/1514696-iodataqueuewaitforavailabledata)

# IODataQueueWaitForAvailableData(\_:\_:) (Swift)

**Framework:** IOKit  
**Kind:** Function  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 13.0+ · macOS 10.0+ · visionOS 2.4+

Wait for an incoming dataAvailable message on the given notifyPort.

## Declaration

```swift
func IODataQueueWaitForAvailableData(_ dataQueue: UnsafeMutablePointer<IODataQueueMemory>!, _ notificationPort: mach_port_t) -> IOReturn
```

## Parameters

- `dataQueue`: The IODataQueueMemory region mapped from the kernel.
- `notifyPort`: Mach port on which to listen for incoming messages.

<a id="return_value"></a>

## Return Value

Returns kIOReturnSuccess on success. Returns kIOReturnBadArgument if either dataQueue is 0 (NULL) or notiryPort is MACH_PORT_NULL. Returns the result of the mach_msg() listen call on the given port.

<a id="discussion"></a>

## Discussion

This method will simply wait for an incoming message on the given notifyPort. Once it is received, the return from mach_msg() is returned.

## See Also

### Miscellaneous

- [IODataQueueAllocateNotificationPort()](1514495-iodataqueueallocatenotificationp.md): Allocates and returns a new mach port able to receive data available notifications from an IODataQueue.
- [IODataQueueDataAvailable(\_:)](1514386-iodataqueuedataavailable.md): Used to determine if more data is avilable on the queue.
- [IODataQueueDequeue(\_:\_:\_:)](1514287-iodataqueuedequeue.md): Dequeues the next available entry on the queue and copies it into the given data pointer.
- [IODataQueueEnqueue(\_:\_:\_:)](1514482-iodataqueueenqueue.md): Enqueues a new entry on the queue.
- [IODataQueuePeek(\_:)](1514649-iodataqueuepeek.md): Used to peek at the next entry on the queue.
- [IODataQueueSetNotificationPort(\_:\_:)](1514301-iodataqueuesetnotificationport.md): Creates a simple mach message targeting the mach port specified in port.

# IODataQueueWaitForAvailableData (Objective-C)

**Framework:** IOKit  
**Kind:** Function  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 13.0+ · macOS 10.0+ · visionOS 2.4+

Wait for an incoming dataAvailable message on the given notifyPort.

## Declaration

```objectivec
IOReturn IODataQueueWaitForAvailableData(IODataQueueMemory *dataQueue, mach_port_t notificationPort);
```

## Parameters

- `dataQueue`: The IODataQueueMemory region mapped from the kernel.
- `notifyPort`: Mach port on which to listen for incoming messages.

<a id="return_value"></a>

## Return Value

Returns kIOReturnSuccess on success. Returns kIOReturnBadArgument if either dataQueue is 0 (NULL) or notiryPort is MACH_PORT_NULL. Returns the result of the mach_msg() listen call on the given port.

<a id="discussion"></a>

## Discussion

This method will simply wait for an incoming message on the given notifyPort. Once it is received, the return from mach_msg() is returned.

## See Also

### Miscellaneous

- [IODataQueueAllocateNotificationPort](1514495-iodataqueueallocatenotificationp.md): Allocates and returns a new mach port able to receive data available notifications from an IODataQueue.
- [IODataQueueDataAvailable](1514386-iodataqueuedataavailable.md): Used to determine if more data is avilable on the queue.
- [IODataQueueDequeue](1514287-iodataqueuedequeue.md): Dequeues the next available entry on the queue and copies it into the given data pointer.
- [IODataQueueEnqueue](1514482-iodataqueueenqueue.md): Enqueues a new entry on the queue.
- [IODataQueuePeek](1514649-iodataqueuepeek.md): Used to peek at the next entry on the queue.
- [IODataQueueSetNotificationPort](1514301-iodataqueuesetnotificationport.md): Creates a simple mach message targeting the mach port specified in port.
