> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsreadfileresult/init(bytesread:itemattributes:)](https://developer.apple.com/documentation/fskit/fsreadfileresult/init(bytesread:itemattributes:))

# init(bytesRead:itemAttributes:) (Swift)

**Framework:** FSKit  
**Kind:** Initializer  
**Availability:** macOS 27.0+

Creates a result for a file-reading operation.

## Declaration

```swift
init?(bytesRead actuallyRead: Int, itemAttributes attributes: FSItem.Attributes)
```

## Parameters

- `actuallyRead`: The number of bytes actually read from the file. This may be less than the requested length if the end of file was reached.
- `attributes`: The updated [FSItem.Attributes](../fsitem/attributes.md) of the file after the read operation (e.g., updated access time).

<a id="return-value"></a>

## Return Value

A populated result instance, or `nil` if validation fails.

## See Also

### Creating a read-file result

- [FSItem.Attributes](../fsitem/attributes.md): Attributes of an item, such as size, creation and modification times, and user and group identifiers.

# initWithBytesRead:itemAttributes: (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Creates a result for a file-reading operation.

## Declaration

```objectivec
- (instancetype) initWithBytesRead:(size_t) actuallyRead itemAttributes:(FSItemAttributes *) attributes;
```

## Parameters

- `actuallyRead`: The number of bytes actually read from the file. This may be less than the requested length if the end of file was reached.
- `attributes`: The updated [FSItemAttributes](../fsitem/attributes.md) of the file after the read operation (e.g., updated access time).

<a id="return-value"></a>

## Return Value

A populated result instance, or `nil` if validation fails.

## See Also

### Creating a read-file result

- [FSItemAttributes](../fsitem/attributes.md): Attributes of an item, such as size, creation and modification times, and user and group identifiers.
