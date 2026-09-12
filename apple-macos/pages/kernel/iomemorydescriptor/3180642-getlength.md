> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iomemorydescriptor/3180642-getlength](https://developer.apple.com/documentation/kernel/iomemorydescriptor/3180642-getlength)

# GetLength

**Interface language:** Objective-C

**Framework:** DriverKit, Kernel  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS 10.15+

Returns the length of the memory block represented by this object.

## Declaration

```objectivec
kern_return_t GetLength(uint64_t *returnLength);
```

## Parameters

- `returnLength`: A variable in which to put the length of the current memory block.

<a id="return_value"></a>

## Return Value

[kIOReturnSuccess](https://developer.apple.com/documentation/driverkit/kioreturnsuccess) on success, or another value if an error occurs. See [Error Codes](https://developer.apple.com/documentation/driverkit/error-codes).

<a id="discussion"></a>

## Discussion

This method returns the effective size of the memory block, which might be less than the block's total capacity.

## See Also

### Related Documentation

- [SetLength](../iobuffermemorydescriptor/3180454-setlength.md): Changes the length of the memory buffer.
