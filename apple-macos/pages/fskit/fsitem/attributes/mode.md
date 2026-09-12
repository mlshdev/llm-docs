> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsitem/attributes/mode](https://developer.apple.com/documentation/fskit/fsitem/attributes/mode)

# mode (Swift)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

The mode of the item.

## Declaration

```swift
var mode: UInt32 { get set }
```

<a id="discussion"></a>

## Discussion

The mode is often used for `setuid`, `setgid`, and `sticky` bits.

## See Also

### Working with metadata attributes

- [type](type.md): The item type, such as a regular file, directory, or symbolic link.
- [linkCount](linkcount.md): The number of hard links to the item.
- [uid](uid.md): The user identifier.
- [gid](gid.md): The group identifier.
- [flags](flags.md): The item’s behavior flags.
- [size](size.md): The item’s size.
- [allocSize](allocsize.md): The item’s allocated size.
- [supportsLimitedXAttrs](supportslimitedxattrs.md): A Boolean value that indicates whether the item supports a limited set of extended attributes.
- [inhibitKernelOffloadedIO](inhibitkerneloffloadedio.md): A Boolean value that indicates whether the file system overrides the per-volume settings for kernel offloaded I/O for a specific file.

# mode (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

The mode of the item.

## Declaration

```objectivec
@property (nonatomic) uint32_t mode;
```

<a id="discussion"></a>

## Discussion

The mode is often used for `setuid`, `setgid`, and `sticky` bits.

## See Also

### Working with metadata attributes

- [type](type.md): The item type, such as a regular file, directory, or symbolic link.
- [linkCount](linkcount.md): The number of hard links to the item.
- [uid](uid.md): The user identifier.
- [gid](gid.md): The group identifier.
- [flags](flags.md): The item’s behavior flags.
- [size](size.md): The item’s size.
- [allocSize](allocsize.md): The item’s allocated size.
- [supportsLimitedXAttrs](supportslimitedxattrs.md): A Boolean value that indicates whether the item supports a limited set of extended attributes.
- [inhibitKernelOffloadedIO](inhibitkerneloffloadedio.md): A Boolean value that indicates whether the file system overrides the per-volume settings for kernel offloaded I/O for a specific file.
