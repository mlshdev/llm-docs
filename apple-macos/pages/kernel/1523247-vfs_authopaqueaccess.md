> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1523247-vfs_authopaqueaccess](https://developer.apple.com/documentation/kernel/1523247-vfs_authopaqueaccess)

# vfs_authopaqueaccess

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+

Check if a filesystem is marked as having reliable remote VNOP_ACCESS support.

## Declaration

```objectivec
int vfs_authopaqueaccess(mount_t mp);
```

## Parameters

- `mp`: Mount to test.

<a id="return_value"></a>

## Return Value

Nonzero if VNOP_ACCESS is supported remotely, else 0.
