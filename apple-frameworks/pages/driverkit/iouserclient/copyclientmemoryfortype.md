> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/iouserclient/copyclientmemoryfortype](https://developer.apple.com/documentation/driverkit/iouserclient/copyclientmemoryfortype)

# CopyClientMemoryForType

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Return an IOMemoryDescriptor to be mapped into the client task.

## Declaration

```objectivec
virtual kern_return_t CopyClientMemoryForType(uint64_t type, uint64_t *options, IOMemoryDescriptor **memory);
```

## Parameters

- `type`: Type parameter IOConnectMapMemory()/UnmapMemory().
- `options`: Set kIOUserClientMemoryReadOnly for memory to be mapped read only in the client.
- `memory`: An instance of IOMemoryDescriptor on success. One reference will be consumed by the caller of this method.

<a id="return-value"></a>

## Return Value

kIOReturnSuccess on success. See IOReturn.h for error codes.

<a id="Discussion"></a>

## Discussion

IOConnectMapMemory()/UnmapMemory() will result in a call to this method to obtain an IOMemoryDescriptor instance for shared memory. For a given IOUserClient instance, calling CopyClientMemoryForType() with a given type, should return the same IOMemoryDescriptor instance.

## See Also

### Mapping to the Client’s Memory Space

- [Copy Client Memory Options](../3325603-copy_client_memory_options.md)
