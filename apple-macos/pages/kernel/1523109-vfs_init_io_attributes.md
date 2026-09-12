> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1523109-vfs_init_io_attributes](https://developer.apple.com/documentation/kernel/1523109-vfs_init_io_attributes)

# vfs_init_io_attributes

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.6+

Set I/O attributes on a mountpoint based on device properties.

## Declaration

```objectivec
int vfs_init_io_attributes(vnode_t devvp, mount_t mp);
```

## Parameters

- `devvp`: Block device vnode from which a filesystem is being mounted.
- `mp`: Mountpoint whose I/O parameters to initialize.

<a id="return_value"></a>

## Return Value

0 for success, else an error code.
