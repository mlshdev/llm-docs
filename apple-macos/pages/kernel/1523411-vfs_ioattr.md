> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1523411-vfs_ioattr](https://developer.apple.com/documentation/kernel/1523411-vfs_ioattr)

# vfs_ioattr

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+

Get I/O attributes associated with a mounpoint.

## Declaration

```objectivec
void vfs_ioattr(mount_t mp, struct vfsioattr *ioattrp);
```

## Parameters

- `mp`: Mount for which to get attributes. If NULL, system defaults are filled into ioattrp.
- `ioattrp`: Destination for results.

<a id="return_value"></a>

## Return Value

void.
