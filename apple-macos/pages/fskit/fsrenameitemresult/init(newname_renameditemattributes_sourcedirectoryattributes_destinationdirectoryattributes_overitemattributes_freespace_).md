> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsrenameitemresult/init(newname:renameditemattributes:sourcedirectoryattributes:destinationdirectoryattributes:overitemattributes:freespace:)](https://developer.apple.com/documentation/fskit/fsrenameitemresult/init(newname:renameditemattributes:sourcedirectoryattributes:destinationdirectoryattributes:overitemattributes:freespace:))

# init(newName:renamedItemAttributes:sourceDirectoryAttributes:destinationDirectoryAttributes:overItemAttributes:freeSpace:) (Swift)

**Framework:** FSKit  
**Kind:** Initializer  
**Availability:** macOS 27.0+

Creates a result for an item-renaming operation.

## Declaration

```swift
init?(newName: FSFileName, renamedItemAttributes: FSItem.Attributes, sourceDirectoryAttributes: FSItem.Attributes, destinationDirectoryAttributes: FSItem.Attributes, overItemAttributes: FSItem.Attributes?, freeSpace: FSFreeSpace?)
```

## Parameters

- `newName`: The updated item name as it exists within the destination directory.
- `renamedItemAttributes`: The [FSItem.Attributes](../fsitem/attributes.md) of the renamed item.
- `sourceDirectoryAttributes`: The updated [FSItem.Attributes](../fsitem/attributes.md) of the source directory.
- `destinationDirectoryAttributes`: The updated [FSItem.Attributes](../fsitem/attributes.md) of the destination directory.
- `overItemAttributes`: The [FSItem.Attributes](../fsitem/attributes.md) of the overwritten item, if any. Pass `nil` if the action didn’t overwrite any item.
- `freeSpace`: An [FSFreeSpace](../fsfreespace.md) instance populated with the volume’s updated free space. Passing a `nil` free space causes FSKit to calculate the free space when the operation is done, based on the volume’s [volumeStatistics](../fsvolume/handler/volumestatistics.md) property. This behavior may lead to degraded performance.

<a id="return-value"></a>

## Return Value

A populated result instance, or `nil` if validation fails.

## See Also

### Creating a rename result

- [FSItem.Attributes](../fsitem/attributes.md): Attributes of an item, such as size, creation and modification times, and user and group identifiers.
- [FSFreeSpace](../fsfreespace.md): A free space object that pairs free space values with atomic sequence numbers.

# initWithNewName:renamedItemAttributes:sourceDirectoryAttributes:destinationDirectoryAttributes:overItemAttributes:freeSpace: (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Creates a result for an item-renaming operation.

## Declaration

```objectivec
- (instancetype) initWithNewName:(FSFileName *) newName renamedItemAttributes:(FSItemAttributes *) renamedItemAttributes sourceDirectoryAttributes:(FSItemAttributes *) sourceDirectoryAttributes destinationDirectoryAttributes:(FSItemAttributes *) destinationDirectoryAttributes overItemAttributes:(FSItemAttributes *) overItemAttributes freeSpace:(FSFreeSpace *) freeSpace;
```

## Parameters

- `newName`: The updated item name as it exists within the destination directory.
- `renamedItemAttributes`: The [FSItemAttributes](../fsitem/attributes.md) of the renamed item.
- `sourceDirectoryAttributes`: The updated [FSItemAttributes](../fsitem/attributes.md) of the source directory.
- `destinationDirectoryAttributes`: The updated [FSItemAttributes](../fsitem/attributes.md) of the destination directory.
- `overItemAttributes`: The [FSItemAttributes](../fsitem/attributes.md) of the overwritten item, if any. Pass `nil` if the action didn’t overwrite any item.
- `freeSpace`: An [FSFreeSpace](../fsfreespace.md) instance populated with the volume’s updated free space. Passing a `nil` free space causes FSKit to calculate the free space when the operation is done, based on the volume’s [volumeStatistics](../fsvolume/handler/volumestatistics.md) property. This behavior may lead to degraded performance.

<a id="return-value"></a>

## Return Value

A populated result instance, or `nil` if validation fails.

## See Also

### Creating a rename result

- [FSItemAttributes](../fsitem/attributes.md): Attributes of an item, such as size, creation and modification times, and user and group identifiers.
- [FSFreeSpace](../fsfreespace.md): A free space object that pairs free space values with atomic sequence numbers.
