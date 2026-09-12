> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1523327-vfs_issynchronous](https://developer.apple.com/documentation/kernel/1523327-vfs_issynchronous)

# vfs_issynchronous

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+

Determine if writes to a filesystem occur synchronously.

## Declaration

```objectivec
int vfs_issynchronous(mount_t mp);
```

## Parameters

- `mp`: Mount to test.

<a id="return_value"></a>

## Return Value

Nonzero if writes occur synchronously, else 0.
