> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsitem/attributes/inhibitkerneloffloadedio](https://developer.apple.com/documentation/fskit/fsitem/attributes/inhibitkerneloffloadedio)

# inhibitKernelOffloadedIO (Swift)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

A Boolean value that indicates whether the file system overrides the per-volume settings for kernel offloaded I/O for a specific file.

## Declaration

```swift
var inhibitKernelOffloadedIO: Bool { get set }
```

<a id="discussion"></a>

## Discussion

This property has no meaning if the volume doesn’t conform to [FSVolumeKernelOffloadedIOOperations](../../fsvolumekerneloffloadediooperations.md).

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
- [supportsLimitedXAttrs](supportslimitedxattrs.md): A Boolean value that indicates whether the item supports a limited set of extended attributes.

# inhibitKernelOffloadedIO (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

A Boolean value that indicates whether the file system overrides the per-volume settings for kernel offloaded I/O for a specific file.

## Declaration

```objectivec
@property (nonatomic) BOOL inhibitKernelOffloadedIO;
```

<a id="discussion"></a>

## Discussion

This property has no meaning if the volume doesn’t conform to [FSVolumeKernelOffloadedIOOperations](../../fsvolumekerneloffloadediooperations.md).

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
- [supportsLimitedXAttrs](supportslimitedxattrs.md): A Boolean value that indicates whether the item supports a limited set of extended attributes.
