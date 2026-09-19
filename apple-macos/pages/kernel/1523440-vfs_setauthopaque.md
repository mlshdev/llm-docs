> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1523440-vfs_setauthopaque

# vfs_setauthopaque

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+

Mark a filesystem as having authorization decisions controlled remotely.

## Declaration

```objectivec
void vfs_setauthopaque(mount_t mp);
```

## Parameters

- `mp`: Mount to mark.

<a id="return_value"></a>

## Return Value

void.
