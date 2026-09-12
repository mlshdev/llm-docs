> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatch_source_vnode_flags_t](https://developer.apple.com/documentation/dispatch/dispatch_source_vnode_flags_t)

# dispatch_source_vnode_flags_t

**Interface language:** Objective-C

**Framework:** Dispatch  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Events involving a change to a file system object.

## Declaration

```objectivec
typedef unsigned long dispatch_source_vnode_flags_t;
```

## Topics

### File System Event Flags

- [DISPATCH_VNODE_LINK](dispatch_vnode_link.md)
- [DISPATCH_VNODE_WRITE](dispatch_vnode_write.md)
- [DISPATCH_VNODE_ATTRIB](dispatch_vnode_attrib.md)
- [DISPATCH_VNODE_DELETE](dispatch_vnode_delete.md)
- [DISPATCH_VNODE_EXTEND](dispatch_vnode_extend.md)
- [DISPATCH_VNODE_RENAME](dispatch_vnode_rename.md)
- [DISPATCH_VNODE_REVOKE](dispatch_vnode_revoke.md)
- [DISPATCH_VNODE_FUNLOCK](dispatch_vnode_funlock.md)

## See Also

### Getting Dispatch Source Attributes

- [dispatch_source_get_data](dispatch_source_get_data.md): Returns pending data for the dispatch source.
- [dispatch_source_get_mask](dispatch_source_get_mask.md): Returns the mask of events monitored by the dispatch source.
- [dispatch_source_get_handle](dispatch_source_get_handle.md): Returns the underlying system handle associated with the specified dispatch source.
- [dispatch_source_merge_data](dispatch_source_merge_data.md): Merges data into a dispatch source and submits its event handler block to its target queue.
- [dispatch_source_proc_flags_t](dispatch_source_proc_flags_t.md): Events related to a process.
- [dispatch_source_mach_recv_flags_t](dispatch_source_mach_recv_flags_t.md): Mach receive-right flags.
- [dispatch_source_mach_send_flags_t](dispatch_source_mach_send_flags_t.md): Mach send-right flags.
- [dispatch_source_memorypressure_flags_t](dispatch_source_memorypressure_flags_t.md): Memory pressure events.
