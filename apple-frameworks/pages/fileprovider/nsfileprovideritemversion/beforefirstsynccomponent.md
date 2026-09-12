> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovideritemversion/beforefirstsynccomponent](https://developer.apple.com/documentation/fileprovider/nsfileprovideritemversion/beforefirstsynccomponent)

# beforeFirstSyncComponent (Swift)

**Framework:** File Provider  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 12.0+ · visionOS 1.0+

A Boolean value indicating that this version predates the version returned by the file provider extension.

## Declaration

```swift
class var beforeFirstSyncComponent: Data { get }
```

<a id="Discussion"></a>

## Discussion

The system uses this property to represent an item that doesn’t have a corresponding version provided by the file provider extension.

When creating an item by calling the [createItem(basedOn:fields:contents:options:request:completionHandler:)](../nsfileproviderreplicatedextension/createitem%28basedon_fields_contents_options_request_completionhandler_%29.md) method, if your file provider extension returns an item that doesn’t match the template, the system tries to apply the necessary changes before saving the item to disk. However, if the system detects conflicts with the version on disk, it sends the new item back to your file provider extension by calling either the [modifyItem(\_:baseVersion:changedFields:contents:options:request:completionHandler:)](../nsfileproviderreplicatedextension/modifyitem%28__baseversion_changedfields_contents_options_request_completionhandler_%29.md) of [deleteItem(identifier:baseVersion:options:request:completionHandler:)](../nsfileproviderreplicatedextension/deleteitem%28identifier_baseversion_options_request_completionhandler_%29.md) methods with a `baseVersion` property that represents the item passed to the [createItem(basedOn:fields:contents:options:request:completionHandler:)](../nsfileproviderreplicatedextension/createitem%28basedon_fields_contents_options_request_completionhandler_%29.md) method.

## See Also

### Accessing Version Data

- [contentVersion](contentversion.md): An opaque object used to track versions of the item’s content.
- [metadataVersion](metadataversion.md): An opaque object used to track versions of the item’s metadata.

# beforeFirstSyncComponent (Objective-C)

**Framework:** File Provider  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · macOS 12.0+ · visionOS 1.0+

A Boolean value indicating that this version predates the version returned by the file provider extension.

## Declaration

```objectivec
@property (class, readonly, nonnull) NSData * beforeFirstSyncComponent;
```

<a id="Discussion"></a>

## Discussion

The system uses this property to represent an item that doesn’t have a corresponding version provided by the file provider extension.

When creating an item by calling the [createItemBasedOnTemplate:fields:contents:options:request:completionHandler:](../nsfileproviderreplicatedextension/createitem%28basedon_fields_contents_options_request_completionhandler_%29.md) method, if your file provider extension returns an item that doesn’t match the template, the system tries to apply the necessary changes before saving the item to disk. However, if the system detects conflicts with the version on disk, it sends the new item back to your file provider extension by calling either the [modifyItem:baseVersion:changedFields:contents:options:request:completionHandler:](../nsfileproviderreplicatedextension/modifyitem%28__baseversion_changedfields_contents_options_request_completionhandler_%29.md) of [deleteItemWithIdentifier:baseVersion:options:request:completionHandler:](../nsfileproviderreplicatedextension/deleteitem%28identifier_baseversion_options_request_completionhandler_%29.md) methods with a `baseVersion` property that represents the item passed to the [createItemBasedOnTemplate:fields:contents:options:request:completionHandler:](../nsfileproviderreplicatedextension/createitem%28basedon_fields_contents_options_request_completionhandler_%29.md) method.

## See Also

### Accessing Version Data

- [contentVersion](contentversion.md): An opaque object used to track versions of the item’s content.
- [metadataVersion](metadataversion.md): An opaque object used to track versions of the item’s metadata.
