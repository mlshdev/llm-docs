> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1562439-vfs_rootvnode

# vfs_rootvnode

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.5+

Returns the root vnode with an iocount.

## Declaration

```objectivec
vnode_t vfs_rootvnode(void);
```

<a id="return_value"></a>

## Return Value

Pointer to root vnode if successful; error code if there is a problem taking an iocount.

<a id="discussion"></a>

## Discussion

Caller must vnode_put() the root node when done.
