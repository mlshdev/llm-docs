> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsitem/attributes/linkcount](https://developer.apple.com/documentation/fskit/fsitem/attributes/linkcount)

# linkCount (Swift)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

The number of hard links to the item.

## Declaration

```swift
var linkCount: UInt32 { get set }
```

## See Also

### Working with metadata attributes

- [type](type.md): The item type, such as a regular file, directory, or symbolic link.
- [mode](mode.md): The mode of the item.
- [uid](uid.md): The user identifier.
- [gid](gid.md): The group identifier.
- [flags](flags.md): The item’s behavior flags.
- [size](size.md): The item’s size.
- [allocSize](allocsize.md): The item’s allocated size.
- [supportsLimitedXAttrs](supportslimitedxattrs.md): A Boolean value that indicates whether the item supports a limited set of extended attributes.
- [inhibitKernelOffloadedIO](inhibitkerneloffloadedio.md): A Boolean value that indicates whether the file system overrides the per-volume settings for kernel offloaded I/O for a specific file.

# linkCount (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

The number of hard links to the item.

## Declaration

```objectivec
@property (nonatomic) uint32_t linkCount;
```

## See Also

### Working with metadata attributes

- [type](type.md): The item type, such as a regular file, directory, or symbolic link.
- [mode](mode.md): The mode of the item.
- [uid](uid.md): The user identifier.
- [gid](gid.md): The group identifier.
- [flags](flags.md): The item’s behavior flags.
- [size](size.md): The item’s size.
- [allocSize](allocsize.md): The item’s allocated size.
- [supportsLimitedXAttrs](supportslimitedxattrs.md): A Boolean value that indicates whether the item supports a limited set of extended attributes.
- [inhibitKernelOffloadedIO](inhibitkerneloffloadedio.md): A Boolean value that indicates whether the file system overrides the per-volume settings for kernel offloaded I/O for a specific file.
