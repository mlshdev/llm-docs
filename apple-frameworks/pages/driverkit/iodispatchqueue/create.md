> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/iodispatchqueue/create](https://developer.apple.com/documentation/driverkit/iodispatchqueue/create)

# Create

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Static Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Creates a new dispatch queue object.

## Declaration

```objectivec
static kern_return_t Create(const IODispatchQueueName name, uint64_t options, uint64_t priority, IODispatchQueue **queue);
```

## Parameters

- `name`: The name of the queue.
- `options`: No options are currently defined. Specify `0` for this parameter.
- `priority`: No priorities are currently defined. Specify `0` for this parameter.
- `queue`: The created queue.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../kioreturnsuccess.md) on success, or another value if an error occurs. For a list of error codes, see [Error Codes](../error-codes.md).

<a id="Discussion"></a>

## Discussion

Creates a new dispatch queue object. All queues are currently serial, executing one block at time in FIFO order. The new object has retain count of 1 and should be released by the caller.

## See Also

### Creating a Dispatch Queue

- [init](init.md): Initializes the dispatch queue object.
- [free](free.md): Performs any final cleanup for the dispatch queue object.
