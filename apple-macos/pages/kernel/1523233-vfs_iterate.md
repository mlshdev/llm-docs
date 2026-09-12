> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1523233-vfs_iterate](https://developer.apple.com/documentation/kernel/1523233-vfs_iterate)

# vfs_iterate

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+

Iterate over all mountpoints with a callback. Used, for example, by sync().

## Declaration

```objectivec
int vfs_iterate(int flags, int (*callout)(struct mount *, void *), void *arg);
```

## Parameters

- `flags`: Unused.
- `callback`: Function which takes a mount and arbitrary passed-in "arg," and returns one of VFS_RETURNED_DONE or VFS_CLAIMED_DONE: end iteration and return success. VFS_RETURNED or VFS_CLAIMED: continue iterating. Anything else: continue iterating.
- `arg`: Arbitrary data to pass to callback.

<a id="return_value"></a>

## Return Value

0 for success, else an error code.
