> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1523458-vfs_setioattr](https://developer.apple.com/documentation/kernel/1523458-vfs_setioattr)

# vfs_setioattr

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+

Set I/O attributes associated with a mounpoint.

## Declaration

```objectivec
void vfs_setioattr(mount_t mp, struct vfsioattr *ioattrp);
```

## Parameters

- `mp`: Mount for which to set attributes.
- `ioattrp`: Structure containing I/O parameters; all fields must be filled in.

<a id="return_value"></a>

## Return Value

void.
