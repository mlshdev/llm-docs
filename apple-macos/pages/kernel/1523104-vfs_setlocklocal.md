> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1523104-vfs_setlocklocal

# vfs_setlocklocal

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+

Mark a filesystem as using VFS-level advisory locking support.

## Declaration

```objectivec
void vfs_setlocklocal(mount_t mp);
```

## Parameters

- `mp`: Mount to mark.

<a id="return_value"></a>

## Return Value

void.

<a id="discussion"></a>

## Discussion

Advisory locking operations will not call down to the filesystem if this flag is set.
