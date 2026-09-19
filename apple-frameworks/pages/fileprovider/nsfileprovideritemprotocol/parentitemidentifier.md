> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/fileprovider/nsfileprovideritemprotocol/parentitemidentifier

# parentItemIdentifier (Swift)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 11.0+ · visionOS 1.0+

The persistent identifier of the item’s parent folder.

## Declaration

```swift
var parentItemIdentifier: NSFileProviderItemIdentifier { get }
```

## Mentioned In

- [Synchronizing the File Provider Extension](../synchronizing-the-file-provider-extension.md)

## See Also

### Specifying Content Location

- [isTrashed](istrashed.md): A Boolean value that indicates whether an item is in the trash.
- [symlinkTargetPath](symlinktargetpath.md): The target of the symlink.

# parentItemIdentifier (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · macOS 11.0+ · visionOS 1.0+

The persistent identifier of the item’s parent folder.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSFileProviderItemIdentifier parentItemIdentifier;
```

## Mentioned In

- [Synchronizing the File Provider Extension](../synchronizing-the-file-provider-extension.md)

## See Also

### Specifying Content Location

- [trashed](istrashed.md): A Boolean value that indicates whether an item is in the trash.
- [symlinkTargetPath](symlinktargetpath.md): The target of the symlink.
