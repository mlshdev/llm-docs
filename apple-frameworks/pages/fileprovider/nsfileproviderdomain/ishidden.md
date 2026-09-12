> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileproviderdomain/ishidden](https://developer.apple.com/documentation/fileprovider/nsfileproviderdomain/ishidden)

# isHidden (Swift)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

A Boolean value that determines whether the domain is visible to users.

## Declaration

```swift
var isHidden: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The system stores the files on disk, but it doesn’t display them to the user. For example, you could set this value to [false](https://developer.apple.com/documentation/swift/false) when performing a dry run of a migration.

## See Also

### Accessing data

- [displayName](displayname.md): The name of the domain displayed in the user interface.
- [identifier](identifier.md): The domain’s unique identifier.
- [isReplicated](isreplicated.md)
- [backingStoreIdentity](backingstoreidentity.md): A unique identifier for the backing store used by the system.
- [pathRelativeToDocumentStorage](pathrelativetodocumentstorage.md): The path of the domain’s subdirectory relative to the file provider’s shared container.
- [userEnabled](userenabled.md): A Boolean value that indicates whether the user has enabled or disabled the domain.
- [isDisconnected](isdisconnected.md): A Boolean value indicating that the domain is present, but disconnected from the file extension.
- [supportsSyncingTrash](supportssyncingtrash.md)
- [userInfo](userinfo.md)
- [volumeUUID](volumeuuid.md)

# hidden (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

A Boolean value that determines whether the domain is visible to users.

## Declaration

```objectivec
@property (assign, readwrite, getter=isHidden) BOOL hidden;
```

<a id="Discussion"></a>

## Discussion

The system stores the files on disk, but it doesn’t display them to the user. For example, you could set this value to [false](https://developer.apple.com/documentation/swift/false) when performing a dry run of a migration.

## See Also

### Accessing data

- [displayName](displayname.md): The name of the domain displayed in the user interface.
- [identifier](identifier.md): The domain’s unique identifier.
- [replicated](isreplicated.md)
- [backingStoreIdentity](backingstoreidentity.md): A unique identifier for the backing store used by the system.
- [pathRelativeToDocumentStorage](pathrelativetodocumentstorage.md): The path of the domain’s subdirectory relative to the file provider’s shared container.
- [userEnabled](userenabled.md): A Boolean value that indicates whether the user has enabled or disabled the domain.
- [disconnected](isdisconnected.md): A Boolean value indicating that the domain is present, but disconnected from the file extension.
- [supportsSyncingTrash](supportssyncingtrash.md)
- [userInfo](userinfo.md)
- [volumeUUID](volumeuuid.md)
