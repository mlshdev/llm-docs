> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/xattroperations/listxattrs(of:replyhandler:)](https://developer.apple.com/documentation/fskit/fsvolume/xattroperations/listxattrs(of:replyhandler:))

# listXattrs(of:replyHandler:) (Swift)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+ (deprecated in 27.0)

Gets the list of extended attributes currently set on the given item.

## Declaration

```swift
func listXattrs(of item: FSItem, replyHandler reply: @escaping @Sendable ([FSFileName]?, (any Error)?) -> Void)
```

```swift
func xattrs(of item: FSItem) async throws -> [FSFileName]
```

## Parameters

- `item`: The item from which to get extended attributes.
- `reply`: A block or closure to indicate success or failure. If getting the list of extended attributes succeeds, pass the xattrs as an array of [FSFileName](../../fsfilename.md) instances and a `nil` error. If getting the attributes fails, pass `nil` along with the relevant error. For an `async` Swift implementation, there’s no reply handler; simply return the byte count or throw an error.

## See Also

### Reading and writing

- [getXattr(named:of:replyHandler:)](getxattr%28named_of_replyhandler_%29.md): Deprecated. Gets the specified extended attribute of the given item.
- [setXattr(named:to:on:policy:replyHandler:)](setxattr%28named_to_on_policy_replyhandler_%29.md): Deprecated. Sets the specified extended attribute data on the given item.
- [FSVolume.SetXattrPolicy](../setxattrpolicy.md): Flags to specify the policy when setting extended file attributes.
- [supportedXattrNames(for:)](supportedxattrnames%28for_%29.md): Deprecated. Returns an array that specifies the extended attribute names the given item supports.

# listXattrsOfItem:replyHandler: (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+ (deprecated in 27.0)

Gets the list of extended attributes currently set on the given item.

## Declaration

```objectivec
- (void) listXattrsOfItem:(FSItem *) item replyHandler:(void (^)(NSArray<FSFileName *> *value, NSError *error)) reply;
```

## Parameters

- `item`: The item from which to get extended attributes.
- `reply`: A block or closure to indicate success or failure. If getting the list of extended attributes succeeds, pass the xattrs as an array of [FSFileName](../../fsfilename.md) instances and a `nil` error. If getting the attributes fails, pass `nil` along with the relevant error. For an `async` Swift implementation, there’s no reply handler; simply return the byte count or throw an error.

## See Also

### Reading and writing

- [getXattrNamed:ofItem:replyHandler:](getxattr%28named_of_replyhandler_%29.md): Deprecated. Gets the specified extended attribute of the given item.
- [setXattrNamed:toData:onItem:policy:replyHandler:](setxattr%28named_to_on_policy_replyhandler_%29.md): Deprecated. Sets the specified extended attribute data on the given item.
- [FSSetXattrPolicy](../setxattrpolicy.md): Flags to specify the policy when setting extended file attributes.
- [supportedXattrNamesForItem:](supportedxattrnames%28for_%29.md): Deprecated. Returns an array that specifies the extended attribute names the given item supports.
