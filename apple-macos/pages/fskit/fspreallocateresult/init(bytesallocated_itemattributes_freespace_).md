> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fspreallocateresult/init(bytesallocated:itemattributes:freespace:)](https://developer.apple.com/documentation/fskit/fspreallocateresult/init(bytesallocated:itemattributes:freespace:))

# init(bytesAllocated:itemAttributes:freeSpace:) (Swift)

**Framework:** FSKit  
**Kind:** Initializer  
**Availability:** macOS 27.0+

Creates a result for a preallocate operation.

## Declaration

```swift
init?(bytesAllocated: Int, itemAttributes attributes: FSItem.Attributes, freeSpace: FSFreeSpace?)
```

## Parameters

- `bytesAllocated`: The number of bytes actually allocated for the file during the preallocation operation.
- `attributes`: The updated [FSItem.Attributes](../fsitem/attributes.md) of the file after the preallocation operation.
- `freeSpace`: An [FSFreeSpace](../fsfreespace.md) instance populated with the volume’s updated free space. Passing a `nil` free space causes FSKit to calculate the free space when the operation is done, based on the volume’s [volumeStatistics](../fsvolume/handler/volumestatistics.md) property. This behavior may lead to degraded performance.

<a id="return-value"></a>

## Return Value

A populated result instance, or `nil` if validation fails.

## See Also

### Creating a preallocate result

- [FSItem.Attributes](../fsitem/attributes.md): Attributes of an item, such as size, creation and modification times, and user and group identifiers.
- [FSFreeSpace](../fsfreespace.md): A free space object that pairs free space values with atomic sequence numbers.

# initWithBytesAllocated:itemAttributes:freeSpace: (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Creates a result for a preallocate operation.

## Declaration

```objectivec
- (instancetype) initWithBytesAllocated:(size_t) bytesAllocated itemAttributes:(FSItemAttributes *) attributes freeSpace:(FSFreeSpace *) freeSpace;
```

## Parameters

- `bytesAllocated`: The number of bytes actually allocated for the file during the preallocation operation.
- `attributes`: The updated [FSItemAttributes](../fsitem/attributes.md) of the file after the preallocation operation.
- `freeSpace`: An [FSFreeSpace](../fsfreespace.md) instance populated with the volume’s updated free space. Passing a `nil` free space causes FSKit to calculate the free space when the operation is done, based on the volume’s [volumeStatistics](../fsvolume/handler/volumestatistics.md) property. This behavior may lead to degraded performance.

<a id="return-value"></a>

## Return Value

A populated result instance, or `nil` if validation fails.

## See Also

### Creating a preallocate result

- [FSItemAttributes](../fsitem/attributes.md): Attributes of an item, such as size, creation and modification times, and user and group identifiers.
- [FSFreeSpace](../fsfreespace.md): A free space object that pairs free space values with atomic sequence numbers.
