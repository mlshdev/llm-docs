> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1523098-vfs_statfs](https://developer.apple.com/documentation/kernel/1523098-vfs_statfs)

# vfs_statfs

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+

Get information about filesystem status.

## Declaration

```objectivec
struct vfsstatfs * vfs_statfs(mount_t mp);
```

## Parameters

- `mp`: Mount for which to get vfsstatfs pointer.

<a id="return_value"></a>

## Return Value

Pointer to vfsstatfs.

<a id="discussion"></a>

## Discussion

Each filesystem has a struct vfsstatfs associated with it which is updated as events occur; this function returns a pointer to it. Note that the data in the structure will continue to change over time and also that it may be quite stale of vfs_update_vfsstat has not been called recently.
