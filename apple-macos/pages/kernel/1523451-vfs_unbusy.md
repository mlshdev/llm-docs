> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1523451-vfs_unbusy](https://developer.apple.com/documentation/kernel/1523451-vfs_unbusy)

# vfs_unbusy

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+

"Unbusy" a mountpoint by releasing its read-write lock.

## Declaration

```objectivec
void vfs_unbusy(mount_t mp);
```

## Parameters

- `mp`: Mount to unbusy.

<a id="return_value"></a>

## Return Value

void.

<a id="discussion"></a>

## Discussion

A successful vfs_busy() must be followed by a vfs_unbusy() to release the lock on the mount.
