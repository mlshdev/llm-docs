> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsremoveitemresult/init(itemattributes:directoryattributes:freespace:)](https://developer.apple.com/documentation/fskit/fsremoveitemresult/init(itemattributes:directoryattributes:freespace:))

# init(itemAttributes:directoryAttributes:freeSpace:) (Swift)

**Framework:** FSKit  
**Kind:** Initializer  
**Availability:** macOS 27.0+

Creates a result for an item-removal operation.

## Declaration

```swift
init?(itemAttributes: FSItem.Attributes, directoryAttributes: FSItem.Attributes, freeSpace: FSFreeSpace?)
```

## Parameters

- `itemAttributes`: The [FSItem.Attributes](../fsitem/attributes.md) of the removed item.
- `directoryAttributes`: The updated [FSItem.Attributes](../fsitem/attributes.md) of the parent directory.
- `freeSpace`: An [FSFreeSpace](../fsfreespace.md) instance populated with the volume’s updated free space. Passing a `nil` free space causes FSKit to calculate the free space when the operation finishes, based on the volume’s [volumeStatistics](../fsvolume/handler/volumestatistics.md) property. This behavior may lead to degraded performance.

<a id="return-value"></a>

## Return Value

A populated result instance, or `nil` if validation fails.

## See Also

### Creating a remove-item result

- [FSItem.Attributes](../fsitem/attributes.md): Attributes of an item, such as size, creation and modification times, and user and group identifiers.
- [FSFreeSpace](../fsfreespace.md): A free space object that pairs free space values with atomic sequence numbers.

# initWithItemAttributes:directoryAttributes:freeSpace: (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Creates a result for an item-removal operation.

## Declaration

```objectivec
- (instancetype) initWithItemAttributes:(FSItemAttributes *) itemAttributes directoryAttributes:(FSItemAttributes *) directoryAttributes freeSpace:(FSFreeSpace *) freeSpace;
```

## Parameters

- `itemAttributes`: The [FSItemAttributes](../fsitem/attributes.md) of the removed item.
- `directoryAttributes`: The updated [FSItemAttributes](../fsitem/attributes.md) of the parent directory.
- `freeSpace`: An [FSFreeSpace](../fsfreespace.md) instance populated with the volume’s updated free space. Passing a `nil` free space causes FSKit to calculate the free space when the operation finishes, based on the volume’s [volumeStatistics](../fsvolume/handler/volumestatistics.md) property. This behavior may lead to degraded performance.

<a id="return-value"></a>

## Return Value

A populated result instance, or `nil` if validation fails.

## See Also

### Creating a remove-item result

- [FSItemAttributes](../fsitem/attributes.md): Attributes of an item, such as size, creation and modification times, and user and group identifiers.
- [FSFreeSpace](../fsfreespace.md): A free space object that pairs free space values with atomic sequence numbers.
