> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/handler/setattributes(_:on:context:replyhandler:)](https://developer.apple.com/documentation/fskit/fsvolume/handler/setattributes(_:on:context:replyhandler:))

# setAttributes(\_:on:context:replyHandler:) (Swift)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Sets the given attributes on an item.

## Declaration

```swift
func setAttributes(_ newAttributes: FSItem.SetAttributesRequest, on item: FSItem, context: FSContext, replyHandler reply: @escaping @Sendable (FSSetAttributesResult?, (any Error)?) -> Void)
```

```swift
func setAttributes(_ newAttributes: FSItem.SetAttributesRequest, on item: FSItem, context: FSContext) async throws -> FSSetAttributesResult
```

## Parameters

- `newAttributes`: A request containing the attributes to set.
- `item`: The item on which to set the attributes.
- `context`: An object that enables context-aware file system decisions throughout the operation.
- `reply`: A block or closure to indicate success or failure. If setting attributes succeeds, pass an instance of [FSSetAttributesResult](../../fssetattributesresult.md) containing the item’s updated attributes and the volume’s updated free space, along with a `nil` error. If setting attributes fails, pass the relevant error as the second parameter; FSKit ignores the [FSSetAttributesResult](../../fssetattributesresult.md) instance in this case. For an `async` Swift implementation, there’s no reply handler; simply return the result instance or throw an error.

<a id="discussion"></a>

## Discussion

Several attributes are considered “read-only”, and an attempt to set these attributes results in an error with the code `EINVAL`.

A request may set [size](../../fsitem/attributes/size.md) beyond the end of the file. If the underlying file system doesn’t support sparse files, allocate space to fill the new file size. Either fill this space with zeroes, or configure it to read as zeroes.

If a request sets the file size below the current end-of-file, truncate the file and return any unused space to the file system as free space.

Ignore attempts to set the size of directories or symbolic links; don’t produce an error.

If the caller attempts to set an attribute not supported by the on-disk file system format, don’t produce an error. The upper layers of the framework will detect this situation.

## See Also

### Working with attributes

- [getAttributes(\_:of:context:replyHandler:)](getattributes%28__of_context_replyhandler_%29.md): Fetches attributes for the given item.
- [FSItem.GetAttributesRequest](../../fsitem/getattributesrequest.md): A request to get attributes from an item.
- [FSGetAttributesResult](../../fsgetattributesresult.md): The result of a get-attributes call.
- [FSItem.SetAttributesRequest](../../fsitem/setattributesrequest.md): A request to set attributes on an item.
- [FSSetAttributesResult](../../fssetattributesresult.md): The restlt of a set-attributes call.

# setAttributes:onItem:context:replyHandler: (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Sets the given attributes on an item.

## Declaration

```objectivec
- (void) setAttributes:(FSItemSetAttributesRequest *) newAttributes onItem:(FSItem *) item context:(FSContext *) context replyHandler:(void (^)(FSSetAttributesResult *result, NSError *error)) reply;
```

## Parameters

- `newAttributes`: A request containing the attributes to set.
- `item`: The item on which to set the attributes.
- `context`: An object that enables context-aware file system decisions throughout the operation.
- `reply`: A block or closure to indicate success or failure. If setting attributes succeeds, pass an instance of [FSSetAttributesResult](../../fssetattributesresult.md) containing the item’s updated attributes and the volume’s updated free space, along with a `nil` error. If setting attributes fails, pass the relevant error as the second parameter; FSKit ignores the [FSSetAttributesResult](../../fssetattributesresult.md) instance in this case. For an `async` Swift implementation, there’s no reply handler; simply return the result instance or throw an error.

<a id="discussion"></a>

## Discussion

Several attributes are considered “read-only”, and an attempt to set these attributes results in an error with the code `EINVAL`.

A request may set [size](../../fsitem/attributes/size.md) beyond the end of the file. If the underlying file system doesn’t support sparse files, allocate space to fill the new file size. Either fill this space with zeroes, or configure it to read as zeroes.

If a request sets the file size below the current end-of-file, truncate the file and return any unused space to the file system as free space.

Ignore attempts to set the size of directories or symbolic links; don’t produce an error.

If the caller attempts to set an attribute not supported by the on-disk file system format, don’t produce an error. The upper layers of the framework will detect this situation.

## See Also

### Working with attributes

- [getAttributes:ofItem:context:replyHandler:](getattributes%28__of_context_replyhandler_%29.md): Fetches attributes for the given item.
- [FSItemGetAttributesRequest](../../fsitem/getattributesrequest.md): A request to get attributes from an item.
- [FSGetAttributesResult](../../fsgetattributesresult.md): The result of a get-attributes call.
- [FSItemSetAttributesRequest](../../fsitem/setattributesrequest.md): A request to set attributes on an item.
- [FSSetAttributesResult](../../fssetattributesresult.md): The restlt of a set-attributes call.
