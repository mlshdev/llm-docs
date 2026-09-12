> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/xattrhandler/listxattrs(of:context:replyhandler:)](https://developer.apple.com/documentation/fskit/fsvolume/xattrhandler/listxattrs(of:context:replyhandler:))

# listXattrs(of:context:replyHandler:) (Swift)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Gets the list of extended attributes currently set on the given item.

## Declaration

```swift
func listXattrs(of item: FSItem, context: FSContext, replyHandler reply: @escaping @Sendable (FSListXattrsResult?, (any Error)?) -> Void)
```

```swift
func xattrs(of item: FSItem, context: FSContext) async throws -> FSListXattrsResult
```

## Parameters

- `item`: The item from which to get extended attributes.
- `context`: An object that enables context-aware file system decisions throughout the operation.
- `reply`: A block or closure to indicate success or failure. If getting the list of extended attributes succeeds, pass an instance of [FSListXattrsResult](../../fslistxattrsresult.md) containing the xattrs as an array of [FSFileName](../../fsfilename.md) instances, along with a `nil` error. If getting the attributes fails, pass the relevant error as the second parameter; FSKit ignores the [FSListXattrsResult](../../fslistxattrsresult.md) instance in this case. For an `async` Swift implementation, there’s no reply handler; simply return the result instance or throw an error.

## See Also

### Reading and writing

- [getXattr(named:of:context:replyHandler:)](getxattr%28named_of_context_replyhandler_%29.md): Gets the specified extended attribute of the given item.
- [FSGetXattrResult](../../fsgetxattrresult.md): The result of a get-extended-attributes call.
- [FSListXattrsResult](../../fslistxattrsresult.md): The result of a list-extended-attributes call.
- [setXattr(named:to:on:policy:context:replyHandler:)](setxattr%28named_to_on_policy_context_replyhandler_%29.md): Sets the specified extended attribute data on the given item.
- [FSVolume.SetXattrPolicy](../setxattrpolicy.md): Flags to specify the policy when setting extended file attributes.
- [FSSetXattrResult](../../fssetxattrresult.md): The result of a set-extended-attributes call.
- [supportedXattrNames(for:)](supportedxattrnames%28for_%29.md): Returns an array that specifies the extended attribute names the given item supports.

# listXattrsOfItem:context:replyHandler: (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Gets the list of extended attributes currently set on the given item.

## Declaration

```objectivec
- (void) listXattrsOfItem:(FSItem *) item context:(FSContext *) context replyHandler:(void (^)(FSListXattrsResult *result, NSError *error)) reply;
```

## Parameters

- `item`: The item from which to get extended attributes.
- `context`: An object that enables context-aware file system decisions throughout the operation.
- `reply`: A block or closure to indicate success or failure. If getting the list of extended attributes succeeds, pass an instance of [FSListXattrsResult](../../fslistxattrsresult.md) containing the xattrs as an array of [FSFileName](../../fsfilename.md) instances, along with a `nil` error. If getting the attributes fails, pass the relevant error as the second parameter; FSKit ignores the [FSListXattrsResult](../../fslistxattrsresult.md) instance in this case. For an `async` Swift implementation, there’s no reply handler; simply return the result instance or throw an error.

## See Also

### Reading and writing

- [getXattrNamed:ofItem:context:replyHandler:](getxattr%28named_of_context_replyhandler_%29.md): Gets the specified extended attribute of the given item.
- [FSGetXattrResult](../../fsgetxattrresult.md): The result of a get-extended-attributes call.
- [FSListXattrsResult](../../fslistxattrsresult.md): The result of a list-extended-attributes call.
- [setXattrNamed:toData:onItem:policy:context:replyHandler:](setxattr%28named_to_on_policy_context_replyhandler_%29.md): Sets the specified extended attribute data on the given item.
- [FSSetXattrPolicy](../setxattrpolicy.md): Flags to specify the policy when setting extended file attributes.
- [FSSetXattrResult](../../fssetxattrresult.md): The result of a set-extended-attributes call.
- [supportedXattrNamesForItem:](supportedxattrnames%28for_%29.md): Returns an array that specifies the extended attribute names the given item supports.
