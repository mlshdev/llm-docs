> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/operations/getattributes(_:of:replyhandler:)](https://developer.apple.com/documentation/fskit/fsvolume/operations/getattributes(_:of:replyhandler:))

# getAttributes(\_:of:replyHandler:) (Swift)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+ (deprecated in 27.0)

Fetches attributes for the given item.

## Declaration

```swift
func getAttributes(_ desiredAttributes: FSItem.GetAttributesRequest, of item: FSItem, replyHandler reply: @escaping @Sendable (FSItem.Attributes?, (any Error)?) -> Void)
```

```swift
func attributes(_ desiredAttributes: FSItem.GetAttributesRequest, of item: FSItem) async throws -> FSItem.Attributes
```

## Parameters

- `desiredAttributes`: A requested set of attributes to get. The implementation inspects the request’s [wantedAttributes](../../fsitem/getattributesrequest/wantedattributes.md) to determine which attributes to populate.
- `item`: The item to get attributes for.
- `reply`: A block or closure to indicate success or failure. If getting attributes succeeds, pass an [FSItem.Attributes](../../fsitem/attributes.md) with the requested attributes populated and a `nil` error. If getting attributes fails, pass the relevant error as the second parameter; FSKit ignores any [FSItem.Attributes](../../fsitem/attributes.md) in this case. For an `async` Swift implementation, there’s no reply handler; simply return the [FSItem.Attributes](../../fsitem/attributes.md) or throw an error.

<a id="discussion"></a>

## Discussion

For file systems that don’t support hard links, set [linkCount](../../fsitem/attributes/linkcount.md) to `1` for regular files and symbolic links.

If the item’s `bsdFlags` contain the `UF_COMPRESSED` flag, your file system returns the uncompressed size of the file.

## See Also

### Working with attributes

- [FSItem.GetAttributesRequest](../../fsitem/getattributesrequest.md): A request to get attributes from an item.
- [setAttributes(\_:on:replyHandler:)](setattributes%28__on_replyhandler_%29.md): Deprecated. Sets the given attributes on an item.
- [FSItem.SetAttributesRequest](../../fsitem/setattributesrequest.md): A request to set attributes on an item.

# getAttributes:ofItem:replyHandler: (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+ (deprecated in 27.0)

Fetches attributes for the given item.

## Declaration

```objectivec
- (void) getAttributes:(FSItemGetAttributesRequest *) desiredAttributes ofItem:(FSItem *) item replyHandler:(void (^)(FSItemAttributes *attributes, NSError *error)) reply;
```

## Parameters

- `desiredAttributes`: A requested set of attributes to get. The implementation inspects the request’s [wantedAttributes](../../fsitem/getattributesrequest/wantedattributes.md) to determine which attributes to populate.
- `item`: The item to get attributes for.
- `reply`: A block or closure to indicate success or failure. If getting attributes succeeds, pass an [FSItemAttributes](../../fsitem/attributes.md) with the requested attributes populated and a `nil` error. If getting attributes fails, pass the relevant error as the second parameter; FSKit ignores any [FSItemAttributes](../../fsitem/attributes.md) in this case. For an `async` Swift implementation, there’s no reply handler; simply return the [FSItemAttributes](../../fsitem/attributes.md) or throw an error.

<a id="discussion"></a>

## Discussion

For file systems that don’t support hard links, set [linkCount](../../fsitem/attributes/linkcount.md) to `1` for regular files and symbolic links.

If the item’s `bsdFlags` contain the `UF_COMPRESSED` flag, your file system returns the uncompressed size of the file.

## See Also

### Working with attributes

- [FSItemGetAttributesRequest](../../fsitem/getattributesrequest.md): A request to get attributes from an item.
- [setAttributes:onItem:replyHandler:](setattributes%28__on_replyhandler_%29.md): Deprecated. Sets the given attributes on an item.
- [FSItemSetAttributesRequest](../../fsitem/setattributesrequest.md): A request to set attributes on an item.
