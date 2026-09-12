> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1562439-vfs_rootvnode](https://developer.apple.com/documentation/kernel/1562439-vfs_rootvnode)

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
