> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/operations](https://developer.apple.com/documentation/fskit/fsvolume/operations)

# FSVolume.Operations (Swift)

**Framework:** FSKit  
**Kind:** Protocol  
**Availability:** macOS 15.4+ (deprecated in 27.0)

Methods that all volumes implement to provide required capabilities.

## Declaration

```swift
protocol Operations : FSVolume.CommonOperations, FSVolume.PathConfOperations
```

<a id="overview"></a>

## Overview

Conform to this protocol in your subclass of [FSVolume](../fsvolume.md). To provide additional capabilities, conform to the other `FSVolume` operations protocols, such as [FSVolume.OpenCloseOperations](opencloseoperations.md) and [FSVolume.ReadWriteOperations](readwriteoperations.md).

> **Note**

> This protocol extends [FSVolume.PathConfOperations](pathconfoperations.md), so your volume implementation must also conform to that protocol.

> **Deprecated**

> Use [FSVolume.Handler](handler.md) instead.

## Topics

### Handling activation and deactivation

- [activate(options:replyHandler:)](operations/activate%28options_replyhandler_%29.md): Deprecated. Activates the volume using the specified options.
- [FSItem](../fsitem.md): A distinct object in a file hierarchy, such as a file, directory, symlink, socket, and more.
- [deactivate(options:replyHandler:)](operations/deactivate%28options_replyhandler_%29.md): Deprecated. Tears down a previously initialized volume instance.
- [FSDeactivateOptions](../fsdeactivateoptions.md): Options that affect the behavior of deactivate methods.

### Working with items

- [createItem(named:type:inDirectory:attributes:replyHandler:)](operations/createitem%28named_type_indirectory_attributes_replyhandler_%29.md): Deprecated. Creates a new file or directory item.
- [FSFileName](../fsfilename.md): The name of a file, expressed as a data buffer.
- [FSItem.ItemType](../fsitem/itemtype.md): An enumeration of item types, such as file, directory, or symbolic link.
- [FSItem.SetAttributesRequest](../fsitem/setattributesrequest.md): A request to set attributes on an item.
- [lookupItem(named:inDirectory:replyHandler:)](operations/lookupitem%28named_indirectory_replyhandler_%29.md): Deprecated. Looks up an item within a directory.
- [removeItem(\_:named:fromDirectory:replyHandler:)](operations/removeitem%28__named_fromdirectory_replyhandler_%29.md): Deprecated. Removes an existing item from a given directory.
- [renameItem(\_:inDirectory:named:to:inDirectory:overItem:replyHandler:)](operations/renameitem%28__indirectory_named_to_indirectory_overitem_replyhandler_%29.md): Deprecated. Renames an item from one path in the file system to another.

### Working with links

- [createLink(to:named:inDirectory:replyHandler:)](operations/createlink%28to_named_indirectory_replyhandler_%29.md): Deprecated. Creates a new hard link.
- [createSymbolicLink(named:inDirectory:attributes:linkContents:replyHandler:)](operations/createsymboliclink%28named_indirectory_attributes_linkcontents_replyhandler_%29.md): Deprecated. Creates a new symbolic link.
- [readSymbolicLink(\_:replyHandler:)](operations/readsymboliclink%28__replyhandler_%29.md): Deprecated. Reads a symbolic link.

### Working with attributes

- [getAttributes(\_:of:replyHandler:)](operations/getattributes%28__of_replyhandler_%29.md): Deprecated. Fetches attributes for the given item.
- [FSItem.GetAttributesRequest](../fsitem/getattributesrequest.md): A request to get attributes from an item.
- [setAttributes(\_:on:replyHandler:)](operations/setattributes%28__on_replyhandler_%29.md): Deprecated. Sets the given attributes on an item.
- [FSItem.SetAttributesRequest](../fsitem/setattributesrequest.md): A request to set attributes on an item.

### Inspecting directory contents

- [enumerateDirectory(\_:startingAt:verifier:attributes:packer:replyHandler:)](operations/enumeratedirectory%28__startingat_verifier_attributes_packer_replyhandler_%29.md): Deprecated. Enumerates the contents of the given directory.
- [FSDirectoryCookie](../fsdirectorycookie.md): A value that indicates a location in a directory from which to enumerate.
- [FSDirectoryCookie](../fsdirectorycookie.md): A value that indicates a location in a directory from which to enumerate.
- [FSDirectoryVerifier](../fsdirectoryverifier.md): A tool to detect whether the directory contents changed since the last call to enumerate a directory.
- [FSDirectoryVerifier](../fsdirectoryverifier.md): A tool to detect whether the directory contents changed since the last call to enumerate a directory.
- [FSDirectoryEntryPacker](../fsdirectoryentrypacker.md): An object used to provide items during a directory enumeration.

### Synchronizing with a resource

- [FSSyncFlags](../fssyncflags.md): Behavior flags for use with synchronization calls.

### Inspecting required volume properties

- [FSVolume.SupportedCapabilities](supportedcapabilities.md): A type that represents capabilities supported by a volume, such as hard and symbolic links, journaling, and large file sizes.
- [FSStatFSResult](../fsstatfsresult.md): A type used to report a volume’s statistics.

### Inspecting optional volume properties

- [FSVolume.MountOptions](mountoptions.md): Mount options to be requested from FSKit using the `requestedMountOptions` property.

## Relationships

### Inherits From

- [FSVolume.CommonOperations](commonoperations.md)
- [FSVolume.PathConfOperations](pathconfoperations.md)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Deprecated

- [FSVolume.OpenCloseOperations](opencloseoperations.md): Deprecated. Methods and properties implemented by volumes that want to receive open and close calls for each item.
- [FSVolume.ReadWriteOperations](readwriteoperations.md): Deprecated. Methods implemented for read and write operations that deliver data to and from the extension.
- [FSVolume.AccessCheckOperations](accesscheckoperations.md): Deprecated. Methods and properties implemented by volumes that want to enforce access check operations.
- [FSVolume.RenameOperations](renameoperations.md): Deprecated. Methods and properties implemented by volumes that support renaming the volume.
- [FSVolume.PreallocateOperations](preallocateoperations.md): Deprecated. Methods and properties implemented by volumes that want to offer preallocation functions.
- [FSVolume.XattrOperations](xattroperations.md): Deprecated. Methods and properties implemented by volumes that natively or partially support extended attributes.
- [FSVolume.ItemDeactivation](itemdeactivation.md): Deprecated. Methods and properties implemented by volumes that support deactivating items.
- [FSVolumeKernelOffloadedIOOperations](../fsvolumekerneloffloadediooperations.md): Deprecated. Methods and properties implemented by volumes that use kernel-offloaded I/O to achieve higher file transfer performance.

# FSVolumeOperations (Objective-C)

**Framework:** FSKit  
**Kind:** Protocol  
**Availability:** macOS 15.4+ (deprecated in 27.0)

Methods that all volumes implement to provide required capabilities.

## Declaration

```objectivec
@protocol FSVolumeOperations <NSObject, FSVolumeCommonOperations, FSVolumePathConfOperations>
```

<a id="overview"></a>

## Overview

Conform to this protocol in your subclass of [FSVolume](../fsvolume.md). To provide additional capabilities, conform to the other `FSVolume` operations protocols, such as [FSVolumeOpenCloseOperations](opencloseoperations.md) and [FSVolumeReadWriteOperations](readwriteoperations.md).

> **Note**

> This protocol extends [FSVolumePathConfOperations](pathconfoperations.md), so your volume implementation must also conform to that protocol.

> **Deprecated**

> Use [FSVolumeHandler](handler.md) instead.

## Topics

### Handling activation and deactivation

- [activateWithOptions:replyHandler:](operations/activate%28options_replyhandler_%29.md): Deprecated. Activates the volume using the specified options.
- [FSItem](../fsitem.md): A distinct object in a file hierarchy, such as a file, directory, symlink, socket, and more.
- [deactivateWithOptions:replyHandler:](operations/deactivate%28options_replyhandler_%29.md): Deprecated. Tears down a previously initialized volume instance.
- [FSDeactivateOptions](../fsdeactivateoptions.md): Options that affect the behavior of deactivate methods.

### Working with items

- [createItemNamed:type:inDirectory:attributes:replyHandler:](operations/createitem%28named_type_indirectory_attributes_replyhandler_%29.md): Deprecated. Creates a new file or directory item.
- [FSFileName](../fsfilename.md): The name of a file, expressed as a data buffer.
- [FSItemType](../fsitem/itemtype.md): An enumeration of item types, such as file, directory, or symbolic link.
- [FSItemSetAttributesRequest](../fsitem/setattributesrequest.md): A request to set attributes on an item.
- [lookupItemNamed:inDirectory:replyHandler:](operations/lookupitem%28named_indirectory_replyhandler_%29.md): Deprecated. Looks up an item within a directory.
- [removeItem:named:fromDirectory:replyHandler:](operations/removeitem%28__named_fromdirectory_replyhandler_%29.md): Deprecated. Removes an existing item from a given directory.
- [renameItem:inDirectory:named:toNewName:inDirectory:overItem:replyHandler:](operations/renameitem%28__indirectory_named_to_indirectory_overitem_replyhandler_%29.md): Deprecated. Renames an item from one path in the file system to another.

### Working with links

- [createLinkToItem:named:inDirectory:replyHandler:](operations/createlink%28to_named_indirectory_replyhandler_%29.md): Deprecated. Creates a new hard link.
- [createSymbolicLinkNamed:inDirectory:attributes:linkContents:replyHandler:](operations/createsymboliclink%28named_indirectory_attributes_linkcontents_replyhandler_%29.md): Deprecated. Creates a new symbolic link.
- [readSymbolicLink:replyHandler:](operations/readsymboliclink%28__replyhandler_%29.md): Deprecated. Reads a symbolic link.

### Working with attributes

- [getAttributes:ofItem:replyHandler:](operations/getattributes%28__of_replyhandler_%29.md): Deprecated. Fetches attributes for the given item.
- [FSItemGetAttributesRequest](../fsitem/getattributesrequest.md): A request to get attributes from an item.
- [setAttributes:onItem:replyHandler:](operations/setattributes%28__on_replyhandler_%29.md): Deprecated. Sets the given attributes on an item.
- [FSItemSetAttributesRequest](../fsitem/setattributesrequest.md): A request to set attributes on an item.

### Inspecting directory contents

- [enumerateDirectory:startingAtCookie:verifier:providingAttributes:usingPacker:replyHandler:](operations/enumeratedirectory%28__startingat_verifier_attributes_packer_replyhandler_%29.md): Deprecated. Enumerates the contents of the given directory.
- [FSDirectoryCookie](../fsdirectorycookie.md): A value that indicates a location in a directory from which to enumerate.
- [FSDirectoryCookie](../fsdirectorycookie.md): A value that indicates a location in a directory from which to enumerate.
- [FSDirectoryVerifier](../fsdirectoryverifier.md): A tool to detect whether the directory contents changed since the last call to enumerate a directory.
- [FSDirectoryVerifier](../fsdirectoryverifier.md): A tool to detect whether the directory contents changed since the last call to enumerate a directory.
- [FSDirectoryEntryPacker](../fsdirectoryentrypacker.md): An object used to provide items during a directory enumeration.

### Synchronizing with a resource

- [FSSyncFlags](../fssyncflags.md): Behavior flags for use with synchronization calls.

### Inspecting required volume properties

- [FSVolumeSupportedCapabilities](supportedcapabilities.md): A type that represents capabilities supported by a volume, such as hard and symbolic links, journaling, and large file sizes.
- [FSStatFSResult](../fsstatfsresult.md): A type used to report a volume’s statistics.

### Inspecting optional volume properties

- [FSMountOptions](mountoptions.md): Mount options to be requested from FSKit using the `requestedMountOptions` property.

## Relationships

### Inherits From

- [FSVolumeCommonOperations](commonoperations.md)
- [FSVolumePathConfOperations](pathconfoperations.md)
- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Deprecated

- [FSVolumeOpenCloseOperations](opencloseoperations.md): Deprecated. Methods and properties implemented by volumes that want to receive open and close calls for each item.
- [FSVolumeReadWriteOperations](readwriteoperations.md): Deprecated. Methods implemented for read and write operations that deliver data to and from the extension.
- [FSVolumeAccessCheckOperations](accesscheckoperations.md): Deprecated. Methods and properties implemented by volumes that want to enforce access check operations.
- [FSVolumeRenameOperations](renameoperations.md): Deprecated. Methods and properties implemented by volumes that support renaming the volume.
- [FSVolumePreallocateOperations](preallocateoperations.md): Deprecated. Methods and properties implemented by volumes that want to offer preallocation functions.
- [FSVolumeXattrOperations](xattroperations.md): Deprecated. Methods and properties implemented by volumes that natively or partially support extended attributes.
- [FSVolumeItemDeactivation](itemdeactivation.md): Deprecated. Methods and properties implemented by volumes that support deactivating items.
- [FSVolumeKernelOffloadedIOOperations](../fsvolumekerneloffloadediooperations.md): Deprecated. Methods and properties implemented by volumes that use kernel-offloaded I/O to achieve higher file transfer performance.
