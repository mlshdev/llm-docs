> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1523197-vfs_mountedon

# vfs_mountedon

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+

Check whether a given block device has a filesystem mounted on it.

## Declaration

```objectivec
int vfs_mountedon(struct vnode *vp);
```

## Parameters

- `vp`: The vnode to test.

<a id="return_value"></a>

## Return Value

EBUSY if vnode is indeed the source of a filesystem; 0 if it is not.

<a id="discussion"></a>

## Discussion

Note that this is NOT a check for a covered vnode (the directory upon which a filesystem is mounted)--it is a test for whether a block device is being used as the source of a filesystem. Note that a block device marked as being mounted on cannot be opened.
