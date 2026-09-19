> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1523259-vfs_getnewfsid

# vfs_getnewfsid

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+

Generate a unique filesystem ID for a mount and store it in the mount structure.

## Declaration

```objectivec
void vfs_getnewfsid(struct mount *mp);
```

## Parameters

- `mp`: Mount to set an ID for.

<a id="return_value"></a>

## Return Value

void.

<a id="discussion"></a>

## Discussion

Filesystem IDs are returned as part of "struct statfs." This function is typically called as part of file-system specific mount code (i.e. through VFS_MOUNT).
