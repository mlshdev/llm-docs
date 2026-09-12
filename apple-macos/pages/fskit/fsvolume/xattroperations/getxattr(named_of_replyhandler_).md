> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/xattroperations/getxattr(named:of:replyhandler:)](https://developer.apple.com/documentation/fskit/fsvolume/xattroperations/getxattr(named:of:replyhandler:))

# getXattr(named:of:replyHandler:) (Swift)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+ (deprecated in 27.0)

Gets the specified extended attribute of the given item.

## Declaration

```swift
func getXattr(named name: FSFileName, of item: FSItem, replyHandler reply: @escaping @Sendable (Data?, (any Error)?) -> Void)
```

```swift
func xattr(named name: FSFileName, of item: FSItem) async throws -> Data
```

## Parameters

- `name`: The extended attribute name.
- `item`: The item for which to get the extended attribute.
- `reply`: A block or closure to indicate success or failure. If getting the attribute succeeds, pass an data instance containing the extended attribute data and a `nil` error. If getting the attribute fails, pass the relevant error as the second parameter; FSKit ignores any data in this case. For an `async` Swift implementation, there’s no reply handler; simply return the data or throw an error.

## See Also

### Reading and writing

- [listXattrs(of:replyHandler:)](listxattrs%28of_replyhandler_%29.md): Deprecated. Gets the list of extended attributes currently set on the given item.
- [setXattr(named:to:on:policy:replyHandler:)](setxattr%28named_to_on_policy_replyhandler_%29.md): Deprecated. Sets the specified extended attribute data on the given item.
- [FSVolume.SetXattrPolicy](../setxattrpolicy.md): Flags to specify the policy when setting extended file attributes.
- [supportedXattrNames(for:)](supportedxattrnames%28for_%29.md): Deprecated. Returns an array that specifies the extended attribute names the given item supports.

# getXattrNamed:ofItem:replyHandler: (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+ (deprecated in 27.0)

Gets the specified extended attribute of the given item.

## Declaration

```objectivec
- (void) getXattrNamed:(FSFileName *) name ofItem:(FSItem *) item replyHandler:(void (^)(NSData *value, NSError *error)) reply;
```

## Parameters

- `name`: The extended attribute name.
- `item`: The item for which to get the extended attribute.
- `reply`: A block or closure to indicate success or failure. If getting the attribute succeeds, pass an data instance containing the extended attribute data and a `nil` error. If getting the attribute fails, pass the relevant error as the second parameter; FSKit ignores any data in this case. For an `async` Swift implementation, there’s no reply handler; simply return the data or throw an error.

## See Also

### Reading and writing

- [listXattrsOfItem:replyHandler:](listxattrs%28of_replyhandler_%29.md): Deprecated. Gets the list of extended attributes currently set on the given item.
- [setXattrNamed:toData:onItem:policy:replyHandler:](setxattr%28named_to_on_policy_replyhandler_%29.md): Deprecated. Sets the specified extended attribute data on the given item.
- [FSSetXattrPolicy](../setxattrpolicy.md): Flags to specify the policy when setting extended file attributes.
- [supportedXattrNamesForItem:](supportedxattrnames%28for_%29.md): Deprecated. Returns an array that specifies the extended attribute names the given item supports.
