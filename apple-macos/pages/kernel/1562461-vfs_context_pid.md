> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1562461-vfs_context_pid

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
