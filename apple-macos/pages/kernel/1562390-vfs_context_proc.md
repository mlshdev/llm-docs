> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1562390-vfs_context_proc](https://developer.apple.com/documentation/kernel/1562390-vfs_context_proc)

# vfs_context_proc

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+

Get the BSD process structure associated with a vfs_context_t.

## Declaration

```objectivec
proc_t vfs_context_proc(vfs_context_t ctx);
```

## Parameters

- `ctx`: Context whose associated process to find.

<a id="return_value"></a>

## Return Value

Process if available, NULL otherwise.
