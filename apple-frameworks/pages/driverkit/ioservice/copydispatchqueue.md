> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/ioservice/copydispatchqueue](https://developer.apple.com/documentation/driverkit/ioservice/copydispatchqueue)

# CopyDispatchQueue

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Gets the dispatch queue with the specified name from the current service.

## Declaration

```objectivec
virtual kern_return_t CopyDispatchQueue(const IODispatchQueueName name, IODispatchQueue **queue);
```

## Parameters

- `name`: The name you assigned to the dispatch queue. Specify `kIOServiceDefaultQueueName` to retrieve the default dispatch queue.
- `queue`: A variable to use for storing the dispatch queue. On return, this parameter contains the retained queue, or `NULL` if no queue matches the specified name. You are responsible for releasing the returned dispatch queue.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../kioreturnsuccess.md) on success, or another value if an error occurs. For a list of error codes, see [Error Codes](../error-codes.md).

## See Also

### Configuring Additional Dispatch Queues

- [SetDispatchQueue](setdispatchqueue.md): Associates a custom dispatch queue with the service and assigns the specified name to it.
