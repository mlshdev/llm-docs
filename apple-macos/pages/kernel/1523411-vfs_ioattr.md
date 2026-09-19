> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1523411-vfs_ioattr

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
