> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1523194-vfs_fsremove](https://developer.apple.com/documentation/kernel/1523194-vfs_fsremove)

# vfs_fsremove

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+

Unregister a filesystem with VFS.

## Declaration

```objectivec
int vfs_fsremove(vfstable_t handle);
```

## Parameters

- `handle`: Handle which was returned by vfs_fsadd.

<a id="return_value"></a>

## Return Value

0 for success, else an error code.

<a id="discussion"></a>

## Discussion

Typically called by a filesystem Kernel Extension when it is unloaded.
