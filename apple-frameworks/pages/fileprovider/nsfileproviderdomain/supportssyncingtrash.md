> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileproviderdomain/supportssyncingtrash](https://developer.apple.com/documentation/fileprovider/nsfileproviderdomain/supportssyncingtrash)

# supportsSyncingTrash (Swift)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 13.0+ · visionOS 2.0+

## Declaration

```swift
var supportsSyncingTrash: Bool { get set }
```

## See Also

### Accessing data

- [displayName](displayname.md): The name of the domain displayed in the user interface.
- [identifier](identifier.md): The domain’s unique identifier.
- [isReplicated](isreplicated.md)
- [backingStoreIdentity](backingstoreidentity.md): A unique identifier for the backing store used by the system.
- [pathRelativeToDocumentStorage](pathrelativetodocumentstorage.md): The path of the domain’s subdirectory relative to the file provider’s shared container.
- [isHidden](ishidden.md): A Boolean value that determines whether the domain is visible to users.
- [userEnabled](userenabled.md): A Boolean value that indicates whether the user has enabled or disabled the domain.
- [isDisconnected](isdisconnected.md): A Boolean value indicating that the domain is present, but disconnected from the file extension.
- [userInfo](userinfo.md)
- [volumeUUID](volumeuuid.md)

# supportsSyncingTrash (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · macOS 13.0+ · visionOS 2.0+

## Declaration

```objectivec
@property (assign, readwrite) BOOL supportsSyncingTrash;
```

## See Also

### Accessing data

- [displayName](displayname.md): The name of the domain displayed in the user interface.
- [identifier](identifier.md): The domain’s unique identifier.
- [replicated](isreplicated.md)
- [backingStoreIdentity](backingstoreidentity.md): A unique identifier for the backing store used by the system.
- [pathRelativeToDocumentStorage](pathrelativetodocumentstorage.md): The path of the domain’s subdirectory relative to the file provider’s shared container.
- [hidden](ishidden.md): A Boolean value that determines whether the domain is visible to users.
- [userEnabled](userenabled.md): A Boolean value that indicates whether the user has enabled or disabled the domain.
- [disconnected](isdisconnected.md): A Boolean value indicating that the domain is present, but disconnected from the file extension.
- [userInfo](userinfo.md)
- [volumeUUID](volumeuuid.md)
