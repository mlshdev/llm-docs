> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1562360-vfs_context_create](https://developer.apple.com/documentation/kernel/1562360-vfs_context_create)

# vfs_context_create

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+

Create a new vfs_context_t with appropriate references held.

## Declaration

```objectivec
vfs_context_t vfs_context_create(vfs_context_t ctx);
```

## Parameters

- `ctx`: Context to copy, or NULL to use information from running thread.

<a id="return_value"></a>

## Return Value

The new context, or NULL in the event of failure.

<a id="discussion"></a>

## Discussion

The context must be released with vfs_context_rele() when no longer in use.
