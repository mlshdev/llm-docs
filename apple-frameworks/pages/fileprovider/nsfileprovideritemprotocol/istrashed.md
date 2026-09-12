> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovideritemprotocol/istrashed](https://developer.apple.com/documentation/fileprovider/nsfileprovideritemprotocol/istrashed)

# isTrashed (Swift)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · visionOS 1.0+

A Boolean value that indicates whether an item is in the trash.

## Declaration

```swift
optional var isTrashed: Bool { get }
```

## See Also

### Specifying Content Location

- [parentItemIdentifier](parentitemidentifier.md): The persistent identifier of the item’s parent folder.
- [symlinkTargetPath](symlinktargetpath.md): The target of the symlink.

# trashed (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · visionOS 1.0+

A Boolean value that indicates whether an item is in the trash.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isTrashed) BOOL trashed;
```

## See Also

### Specifying Content Location

- [parentItemIdentifier](parentitemidentifier.md): The persistent identifier of the item’s parent folder.
- [symlinkTargetPath](symlinktargetpath.md): The target of the symlink.
