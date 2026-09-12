> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/handler/getattributes(_:of:context:replyhandler:)](https://developer.apple.com/documentation/fskit/fsvolume/handler/getattributes(_:of:context:replyhandler:))

# getAttributes(\_:of:context:replyHandler:) (Swift)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Fetches attributes for the given item.

## Declaration

```swift
func getAttributes(_ desiredAttributes: FSItem.GetAttributesRequest, of item: FSItem, context: FSContext, replyHandler reply: @escaping @Sendable (FSGetAttributesResult?, (any Error)?) -> Void)
```

```swift
func attributes(_ desiredAttributes: FSItem.GetAttributesRequest, of item: FSItem, context: FSContext) async throws -> FSGetAttributesResult
```

## Parameters

- `desiredAttributes`: A requested set of attributes to get. The implementation inspects the request’s [wantedAttributes](../../fsitem/getattributesrequest/wantedattributes.md) to determine which attributes to populate.
- `item`: The item to get attributes for.
- `context`: An object that enables context-aware file system decisions throughout the operation.
- `reply`: A block or closure to indicate success or failure. If getting attributes succeeds, pass an instance of [FSGetAttributesResult](../../fsgetattributesresult.md) containing the requested attributes, along with a `nil` error. If getting attributes fails, pass the relevant error as the second parameter; FSKit ignores the [FSGetAttributesResult](../../fsgetattributesresult.md) instance in this case. For an `async` Swift implementation, there’s no reply handler; simply return the result instance or throw an error.

<a id="discussion"></a>

## Discussion

For file systems that don’t support hard links, set [linkCount](../../fsitem/attributes/linkcount.md) to `1` for regular files and symbolic links.

If the item’s `bsdFlags` contain the `UF_COMPRESSED` flag, your file system returns the uncompressed size of the file.

## See Also

### Working with attributes

- [FSItem.GetAttributesRequest](../../fsitem/getattributesrequest.md): A request to get attributes from an item.
- [FSGetAttributesResult](../../fsgetattributesresult.md): The result of a get-attributes call.
- [setAttributes(\_:on:context:replyHandler:)](setattributes%28__on_context_replyhandler_%29.md): Sets the given attributes on an item.
- [FSItem.SetAttributesRequest](../../fsitem/setattributesrequest.md): A request to set attributes on an item.
- [FSSetAttributesResult](../../fssetattributesresult.md): The restlt of a set-attributes call.

# getAttributes:ofItem:context:replyHandler: (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Fetches attributes for the given item.

## Declaration

```objectivec
- (void) getAttributes:(FSItemGetAttributesRequest *) desiredAttributes ofItem:(FSItem *) item context:(FSContext *) context replyHandler:(void (^)(FSGetAttributesResult *result, NSError *error)) reply;
```

## Parameters

- `desiredAttributes`: A requested set of attributes to get. The implementation inspects the request’s [wantedAttributes](../../fsitem/getattributesrequest/wantedattributes.md) to determine which attributes to populate.
- `item`: The item to get attributes for.
- `context`: An object that enables context-aware file system decisions throughout the operation.
- `reply`: A block or closure to indicate success or failure. If getting attributes succeeds, pass an instance of [FSGetAttributesResult](../../fsgetattributesresult.md) containing the requested attributes, along with a `nil` error. If getting attributes fails, pass the relevant error as the second parameter; FSKit ignores the [FSGetAttributesResult](../../fsgetattributesresult.md) instance in this case. For an `async` Swift implementation, there’s no reply handler; simply return the result instance or throw an error.

<a id="discussion"></a>

## Discussion

For file systems that don’t support hard links, set [linkCount](../../fsitem/attributes/linkcount.md) to `1` for regular files and symbolic links.

If the item’s `bsdFlags` contain the `UF_COMPRESSED` flag, your file system returns the uncompressed size of the file.

## See Also

### Working with attributes

- [FSItemGetAttributesRequest](../../fsitem/getattributesrequest.md): A request to get attributes from an item.
- [FSGetAttributesResult](../../fsgetattributesresult.md): The result of a get-attributes call.
- [setAttributes:onItem:context:replyHandler:](setattributes%28__on_context_replyhandler_%29.md): Sets the given attributes on an item.
- [FSItemSetAttributesRequest](../../fsitem/setattributesrequest.md): A request to set attributes on an item.
- [FSSetAttributesResult](../../fssetattributesresult.md): The restlt of a set-attributes call.
