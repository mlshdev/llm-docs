> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/xattrhandler/setxattr(named:to:on:policy:context:replyhandler:)](https://developer.apple.com/documentation/fskit/fsvolume/xattrhandler/setxattr(named:to:on:policy:context:replyhandler:))

# setXattr(named:to:on:policy:context:replyHandler:) (Swift)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Sets the specified extended attribute data on the given item.

## Declaration

```swift
func setXattr(named name: FSFileName, to value: Data?, on item: FSItem, policy: FSVolume.SetXattrPolicy, context: FSContext, replyHandler reply: @escaping @Sendable (FSSetXattrResult?, (any Error)?) -> Void)
```

```swift
func setXattr(named name: FSFileName, to value: Data?, on item: FSItem, policy: FSVolume.SetXattrPolicy, context: FSContext) async throws -> FSSetXattrResult
```

## Parameters

- `name`: The extended attribute name.
- `value`: The extended attribute value to set. This can’t be `nil`, unless the policy is [FSVolume.SetXattrPolicy.delete](../setxattrpolicy/delete.md).
- `item`: The item on which to set the extended attribute.
- `policy`: The policy to apply when setting the attribute. See [FSVolume.SetXattrPolicy](../setxattrpolicy.md) for possible values.
- `context`: An object that enables context-aware file system decisions throughout the operation.
- `reply`: A block or closure to indicate success or failure. If setting the attribute succeeds, pass an instance of [FSSetXattrResult](../../fssetxattrresult.md) containing the volume’s updated free space, along with a `nil` error. If setting the attribute fails, pass the relevant error as the second parameter; FSKit ignores the [FSSetXattrResult](../../fssetxattrresult.md) instance in this case. For an `async` Swift implementation, there’s no reply handler; simply return the result instance or throw an error.

## See Also

### Reading and writing

- [getXattr(named:of:context:replyHandler:)](getxattr%28named_of_context_replyhandler_%29.md): Gets the specified extended attribute of the given item.
- [FSGetXattrResult](../../fsgetxattrresult.md): The result of a get-extended-attributes call.
- [listXattrs(of:context:replyHandler:)](listxattrs%28of_context_replyhandler_%29.md): Gets the list of extended attributes currently set on the given item.
- [FSListXattrsResult](../../fslistxattrsresult.md): The result of a list-extended-attributes call.
- [FSVolume.SetXattrPolicy](../setxattrpolicy.md): Flags to specify the policy when setting extended file attributes.
- [FSSetXattrResult](../../fssetxattrresult.md): The result of a set-extended-attributes call.
- [supportedXattrNames(for:)](supportedxattrnames%28for_%29.md): Returns an array that specifies the extended attribute names the given item supports.

# setXattrNamed:toData:onItem:policy:context:replyHandler: (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Sets the specified extended attribute data on the given item.

## Declaration

```objectivec
- (void) setXattrNamed:(FSFileName *) name toData:(NSData *) value onItem:(FSItem *) item policy:(FSSetXattrPolicy) policy context:(FSContext *) context replyHandler:(void (^)(FSSetXattrResult *result, NSError *error)) reply;
```

## Parameters

- `name`: The extended attribute name.
- `value`: The extended attribute value to set. This can’t be `nil`, unless the policy is [FSSetXattrPolicyDelete](../setxattrpolicy/delete.md).
- `item`: The item on which to set the extended attribute.
- `policy`: The policy to apply when setting the attribute. See [FSSetXattrPolicy](../setxattrpolicy.md) for possible values.
- `context`: An object that enables context-aware file system decisions throughout the operation.
- `reply`: A block or closure to indicate success or failure. If setting the attribute succeeds, pass an instance of [FSSetXattrResult](../../fssetxattrresult.md) containing the volume’s updated free space, along with a `nil` error. If setting the attribute fails, pass the relevant error as the second parameter; FSKit ignores the [FSSetXattrResult](../../fssetxattrresult.md) instance in this case. For an `async` Swift implementation, there’s no reply handler; simply return the result instance or throw an error.

## See Also

### Reading and writing

- [getXattrNamed:ofItem:context:replyHandler:](getxattr%28named_of_context_replyhandler_%29.md): Gets the specified extended attribute of the given item.
- [FSGetXattrResult](../../fsgetxattrresult.md): The result of a get-extended-attributes call.
- [listXattrsOfItem:context:replyHandler:](listxattrs%28of_context_replyhandler_%29.md): Gets the list of extended attributes currently set on the given item.
- [FSListXattrsResult](../../fslistxattrsresult.md): The result of a list-extended-attributes call.
- [FSSetXattrPolicy](../setxattrpolicy.md): Flags to specify the policy when setting extended file attributes.
- [FSSetXattrResult](../../fssetxattrresult.md): The result of a set-extended-attributes call.
- [supportedXattrNamesForItem:](supportedxattrnames%28for_%29.md): Returns an array that specifies the extended attribute names the given item supports.
