> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/vfsops/1523539-vfs_sysctl

# vfs_sysctl

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

## Declaration

```objectivec
int (*vfs_sysctl)(int *, u_int, user_addr_t, size_t *, user_addr_t, size_t, vfs_context_t context);
```
