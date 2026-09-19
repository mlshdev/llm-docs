> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/fskit/fsitem/attributes/supportslimitedxattrs

# supportsLimitedXAttrs (Swift)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

A Boolean value that indicates whether the item supports a limited set of extended attributes.

## Declaration

```swift
var supportsLimitedXAttrs: Bool { get set }
```

## See Also

### Working with metadata attributes

- [type](type.md): The item type, such as a regular file, directory, or symbolic link.
- [mode](mode.md): The mode of the item.
- [linkCount](linkcount.md): The number of hard links to the item.
- [uid](uid.md): The user identifier.
- [gid](gid.md): The group identifier.
- [flags](flags.md): The item’s behavior flags.
- [size](size.md): The item’s size.
- [allocSize](allocsize.md): The item’s allocated size.
- [inhibitKernelOffloadedIO](inhibitkerneloffloadedio.md): A Boolean value that indicates whether the file system overrides the per-volume settings for kernel offloaded I/O for a specific file. FSKit reads this value the first time the module reports attributes for a given file; It then sets the file’s kernel-offloaded-I/O routing accordingly. The routing stays in effect for the item’s lifetime; later changes are ignored.

# supportsLimitedXAttrs (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

A Boolean value that indicates whether the item supports a limited set of extended attributes.

## Declaration

```objectivec
@property (nonatomic) BOOL supportsLimitedXAttrs;
```

## See Also

### Working with metadata attributes

- [type](type.md): The item type, such as a regular file, directory, or symbolic link.
- [mode](mode.md): The mode of the item.
- [linkCount](linkcount.md): The number of hard links to the item.
- [uid](uid.md): The user identifier.
- [gid](gid.md): The group identifier.
- [flags](flags.md): The item’s behavior flags.
- [size](size.md): The item’s size.
- [allocSize](allocsize.md): The item’s allocated size.
- [inhibitKernelOffloadedIO](inhibitkerneloffloadedio.md): A Boolean value that indicates whether the file system overrides the per-volume settings for kernel offloaded I/O for a specific file. FSKit reads this value the first time the module reports attributes for a given file; It then sets the file’s kernel-offloaded-I/O routing accordingly. The routing stays in effect for the item’s lifetime; later changes are ignored.
