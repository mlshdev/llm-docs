> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsitem/attributes/type](https://developer.apple.com/documentation/fskit/fsitem/attributes/type)

# type (Swift)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

The item type, such as a regular file, directory, or symbolic link.

## Declaration

```swift
var type: FSItem.ItemType { get set }
```

## See Also

### Working with metadata attributes

- [mode](mode.md): The mode of the item.
- [linkCount](linkcount.md): The number of hard links to the item.
- [uid](uid.md): The user identifier.
- [gid](gid.md): The group identifier.
- [flags](flags.md): The item’s behavior flags.
- [size](size.md): The item’s size.
- [allocSize](allocsize.md): The item’s allocated size.
- [supportsLimitedXAttrs](supportslimitedxattrs.md): A Boolean value that indicates whether the item supports a limited set of extended attributes.
- [inhibitKernelOffloadedIO](inhibitkerneloffloadedio.md): A Boolean value that indicates whether the file system overrides the per-volume settings for kernel offloaded I/O for a specific file.

# type (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

The item type, such as a regular file, directory, or symbolic link.

## Declaration

```objectivec
@property (nonatomic) FSItemType type;
```

## See Also

### Working with metadata attributes

- [mode](mode.md): The mode of the item.
- [linkCount](linkcount.md): The number of hard links to the item.
- [uid](uid.md): The user identifier.
- [gid](gid.md): The group identifier.
- [flags](flags.md): The item’s behavior flags.
- [size](size.md): The item’s size.
- [allocSize](allocsize.md): The item’s allocated size.
- [supportsLimitedXAttrs](supportslimitedxattrs.md): A Boolean value that indicates whether the item supports a limited set of extended attributes.
- [inhibitKernelOffloadedIO](inhibitkerneloffloadedio.md): A Boolean value that indicates whether the file system overrides the per-volume settings for kernel offloaded I/O for a specific file.
