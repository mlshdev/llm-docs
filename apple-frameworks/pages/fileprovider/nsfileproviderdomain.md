> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileproviderdomain](https://developer.apple.com/documentation/fileprovider/nsfileproviderdomain)

# NSFileProviderDomain (Swift)

**Framework:** File Provider  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 11.0+ · visionOS 1.0+

A File Provider extension’s domain.

## Declaration

```swift
class NSFileProviderDomain
```

<a id="overview"></a>

## Overview

You can use domains to partition a file provider’s content. When you use domains, a single file provider can act as if multiple file providers were installed, and users can dynamically switch from one domain to another. You can use domains to represent different accounts or locations.

By default, a File Provider extension has no domain. You can register domains by calling the [NSFileProviderManager](nsfileprovidermanager.md) class’s [add(\_:completionHandler:)](nsfileprovidermanager/add%28__completionhandler_%29.md) method. A new [NSFileProviderExtension](nsfileproviderextension.md) instance is created for each domain that you register. The [NSFileProviderExtension](nsfileproviderextension.md) object’s [domain](nsfileproviderextension/domain.md) property indicates which domain the file provider belongs to. Any items returned by that file provider also belong to the domain.

## Topics

### Creating domains

- [init(identifier:displayName:pathRelativeToDocumentStorage:)](nsfileproviderdomain/init%28identifier_displayname_pathrelativetodocumentstorage_%29.md): Returns a newly instantiated domain.
- [init(identifier:displayName:)](nsfileproviderdomain/init%28identifier_displayname_%29.md): Creates a new file provider domain with the specified identifier and display name.
- [NSFileProviderDomainIdentifier](nsfileproviderdomainidentifier.md): A unique identifier for a file provider’s domain.
- [init(displayName:userInfo:volumeURL:)](nsfileproviderdomain/init%28displayname_userinfo_volumeurl_%29.md): Creates a new file provider domain with the specified URL and display name.

### Accessing data

- [displayName](nsfileproviderdomain/displayname.md): The name of the domain displayed in the user interface.
- [identifier](nsfileproviderdomain/identifier.md): The domain’s unique identifier.
- [isReplicated](nsfileproviderdomain/isreplicated.md)
- [backingStoreIdentity](nsfileproviderdomain/backingstoreidentity.md): A unique identifier for the backing store used by the system.
- [pathRelativeToDocumentStorage](nsfileproviderdomain/pathrelativetodocumentstorage.md): The path of the domain’s subdirectory relative to the file provider’s shared container.
- [isHidden](nsfileproviderdomain/ishidden.md): A Boolean value that determines whether the domain is visible to users.
- [userEnabled](nsfileproviderdomain/userenabled.md): A Boolean value that indicates whether the user has enabled or disabled the domain.
- [isDisconnected](nsfileproviderdomain/isdisconnected.md): A Boolean value indicating that the domain is present, but disconnected from the file extension.
- [supportsSyncingTrash](nsfileproviderdomain/supportssyncingtrash.md)
- [userInfo](nsfileproviderdomain/userinfo.md)
- [volumeUUID](nsfileproviderdomain/volumeuuid.md)

### Syncing Desktop and Documents folders

- [replicatedKnownFolders](nsfileproviderdomain/replicatedknownfolders.md): A list of known folders that the domain currently replicates.
- [supportedKnownFolders](nsfileproviderdomain/supportedknownfolders.md): A list of known folders that the domain can replicate.
- [NSFileProviderKnownFolders](nsfileproviderknownfolders.md): Constants that identify known folders.

### Supporting search

- [supportsStringSearchRequest](nsfileproviderdomain/supportsstringsearchrequest.md): A Boolean value that indicates whether the provider supports search.

### Testing

- [testingModes](nsfileproviderdomain/testingmodes-swift.property.md): A mode that gives the File Provider extension more control over the system’s behavior during testing.
- [NSFileProviderDomain.TestingModes](nsfileproviderdomain/testingmodes-swift.struct.md): Modes that modify the system’s behavior while testing.

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

# NSFileProviderDomain (Objective-C)

**Framework:** File Provider  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · macOS 11.0+ · visionOS 1.0+

A File Provider extension’s domain.

## Declaration

```objectivec
@interface NSFileProviderDomain : NSObject
```

<a id="overview"></a>

## Overview

You can use domains to partition a file provider’s content. When you use domains, a single file provider can act as if multiple file providers were installed, and users can dynamically switch from one domain to another. You can use domains to represent different accounts or locations.

By default, a File Provider extension has no domain. You can register domains by calling the [NSFileProviderManager](nsfileprovidermanager.md) class’s [addDomain:completionHandler:](nsfileprovidermanager/add%28__completionhandler_%29.md) method. A new [NSFileProviderExtension](nsfileproviderextension.md) instance is created for each domain that you register. The [NSFileProviderExtension](nsfileproviderextension.md) object’s [domain](nsfileproviderextension/domain.md) property indicates which domain the file provider belongs to. Any items returned by that file provider also belong to the domain.

## Topics

### Creating domains

- [initWithIdentifier:displayName:pathRelativeToDocumentStorage:](nsfileproviderdomain/init%28identifier_displayname_pathrelativetodocumentstorage_%29.md): Returns a newly instantiated domain.
- [initWithIdentifier:displayName:](nsfileproviderdomain/init%28identifier_displayname_%29.md): Creates a new file provider domain with the specified identifier and display name.
- [NSFileProviderDomainIdentifier](nsfileproviderdomainidentifier.md): A unique identifier for a file provider’s domain.
- [initWithDisplayName:userInfo:volumeURL:](nsfileproviderdomain/init%28displayname_userinfo_volumeurl_%29.md): Creates a new file provider domain with the specified URL and display name.

### Accessing data

- [displayName](nsfileproviderdomain/displayname.md): The name of the domain displayed in the user interface.
- [identifier](nsfileproviderdomain/identifier.md): The domain’s unique identifier.
- [replicated](nsfileproviderdomain/isreplicated.md)
- [backingStoreIdentity](nsfileproviderdomain/backingstoreidentity.md): A unique identifier for the backing store used by the system.
- [pathRelativeToDocumentStorage](nsfileproviderdomain/pathrelativetodocumentstorage.md): The path of the domain’s subdirectory relative to the file provider’s shared container.
- [hidden](nsfileproviderdomain/ishidden.md): A Boolean value that determines whether the domain is visible to users.
- [userEnabled](nsfileproviderdomain/userenabled.md): A Boolean value that indicates whether the user has enabled or disabled the domain.
- [disconnected](nsfileproviderdomain/isdisconnected.md): A Boolean value indicating that the domain is present, but disconnected from the file extension.
- [supportsSyncingTrash](nsfileproviderdomain/supportssyncingtrash.md)
- [userInfo](nsfileproviderdomain/userinfo.md)
- [volumeUUID](nsfileproviderdomain/volumeuuid.md)

### Syncing Desktop and Documents folders

- [replicatedKnownFolders](nsfileproviderdomain/replicatedknownfolders.md): A list of known folders that the domain currently replicates.
- [supportedKnownFolders](nsfileproviderdomain/supportedknownfolders.md): A list of known folders that the domain can replicate.
- [NSFileProviderKnownFolders](nsfileproviderknownfolders.md): Constants that identify known folders.

### Supporting search

- [supportsStringSearchRequest](nsfileproviderdomain/supportsstringsearchrequest.md): A Boolean value that indicates whether the provider supports search.

### Testing

- [testingModes](nsfileproviderdomain/testingmodes-swift.property.md): A mode that gives the File Provider extension more control over the system’s behavior during testing.
- [NSFileProviderDomainTestingModes](nsfileproviderdomain/testingmodes-swift.struct.md): Modes that modify the system’s behavior while testing.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)
