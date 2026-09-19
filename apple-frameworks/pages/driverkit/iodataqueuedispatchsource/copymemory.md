> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/driverkit/iodataqueuedispatchsource/copymemory

# CopyMemory

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

A private method that the dispatch source uses to copy memory.

## Declaration

```objectivec
virtual kern_return_t CopyMemory(IOMemoryDescriptor **memory);
```

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../kioreturnsuccess.md) on success, or another value if an error occurs. See [Error Codes](../error-codes.md).

## See Also

### Performing Internal Tasks

- [CopyDataAvailableHandler](copydataavailablehandler.md): A private method that the dispatch source uses to detect enqueued data.
- [CopyDataServicedHandler](copydataservicedhandler.md): A private method that the dispatch source uses to detect dequeued data.
- [CheckForWork](checkforwork.md): Checks for events to handle.
