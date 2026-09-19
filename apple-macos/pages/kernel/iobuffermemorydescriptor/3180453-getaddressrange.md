> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iobuffermemorydescriptor/3180453-getaddressrange

# GetAddressRange

**Interface language:** Objective-C

**Framework:** DriverKit, Kernel  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS 10.15+

Returns the address and length of the memory buffer.

## Declaration

```objectivec
kern_return_t GetAddressRange(IOAddressSegment *range);
```

## Parameters

- `range`: An [IOAddressSegment](https://developer.apple.com/documentation/driverkit/ioaddresssegment) structure that you provide. On return, this structure contains the address and length of the memory buffer.

<a id="return_value"></a>

## Return Value

[kIOReturnSuccess](https://developer.apple.com/documentation/driverkit/kioreturnsuccess) on success, or another value if an error occurs. See [Error Codes](https://developer.apple.com/documentation/driverkit/error-codes).

## See Also

### Managing the Buffer Contents

- [SetLength](3180454-setlength.md): Changes the length of the memory buffer.
- [IOAddressSegment](https://developer.apple.com/documentation/driverkit/ioaddresssegment): A structure that describes the location and size of a block of memory.
