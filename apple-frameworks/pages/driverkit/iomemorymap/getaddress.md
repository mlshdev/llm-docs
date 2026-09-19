> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/driverkit/iomemorymap/getaddress

# GetAddress

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Returns the address of the memory block.

## Declaration

```objectivec
uint64_t GetAddress();
```

<a id="return-value"></a>

## Return Value

The address of the first byte of the memory block in the current process.

## See Also

### Getting the Map Attributes

- [GetLength](getlength.md): Returns the length of the memory block in bytes.
- [GetOffset](getoffset.md): Returns the offset from the original start of the memory block.
