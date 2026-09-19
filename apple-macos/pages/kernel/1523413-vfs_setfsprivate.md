> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1523413-vfs_setfsprivate

# vfs_setfsprivate

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+

Set filesystem-private mount data.

## Declaration

```objectivec
void vfs_setfsprivate(mount_t mp, void *mntdata);
```

## Parameters

- `mp`: Mount for which to set private data.

<a id="return_value"></a>

## Return Value

Void.

<a id="discussion"></a>

## Discussion

A filesystem generally has an internal mount structure which it attaches to the VFS-level mount structure as part of the mounting process.
