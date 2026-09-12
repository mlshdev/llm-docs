> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1523301-vfs_fsprivate](https://developer.apple.com/documentation/kernel/1523301-vfs_fsprivate)

# vfs_fsprivate

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+

Get filesystem-private mount data.

## Declaration

```objectivec
void * vfs_fsprivate(mount_t mp);
```

## Parameters

- `mp`: Mount for which to get private data.

<a id="return_value"></a>

## Return Value

Private data.

<a id="discussion"></a>

## Discussion

A filesystem generally has an internal mount structure which it attaches to the VFS-level mount structure as part of the mounting process.
