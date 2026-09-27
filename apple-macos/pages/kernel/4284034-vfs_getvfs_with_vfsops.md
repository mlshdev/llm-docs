> Snapshot-pinned source payload for Apple macOS snapshot-0513df389cc7; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/4284034-vfs_getvfs_with_vfsops

# vfs_getvfs_with_vfsops

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 14.0+

## Declaration

```objectivec
mount_t vfs_getvfs_with_vfsops(fsid_t *fsid, const struct vfsops *ops);
```
