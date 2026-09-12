> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1523486-vfs_iswriteupgrade](https://developer.apple.com/documentation/kernel/1523486-vfs_iswriteupgrade)

# vfs_iswriteupgrade

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+

Determine if a filesystem is mounted read-only but a request has been made to upgrade to read-write.

## Declaration

```objectivec
int vfs_iswriteupgrade(mount_t mp);
```

## Parameters

- `mp`: Mount to test.

<a id="return_value"></a>

## Return Value

Nonzero if a request has been made to update from read-only to read-write, else 0.
