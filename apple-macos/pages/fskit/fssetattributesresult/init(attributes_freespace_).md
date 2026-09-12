> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fssetattributesresult/init(attributes:freespace:)](https://developer.apple.com/documentation/fskit/fssetattributesresult/init(attributes:freespace:))

# init(attributes:freeSpace:) (Swift)

**Framework:** FSKit  
**Kind:** Initializer  
**Availability:** macOS 27.0+

Creates a result for an attribute-setting operation.

## Declaration

```swift
init?(attributes: FSItem.Attributes, freeSpace: FSFreeSpace?)
```

## Parameters

- `attributes`: The updated [FSItem.Attributes](../fsitem/attributes.md) for the item.
- `freeSpace`: An [FSFreeSpace](../fsfreespace.md) instance populated with the volume’s updated free space. Passing a `nil` free space causes FSKit to calculate the free space when the operation is done, based on the volume’s [volumeStatistics](../fsvolume/handler/volumestatistics.md) property. This behavior may lead to degraded performance.

<a id="return-value"></a>

## Return Value

A populated result instance, or `nil` if validation fails.

## See Also

### Creating a set-attributes result

- [FSItem.Attributes](../fsitem/attributes.md): Attributes of an item, such as size, creation and modification times, and user and group identifiers.
- [FSFreeSpace](../fsfreespace.md): A free space object that pairs free space values with atomic sequence numbers.

# initWithAttributes:freeSpace: (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Creates a result for an attribute-setting operation.

## Declaration

```objectivec
- (instancetype) initWithAttributes:(FSItemAttributes *) attributes freeSpace:(FSFreeSpace *) freeSpace;
```

## Parameters

- `attributes`: The updated [FSItemAttributes](../fsitem/attributes.md) for the item.
- `freeSpace`: An [FSFreeSpace](../fsfreespace.md) instance populated with the volume’s updated free space. Passing a `nil` free space causes FSKit to calculate the free space when the operation is done, based on the volume’s [volumeStatistics](../fsvolume/handler/volumestatistics.md) property. This behavior may lead to degraded performance.

<a id="return-value"></a>

## Return Value

A populated result instance, or `nil` if validation fails.

## See Also

### Creating a set-attributes result

- [FSItemAttributes](../fsitem/attributes.md): Attributes of an item, such as size, creation and modification times, and user and group identifiers.
- [FSFreeSpace](../fsfreespace.md): A free space object that pairs free space values with atomic sequence numbers.
