> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/iomemorydescriptor/getlength](https://developer.apple.com/documentation/driverkit/iomemorydescriptor/getlength)

# GetLength

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Returns the length of the memory block represented by this object.

## Declaration

```objectivec
kern_return_t GetLength(uint64_t *returnLength);
```

## Parameters

- `returnLength`: A variable in which to put the length of the current memory block.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../kioreturnsuccess.md) on success, or another value if an error occurs. See [Error Codes](../error-codes.md).

<a id="Discussion"></a>

## Discussion

This method returns the effective size of the memory block, which might be less than the block’s total capacity.

## See Also

### Related Documentation

- [SetLength](../iobuffermemorydescriptor/setlength.md): Changes the length of the memory buffer.
