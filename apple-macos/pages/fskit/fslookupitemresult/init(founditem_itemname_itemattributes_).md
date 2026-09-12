> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fslookupitemresult/init(founditem:itemname:itemattributes:)](https://developer.apple.com/documentation/fskit/fslookupitemresult/init(founditem:itemname:itemattributes:))

# init(foundItem:itemName:itemAttributes:) (Swift)

**Framework:** FSKit  
**Kind:** Initializer  
**Availability:** macOS 27.0+

Creates a result for an item-lookup operation.

## Declaration

```swift
init?(foundItem: FSItem, itemName: FSFileName, itemAttributes: FSItem.Attributes)
```

## Parameters

- `foundItem`: The [FSItem](../fsitem.md) found by the directory lookup.
- `itemName`: The item’s name as it exists within the file system. The value may differ from the requested name in order to handle case-insensitive file systems or Unicode normalization.
- `itemAttributes`: The [FSItem.Attributes](../fsitem/attributes.md) of the found item.

<a id="return-value"></a>

## Return Value

A populated result instance, or `nil` if validation fails.

## See Also

### Creating a lookup item result

- [FSItem](../fsitem.md): A distinct object in a file hierarchy, such as a file, directory, symlink, socket, and more.
- [FSFileName](../fsfilename.md): The name of a file, expressed as a data buffer.
- [FSItem.Attributes](../fsitem/attributes.md): Attributes of an item, such as size, creation and modification times, and user and group identifiers.

# initWithFoundItem:itemName:itemAttributes: (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Creates a result for an item-lookup operation.

## Declaration

```objectivec
- (instancetype) initWithFoundItem:(FSItem *) foundItem itemName:(FSFileName *) itemName itemAttributes:(FSItemAttributes *) itemAttributes;
```

## Parameters

- `foundItem`: The [FSItem](../fsitem.md) found by the directory lookup.
- `itemName`: The item’s name as it exists within the file system. The value may differ from the requested name in order to handle case-insensitive file systems or Unicode normalization.
- `itemAttributes`: The [FSItemAttributes](../fsitem/attributes.md) of the found item.

<a id="return-value"></a>

## Return Value

A populated result instance, or `nil` if validation fails.

## See Also

### Creating a lookup item result

- [FSItem](../fsitem.md): A distinct object in a file hierarchy, such as a file, directory, symlink, socket, and more.
- [FSFileName](../fsfilename.md): The name of a file, expressed as a data buffer.
- [FSItemAttributes](../fsitem/attributes.md): Attributes of an item, such as size, creation and modification times, and user and group identifiers.
