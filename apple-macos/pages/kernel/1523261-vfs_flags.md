> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1523261-vfs_flags](https://developer.apple.com/documentation/kernel/1523261-vfs_flags)

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
