> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileproviderdomain/volumeuuid](https://developer.apple.com/documentation/fileprovider/nsfileproviderdomain/volumeuuid)

# volumeUUID (Swift)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

## Declaration

```swift
var volumeUUID: UUID? { get }
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
- [supportsSyncingTrash](supportssyncingtrash.md)
- [userInfo](userinfo.md)

# volumeUUID (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSUUID * volumeUUID;
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
- [supportsSyncingTrash](supportssyncingtrash.md)
- [userInfo](userinfo.md)
