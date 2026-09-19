> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/networkingdriverkit/iousernetworkpacketbufferpool/copymemorydescriptor

# CopyMemoryDescriptor

**Interface language:** Objective-C

**Framework:** NetworkingDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit

Returns a memory descriptor for the buffer pool’s contents.

## Declaration

```objectivec
virtual kern_return_t CopyMemoryDescriptor(IOMemoryDescriptor **memory);
```

## Parameters

- `memory`: On output, a pointer to a memory descriptor object. It is a programmer error to specify `NULL` or an invalid pointer for this parameter.

<a id="return-value"></a>

## Return Value

`kIOReturnSuccess` on success, or another value if an error occurred.
