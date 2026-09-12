> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iomemorymap/3180656-getaddress](https://developer.apple.com/documentation/kernel/iomemorymap/3180656-getaddress)

# GetAddress

**Interface language:** Objective-C

**Framework:** DriverKit, Kernel  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS 10.15+

Returns the address of the memory block.

## Declaration

```objectivec
uint64_t GetAddress(void);
```

<a id="return_value"></a>

## Return Value

The address of the first byte of the memory block in the current process.

## See Also

### Getting the Map Attributes

- [GetLength](3180657-getlength.md): Returns the length of the memory block in bytes.
- [GetOffset](3438204-getoffset.md): Returns the offset from the original start of the memory block.
