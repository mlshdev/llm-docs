> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/iodataqueuedispatchsource/copydataservicedhandler](https://developer.apple.com/documentation/driverkit/iodataqueuedispatchsource/copydataservicedhandler)

# CopyDataServicedHandler

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

A private method that the dispatch source uses to detect dequeued data.

## Declaration

```objectivec
virtual kern_return_t CopyDataServicedHandler(OSAction **action);
```

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../kioreturnsuccess.md) on success, or another value if an error occurs. See [Error Codes](../error-codes.md).

## See Also

### Performing Internal Tasks

- [CopyDataAvailableHandler](copydataavailablehandler.md): A private method that the dispatch source uses to detect enqueued data.
- [CopyMemory](copymemory.md): A private method that the dispatch source uses to copy memory.
- [CheckForWork](checkforwork.md): Checks for events to handle.
