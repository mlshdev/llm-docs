> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovideritemprotocol/isshared](https://developer.apple.com/documentation/fileprovider/nsfileprovideritemprotocol/isshared)

# isShared (Swift)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 11.0+ · visionOS 1.0+

A Boolean value that indicates whether the item is shared with other users.

## Declaration

```swift
optional var isShared: Bool { get }
```

## See Also

### Sharing

- [isSharedByCurrentUser](issharedbycurrentuser.md): A Boolean value that indicates whether the item was shared by the current user.
- [mostRecentEditorNameComponents](mostrecenteditornamecomponents.md): The most recent editor’s name.
- [ownerNameComponents](ownernamecomponents.md): The name of the item’s owner.

# shared (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · macOS 11.0+ · visionOS 1.0+

A Boolean value that indicates whether the item is shared with other users.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isShared) BOOL shared;
```

## See Also

### Sharing

- [sharedByCurrentUser](issharedbycurrentuser.md): A Boolean value that indicates whether the item was shared by the current user.
- [mostRecentEditorNameComponents](mostrecenteditornamecomponents.md): The most recent editor’s name.
- [ownerNameComponents](ownernamecomponents.md): The name of the item’s owner.
