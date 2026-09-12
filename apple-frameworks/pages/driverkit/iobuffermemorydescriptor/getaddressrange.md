> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/iobuffermemorydescriptor/getaddressrange](https://developer.apple.com/documentation/driverkit/iobuffermemorydescriptor/getaddressrange)

# GetAddressRange

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Returns the address and length of the memory buffer.

## Declaration

```objectivec
kern_return_t GetAddressRange(IOAddressSegment *range);
```

## Parameters

- `range`: An [IOAddressSegment](../ioaddresssegment.md) structure that you provide. On return, this structure contains the address and length of the memory buffer.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../kioreturnsuccess.md) on success, or another value if an error occurs. See [Error Codes](../error-codes.md).

## See Also

### Managing the Buffer Contents

- [SetLength](setlength.md): Changes the length of the memory buffer.
- [IOAddressSegment](../ioaddresssegment.md): A structure that describes the location and size of a block of memory.
