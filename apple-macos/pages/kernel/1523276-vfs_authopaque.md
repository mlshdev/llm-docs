> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1523276-vfs_authopaque](https://developer.apple.com/documentation/kernel/1523276-vfs_authopaque)

# vfs_authopaque

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+

Determine if a filesystem's authorization decisions occur remotely.

## Declaration

```objectivec
int vfs_authopaque(mount_t mp);
```

## Parameters

- `mp`: Mount to test.

<a id="return_value"></a>

## Return Value

Nonzero if filesystem authorization is controlled remotely, else 0.
