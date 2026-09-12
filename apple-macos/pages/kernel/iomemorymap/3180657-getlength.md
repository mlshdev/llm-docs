> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iomemorymap/3180657-getlength](https://developer.apple.com/documentation/kernel/iomemorymap/3180657-getlength)

# GetLength

**Interface language:** Objective-C

**Framework:** DriverKit, Kernel  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS 10.15+

Returns the length of the memory block in bytes.

## Declaration

```objectivec
uint64_t GetLength(void);
```

<a id="return_value"></a>

## Return Value

The number of bytes in the memory block.

<a id="discussion"></a>

## Discussion

The length represents the number of bytes that are accessible to the current process.

## See Also

### Getting the Map Attributes

- [GetAddress](3180656-getaddress.md): Returns the address of the memory block.
- [GetOffset](3438204-getoffset.md): Returns the offset from the original start of the memory block.
