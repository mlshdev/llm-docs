> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1523465-vfs_getvfs

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
