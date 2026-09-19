> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1523242-vfs_isrdonly

# vfs_isrdonly

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+

Determine if a filesystem is mounted read-only.

## Declaration

```objectivec
int vfs_isrdonly(mount_t mp);
```

## Parameters

- `mp`: Mount to test.

<a id="return_value"></a>

## Return Value

Nonzero if filesystem is mounted read-only, else 0.
