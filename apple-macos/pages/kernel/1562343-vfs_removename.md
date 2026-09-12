> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1562343-vfs_removename](https://developer.apple.com/documentation/kernel/1562343-vfs_removename)

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
