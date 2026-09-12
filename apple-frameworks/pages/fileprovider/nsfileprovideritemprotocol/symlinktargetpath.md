> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovideritemprotocol/symlinktargetpath](https://developer.apple.com/documentation/fileprovider/nsfileprovideritemprotocol/symlinktargetpath)

# symlinkTargetPath (Swift)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 11.0+ · visionOS 1.0+

The target of the symlink.

## Declaration

```swift
optional var symlinkTargetPath: String? { get }
```

<a id="Discussion"></a>

## Discussion

If the extension contains an item with a [typeIdentifier](typeidentifier.md) of `public.symlink` (`kUTTypeSymLink`), this property contains the symlink’s target. Otherwise, it’s `nil`.

## See Also

### Specifying Content Location

- [parentItemIdentifier](parentitemidentifier.md): The persistent identifier of the item’s parent folder.
- [isTrashed](istrashed.md): A Boolean value that indicates whether an item is in the trash.

# symlinkTargetPath (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · macOS 11.0+ · visionOS 1.0+

The target of the symlink.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * symlinkTargetPath;
```

<a id="Discussion"></a>

## Discussion

If the extension contains an item with a [typeIdentifier](typeidentifier.md) of `public.symlink` (`kUTTypeSymLink`), this property contains the symlink’s target. Otherwise, it’s `nil`.

## See Also

### Specifying Content Location

- [parentItemIdentifier](parentitemidentifier.md): The persistent identifier of the item’s parent folder.
- [trashed](istrashed.md): A Boolean value that indicates whether an item is in the trash.
