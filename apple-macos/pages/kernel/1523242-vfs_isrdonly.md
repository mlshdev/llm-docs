> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1523242-vfs_isrdonly](https://developer.apple.com/documentation/kernel/1523242-vfs_isrdonly)

# vfs_isrdonly

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+

Determine if a filesystem is mounted read-only.

## Declaration

```objectivec
int vfs_isrdonly(mount_t mp);
```

## Parameters

- `mp`: Mount to test.

<a id="return_value"></a>

## Return Value

Nonzero if filesystem is mounted read-only, else 0.
