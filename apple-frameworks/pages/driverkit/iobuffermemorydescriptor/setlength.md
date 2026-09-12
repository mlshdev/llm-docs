> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/iobuffermemorydescriptor/setlength](https://developer.apple.com/documentation/driverkit/iobuffermemorydescriptor/setlength)

# SetLength

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Changes the length of the memory buffer.

## Declaration

```objectivec
virtual kern_return_t SetLength(uint64_t length);
```

## Parameters

- `length`: The new length of the memory buffer. This value must be less than or equal to the buffer’s capacity.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../kioreturnsuccess.md) on success, or another value if an error occurs. See [Error Codes](../error-codes.md).

<a id="Discussion"></a>

## Discussion

Use this method to truncate an existing memory buffer. For example, you might call this method when repurposing an existing buffer for a new data type. The maximum capacity of the buffer remains unchanged, but the effective length of the buffer changes to the value you specify.

## See Also

### Managing the Buffer Contents

- [GetAddressRange](getaddressrange.md): Returns the address and length of the memory buffer.
- [IOAddressSegment](../ioaddresssegment.md): A structure that describes the location and size of a block of memory.
