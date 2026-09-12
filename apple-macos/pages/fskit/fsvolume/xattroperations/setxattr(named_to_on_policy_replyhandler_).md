> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/xattroperations/setxattr(named:to:on:policy:replyhandler:)](https://developer.apple.com/documentation/fskit/fsvolume/xattroperations/setxattr(named:to:on:policy:replyhandler:))

# setXattr(named:to:on:policy:replyHandler:) (Swift)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+ (deprecated in 27.0)

Sets the specified extended attribute data on the given item.

## Declaration

```swift
func setXattr(named name: FSFileName, to value: Data?, on item: FSItem, policy: FSVolume.SetXattrPolicy, replyHandler reply: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func setXattr(named name: FSFileName, to value: Data?, on item: FSItem, policy: FSVolume.SetXattrPolicy) async throws
```

## Parameters

- `name`: The extended attribute name.
- `value`: The extended attribute value to set. This can’t be `nil`, unless the policy is [FSVolume.SetXattrPolicy.delete](../setxattrpolicy/delete.md).
- `item`: The item on which to set the extended attribute.
- `policy`: The policy to apply when setting the attribute. See [FSVolume.SetXattrPolicy](../setxattrpolicy.md) for possible values.
- `reply`: A block or closure to indicate success or failure. If setting the attribute fails, pass an error as the one parameter to the reply handler. If setting the attribute succeeds, pass `nil`. For an `async` Swift implementation, there’s no reply handler; simply throw an error or return normally.

## See Also

### Reading and writing

- [getXattr(named:of:replyHandler:)](getxattr%28named_of_replyhandler_%29.md): Deprecated. Gets the specified extended attribute of the given item.
- [listXattrs(of:replyHandler:)](listxattrs%28of_replyhandler_%29.md): Deprecated. Gets the list of extended attributes currently set on the given item.
- [FSVolume.SetXattrPolicy](../setxattrpolicy.md): Flags to specify the policy when setting extended file attributes.
- [supportedXattrNames(for:)](supportedxattrnames%28for_%29.md): Deprecated. Returns an array that specifies the extended attribute names the given item supports.

# setXattrNamed:toData:onItem:policy:replyHandler: (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+ (deprecated in 27.0)

Sets the specified extended attribute data on the given item.

## Declaration

```objectivec
- (void) setXattrNamed:(FSFileName *) name toData:(NSData *) value onItem:(FSItem *) item policy:(FSSetXattrPolicy) policy replyHandler:(void (^)(NSError *error)) reply;
```

## Parameters

- `name`: The extended attribute name.
- `value`: The extended attribute value to set. This can’t be `nil`, unless the policy is [FSSetXattrPolicyDelete](../setxattrpolicy/delete.md).
- `item`: The item on which to set the extended attribute.
- `policy`: The policy to apply when setting the attribute. See [FSSetXattrPolicy](../setxattrpolicy.md) for possible values.
- `reply`: A block or closure to indicate success or failure. If setting the attribute fails, pass an error as the one parameter to the reply handler. If setting the attribute succeeds, pass `nil`. For an `async` Swift implementation, there’s no reply handler; simply throw an error or return normally.

## See Also

### Reading and writing

- [getXattrNamed:ofItem:replyHandler:](getxattr%28named_of_replyhandler_%29.md): Deprecated. Gets the specified extended attribute of the given item.
- [listXattrsOfItem:replyHandler:](listxattrs%28of_replyhandler_%29.md): Deprecated. Gets the list of extended attributes currently set on the given item.
- [FSSetXattrPolicy](../setxattrpolicy.md): Flags to specify the policy when setting extended file attributes.
- [supportedXattrNamesForItem:](supportedxattrnames%28for_%29.md): Deprecated. Returns an array that specifies the extended attribute names the given item supports.
