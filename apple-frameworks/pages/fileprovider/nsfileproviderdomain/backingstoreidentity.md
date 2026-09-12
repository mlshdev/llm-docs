> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileproviderdomain/backingstoreidentity](https://developer.apple.com/documentation/fileprovider/nsfileproviderdomain/backingstoreidentity)

# backingStoreIdentity (Swift)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 12.0+ · visionOS 1.0+

A unique identifier for the backing store used by the system.

## Declaration

```swift
var backingStoreIdentity: Data? { get }
```

<a id="Discussion"></a>

## Discussion

Changes to this identifier indicate that the system has dropped its backing store and is creating a new one. The system may create a new backing store if the old store becomes corrupted. The file provider extension can also request a new backing store by calling [reimportItems(below:completionHandler:)](../nsfileprovidermanager/reimportitems%28below_completionhandler_%29.md).

While rebuilding the backing store, the system invalidates any extension instances associated with the domain. As a result, the system guarantees that the [backingStoreIdentity](backingstoreidentity.md) remains stable throughout the lifetime of an [NSFileProviderReplicatedExtension](../nsfileproviderreplicatedextension.md) instance.

> **Note**

>  This property is only available on file provider extensions based on the [NSFileProviderReplicatedExtension](../nsfileproviderreplicatedextension.md) protocol.

## See Also

### Accessing data

- [displayName](displayname.md): The name of the domain displayed in the user interface.
- [identifier](identifier.md): The domain’s unique identifier.
- [isReplicated](isreplicated.md)
- [pathRelativeToDocumentStorage](pathrelativetodocumentstorage.md): The path of the domain’s subdirectory relative to the file provider’s shared container.
- [isHidden](ishidden.md): A Boolean value that determines whether the domain is visible to users.
- [userEnabled](userenabled.md): A Boolean value that indicates whether the user has enabled or disabled the domain.
- [isDisconnected](isdisconnected.md): A Boolean value indicating that the domain is present, but disconnected from the file extension.
- [supportsSyncingTrash](supportssyncingtrash.md)
- [userInfo](userinfo.md)
- [volumeUUID](volumeuuid.md)

# backingStoreIdentity (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · macOS 12.0+ · visionOS 1.0+

A unique identifier for the backing store used by the system.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSData * backingStoreIdentity;
```

<a id="Discussion"></a>

## Discussion

Changes to this identifier indicate that the system has dropped its backing store and is creating a new one. The system may create a new backing store if the old store becomes corrupted. The file provider extension can also request a new backing store by calling [reimportItemsBelowItemWithIdentifier:completionHandler:](../nsfileprovidermanager/reimportitems%28below_completionhandler_%29.md).

While rebuilding the backing store, the system invalidates any extension instances associated with the domain. As a result, the system guarantees that the [backingStoreIdentity](backingstoreidentity.md) remains stable throughout the lifetime of an [NSFileProviderReplicatedExtension](../nsfileproviderreplicatedextension.md) instance.

> **Note**

>  This property is only available on file provider extensions based on the [NSFileProviderReplicatedExtension](../nsfileproviderreplicatedextension.md) protocol.

## See Also

### Accessing data

- [displayName](displayname.md): The name of the domain displayed in the user interface.
- [identifier](identifier.md): The domain’s unique identifier.
- [replicated](isreplicated.md)
- [pathRelativeToDocumentStorage](pathrelativetodocumentstorage.md): The path of the domain’s subdirectory relative to the file provider’s shared container.
- [hidden](ishidden.md): A Boolean value that determines whether the domain is visible to users.
- [userEnabled](userenabled.md): A Boolean value that indicates whether the user has enabled or disabled the domain.
- [disconnected](isdisconnected.md): A Boolean value indicating that the domain is present, but disconnected from the file extension.
- [supportsSyncingTrash](supportssyncingtrash.md)
- [userInfo](userinfo.md)
- [volumeUUID](volumeuuid.md)
