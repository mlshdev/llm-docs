> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/3736299-vfs_set_thread_fs_private

# vfs_set_thread_fs_private

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 11.3+

## Declaration

```objectivec
int vfs_set_thread_fs_private(uint8_t tag, uint64_t fs_private);
```
