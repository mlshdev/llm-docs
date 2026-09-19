> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1523261-vfs_flags

# vfs_flags

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+

Retrieve mount flags.

## Declaration

```objectivec
uint64_t vfs_flags(mount_t mp);
```

## Parameters

- `mp`: Mount whose flags to grab.

<a id="return_value"></a>

## Return Value

Flags.

<a id="discussion"></a>

## Discussion

Results will be in the bitwise "OR" of MNT_VISFLAGMASK and MNT_CMDFLAGS.
