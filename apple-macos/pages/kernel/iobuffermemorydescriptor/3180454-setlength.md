> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iobuffermemorydescriptor/3180454-setlength](https://developer.apple.com/documentation/kernel/iobuffermemorydescriptor/3180454-setlength)

# SetLength

**Interface language:** Objective-C

**Framework:** DriverKit, Kernel  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS 10.15+

Changes the length of the memory buffer.

## Declaration

```objectivec
virtual kern_return_t SetLength(uint64_t length);
```

```objectivec
kern_return_t SetLength(uint64_t length, OSDispatchMethod supermethod);
```

## Parameters

- `length`: The new length of the memory buffer. This value must be less than or equal to the buffer's capacity.

<a id="return_value"></a>

## Return Value

[kIOReturnSuccess](https://developer.apple.com/documentation/driverkit/kioreturnsuccess) on success, or another value if an error occurs. See [Error Codes](https://developer.apple.com/documentation/driverkit/error-codes).

<a id="discussion"></a>

## Discussion

Use this method to truncate an existing memory buffer. For example, you might call this method when repurposing an existing buffer for a new data type. The maximum capacity of the buffer remains unchanged, but the effective length of the buffer changes to the value you specify.

## See Also

### Managing the Buffer Contents

- [GetAddressRange](3180453-getaddressrange.md): Returns the address and length of the memory buffer.
- [IOAddressSegment](https://developer.apple.com/documentation/driverkit/ioaddresssegment): A structure that describes the location and size of a block of memory.
