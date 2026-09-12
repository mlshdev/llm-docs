> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/operations/setattributes(_:on:replyhandler:)](https://developer.apple.com/documentation/fskit/fsvolume/operations/setattributes(_:on:replyhandler:))

# setAttributes(\_:on:replyHandler:) (Swift)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+ (deprecated in 27.0)

Sets the given attributes on an item.

## Declaration

```swift
func setAttributes(_ newAttributes: FSItem.SetAttributesRequest, on item: FSItem, replyHandler reply: @escaping @Sendable (FSItem.Attributes?, (any Error)?) -> Void)
```

```swift
func setAttributes(_ newAttributes: FSItem.SetAttributesRequest, on item: FSItem) async throws -> FSItem.Attributes
```

## Parameters

- `newAttributes`: A request containing the attributes to set.
- `item`: The item on which to set the attributes.
- `reply`: A block or closure to indicate success or failure. If setting attributes succeeds, pass an [FSItem.Attributes](../../fsitem/attributes.md) with the item’s updated attributes and a `nil` error. If setting attributes fails, pass the relevant error as the second parameter; FSKit ignores any [FSItem.Attributes](../../fsitem/attributes.md) in this case. For an `async` Swift implementation, there’s no reply handler; simply return the [FSItem.Attributes](../../fsitem/attributes.md) or throw an error.

<a id="discussion"></a>

## Discussion

Several attributes are considered “read-only”, and an attempt to set these attributes results in an error with the code `EINVAL`.

A request may set [size](../../fsitem/attributes/size.md) beyond the end of the file. If the underlying file system doesn’t support sparse files, allocate space to fill the new file size. Either fill this space with zeroes, or configure it to read as zeroes.

If a request sets the file size below the current end-of-file, truncate the file and return any unused space to the file system as free space.

Ignore attempts to set the size of directories or symbolic links; don’t produce an error.

If the caller attempts to set an attribute not supported by the on-disk file system format, don’t produce an error. The upper layers of the framework will detect this situation.

## See Also

### Working with attributes

- [getAttributes(\_:of:replyHandler:)](getattributes%28__of_replyhandler_%29.md): Deprecated. Fetches attributes for the given item.
- [FSItem.GetAttributesRequest](../../fsitem/getattributesrequest.md): A request to get attributes from an item.
- [FSItem.SetAttributesRequest](../../fsitem/setattributesrequest.md): A request to set attributes on an item.

# setAttributes:onItem:replyHandler: (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+ (deprecated in 27.0)

Sets the given attributes on an item.

## Declaration

```objectivec
- (void) setAttributes:(FSItemSetAttributesRequest *) newAttributes onItem:(FSItem *) item replyHandler:(void (^)(FSItemAttributes *attributes, NSError *error)) reply;
```

## Parameters

- `newAttributes`: A request containing the attributes to set.
- `item`: The item on which to set the attributes.
- `reply`: A block or closure to indicate success or failure. If setting attributes succeeds, pass an [FSItemAttributes](../../fsitem/attributes.md) with the item’s updated attributes and a `nil` error. If setting attributes fails, pass the relevant error as the second parameter; FSKit ignores any [FSItemAttributes](../../fsitem/attributes.md) in this case. For an `async` Swift implementation, there’s no reply handler; simply return the [FSItemAttributes](../../fsitem/attributes.md) or throw an error.

<a id="discussion"></a>

## Discussion

Several attributes are considered “read-only”, and an attempt to set these attributes results in an error with the code `EINVAL`.

A request may set [size](../../fsitem/attributes/size.md) beyond the end of the file. If the underlying file system doesn’t support sparse files, allocate space to fill the new file size. Either fill this space with zeroes, or configure it to read as zeroes.

If a request sets the file size below the current end-of-file, truncate the file and return any unused space to the file system as free space.

Ignore attempts to set the size of directories or symbolic links; don’t produce an error.

If the caller attempts to set an attribute not supported by the on-disk file system format, don’t produce an error. The upper layers of the framework will detect this situation.

## See Also

### Working with attributes

- [getAttributes:ofItem:replyHandler:](getattributes%28__of_replyhandler_%29.md): Deprecated. Fetches attributes for the given item.
- [FSItemGetAttributesRequest](../../fsitem/getattributesrequest.md): A request to get attributes from an item.
- [FSItemSetAttributesRequest](../../fsitem/setattributesrequest.md): A request to set attributes on an item.
