> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1523465-vfs_getvfs](https://developer.apple.com/documentation/kernel/1523465-vfs_getvfs)

# vfs_getvfs

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+

Given a filesystem ID, look up a mount structure.

## Declaration

```objectivec
mount_t vfs_getvfs(fsid_t *fsid);
```

## Parameters

- `fsid`: Filesystem ID to look up.

<a id="return_value"></a>

## Return Value

Mountpoint if found, else NULL. Note unmounting mountpoints can be returned.
