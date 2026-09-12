> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fscreatelinkresult/init(linkname:linkattributes:directoryattributes:freespace:)](https://developer.apple.com/documentation/fskit/fscreatelinkresult/init(linkname:linkattributes:directoryattributes:freespace:))

# init(linkName:linkAttributes:directoryAttributes:freeSpace:) (Swift)

**Framework:** FSKit  
**Kind:** Initializer  
**Availability:** macOS 27.0+

Creates a result for a link-creation operation.

## Declaration

```swift
init?(linkName: FSFileName, linkAttributes: FSItem.Attributes, directoryAttributes: FSItem.Attributes, freeSpace: FSFreeSpace?)
```

## Parameters

- `linkName`: The name of the newly-created hard link.
- `linkAttributes`: The [FSItem.Attributes](../fsitem/attributes.md) of the linked item (the target of the hard link).
- `directoryAttributes`: The updated [FSItem.Attributes](../fsitem/attributes.md) of the parent directory.
- `freeSpace`: An [FSFreeSpace](../fsfreespace.md) instance populated with the volume’s updated free space. Passing a `nil` free space causes FSKit to calculate the free space when the operation is done, based on the volume’s [volumeStatistics](../fsvolume/handler/volumestatistics.md) property. This behavior may lead to degraded performance.

<a id="return-value"></a>

## Return Value

A populated result instance, or `nil` if validation fails.

## See Also

### Creating a create-link result

- [FSFileName](../fsfilename.md): The name of a file, expressed as a data buffer.
- [FSItem.Attributes](../fsitem/attributes.md): Attributes of an item, such as size, creation and modification times, and user and group identifiers.
- [FSFreeSpace](../fsfreespace.md): A free space object that pairs free space values with atomic sequence numbers.

# initWithLinkName:linkAttributes:directoryAttributes:freeSpace: (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Creates a result for a link-creation operation.

## Declaration

```objectivec
- (instancetype) initWithLinkName:(FSFileName *) linkName linkAttributes:(FSItemAttributes *) linkAttributes directoryAttributes:(FSItemAttributes *) directoryAttributes freeSpace:(FSFreeSpace *) freeSpace;
```

## Parameters

- `linkName`: The name of the newly-created hard link.
- `linkAttributes`: The [FSItemAttributes](../fsitem/attributes.md) of the linked item (the target of the hard link).
- `directoryAttributes`: The updated [FSItemAttributes](../fsitem/attributes.md) of the parent directory.
- `freeSpace`: An [FSFreeSpace](../fsfreespace.md) instance populated with the volume’s updated free space. Passing a `nil` free space causes FSKit to calculate the free space when the operation is done, based on the volume’s [volumeStatistics](../fsvolume/handler/volumestatistics.md) property. This behavior may lead to degraded performance.

<a id="return-value"></a>

## Return Value

A populated result instance, or `nil` if validation fails.

## See Also

### Creating a create-link result

- [FSFileName](../fsfilename.md): The name of a file, expressed as a data buffer.
- [FSItemAttributes](../fsitem/attributes.md): Attributes of an item, such as size, creation and modification times, and user and group identifiers.
- [FSFreeSpace](../fsfreespace.md): A free space object that pairs free space values with atomic sequence numbers.
