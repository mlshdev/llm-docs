> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/xattrhandler/getxattr(named:of:context:replyhandler:)](https://developer.apple.com/documentation/fskit/fsvolume/xattrhandler/getxattr(named:of:context:replyhandler:))

# getXattr(named:of:context:replyHandler:) (Swift)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Gets the specified extended attribute of the given item.

## Declaration

```swift
func getXattr(named name: FSFileName, of item: FSItem, context: FSContext, replyHandler reply: @escaping @Sendable (FSGetXattrResult?, (any Error)?) -> Void)
```

```swift
func xattr(named name: FSFileName, of item: FSItem, context: FSContext) async throws -> FSGetXattrResult
```

## Parameters

- `name`: The extended attribute name.
- `item`: The item for which to get the extended attribute.
- `context`: An object that enables context-aware file system decisions throughout the operation.
- `reply`: A block or closure to indicate success or failure. If getting the attribute succeeds, pass an instance of [FSGetXattrResult](../../fsgetxattrresult.md) containing the extended attribute data, along with a `nil` error. If getting the attribute fails, pass the relevant error as the second parameter; FSKit ignores the [FSGetXattrResult](../../fsgetxattrresult.md) instance in this case. For an `async` Swift implementation, there’s no reply handler; simply return the result instance or throw an error.

## See Also

### Reading and writing

- [FSGetXattrResult](../../fsgetxattrresult.md): The result of a get-extended-attributes call.
- [listXattrs(of:context:replyHandler:)](listxattrs%28of_context_replyhandler_%29.md): Gets the list of extended attributes currently set on the given item.
- [FSListXattrsResult](../../fslistxattrsresult.md): The result of a list-extended-attributes call.
- [setXattr(named:to:on:policy:context:replyHandler:)](setxattr%28named_to_on_policy_context_replyhandler_%29.md): Sets the specified extended attribute data on the given item.
- [FSVolume.SetXattrPolicy](../setxattrpolicy.md): Flags to specify the policy when setting extended file attributes.
- [FSSetXattrResult](../../fssetxattrresult.md): The result of a set-extended-attributes call.
- [supportedXattrNames(for:)](supportedxattrnames%28for_%29.md): Returns an array that specifies the extended attribute names the given item supports.

# getXattrNamed:ofItem:context:replyHandler: (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Gets the specified extended attribute of the given item.

## Declaration

```objectivec
- (void) getXattrNamed:(FSFileName *) name ofItem:(FSItem *) item context:(FSContext *) context replyHandler:(void (^)(FSGetXattrResult *result, NSError *error)) reply;
```

## Parameters

- `name`: The extended attribute name.
- `item`: The item for which to get the extended attribute.
- `context`: An object that enables context-aware file system decisions throughout the operation.
- `reply`: A block or closure to indicate success or failure. If getting the attribute succeeds, pass an instance of [FSGetXattrResult](../../fsgetxattrresult.md) containing the extended attribute data, along with a `nil` error. If getting the attribute fails, pass the relevant error as the second parameter; FSKit ignores the [FSGetXattrResult](../../fsgetxattrresult.md) instance in this case. For an `async` Swift implementation, there’s no reply handler; simply return the result instance or throw an error.

## See Also

### Reading and writing

- [FSGetXattrResult](../../fsgetxattrresult.md): The result of a get-extended-attributes call.
- [listXattrsOfItem:context:replyHandler:](listxattrs%28of_context_replyhandler_%29.md): Gets the list of extended attributes currently set on the given item.
- [FSListXattrsResult](../../fslistxattrsresult.md): The result of a list-extended-attributes call.
- [setXattrNamed:toData:onItem:policy:context:replyHandler:](setxattr%28named_to_on_policy_context_replyhandler_%29.md): Sets the specified extended attribute data on the given item.
- [FSSetXattrPolicy](../setxattrpolicy.md): Flags to specify the policy when setting extended file attributes.
- [FSSetXattrResult](../../fssetxattrresult.md): The result of a set-extended-attributes call.
- [supportedXattrNamesForItem:](supportedxattrnames%28for_%29.md): Returns an array that specifies the extended attribute names the given item supports.
