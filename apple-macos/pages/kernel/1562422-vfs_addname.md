> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1562422-vfs_addname](https://developer.apple.com/documentation/kernel/1562422-vfs_addname)

# vfs_addname

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+

Deprecated

## Declaration

```objectivec
const char * vfs_addname(const char *name, uint32_t len, uint32_t nc_hash, uint32_t flags);
```

<a id="discussion"></a>

## Discussion

vnode_update_identity() and vnode_create() make vfs_addname() unnecessary for kexts.
