> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileproviderdomain/isdisconnected](https://developer.apple.com/documentation/fileprovider/nsfileproviderdomain/isdisconnected)

# isDisconnected (Swift)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

A Boolean value indicating that the domain is present, but disconnected from the file extension.

## Declaration

```swift
var isDisconnected: Bool { get }
```

<a id="Discussion"></a>

## Discussion

Users can continue to browse the content from a disconnected domain; however, the File Provider extension no longer sends or receives updates about modifications to the files.

To change the disconnected state, create a new [NSFileProviderDomain](../nsfileproviderdomain.md) using the same identifier, and pass it to [add(\_:completionHandler:)](../nsfileprovidermanager/add%28__completionhandler_%29.md).

## See Also

### Accessing data

- [displayName](displayname.md): The name of the domain displayed in the user interface.
- [identifier](identifier.md): The domain’s unique identifier.
- [isReplicated](isreplicated.md)
- [backingStoreIdentity](backingstoreidentity.md): A unique identifier for the backing store used by the system.
- [pathRelativeToDocumentStorage](pathrelativetodocumentstorage.md): The path of the domain’s subdirectory relative to the file provider’s shared container.
- [isHidden](ishidden.md): A Boolean value that determines whether the domain is visible to users.
- [userEnabled](userenabled.md): A Boolean value that indicates whether the user has enabled or disabled the domain.
- [supportsSyncingTrash](supportssyncingtrash.md)
- [userInfo](userinfo.md)
- [volumeUUID](volumeuuid.md)

# disconnected (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

A Boolean value indicating that the domain is present, but disconnected from the file extension.

## Declaration

```objectivec
@property (readonly, getter=isDisconnected) BOOL disconnected;
```

<a id="Discussion"></a>

## Discussion

Users can continue to browse the content from a disconnected domain; however, the File Provider extension no longer sends or receives updates about modifications to the files.

To change the disconnected state, create a new [NSFileProviderDomain](../nsfileproviderdomain.md) using the same identifier, and pass it to [addDomain:completionHandler:](../nsfileprovidermanager/add%28__completionhandler_%29.md).

## See Also

### Accessing data

- [displayName](displayname.md): The name of the domain displayed in the user interface.
- [identifier](identifier.md): The domain’s unique identifier.
- [replicated](isreplicated.md)
- [backingStoreIdentity](backingstoreidentity.md): A unique identifier for the backing store used by the system.
- [pathRelativeToDocumentStorage](pathrelativetodocumentstorage.md): The path of the domain’s subdirectory relative to the file provider’s shared container.
- [hidden](ishidden.md): A Boolean value that determines whether the domain is visible to users.
- [userEnabled](userenabled.md): A Boolean value that indicates whether the user has enabled or disabled the domain.
- [supportsSyncingTrash](supportssyncingtrash.md)
- [userInfo](userinfo.md)
- [volumeUUID](volumeuuid.md)
