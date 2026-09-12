> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1562223-vfs_context_current](https://developer.apple.com/documentation/kernel/1562223-vfs_context_current)

# vfs_context_current

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.5+

Get the vfs_context for the current thread, or the kernel context if there is no context for current thread.

## Declaration

```objectivec
vfs_context_t vfs_context_current(void);
```

<a id="return_value"></a>

## Return Value

Context for current thread, or kernel context if thread context is unavailable.

<a id="discussion"></a>

## Discussion

Kexts should not use this function--it is preferred to use vfs_context_create(NULL) and vfs_context_rele(), which ensure proper reference counting of underlying structures.
