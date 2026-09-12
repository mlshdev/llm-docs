> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/handler](https://developer.apple.com/documentation/fskit/fsvolume/handler)

# FSVolume.Handler (Swift)

**Framework:** FSKit  
**Kind:** Protocol  
**Availability:** macOS 27.0+

Methods that all volumes implement to provide required capabilities.

## Declaration

```swift
protocol Handler : FSVolume.CommonOperations, FSVolume.PathConfOperations
```

<a id="overview"></a>

## Overview

Conform to this protocol in your subclass of [FSVolume](../fsvolume.md). To provide additional capabilities, conform to the other `FSVolume` handler protocols, such as [FSVolume.OpenCloseHandler](openclosehandler.md) and [FSVolume.ReadWriteHandler](readwritehandler.md).

> **Note**

> This protocol extends [FSVolume.PathConfOperations](pathconfoperations.md), so your volume implementation must also conform to that protocol.

> **Important**

> This protocol replaces the [FSVolume.Operations](operations.md) protocol. It exposes the same functionality, while using [FSVolumeHandlerResult](../fsvolumehandlerresult.md) objects. These objects add the ability to reply with [FSItem.Attributes](../fsitem/attributes.md) and free space from the relevant methods.

## Topics

### Handling activation and deactivation

- [FSItem](../fsitem.md): A distinct object in a file hierarchy, such as a file, directory, symlink, socket, and more.
- [FSActivateResult](../fsactivateresult.md): The result of an activate call.
- [FSDeactivateOptions](../fsdeactivateoptions.md): Options that affect the behavior of deactivate methods.

### Mounting and unmounting

- [mount(options:replyHandler:)](handler/mount%28options_replyhandler_%29.md)
- [unmount(replyHandler:)](handler/unmount%28replyhandler_%29.md)

### Working with items

- [createItem(named:type:in:attributes:context:replyHandler:)](handler/createitem%28named_type_in_attributes_context_replyhandler_%29.md): Creates a new file or directory item.
- [FSFileName](../fsfilename.md): The name of a file, expressed as a data buffer.
- [FSItem.ItemType](../fsitem/itemtype.md): An enumeration of item types, such as file, directory, or symbolic link.
- [FSItem.SetAttributesRequest](../fsitem/setattributesrequest.md): A request to set attributes on an item.
- [FSCreateItemResult](../fscreateitemresult.md): The result of a create-item call.
- [lookupItem(named:in:context:replyHandler:)](handler/lookupitem%28named_in_context_replyhandler_%29.md): Looks up an item within a directory.
- [FSLookupItemResult](../fslookupitemresult.md): The result of an item lookup call.
- [removeItem(\_:named:from:context:replyHandler:)](handler/removeitem%28__named_from_context_replyhandler_%29.md): Removes an existing item from a given directory.
- [FSRemoveItemResult](../fsremoveitemresult.md): The result of a remove-item call.
- [renameItem(\_:inDirectory:named:to:inDirectory:overItem:context:replyHandler:)](handler/renameitem%28__indirectory_named_to_indirectory_overitem_context_replyhandler_%29.md): Renames an item from one path in the file system to another.
- [FSRenameItemResult](../fsrenameitemresult.md): The result of a rename-item call.
- [reclaimItem(\_:replyHandler:)](handler/reclaimitem%28__replyhandler_%29.md)

### Working with links

- [createLink(to:named:in:context:replyHandler:)](handler/createlink%28to_named_in_context_replyhandler_%29.md): Creates a new hard link.
- [FSCreateLinkResult](../fscreatelinkresult.md): The result of a create-link call.
- [createSymbolicLink(named:in:attributes:linkContents:context:replyHandler:)](handler/createsymboliclink%28named_in_attributes_linkcontents_context_replyhandler_%29.md): Creates a new symbolic link.
- [FSCreateSymlinkResult](../fscreatesymlinkresult.md): The result of a create-symlink call.
- [readSymbolicLink(\_:context:replyHandler:)](handler/readsymboliclink%28__context_replyhandler_%29.md): Reads a symbolic link.
- [FSReadSymlinkResult](../fsreadsymlinkresult.md): The result of a read-symlink call.

### Working with attributes

- [getAttributes(\_:of:context:replyHandler:)](handler/getattributes%28__of_context_replyhandler_%29.md): Fetches attributes for the given item.
- [FSItem.GetAttributesRequest](../fsitem/getattributesrequest.md): A request to get attributes from an item.
- [FSGetAttributesResult](../fsgetattributesresult.md): The result of a get-attributes call.
- [setAttributes(\_:on:context:replyHandler:)](handler/setattributes%28__on_context_replyhandler_%29.md): Sets the given attributes on an item.
- [FSItem.SetAttributesRequest](../fsitem/setattributesrequest.md): A request to set attributes on an item.
- [FSSetAttributesResult](../fssetattributesresult.md): The restlt of a set-attributes call.

### Inspecting directory contents

- [enumerateDirectory(\_:startingAt:verifier:attributes:packer:context:replyHandler:)](handler/enumeratedirectory%28__startingat_verifier_attributes_packer_context_replyhandler_%29.md): Enumerates the contents of the given directory.
- [FSDirectoryCookie](../fsdirectorycookie.md): A value that indicates a location in a directory from which to enumerate.
- [FSDirectoryCookie](../fsdirectorycookie.md): A value that indicates a location in a directory from which to enumerate.
- [FSDirectoryVerifier](../fsdirectoryverifier.md): A tool to detect whether the directory contents changed since the last call to enumerate a directory.
- [FSDirectoryVerifier](../fsdirectoryverifier.md): A tool to detect whether the directory contents changed since the last call to enumerate a directory.
- [FSDirectoryEntryPacker](../fsdirectoryentrypacker.md): An object used to provide items during a directory enumeration.
- [FSEnumerateDirectoryResult](../fsenumeratedirectoryresult.md): The result of an enumerate-directory call.

### Performing synchronization

- [synchronize(flags:replyHandler:)](handler/synchronize%28flags_replyhandler_%29.md)
- [FSSyncFlags](../fssyncflags.md): Behavior flags for use with synchronization calls.

### Inspecting required volume properties

- [supportedVolumeCapabilities](handler/supportedvolumecapabilities.md)
- [FSVolume.SupportedCapabilities](supportedcapabilities.md): A type that represents capabilities supported by a volume, such as hard and symbolic links, journaling, and large file sizes.
- [volumeStatistics](handler/volumestatistics.md): A property that provides up-to-date statistics of the volume.
- [FSStatFSResult](../fsstatfsresult.md): A type used to report a volume’s statistics.

### Inspecting optional volume properties

- [FSVolume.MountOptions](mountoptions.md): Mount options to be requested from FSKit using the `requestedMountOptions` property.

### Supporting types

- [FSContext](../fscontext.md): A context object that provides information about the initiator of a file system operation.

### Instance Methods

- [activateVolume(options:replyHandler:)](handler/activatevolume%28options_replyhandler_%29.md): Activates the volume using the specified options.
- [deactivateVolume(options:replyHandler:)](handler/deactivatevolume%28options_replyhandler_%29.md): Tears down a previously initialized volume instance.

## Relationships

### Inherits From

- [FSVolume.CommonOperations](commonoperations.md)
- [FSVolume.PathConfOperations](pathconfoperations.md)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Implementing required handlers

- [FSVolumeHandlerResult](../fsvolumehandlerresult.md): An abstract base class for all result objects in FSKit handler-style protocols.
- [FSVolume.PathConfOperations](pathconfoperations.md): Properties implemented by volumes that support providing the values of system limits or options.

# FSVolumeHandler (Objective-C)

**Framework:** FSKit  
**Kind:** Protocol  
**Availability:** macOS 27.0+

Methods that all volumes implement to provide required capabilities.

## Declaration

```objectivec
@protocol FSVolumeHandler <NSObject, FSVolumeCommonOperations, FSVolumePathConfOperations>
```

<a id="overview"></a>

## Overview

Conform to this protocol in your subclass of [FSVolume](../fsvolume.md). To provide additional capabilities, conform to the other `FSVolume` handler protocols, such as [FSVolumeOpenCloseHandler](openclosehandler.md) and [FSVolumeReadWriteHandler](readwritehandler.md).

> **Note**

> This protocol extends [FSVolumePathConfOperations](pathconfoperations.md), so your volume implementation must also conform to that protocol.

> **Important**

> This protocol replaces the [FSVolumeOperations](operations.md) protocol. It exposes the same functionality, while using [FSVolumeHandlerResult](../fsvolumehandlerresult.md) objects. These objects add the ability to reply with [FSItemAttributes](../fsitem/attributes.md) and free space from the relevant methods.

## Topics

### Handling activation and deactivation

- [FSItem](../fsitem.md): A distinct object in a file hierarchy, such as a file, directory, symlink, socket, and more.
- [FSActivateResult](../fsactivateresult.md): The result of an activate call.
- [FSDeactivateOptions](../fsdeactivateoptions.md): Options that affect the behavior of deactivate methods.

### Mounting and unmounting

- [mountWithOptions:replyHandler:](handler/mount%28options_replyhandler_%29.md)
- [unmountWithReplyHandler:](handler/unmount%28replyhandler_%29.md)

### Working with items

- [createItemNamed:type:inDirectory:attributes:context:replyHandler:](handler/createitem%28named_type_in_attributes_context_replyhandler_%29.md): Creates a new file or directory item.
- [FSFileName](../fsfilename.md): The name of a file, expressed as a data buffer.
- [FSItemType](../fsitem/itemtype.md): An enumeration of item types, such as file, directory, or symbolic link.
- [FSItemSetAttributesRequest](../fsitem/setattributesrequest.md): A request to set attributes on an item.
- [FSCreateItemResult](../fscreateitemresult.md): The result of a create-item call.
- [lookupItemNamed:inDirectory:context:replyHandler:](handler/lookupitem%28named_in_context_replyhandler_%29.md): Looks up an item within a directory.
- [FSLookupItemResult](../fslookupitemresult.md): The result of an item lookup call.
- [removeItem:named:fromDirectory:context:replyHandler:](handler/removeitem%28__named_from_context_replyhandler_%29.md): Removes an existing item from a given directory.
- [FSRemoveItemResult](../fsremoveitemresult.md): The result of a remove-item call.
- [renameItem:inDirectory:named:toNewName:inDirectory:overItem:context:replyHandler:](handler/renameitem%28__indirectory_named_to_indirectory_overitem_context_replyhandler_%29.md): Renames an item from one path in the file system to another.
- [FSRenameItemResult](../fsrenameitemresult.md): The result of a rename-item call.
- [reclaimItem:replyHandler:](handler/reclaimitem%28__replyhandler_%29.md)

### Working with links

- [createLinkToItem:named:inDirectory:context:replyHandler:](handler/createlink%28to_named_in_context_replyhandler_%29.md): Creates a new hard link.
- [FSCreateLinkResult](../fscreatelinkresult.md): The result of a create-link call.
- [createSymbolicLinkNamed:inDirectory:attributes:linkContents:context:replyHandler:](handler/createsymboliclink%28named_in_attributes_linkcontents_context_replyhandler_%29.md): Creates a new symbolic link.
- [FSCreateSymlinkResult](../fscreatesymlinkresult.md): The result of a create-symlink call.
- [readSymbolicLink:context:replyHandler:](handler/readsymboliclink%28__context_replyhandler_%29.md): Reads a symbolic link.
- [FSReadSymlinkResult](../fsreadsymlinkresult.md): The result of a read-symlink call.

### Working with attributes

- [getAttributes:ofItem:context:replyHandler:](handler/getattributes%28__of_context_replyhandler_%29.md): Fetches attributes for the given item.
- [FSItemGetAttributesRequest](../fsitem/getattributesrequest.md): A request to get attributes from an item.
- [FSGetAttributesResult](../fsgetattributesresult.md): The result of a get-attributes call.
- [setAttributes:onItem:context:replyHandler:](handler/setattributes%28__on_context_replyhandler_%29.md): Sets the given attributes on an item.
- [FSItemSetAttributesRequest](../fsitem/setattributesrequest.md): A request to set attributes on an item.
- [FSSetAttributesResult](../fssetattributesresult.md): The restlt of a set-attributes call.

### Inspecting directory contents

- [enumerateDirectory:startingAtCookie:verifier:providingAttributes:usingPacker:context:replyHandler:](handler/enumeratedirectory%28__startingat_verifier_attributes_packer_context_replyhandler_%29.md): Enumerates the contents of the given directory.
- [FSDirectoryCookie](../fsdirectorycookie.md): A value that indicates a location in a directory from which to enumerate.
- [FSDirectoryCookie](../fsdirectorycookie.md): A value that indicates a location in a directory from which to enumerate.
- [FSDirectoryVerifier](../fsdirectoryverifier.md): A tool to detect whether the directory contents changed since the last call to enumerate a directory.
- [FSDirectoryVerifier](../fsdirectoryverifier.md): A tool to detect whether the directory contents changed since the last call to enumerate a directory.
- [FSDirectoryEntryPacker](../fsdirectoryentrypacker.md): An object used to provide items during a directory enumeration.
- [FSEnumerateDirectoryResult](../fsenumeratedirectoryresult.md): The result of an enumerate-directory call.

### Performing synchronization

- [synchronizeWithFlags:replyHandler:](handler/synchronize%28flags_replyhandler_%29.md)
- [FSSyncFlags](../fssyncflags.md): Behavior flags for use with synchronization calls.

### Inspecting required volume properties

- [supportedVolumeCapabilities](handler/supportedvolumecapabilities.md)
- [FSVolumeSupportedCapabilities](supportedcapabilities.md): A type that represents capabilities supported by a volume, such as hard and symbolic links, journaling, and large file sizes.
- [volumeStatistics](handler/volumestatistics.md): A property that provides up-to-date statistics of the volume.
- [FSStatFSResult](../fsstatfsresult.md): A type used to report a volume’s statistics.

### Inspecting optional volume properties

- [FSMountOptions](mountoptions.md): Mount options to be requested from FSKit using the `requestedMountOptions` property.

### Supporting types

- [FSContext](../fscontext.md): A context object that provides information about the initiator of a file system operation.

### Instance Methods

- [activateVolumeWithOptions:replyHandler:](handler/activatevolume%28options_replyhandler_%29.md): Activates the volume using the specified options.
- [deactivateVolumeWithOptions:replyHandler:](handler/deactivatevolume%28options_replyhandler_%29.md): Tears down a previously initialized volume instance.

## Relationships

### Inherits From

- [FSVolumeCommonOperations](commonoperations.md)
- [FSVolumePathConfOperations](pathconfoperations.md)
- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Implementing required handlers

- [FSVolumeHandlerResult](../fsvolumehandlerresult.md): An abstract base class for all result objects in FSKit handler-style protocols.
- [FSVolumePathConfOperations](pathconfoperations.md): Properties implemented by volumes that support providing the values of system limits or options.
