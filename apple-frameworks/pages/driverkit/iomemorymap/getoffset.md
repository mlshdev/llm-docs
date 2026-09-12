> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/iomemorymap/getoffset](https://developer.apple.com/documentation/driverkit/iomemorymap/getoffset)

# GetOffset

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Returns the offset from the original start of the memory block.

## Declaration

```objectivec
uint64_t GetOffset();
```

<a id="return-value"></a>

## Return Value

The number of bytes from the start of the original block of memory to the first byte of this memory map object.

<a id="Discussion"></a>

## Discussion

When creating a memory map object, you can map to a location in the middle of the underlying buffer. You might do this to access a specific structure inside that buffer. This method returns the offset from the original start of the buffer to the first byte of your mapping.

## See Also

### Getting the Map Attributes

- [GetAddress](getaddress.md): Returns the address of the memory block.
- [GetLength](getlength.md): Returns the length of the memory block in bytes.
