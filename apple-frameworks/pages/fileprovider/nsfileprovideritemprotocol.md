> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovideritemprotocol](https://developer.apple.com/documentation/fileprovider/nsfileprovideritemprotocol)

# NSFileProviderItemProtocol (Swift)

**Framework:** File Provider  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 11.0+ · visionOS 1.0+

A protocol that defines the properties of an item managed by the File Provider extension.

## Declaration

```swift
protocol NSFileProviderItemProtocol : NSObjectProtocol
```

## Mentioned In

- [Synchronizing the File Provider Extension](synchronizing-the-file-provider-extension.md)

<a id="overview"></a>

## Overview

Most of these properties are optional. A File Provider extension doesn’t need to implement all properties for all items.

## Topics

### Providing Required Properties

- [itemIdentifier](nsfileprovideritemprotocol/itemidentifier.md): The item’s persistent identifier.
- [filename](nsfileprovideritemprotocol/filename.md): The item’s filename.
- [typeIdentifier](nsfileprovideritemprotocol/typeidentifier.md): Deprecated. The item’s Uniform Type Identifier (UTI).
- [contentType](nsfileprovideritemprotocol/contenttype.md): The item’s Uniform Type Identifier (UTI).
- [capabilities](nsfileprovideritemprotocol/capabilities.md): The item’s capabilities.

### Managing Content

- [childItemCount](nsfileprovideritemprotocol/childitemcount.md): The number of items contained by this item.
- [documentSize](nsfileprovideritemprotocol/documentsize.md): The document’s size, in bytes.
- [contentPolicy](nsfileprovideritemprotocol/contentpolicy.md)
- [NSFileProviderContentPolicy](nsfileprovidercontentpolicy.md)

### Specifying Content Location

- [parentItemIdentifier](nsfileprovideritemprotocol/parentitemidentifier.md): The persistent identifier of the item’s parent folder.
- [isTrashed](nsfileprovideritemprotocol/istrashed.md): A Boolean value that indicates whether an item is in the trash.
- [symlinkTargetPath](nsfileprovideritemprotocol/symlinktargetpath.md): The target of the symlink.

### Tracking Usage

- [contentModificationDate](nsfileprovideritemprotocol/contentmodificationdate.md): The date the item was last modified.
- [creationDate](nsfileprovideritemprotocol/creationdate.md): The date the item was created.
- [lastUsedDate](nsfileprovideritemprotocol/lastuseddate.md): The date the item was last used.

### Tracking Versions

- [itemVersion](nsfileprovideritemprotocol/itemversion.md): A version object that tracks changes to an item.
- [versionIdentifier](nsfileprovideritemprotocol/versionidentifier.md): A data value used to determine when the item changes.
- [isMostRecentVersionDownloaded](nsfileprovideritemprotocol/ismostrecentversiondownloaded.md): A Boolean value that indicates whether the item is the most recent version downloaded from the server.

### Monitoring File Transfers

- [isUploading](nsfileprovideritemprotocol/isuploading.md): A Boolean value that indicates whether the item is currently uploading to your remote server.
- [isUploaded](nsfileprovideritemprotocol/isuploaded.md): A Boolean value that indicates whether the item has been uploaded to your remote server.
- [uploadingError](nsfileprovideritemprotocol/uploadingerror.md): An object describing an error that occurred while uploading the item.
- [isDownloading](nsfileprovideritemprotocol/isdownloading.md): A Boolean value that indicates whether the item is currently downloading from your remote server.
- [isDownloaded](nsfileprovideritemprotocol/isdownloaded.md): A Boolean value that indicates whether the item has been downloaded from your remote server.
- [downloadingError](nsfileprovideritemprotocol/downloadingerror.md): An object describing an error that occurred while downloading the item.

### Sharing

- [isShared](nsfileprovideritemprotocol/isshared.md): A Boolean value that indicates whether the item is shared with other users.
- [isSharedByCurrentUser](nsfileprovideritemprotocol/issharedbycurrentuser.md): A Boolean value that indicates whether the item was shared by the current user.
- [mostRecentEditorNameComponents](nsfileprovideritemprotocol/mostrecenteditornamecomponents.md): The most recent editor’s name.
- [ownerNameComponents](nsfileprovideritemprotocol/ownernamecomponents.md): The name of the item’s owner.

### Managing Metadata

- [extendedAttributes](nsfileprovideritemprotocol/extendedattributes.md): The extended file attributes synced by the File Provider extension.
- [fileSystemFlags](nsfileprovideritemprotocol/filesystemflags.md): Flags that define an item’s on-disk properties and its appearance in the user interface.
- [NSFileProviderFileSystemFlags](nsfileproviderfilesystemflags.md): Flags that define an item’s on-disk properties and its appearance in the user interface.
- [tagData](nsfileprovideritemprotocol/tagdata.md): An abstract data blob representing the tags associated with the item.
- [userInfo](nsfileprovideritemprotocol/userinfo.md): A property list that contains additional data about the item.
- [favoriteRank](nsfileprovideritemprotocol/favoriterank.md): A 64-bit, unsigned integer indicating the order of the favorite item in the Favorites list.
- [NSFileProviderFavoriteRankUnranked](nsfileproviderfavoriterankunranked.md): A value that indicates that the item is not ranked.
- [typeAndCreator](nsfileprovideritemprotocol/typeandcreator.md): The file type and creator codes for the item.

### Instance Properties

- [namespacePolicy](nsfileprovideritemprotocol/namespacepolicy.md): Declarative API to define the item namespace policy according to the available NSFileProviderNamespacePolicy

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Inherited By

- [NSFileProviderItemDecorating](nsfileprovideritemdecorating.md)

## See Also

### Provided items

- [NSFileProviderItem](nsfileprovideritem-swift.typealias.md): An item the File Provider extension manages.
- [NSFileProviderItemIdentifier](nsfileprovideritemidentifier.md): A unique identifier for an item managed by the File Provider extension.
- [NSFileProviderItemCapabilities](nsfileprovideritemcapabilities.md): An item’s capabilities, which define the actions that the user can perform in the document browser.
- [NSFileProviderTypeAndCreator](nsfileprovidertypeandcreator.md): A structure that contains the file type and file creator codes for an item.

# NSFileProviderItem (Objective-C)

**Framework:** File Provider  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · macOS 11.0+ · visionOS 1.0+

A protocol that defines the properties of an item managed by the File Provider extension.

## Declaration

```objectivec
@protocol NSFileProviderItem <NSObject>
```

## Mentioned In

- [Synchronizing the File Provider Extension](synchronizing-the-file-provider-extension.md)

<a id="overview"></a>

## Overview

Most of these properties are optional. A File Provider extension doesn’t need to implement all properties for all items.

## Topics

### Providing Required Properties

- [itemIdentifier](nsfileprovideritemprotocol/itemidentifier.md): The item’s persistent identifier.
- [filename](nsfileprovideritemprotocol/filename.md): The item’s filename.
- [typeIdentifier](nsfileprovideritemprotocol/typeidentifier.md): Deprecated. The item’s Uniform Type Identifier (UTI).
- [contentType](nsfileprovideritemprotocol/contenttype.md): The item’s Uniform Type Identifier (UTI).
- [capabilities](nsfileprovideritemprotocol/capabilities.md): The item’s capabilities.

### Managing Content

- [childItemCount](nsfileprovideritemprotocol/childitemcount.md): The number of items contained by this item.
- [documentSize](nsfileprovideritemprotocol/documentsize.md): The document’s size, in bytes.
- [contentPolicy](nsfileprovideritemprotocol/contentpolicy.md)
- [NSFileProviderContentPolicy](nsfileprovidercontentpolicy.md)

### Specifying Content Location

- [parentItemIdentifier](nsfileprovideritemprotocol/parentitemidentifier.md): The persistent identifier of the item’s parent folder.
- [trashed](nsfileprovideritemprotocol/istrashed.md): A Boolean value that indicates whether an item is in the trash.
- [symlinkTargetPath](nsfileprovideritemprotocol/symlinktargetpath.md): The target of the symlink.

### Tracking Usage

- [contentModificationDate](nsfileprovideritemprotocol/contentmodificationdate.md): The date the item was last modified.
- [creationDate](nsfileprovideritemprotocol/creationdate.md): The date the item was created.
- [lastUsedDate](nsfileprovideritemprotocol/lastuseddate.md): The date the item was last used.

### Tracking Versions

- [itemVersion](nsfileprovideritemprotocol/itemversion.md): A version object that tracks changes to an item.
- [versionIdentifier](nsfileprovideritemprotocol/versionidentifier.md): A data value used to determine when the item changes.
- [mostRecentVersionDownloaded](nsfileprovideritemprotocol/ismostrecentversiondownloaded.md): A Boolean value that indicates whether the item is the most recent version downloaded from the server.

### Monitoring File Transfers

- [uploading](nsfileprovideritemprotocol/isuploading.md): A Boolean value that indicates whether the item is currently uploading to your remote server.
- [uploaded](nsfileprovideritemprotocol/isuploaded.md): A Boolean value that indicates whether the item has been uploaded to your remote server.
- [uploadingError](nsfileprovideritemprotocol/uploadingerror.md): An object describing an error that occurred while uploading the item.
- [downloading](nsfileprovideritemprotocol/isdownloading.md): A Boolean value that indicates whether the item is currently downloading from your remote server.
- [downloaded](nsfileprovideritemprotocol/isdownloaded.md): A Boolean value that indicates whether the item has been downloaded from your remote server.
- [downloadingError](nsfileprovideritemprotocol/downloadingerror.md): An object describing an error that occurred while downloading the item.

### Sharing

- [shared](nsfileprovideritemprotocol/isshared.md): A Boolean value that indicates whether the item is shared with other users.
- [sharedByCurrentUser](nsfileprovideritemprotocol/issharedbycurrentuser.md): A Boolean value that indicates whether the item was shared by the current user.
- [mostRecentEditorNameComponents](nsfileprovideritemprotocol/mostrecenteditornamecomponents.md): The most recent editor’s name.
- [ownerNameComponents](nsfileprovideritemprotocol/ownernamecomponents.md): The name of the item’s owner.

### Managing Metadata

- [extendedAttributes](nsfileprovideritemprotocol/extendedattributes.md): The extended file attributes synced by the File Provider extension.
- [fileSystemFlags](nsfileprovideritemprotocol/filesystemflags.md): Flags that define an item’s on-disk properties and its appearance in the user interface.
- [NSFileProviderFileSystemFlags](nsfileproviderfilesystemflags.md): Flags that define an item’s on-disk properties and its appearance in the user interface.
- [tagData](nsfileprovideritemprotocol/tagdata.md): An abstract data blob representing the tags associated with the item.
- [userInfo](nsfileprovideritemprotocol/userinfo.md): A property list that contains additional data about the item.
- [favoriteRank](nsfileprovideritemprotocol/favoriterank.md): A 64-bit, unsigned integer indicating the order of the favorite item in the Favorites list.
- [NSFileProviderFavoriteRankUnranked](nsfileproviderfavoriterankunranked.md): A value that indicates that the item is not ranked.
- [typeAndCreator](nsfileprovideritemprotocol/typeandcreator.md): The file type and creator codes for the item.

### Instance Properties

- [namespacePolicy](nsfileprovideritemprotocol/namespacepolicy.md): Declarative API to define the item namespace policy according to the available NSFileProviderNamespacePolicy

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Inherited By

- [NSFileProviderItemDecorating](nsfileprovideritemdecorating.md)

## See Also

### Provided items

- [NSFileProviderItem](nsfileprovideritem-swift.typealias.md): An item the File Provider extension manages.
- [NSFileProviderItemIdentifier](nsfileprovideritemidentifier.md): A unique identifier for an item managed by the File Provider extension.
- [NSFileProviderItemCapabilities](nsfileprovideritemcapabilities.md): An item’s capabilities, which define the actions that the user can perform in the document browser.
- [NSFileProviderTypeAndCreator](nsfileprovidertypeandcreator.md): A structure that contains the file type and file creator codes for an item.
