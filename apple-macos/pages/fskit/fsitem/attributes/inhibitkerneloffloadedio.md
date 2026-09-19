> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/fskit/fsitem/attributes/inhibitkerneloffloadedio

# inhibitKernelOffloadedIO (Swift)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

A Boolean value that indicates whether the file system overrides the per-volume settings for kernel offloaded I/O for a specific file. FSKit reads this value the first time the module reports attributes for a given file; It then sets the file’s kernel-offloaded-I/O routing accordingly. The routing stays in effect for the item’s lifetime; later changes are ignored.

## Declaration

```swift
var inhibitKernelOffloadedIO: Bool { get set }
```

<a id="discussion"></a>

## Discussion

This property has no meaning if the volume doesn’t conform to [FSVolumeKernelOffloadedIOOperations](../../fsvolumekerneloffloadediooperations.md) or [FSVolume.KernelOffloadedIOHandler](../../fsvolume/kerneloffloadediohandler.md).

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

A Boolean value that indicates whether the file system overrides the per-volume settings for kernel offloaded I/O for a specific file. FSKit reads this value the first time the module reports attributes for a given file; It then sets the file’s kernel-offloaded-I/O routing accordingly. The routing stays in effect for the item’s lifetime; later changes are ignored.

## Declaration

```objectivec
@property (nonatomic) BOOL inhibitKernelOffloadedIO;
```

<a id="discussion"></a>

## Discussion

This property has no meaning if the volume doesn’t conform to [FSVolumeKernelOffloadedIOOperations](../../fsvolumekerneloffloadediooperations.md) or [FSVolumeKernelOffloadedIOHandler](../../fsvolume/kerneloffloadediohandler.md).

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
