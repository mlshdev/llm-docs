> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1562261-vfs_context_suser

# vfs_context_suser

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+

Determine if a vfs_context_t corresponds to the superuser.

## Declaration

```objectivec
int vfs_context_suser(vfs_context_t ctx);
```

## Parameters

- `ctx`: Context to examine.

<a id="return_value"></a>

## Return Value

Nonzero if context belongs to superuser, 0 otherwise.
