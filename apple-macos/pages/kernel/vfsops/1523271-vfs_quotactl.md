> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/vfsops/1523271-vfs_quotactl

# vfs_quotactl

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

## Declaration

```objectivec
int (*vfs_quotactl)(struct mount *mp, int cmds, uid_t uid, caddr_t arg, vfs_context_t context);
```
