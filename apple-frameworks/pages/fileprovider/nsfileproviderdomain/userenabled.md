> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileproviderdomain/userenabled](https://developer.apple.com/documentation/fileprovider/nsfileproviderdomain/userenabled)

# userEnabled (Swift)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 11.0+ · visionOS 1.0+

A Boolean value that indicates whether the user has enabled or disabled the domain.

## Declaration

```swift
var userEnabled: Bool { get }
```

<a id="Discussion"></a>

## Discussion

By default, the property is [true](https://developer.apple.com/documentation/swift/true); however, If the user disables the domain in the System Preferences, the property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Accessing data

- [displayName](displayname.md): The name of the domain displayed in the user interface.
- [identifier](identifier.md): The domain’s unique identifier.
- [isReplicated](isreplicated.md)
- [backingStoreIdentity](backingstoreidentity.md): A unique identifier for the backing store used by the system.
- [pathRelativeToDocumentStorage](pathrelativetodocumentstorage.md): The path of the domain’s subdirectory relative to the file provider’s shared container.
- [isHidden](ishidden.md): A Boolean value that determines whether the domain is visible to users.
- [isDisconnected](isdisconnected.md): A Boolean value indicating that the domain is present, but disconnected from the file extension.
- [supportsSyncingTrash](supportssyncingtrash.md)
- [userInfo](userinfo.md)
- [volumeUUID](volumeuuid.md)

# userEnabled (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · macOS 11.0+ · visionOS 1.0+

A Boolean value that indicates whether the user has enabled or disabled the domain.

## Declaration

```objectivec
@property (readonly) BOOL userEnabled;
```

<a id="Discussion"></a>

## Discussion

By default, the property is [true](https://developer.apple.com/documentation/swift/true); however, If the user disables the domain in the System Preferences, the property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Accessing data

- [displayName](displayname.md): The name of the domain displayed in the user interface.
- [identifier](identifier.md): The domain’s unique identifier.
- [replicated](isreplicated.md)
- [backingStoreIdentity](backingstoreidentity.md): A unique identifier for the backing store used by the system.
- [pathRelativeToDocumentStorage](pathrelativetodocumentstorage.md): The path of the domain’s subdirectory relative to the file provider’s shared container.
- [hidden](ishidden.md): A Boolean value that determines whether the domain is visible to users.
- [disconnected](isdisconnected.md): A Boolean value indicating that the domain is present, but disconnected from the file extension.
- [supportsSyncingTrash](supportssyncingtrash.md)
- [userInfo](userinfo.md)
- [volumeUUID](volumeuuid.md)
