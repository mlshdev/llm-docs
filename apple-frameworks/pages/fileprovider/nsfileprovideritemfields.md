> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovideritemfields](https://developer.apple.com/documentation/fileprovider/nsfileprovideritemfields)

# NSFileProviderItemFields (Swift)

**Framework:** File Provider  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 11.0+ · visionOS 1.0+

Fields that specify which of the item’s properties have changed.

## Declaration

```swift
struct NSFileProviderItemFields
```

<a id="overview"></a>

## Overview

Most of the fields correspond to properties in the [NSFileProviderItemProtocol](nsfileprovideritemprotocol.md) protocol.

## Topics

### Specifying the Required Fields

- [filename](nsfileprovideritemfields/filename.md): The item’s filename.
- [contents](nsfileprovideritemfields/contents.md): The item’s content.

### Specifying Content Location

- [parentItemIdentifier](nsfileprovideritemfields/parentitemidentifier.md): The identity of the directory that contains the item.

### Tracking Usage

- [contentModificationDate](nsfileprovideritemfields/contentmodificationdate.md): The item’s modification date.
- [creationDate](nsfileprovideritemfields/creationdate.md): The item’s creation date.
- [lastUsedDate](nsfileprovideritemfields/lastuseddate.md): The date the item was last used.

### Working with Metadata

- [extendedAttributes](nsfileprovideritemfields/extendedattributes.md): The item’s extended attributes.
- [fileSystemFlags](nsfileprovideritemfields/filesystemflags.md): The flags describing the item’s on-disk representation.
- [tagData](nsfileprovideritemfields/tagdata.md): The tags for the item.
- [favoriteRank](nsfileprovideritemfields/favoriterank.md): The item’s favorite rank.
- [typeAndCreator](nsfileprovideritemfields/typeandcreator.md): The file type and creator codes for the item.

### Initializers

- [init(rawValue:)](nsfileprovideritemfields/init%28rawvalue_%29.md): Creates an option instance from the raw value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Items and metadata

- [NSFileProviderItemVersion](nsfileprovideritemversion.md): The version of the item’s content and its metadata.
- [NSFileProviderRequest](nsfileproviderrequest.md): An object that provides information about the application requesting data from the File Provider extension.
- [NSFileProviderItemDecorating](nsfileprovideritemdecorating.md): Support for decorating items.
- [NSFileProviderItemDecorationIdentifier](nsfileprovideritemdecorationidentifier.md): A decoration identifier defined in the File Provider extension’s information property list.

# NSFileProviderItemFields (Objective-C)

**Framework:** File Provider  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · macOS 11.0+ · visionOS 1.0+

Fields that specify which of the item’s properties have changed.

## Declaration

```objectivec
enum NSFileProviderItemFields : NSUInteger;
```

<a id="overview"></a>

## Overview

Most of the fields correspond to properties in the [NSFileProviderItem](nsfileprovideritemprotocol.md) protocol.

## Topics

### Specifying the Required Fields

- [NSFileProviderItemFilename](nsfileprovideritemfields/filename.md): The item’s filename.
- [NSFileProviderItemContents](nsfileprovideritemfields/contents.md): The item’s content.

### Specifying Content Location

- [NSFileProviderItemParentItemIdentifier](nsfileprovideritemfields/parentitemidentifier.md): The identity of the directory that contains the item.

### Tracking Usage

- [NSFileProviderItemContentModificationDate](nsfileprovideritemfields/contentmodificationdate.md): The item’s modification date.
- [NSFileProviderItemCreationDate](nsfileprovideritemfields/creationdate.md): The item’s creation date.
- [NSFileProviderItemLastUsedDate](nsfileprovideritemfields/lastuseddate.md): The date the item was last used.

### Working with Metadata

- [NSFileProviderItemExtendedAttributes](nsfileprovideritemfields/extendedattributes.md): The item’s extended attributes.
- [NSFileProviderItemFileSystemFlags](nsfileprovideritemfields/filesystemflags.md): The flags describing the item’s on-disk representation.
- [NSFileProviderItemTagData](nsfileprovideritemfields/tagdata.md): The tags for the item.
- [NSFileProviderItemFavoriteRank](nsfileprovideritemfields/favoriterank.md): The item’s favorite rank.
- [NSFileProviderItemTypeAndCreator](nsfileprovideritemfields/typeandcreator.md): The file type and creator codes for the item.

## See Also

### Items and metadata

- [NSFileProviderItemVersion](nsfileprovideritemversion.md): The version of the item’s content and its metadata.
- [NSFileProviderRequest](nsfileproviderrequest.md): An object that provides information about the application requesting data from the File Provider extension.
- [NSFileProviderItemDecorating](nsfileprovideritemdecorating.md): Support for decorating items.
- [NSFileProviderItemDecorationIdentifier](nsfileprovideritemdecorationidentifier.md): A decoration identifier defined in the File Provider extension’s information property list.
