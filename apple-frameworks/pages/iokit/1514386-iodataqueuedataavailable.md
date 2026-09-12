> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/1514386-iodataqueuedataavailable](https://developer.apple.com/documentation/iokit/1514386-iodataqueuedataavailable)

# IODataQueueDataAvailable(\_:) (Swift)

**Framework:** IOKit  
**Kind:** Function  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 13.0+ · macOS 10.0+ · visionOS 2.4+

Used to determine if more data is avilable on the queue.

## Declaration

```swift
func IODataQueueDataAvailable(_ dataQueue: UnsafeMutablePointer<IODataQueueMemory>!) -> Bool
```

## Parameters

- `dataQueue`: The IODataQueueMemory region mapped from the kenel.

<a id="return_value"></a>

## Return Value

Returns true if data is available and false if not.

## See Also

### Miscellaneous

- [IODataQueueAllocateNotificationPort()](1514495-iodataqueueallocatenotificationp.md): Allocates and returns a new mach port able to receive data available notifications from an IODataQueue.
- [IODataQueueDequeue(\_:\_:\_:)](1514287-iodataqueuedequeue.md): Dequeues the next available entry on the queue and copies it into the given data pointer.
- [IODataQueueEnqueue(\_:\_:\_:)](1514482-iodataqueueenqueue.md): Enqueues a new entry on the queue.
- [IODataQueuePeek(\_:)](1514649-iodataqueuepeek.md): Used to peek at the next entry on the queue.
- [IODataQueueSetNotificationPort(\_:\_:)](1514301-iodataqueuesetnotificationport.md): Creates a simple mach message targeting the mach port specified in port.
- [IODataQueueWaitForAvailableData(\_:\_:)](1514696-iodataqueuewaitforavailabledata.md): Wait for an incoming dataAvailable message on the given notifyPort.

# IODataQueueDataAvailable (Objective-C)

**Framework:** IOKit  
**Kind:** Function  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 13.0+ · macOS 10.0+ · visionOS 2.4+

Used to determine if more data is avilable on the queue.

## Declaration

```objectivec
Boolean IODataQueueDataAvailable(IODataQueueMemory *dataQueue);
```

## Parameters

- `dataQueue`: The IODataQueueMemory region mapped from the kenel.

<a id="return_value"></a>

## Return Value

Returns true if data is available and false if not.

## See Also

### Miscellaneous

- [IODataQueueAllocateNotificationPort](1514495-iodataqueueallocatenotificationp.md): Allocates and returns a new mach port able to receive data available notifications from an IODataQueue.
- [IODataQueueDequeue](1514287-iodataqueuedequeue.md): Dequeues the next available entry on the queue and copies it into the given data pointer.
- [IODataQueueEnqueue](1514482-iodataqueueenqueue.md): Enqueues a new entry on the queue.
- [IODataQueuePeek](1514649-iodataqueuepeek.md): Used to peek at the next entry on the queue.
- [IODataQueueSetNotificationPort](1514301-iodataqueuesetnotificationport.md): Creates a simple mach message targeting the mach port specified in port.
- [IODataQueueWaitForAvailableData](1514696-iodataqueuewaitforavailabledata.md): Wait for an incoming dataAvailable message on the given notifyPort.
