> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsreadsymlinkresult/init(contents:symlinkattributes:)](https://developer.apple.com/documentation/fskit/fsreadsymlinkresult/init(contents:symlinkattributes:))

# init(contents:symlinkAttributes:) (Swift)

**Framework:** FSKit  
**Kind:** Initializer  
**Availability:** macOS 27.0+

Creates a result for a symlink-reading operation.

## Declaration

```swift
init?(contents: FSFileName, symlinkAttributes attributes: FSItem.Attributes)
```

## Parameters

- `contents`: The contents of the symbolic link.
- `attributes`: The [FSItem.Attributes](../fsitem/attributes.md) of the symbolic link.

<a id="return-value"></a>

## Return Value

A populated result instance, or `nil` if validation fails.

## See Also

### Creating a read-symlink result

- [FSFileName](../fsfilename.md): The name of a file, expressed as a data buffer.
- [FSItem.Attributes](../fsitem/attributes.md): Attributes of an item, such as size, creation and modification times, and user and group identifiers.

# initWithContents:symlinkAttributes: (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Creates a result for a symlink-reading operation.

## Declaration

```objectivec
- (instancetype) initWithContents:(FSFileName *) contents symlinkAttributes:(FSItemAttributes *) attributes;
```

## Parameters

- `contents`: The contents of the symbolic link.
- `attributes`: The [FSItemAttributes](../fsitem/attributes.md) of the symbolic link.

<a id="return-value"></a>

## Return Value

A populated result instance, or `nil` if validation fails.

## See Also

### Creating a read-symlink result

- [FSFileName](../fsfilename.md): The name of a file, expressed as a data buffer.
- [FSItemAttributes](../fsitem/attributes.md): Attributes of an item, such as size, creation and modification times, and user and group identifiers.
