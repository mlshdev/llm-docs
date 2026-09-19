> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/fskit/fsactivateresult/init(rootitem:)

# init(rootItem:) (Swift)

**Framework:** FSKit  
**Kind:** Initializer  
**Availability:** macOS 27.0+

Creates an activate result instance.

## Declaration

```swift
init?(rootItem: FSItem)
```

## Parameters

- `rootItem`: The root [FSItem](../fsitem.md) of the volume.

<a id="return-value"></a>

## Return Value

A populated result instance, or `nil` if validation fails.

## See Also

### Creating an activate result

- [FSItem](../fsitem.md): A distinct object in a file hierarchy, such as a file, directory, symlink, socket, and more.

# initWithRootItem: (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Creates an activate result instance.

## Declaration

```objectivec
- (instancetype) initWithRootItem:(FSItem *) rootItem;
```

## Parameters

- `rootItem`: The root [FSItem](../fsitem.md) of the volume.

<a id="return-value"></a>

## Return Value

A populated result instance, or `nil` if validation fails.

## See Also

### Creating an activate result

- [FSItem](../fsitem.md): A distinct object in a file hierarchy, such as a file, directory, symlink, socket, and more.
