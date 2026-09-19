> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1523312-vfs_64bitready

# vfs_64bitready

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+

Check if the filesystem associated with a mountpoint is marked ready for interaction with 64-bit user processes.

## Declaration

```objectivec
int vfs_64bitready(mount_t mp);
```

## Parameters

- `mp`: Mount to test.

<a id="return_value"></a>

## Return Value

Nonzero if filesystem is ready for 64-bit; 0 otherwise.
