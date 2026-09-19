> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1523299-vfs_clearflags

# vfs_clearflags

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+

Clear flags on a mount.

## Declaration

```objectivec
void vfs_clearflags(mount_t mp, uint64_t flags);
```

## Parameters

- `mp`: Mount whose flags to set.
- `flags`: Flags to deactivate. Must be in the bitwise "OR" of MNT_VISFLAGMASK and MNT_CMDFLAGS.

<a id="return_value"></a>

## Return Value

void.

<a id="discussion"></a>

## Discussion

Sets mount flags to the bitwise "AND" of their current value and the complement of the specified bits.
