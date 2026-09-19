> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1562343-vfs_removename

# vfs_removename

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+

Deprecated

## Declaration

```objectivec
int vfs_removename(const char *name);
```

<a id="discussion"></a>

## Discussion

vnode_update_identity() and vnode_create() make vfs_addname() unnecessary for kexts.
