> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1523536-vfs_isupdate](https://developer.apple.com/documentation/kernel/1523536-vfs_isupdate)

# vfs_isupdate

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+

Determine if a mount update is in progress.

## Declaration

```objectivec
int vfs_isupdate(mount_t mp);
```

## Parameters

- `mp`: Mount to test.

<a id="return_value"></a>

## Return Value

Nonzero if a mount update is in progress, 0 otherwise.
