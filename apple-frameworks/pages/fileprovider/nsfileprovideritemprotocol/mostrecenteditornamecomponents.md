> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovideritemprotocol/mostrecenteditornamecomponents](https://developer.apple.com/documentation/fileprovider/nsfileprovideritemprotocol/mostrecenteditornamecomponents)

# mostRecentEditorNameComponents (Swift)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 11.0+ · visionOS 1.0+

The most recent editor’s name.

## Declaration

```swift
optional var mostRecentEditorNameComponents: PersonNameComponents? { get }
```

## See Also

### Sharing

- [isShared](isshared.md): A Boolean value that indicates whether the item is shared with other users.
- [isSharedByCurrentUser](issharedbycurrentuser.md): A Boolean value that indicates whether the item was shared by the current user.
- [ownerNameComponents](ownernamecomponents.md): The name of the item’s owner.

# mostRecentEditorNameComponents (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · macOS 11.0+ · visionOS 1.0+

The most recent editor’s name.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) NSPersonNameComponents * mostRecentEditorNameComponents;
```

## See Also

### Sharing

- [shared](isshared.md): A Boolean value that indicates whether the item is shared with other users.
- [sharedByCurrentUser](issharedbycurrentuser.md): A Boolean value that indicates whether the item was shared by the current user.
- [ownerNameComponents](ownernamecomponents.md): The name of the item’s owner.
