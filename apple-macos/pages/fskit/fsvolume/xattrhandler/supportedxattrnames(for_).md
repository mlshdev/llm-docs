> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/xattrhandler/supportedxattrnames(for:)](https://developer.apple.com/documentation/fskit/fsvolume/xattrhandler/supportedxattrnames(for:))

# supportedXattrNames(for:) (Swift)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

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

- [getXattr(named:of:context:replyHandler:)](getxattr%28named_of_context_replyhandler_%29.md): Gets the specified extended attribute of the given item.
- [FSGetXattrResult](../../fsgetxattrresult.md): The result of a get-extended-attributes call.
- [listXattrs(of:context:replyHandler:)](listxattrs%28of_context_replyhandler_%29.md): Gets the list of extended attributes currently set on the given item.
- [FSListXattrsResult](../../fslistxattrsresult.md): The result of a list-extended-attributes call.
- [setXattr(named:to:on:policy:context:replyHandler:)](setxattr%28named_to_on_policy_context_replyhandler_%29.md): Sets the specified extended attribute data on the given item.
- [FSVolume.SetXattrPolicy](../setxattrpolicy.md): Flags to specify the policy when setting extended file attributes.
- [FSSetXattrResult](../../fssetxattrresult.md): The result of a set-extended-attributes call.

# supportedXattrNamesForItem: (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

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

- [getXattrNamed:ofItem:context:replyHandler:](getxattr%28named_of_context_replyhandler_%29.md): Gets the specified extended attribute of the given item.
- [FSGetXattrResult](../../fsgetxattrresult.md): The result of a get-extended-attributes call.
- [listXattrsOfItem:context:replyHandler:](listxattrs%28of_context_replyhandler_%29.md): Gets the list of extended attributes currently set on the given item.
- [FSListXattrsResult](../../fslistxattrsresult.md): The result of a list-extended-attributes call.
- [setXattrNamed:toData:onItem:policy:context:replyHandler:](setxattr%28named_to_on_policy_context_replyhandler_%29.md): Sets the specified extended attribute data on the given item.
- [FSSetXattrPolicy](../setxattrpolicy.md): Flags to specify the policy when setting extended file attributes.
- [FSSetXattrResult](../../fssetxattrresult.md): The result of a set-extended-attributes call.
