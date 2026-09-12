> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fscreateitemresult/init(newitem:newitemname:newitemattributes:directoryattributes:freespace:)](https://developer.apple.com/documentation/fskit/fscreateitemresult/init(newitem:newitemname:newitemattributes:directoryattributes:freespace:))

# init(newItem:newItemName:newItemAttributes:directoryAttributes:freeSpace:) (Swift)

**Framework:** FSKit  
**Kind:** Initializer  
**Availability:** macOS 27.0+

Creates a result for an item-creation operation.

## Declaration

```swift
init?(newItem: FSItem, newItemName: FSFileName, newItemAttributes: FSItem.Attributes, directoryAttributes: FSItem.Attributes, freeSpace: FSFreeSpace?)
```

## Parameters

- `newItem`: The newly-created [FSItem](../fsitem.md).
- `newItemName`: The name of the newly-created item as it exists within the file system.
- `newItemAttributes`: The [FSItem.Attributes](../fsitem/attributes.md) of the newly-created item.
- `directoryAttributes`: The updated [FSItem.Attributes](../fsitem/attributes.md) of the parent directory.
- `freeSpace`: An [FSFreeSpace](../fsfreespace.md) instance populated with the volume’s updated free space. Passing a `nil` free space causes FSKit to calculate the free space when the operation completes, based on the volume’s [volumeStatistics](../fsvolume/handler/volumestatistics.md) property. This behavior may lead to degraded performance.

<a id="return-value"></a>

## Return Value

A populated result instance, or `nil` if validation fails.

## See Also

### Creating a create-item result

- [FSFileName](../fsfilename.md): The name of a file, expressed as a data buffer.
- [FSItem.Attributes](../fsitem/attributes.md): Attributes of an item, such as size, creation and modification times, and user and group identifiers.
- [FSFreeSpace](../fsfreespace.md): A free space object that pairs free space values with atomic sequence numbers.

# initWithNewItem:newItemName:newItemAttributes:directoryAttributes:freeSpace: (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Creates a result for an item-creation operation.

## Declaration

```objectivec
- (instancetype) initWithNewItem:(FSItem *) newItem newItemName:(FSFileName *) newItemName newItemAttributes:(FSItemAttributes *) newItemAttributes directoryAttributes:(FSItemAttributes *) directoryAttributes freeSpace:(FSFreeSpace *) freeSpace;
```

## Parameters

- `newItem`: The newly-created [FSItem](../fsitem.md).
- `newItemName`: The name of the newly-created item as it exists within the file system.
- `newItemAttributes`: The [FSItemAttributes](../fsitem/attributes.md) of the newly-created item.
- `directoryAttributes`: The updated [FSItemAttributes](../fsitem/attributes.md) of the parent directory.
- `freeSpace`: An [FSFreeSpace](../fsfreespace.md) instance populated with the volume’s updated free space. Passing a `nil` free space causes FSKit to calculate the free space when the operation completes, based on the volume’s [volumeStatistics](../fsvolume/handler/volumestatistics.md) property. This behavior may lead to degraded performance.

<a id="return-value"></a>

## Return Value

A populated result instance, or `nil` if validation fails.

## See Also

### Creating a create-item result

- [FSFileName](../fsfilename.md): The name of a file, expressed as a data buffer.
- [FSItemAttributes](../fsitem/attributes.md): Attributes of an item, such as size, creation and modification times, and user and group identifiers.
- [FSFreeSpace](../fsfreespace.md): A free space object that pairs free space values with atomic sequence numbers.
