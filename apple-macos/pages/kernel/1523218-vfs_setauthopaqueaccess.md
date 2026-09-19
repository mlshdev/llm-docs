> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1523218-vfs_setauthopaqueaccess

# vfs_setauthopaqueaccess

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+

Mark a filesystem as having remote VNOP_ACCESS support.

## Declaration

```objectivec
void vfs_setauthopaqueaccess(mount_t mp);
```

## Parameters

- `mp`: Mount to mark.

<a id="return_value"></a>

## Return Value

void.
