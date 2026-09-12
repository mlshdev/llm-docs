> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1562461-vfs_context_pid](https://developer.apple.com/documentation/kernel/1562461-vfs_context_pid)

# vfs_context_pid

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+

Get the process id of the BSD process associated with a vfs_context_t.

## Declaration

```objectivec
int vfs_context_pid(vfs_context_t ctx);
```

## Parameters

- `ctx`: Context whose associated process to find.

<a id="return_value"></a>

## Return Value

Process id.
