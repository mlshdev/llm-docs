> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/xattroperations/supportedxattrnames(for:)](https://developer.apple.com/documentation/fskit/fsvolume/xattroperations/supportedxattrnames(for:))

# supportedXattrNames(for:) (Swift)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+ (deprecated in 27.0)

Returns an array that specifies the extended attribute names the given item supports.

## Declaration

```swift
optional func supportedXattrNames(for item: FSItem) -> [FSFileName]
```

## Parameters

- `item`: The item for which to get information.

<a id="discussion"></a>

## Discussion

If `item` supports no extended attributes, this method returns `nil`.

Only implement this method if your volume works with “limited” extended attributes. For purposes of this protocol, “limited” support means the volume doesn’t support extended attributes generally, but uses these APIs to expose specific file system data.

> **Note**

> If a file system implements this method, FSKit assumes limited support for extended attributes exists. In this mode, FSkit only calls this protocol’s methods for the extended attribute names this method returns.

## See Also

### Reading and writing

- [getXattr(named:of:replyHandler:)](getxattr%28named_of_replyhandler_%29.md): Deprecated. Gets the specified extended attribute of the given item.
- [listXattrs(of:replyHandler:)](listxattrs%28of_replyhandler_%29.md): Deprecated. Gets the list of extended attributes currently set on the given item.
- [setXattr(named:to:on:policy:replyHandler:)](setxattr%28named_to_on_policy_replyhandler_%29.md): Deprecated. Sets the specified extended attribute data on the given item.
- [FSVolume.SetXattrPolicy](../setxattrpolicy.md): Flags to specify the policy when setting extended file attributes.

# supportedXattrNamesForItem: (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+ (deprecated in 27.0)

Returns an array that specifies the extended attribute names the given item supports.

## Declaration

```objectivec
- (NSArray<FSFileName *> *) supportedXattrNamesForItem:(FSItem *) item;
```

## Parameters

- `item`: The item for which to get information.

<a id="discussion"></a>

## Discussion

If `item` supports no extended attributes, this method returns `nil`.

Only implement this method if your volume works with “limited” extended attributes. For purposes of this protocol, “limited” support means the volume doesn’t support extended attributes generally, but uses these APIs to expose specific file system data.

> **Note**

> If a file system implements this method, FSKit assumes limited support for extended attributes exists. In this mode, FSkit only calls this protocol’s methods for the extended attribute names this method returns.

## See Also

### Reading and writing

- [getXattrNamed:ofItem:replyHandler:](getxattr%28named_of_replyhandler_%29.md): Deprecated. Gets the specified extended attribute of the given item.
- [listXattrsOfItem:replyHandler:](listxattrs%28of_replyhandler_%29.md): Deprecated. Gets the list of extended attributes currently set on the given item.
- [setXattrNamed:toData:onItem:policy:replyHandler:](setxattr%28named_to_on_policy_replyhandler_%29.md): Deprecated. Sets the specified extended attribute data on the given item.
- [FSSetXattrPolicy](../setxattrpolicy.md): Flags to specify the policy when setting extended file attributes.
