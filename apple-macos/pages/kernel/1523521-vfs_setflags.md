> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1523521-vfs_setflags](https://developer.apple.com/documentation/kernel/1523521-vfs_setflags)

# vfs_setflags

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+

Set flags on a mount.

## Declaration

```objectivec
void vfs_setflags(mount_t mp, uint64_t flags);
```

## Parameters

- `mp`: Mount whose flags to set.
- `flags`: Flags to activate. Must be in the bitwise "OR" of MNT_VISFLAGMASK and MNT_CMDFLAGS.

<a id="return_value"></a>

## Return Value

Flags.

<a id="discussion"></a>

## Discussion

Sets mount flags to the bitwise "OR" of their current value and the specified bits. Often used by a filesystem as part of the mount process.
