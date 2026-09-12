> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileproviderdomain/pathrelativetodocumentstorage](https://developer.apple.com/documentation/fileprovider/nsfileproviderdomain/pathrelativetodocumentstorage)

# pathRelativeToDocumentStorage (Swift)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · visionOS 1.0+

The path of the domain’s subdirectory relative to the file provider’s shared container.

## Declaration

```swift
var pathRelativeToDocumentStorage: String { get }
```

## See Also

### Accessing data

- [displayName](displayname.md): The name of the domain displayed in the user interface.
- [identifier](identifier.md): The domain’s unique identifier.
- [isReplicated](isreplicated.md)
- [backingStoreIdentity](backingstoreidentity.md): A unique identifier for the backing store used by the system.
- [isHidden](ishidden.md): A Boolean value that determines whether the domain is visible to users.
- [userEnabled](userenabled.md): A Boolean value that indicates whether the user has enabled or disabled the domain.
- [isDisconnected](isdisconnected.md): A Boolean value indicating that the domain is present, but disconnected from the file extension.
- [supportsSyncingTrash](supportssyncingtrash.md)
- [userInfo](userinfo.md)
- [volumeUUID](volumeuuid.md)

# pathRelativeToDocumentStorage (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · visionOS 1.0+

The path of the domain’s subdirectory relative to the file provider’s shared container.

## Declaration

```objectivec
@property (copy, readonly) NSString * pathRelativeToDocumentStorage;
```

## See Also

### Accessing data

- [displayName](displayname.md): The name of the domain displayed in the user interface.
- [identifier](identifier.md): The domain’s unique identifier.
- [replicated](isreplicated.md)
- [backingStoreIdentity](backingstoreidentity.md): A unique identifier for the backing store used by the system.
- [hidden](ishidden.md): A Boolean value that determines whether the domain is visible to users.
- [userEnabled](userenabled.md): A Boolean value that indicates whether the user has enabled or disabled the domain.
- [disconnected](isdisconnected.md): A Boolean value indicating that the domain is present, but disconnected from the file extension.
- [supportsSyncingTrash](supportssyncingtrash.md)
- [userInfo](userinfo.md)
- [volumeUUID](volumeuuid.md)
