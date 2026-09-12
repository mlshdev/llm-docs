> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1523440-vfs_setauthopaque](https://developer.apple.com/documentation/kernel/1523440-vfs_setauthopaque)

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
