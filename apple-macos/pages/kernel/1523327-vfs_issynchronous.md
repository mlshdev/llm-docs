> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1523327-vfs_issynchronous

# vfs_issynchronous

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+

Determine if writes to a filesystem occur synchronously.

## Declaration

```objectivec
int vfs_issynchronous(mount_t mp);
```

## Parameters

- `mp`: Mount to test.

<a id="return_value"></a>

## Return Value

Nonzero if writes occur synchronously, else 0.
