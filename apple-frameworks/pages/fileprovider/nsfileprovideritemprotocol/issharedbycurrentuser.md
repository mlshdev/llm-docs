> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovideritemprotocol/issharedbycurrentuser](https://developer.apple.com/documentation/fileprovider/nsfileprovideritemprotocol/issharedbycurrentuser)

# isSharedByCurrentUser (Swift)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 11.0+ · visionOS 1.0+

A Boolean value that indicates whether the item was shared by the current user.

## Declaration

```swift
optional var isSharedByCurrentUser: Bool { get }
```

## See Also

### Sharing

- [isShared](isshared.md): A Boolean value that indicates whether the item is shared with other users.
- [mostRecentEditorNameComponents](mostrecenteditornamecomponents.md): The most recent editor’s name.
- [ownerNameComponents](ownernamecomponents.md): The name of the item’s owner.

# sharedByCurrentUser (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · macOS 11.0+ · visionOS 1.0+

A Boolean value that indicates whether the item was shared by the current user.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isSharedByCurrentUser) BOOL sharedByCurrentUser;
```

## See Also

### Sharing

- [shared](isshared.md): A Boolean value that indicates whether the item is shared with other users.
- [mostRecentEditorNameComponents](mostrecenteditornamecomponents.md): The most recent editor’s name.
- [ownerNameComponents](ownernamecomponents.md): The name of the item’s owner.
