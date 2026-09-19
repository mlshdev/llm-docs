> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1523507-vfs_maxsymlen

# vfs_maxsymlen

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+

Get the maximum length of a symbolic link on a filesystem.

## Declaration

```objectivec
uint32_t vfs_maxsymlen(mount_t mp);
```

## Parameters

- `mp`: Mount from which to get symlink length cap.

<a id="return_value"></a>

## Return Value

Max symlink length.
