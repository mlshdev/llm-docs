> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1523454-vfs_isrdwr](https://developer.apple.com/documentation/kernel/1523454-vfs_isrdwr)

# vfs_isrdwr

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+

Determine if a filesystem is mounted with writes enabled.

## Declaration

```objectivec
int vfs_isrdwr(mount_t mp);
```

## Parameters

- `mp`: Mount to test.

<a id="return_value"></a>

## Return Value

Nonzero if filesystem is mounted read-write, else 0.
