> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1562122-vfs_context_is64bit](https://developer.apple.com/documentation/kernel/1562122-vfs_context_is64bit)

# vfs_context_is64bit

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+

Determine if a vfs_context_t corresponds to a 64-bit user process.

## Declaration

```objectivec
int vfs_context_is64bit(vfs_context_t ctx);
```

## Parameters

- `ctx`: Context to examine.

<a id="return_value"></a>

## Return Value

Nonzero if context is of 64-bit process, 0 otherwise.
