> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1523537-vfs_isreload

# vfs_isreload

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+

Determine if a reload of filesystem data is in progress. This can only be the case for a read-only filesystem; all data is brought in from secondary storage.

## Declaration

```objectivec
int vfs_isreload(mount_t mp);
```

## Parameters

- `mp`: Mount to test.

<a id="return_value"></a>

## Return Value

Nonzero if a request has been made to reload data, else 0.
