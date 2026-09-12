> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1562348-vn_revoke](https://developer.apple.com/documentation/kernel/1562348-vn_revoke)

# vn_revoke

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+

Invalidate all references to a vnode.

## Declaration

```objectivec
int vn_revoke(vnode_t vp, int flags, vfs_context_t ctx);
```

## Parameters

- `vp`: The vnode to revoke.
- `flags`: Unused.
- `ctx`: Context against which to validate operation.

<a id="return_value"></a>

## Return Value

0 always.

<a id="discussion"></a>

## Discussion

Reclaims the vnode, giving it deadfs vnops (though not halting operations which are already in progress). Also reclaims all aliased vnodes (important for devices). People holding usecounts on the vnode, e.g. processes with the file open, will find that all subsequent operations but closing the file fail.
