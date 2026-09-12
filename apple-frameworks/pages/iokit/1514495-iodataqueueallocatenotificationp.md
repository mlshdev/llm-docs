> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/1514495-iodataqueueallocatenotificationp](https://developer.apple.com/documentation/iokit/1514495-iodataqueueallocatenotificationp)

# IODataQueueAllocateNotificationPort() (Swift)

**Framework:** IOKit  
**Kind:** Function  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 13.0+ · macOS 10.0+ · visionOS 2.4+

Allocates and returns a new mach port able to receive data available notifications from an IODataQueue.

## Declaration

```swift
func IODataQueueAllocateNotificationPort() -> mach_port_t
```

<a id="return_value"></a>

## Return Value

Returns a newly allocated mach port on success. On failure, it returns MACH_PORT_NULL.

<a id="discussion"></a>

## Discussion

This port is intended to be passed down into the kernel and into an IODataQueue to allow it to send the appropriate notification. The returned mach port is allocated with a queue limit of one message. This allows only one mach message to be queued up at a time. The IODataQueue code is written with the restriction in mind and will only queue up a message if no messages alread have been sent.

## See Also

### Miscellaneous

- [IODataQueueDataAvailable(\_:)](1514386-iodataqueuedataavailable.md): Used to determine if more data is avilable on the queue.
- [IODataQueueDequeue(\_:\_:\_:)](1514287-iodataqueuedequeue.md): Dequeues the next available entry on the queue and copies it into the given data pointer.
- [IODataQueueEnqueue(\_:\_:\_:)](1514482-iodataqueueenqueue.md): Enqueues a new entry on the queue.
- [IODataQueuePeek(\_:)](1514649-iodataqueuepeek.md): Used to peek at the next entry on the queue.
- [IODataQueueSetNotificationPort(\_:\_:)](1514301-iodataqueuesetnotificationport.md): Creates a simple mach message targeting the mach port specified in port.
- [IODataQueueWaitForAvailableData(\_:\_:)](1514696-iodataqueuewaitforavailabledata.md): Wait for an incoming dataAvailable message on the given notifyPort.

# IODataQueueAllocateNotificationPort (Objective-C)

**Framework:** IOKit  
**Kind:** Function  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 13.0+ · macOS 10.0+ · visionOS 2.4+

Allocates and returns a new mach port able to receive data available notifications from an IODataQueue.

## Declaration

```objectivec
mach_port_t IODataQueueAllocateNotificationPort(void);
```

<a id="return_value"></a>

## Return Value

Returns a newly allocated mach port on success. On failure, it returns MACH_PORT_NULL.

<a id="discussion"></a>

## Discussion

This port is intended to be passed down into the kernel and into an IODataQueue to allow it to send the appropriate notification. The returned mach port is allocated with a queue limit of one message. This allows only one mach message to be queued up at a time. The IODataQueue code is written with the restriction in mind and will only queue up a message if no messages alread have been sent.

## See Also

### Miscellaneous

- [IODataQueueDataAvailable](1514386-iodataqueuedataavailable.md): Used to determine if more data is avilable on the queue.
- [IODataQueueDequeue](1514287-iodataqueuedequeue.md): Dequeues the next available entry on the queue and copies it into the given data pointer.
- [IODataQueueEnqueue](1514482-iodataqueueenqueue.md): Enqueues a new entry on the queue.
- [IODataQueuePeek](1514649-iodataqueuepeek.md): Used to peek at the next entry on the queue.
- [IODataQueueSetNotificationPort](1514301-iodataqueuesetnotificationport.md): Creates a simple mach message targeting the mach port specified in port.
- [IODataQueueWaitForAvailableData](1514696-iodataqueuewaitforavailabledata.md): Wait for an incoming dataAvailable message on the given notifyPort.
