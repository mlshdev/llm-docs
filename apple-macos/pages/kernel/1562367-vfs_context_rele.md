> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1562367-vfs_context_rele](https://developer.apple.com/documentation/kernel/1562367-vfs_context_rele)

# vfs_context_rele

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+

Release references on components of a context and deallocate it.

## Declaration

```objectivec
int vfs_context_rele(vfs_context_t ctx);
```

## Parameters

- `ctx`: Context to release.

<a id="return_value"></a>

## Return Value

Always 0.

<a id="discussion"></a>

## Discussion

A context should not be referenced after vfs_context_rele has been called.
