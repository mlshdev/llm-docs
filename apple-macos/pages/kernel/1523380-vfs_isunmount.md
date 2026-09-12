> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1523380-vfs_isunmount](https://developer.apple.com/documentation/kernel/1523380-vfs_isunmount)

# vfs_isunmount

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.6+

Determine if an unmount is in progress.

## Declaration

```objectivec
int vfs_isunmount(mount_t mp);
```

## Parameters

- `mp`: Mount to test.

<a id="return_value"></a>

## Return Value

Nonzero if an unmount is in progress, else zero.

<a id="discussion"></a>

## Discussion

This is an unsynchronized snapshot of the mount state. It should only be called if the mount is known to be valid, e.g. there are known to be live files on that volume.
