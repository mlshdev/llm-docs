> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1523316-vfs_setmaxsymlen](https://developer.apple.com/documentation/kernel/1523316-vfs_setmaxsymlen)

# vfs_setmaxsymlen

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+

Set the maximum length of a symbolic link on a filesystem.

## Declaration

```objectivec
void vfs_setmaxsymlen(mount_t mp, uint32_t symlen);
```

## Parameters

- `mp`: Mount on which to set symlink length cap.
- `symlen`: Length to set.

<a id="return_value"></a>

## Return Value

Max symlink length.
