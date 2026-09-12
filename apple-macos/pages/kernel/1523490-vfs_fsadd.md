> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1523490-vfs_fsadd](https://developer.apple.com/documentation/kernel/1523490-vfs_fsadd)

# vfs_fsadd

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+

Register a filesystem with VFS.

## Declaration

```objectivec
int vfs_fsadd(struct vfs_fsentry *vfe, vfstable_t *handle);
```

## Parameters

- `vfe`: Filesystem information: table of vfs operations, list of vnode operation tables, filesystem type number (can be omitted with VFS_TBLNOTYPENUM flag), name, flags.
- `handle`: Opaque handle which will be passed to vfs_fsremove.

<a id="return_value"></a>

## Return Value

0 for success, else an error code.

<a id="discussion"></a>

## Discussion

Typically called by a filesystem Kernel Extension when it is loaded.
