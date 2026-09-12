> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/iomemorymap/getlength](https://developer.apple.com/documentation/driverkit/iomemorymap/getlength)

# GetLength

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Returns the length of the memory block in bytes.

## Declaration

```objectivec
uint64_t GetLength();
```

<a id="return-value"></a>

## Return Value

The number of bytes in the memory block.

<a id="Discussion"></a>

## Discussion

The length represents the number of bytes that are accessible to the current process.

## See Also

### Getting the Map Attributes

- [GetAddress](getaddress.md): Returns the address of the memory block.
- [GetOffset](getoffset.md): Returns the offset from the original start of the memory block.
