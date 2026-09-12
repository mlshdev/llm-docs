> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1523525-vfs_isforce](https://developer.apple.com/documentation/kernel/1523525-vfs_isforce)

# vfs_isforce

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+

Determine if a forced unmount is in progress.

## Declaration

```objectivec
int vfs_isforce(mount_t mp);
```

## Parameters

- `mp`: Mount to test.

<a id="return_value"></a>

## Return Value

Nonzero if a request has been made to forcibly unmount, else 0.

<a id="discussion"></a>

## Discussion

A forced unmount invalidates open files.
