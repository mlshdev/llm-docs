> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1523503-vfs_unmountbyfsid](https://developer.apple.com/documentation/kernel/1523503-vfs_unmountbyfsid)

# vfs_unmountbyfsid

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.5+

Find a filesystem by ID and unmount it.

## Declaration

```objectivec
int vfs_unmountbyfsid(fsid_t *fsid, int flags, vfs_context_t ctx);
```

## Parameters

- `fsid`: ID of filesystem to unmount, as found through (for example) statfs.
- `flags`: MNT_FORCE: forcibly invalidate files open on the mount (though in-flight I/O operations will be allowed to complete).
- `ctx`: Context against which to authenticate unmount operation.

<a id="return_value"></a>

## Return Value

0 for succcess, nonero for failure.
