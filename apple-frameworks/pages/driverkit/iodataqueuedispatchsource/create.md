> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/iodataqueuedispatchsource/create](https://developer.apple.com/documentation/driverkit/iodataqueuedispatchsource/create)

# Create

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Static Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Creates a dispatch source that you use as a shared-memory data queue.

## Declaration

```objectivec
static kern_return_t Create(uint64_t queueByteCount, IODispatchQueue *queue, IODataQueueDispatchSource **source);
```

## Parameters

- `queueByteCount`: The size of the queue in bytes.
- `queue`: The dispatch queue to use for executing tasks. Note that the [DataAvailable](dataavailable.md) and [DataServiced](dataserviced.md) handlers execute on the queue set for the target method of the associated [OSAction](../osaction.md) object, not this queue.
- `source`: A variable for storing the resulting dispatch source object. On success, the returned object has a retain count of 1, and you must release it when finished.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../kioreturnsuccess.md) on success, or another value if an error occurs. See [Error Codes](../error-codes.md).

## See Also

### Configuring the Dispatch Source

- [init](init.md): Handles the basic initialization of the dispatch source.
- [free](free.md): Performs any final cleanup for the data-queue dispatch source.
