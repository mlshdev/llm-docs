> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1523231-vfs_clearauthopaqueaccess](https://developer.apple.com/documentation/kernel/1523231-vfs_clearauthopaqueaccess)

# vfs_clearauthopaqueaccess

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+

Mark a filesystem as not having remote VNOP_ACCESS support.

## Declaration

```objectivec
void vfs_clearauthopaqueaccess(mount_t mp);
```

## Parameters

- `mp`: Mount to mark.

<a id="return_value"></a>

## Return Value

void.
