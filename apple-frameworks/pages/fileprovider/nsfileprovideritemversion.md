> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovideritemversion](https://developer.apple.com/documentation/fileprovider/nsfileprovideritemversion)

# NSFileProviderItemVersion (Swift)

**Framework:** File Provider  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 11.0+ · visionOS 1.0+

The version of the item’s content and its metadata.

## Declaration

```swift
class NSFileProviderItemVersion
```

<a id="overview"></a>

## Overview

Each item has a separate version object for its metadata and its content. As a result, the file provider can update an item’s metadata without uploading or downloading a new copy of its content.

## Topics

### Creating Version Instances

- [init(contentVersion:metadataVersion:)](nsfileprovideritemversion/init%28contentversion_metadataversion_%29.md): Creates a new version object.

### Accessing Version Data

- [beforeFirstSyncComponent](nsfileprovideritemversion/beforefirstsynccomponent.md): A Boolean value indicating that this version predates the version returned by the file provider extension.
- [contentVersion](nsfileprovideritemversion/contentversion.md): An opaque object used to track versions of the item’s content.
- [metadataVersion](nsfileprovideritemversion/metadataversion.md): An opaque object used to track versions of the item’s metadata.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Items and metadata

- [NSFileProviderItemFields](nsfileprovideritemfields.md): Fields that specify which of the item’s properties have changed.
- [NSFileProviderRequest](nsfileproviderrequest.md): An object that provides information about the application requesting data from the File Provider extension.
- [NSFileProviderItemDecorating](nsfileprovideritemdecorating.md): Support for decorating items.
- [NSFileProviderItemDecorationIdentifier](nsfileprovideritemdecorationidentifier.md): A decoration identifier defined in the File Provider extension’s information property list.

# NSFileProviderItemVersion (Objective-C)

**Framework:** File Provider  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · macOS 11.0+ · visionOS 1.0+

The version of the item’s content and its metadata.

## Declaration

```objectivec
@interface NSFileProviderItemVersion : NSObject
```

<a id="overview"></a>

## Overview

Each item has a separate version object for its metadata and its content. As a result, the file provider can update an item’s metadata without uploading or downloading a new copy of its content.

## Topics

### Creating Version Instances

- [initWithContentVersion:metadataVersion:](nsfileprovideritemversion/init%28contentversion_metadataversion_%29.md): Creates a new version object.

### Accessing Version Data

- [beforeFirstSyncComponent](nsfileprovideritemversion/beforefirstsynccomponent.md): A Boolean value indicating that this version predates the version returned by the file provider extension.
- [contentVersion](nsfileprovideritemversion/contentversion.md): An opaque object used to track versions of the item’s content.
- [metadataVersion](nsfileprovideritemversion/metadataversion.md): An opaque object used to track versions of the item’s metadata.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Items and metadata

- [NSFileProviderItemFields](nsfileprovideritemfields.md): Fields that specify which of the item’s properties have changed.
- [NSFileProviderRequest](nsfileproviderrequest.md): An object that provides information about the application requesting data from the File Provider extension.
- [NSFileProviderItemDecorating](nsfileprovideritemdecorating.md): Support for decorating items.
- [NSFileProviderItemDecorationIdentifier](nsfileprovideritemdecorationidentifier.md): A decoration identifier defined in the File Provider extension’s information property list.
