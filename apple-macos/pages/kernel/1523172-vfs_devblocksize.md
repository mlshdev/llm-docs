> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1523172-vfs_devblocksize](https://developer.apple.com/documentation/kernel/1523172-vfs_devblocksize)

# vfs_devblocksize

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+

Get the block size of the device underlying a mount.

## Declaration

```objectivec
int vfs_devblocksize(mount_t mp);
```

## Parameters

- `mp`: Mount for which to get block size.

<a id="return_value"></a>

## Return Value

Block size.
