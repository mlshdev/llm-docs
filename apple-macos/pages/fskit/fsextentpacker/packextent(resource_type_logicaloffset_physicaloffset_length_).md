> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsextentpacker/packextent(resource:type:logicaloffset:physicaloffset:length:)](https://developer.apple.com/documentation/fskit/fsextentpacker/packextent(resource:type:logicaloffset:physicaloffset:length:))

# packExtent(resource:type:logicalOffset:physicalOffset:length:) (Swift)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+

Packs a single extent to send to the kernel.

## Declaration

```swift
func packExtent(resource: FSBlockDeviceResource, type: FSExtentType, logicalOffset: off_t, physicalOffset: off_t, length: Int) -> Bool
```

## Parameters

- `resource`: The resource on which to perform I/O.
- `type`: The type of extent, indicating whether it contains valid data.
- `logicalOffset`: The extent offset within the file, in bytes.
- `physicalOffset`: The extent offset on disk, in bytes.
- `length`: The extent length, in bytes. The maximal valid length is `UINT32_MAX`.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether the packer can pack more extents.

## See Also

### Packing extents

- [FSExtentType](../fsextenttype.md): An enumeration of types of extents.

# packExtentWithResource:type:logicalOffset:physicalOffset:length: (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+

Packs a single extent to send to the kernel.

## Declaration

```objectivec
- (BOOL) packExtentWithResource:(FSBlockDeviceResource *) resource type:(FSExtentType) type logicalOffset:(off_t) logicalOffset physicalOffset:(off_t) physicalOffset length:(size_t) length;
```

## Parameters

- `resource`: The resource on which to perform I/O.
- `type`: The type of extent, indicating whether it contains valid data.
- `logicalOffset`: The extent offset within the file, in bytes.
- `physicalOffset`: The extent offset on disk, in bytes.
- `length`: The extent length, in bytes. The maximal valid length is `UINT32_MAX`.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether the packer can pack more extents.

## See Also

### Packing extents

- [FSExtentType](../fsextenttype.md): An enumeration of types of extents.
