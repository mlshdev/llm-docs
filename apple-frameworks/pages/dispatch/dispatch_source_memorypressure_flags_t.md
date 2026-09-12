> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatch_source_memorypressure_flags_t](https://developer.apple.com/documentation/dispatch/dispatch_source_memorypressure_flags_t)

# dispatch_source_memorypressure_flags_t

**Interface language:** Objective-C

**Framework:** Dispatch  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Memory pressure events.

## Declaration

```objectivec
typedef unsigned long dispatch_source_memorypressure_flags_t;
```

## Topics

### Memory Pressure Event Flags

- [DISPATCH_MEMORYPRESSURE_WARN](dispatch_memorypressure_warn.md): The system memory pressure condition is at the warning stage.
- [DISPATCH_MEMORYPRESSURE_NORMAL](dispatch_memorypressure_normal.md): The system memory pressure condition has returned to normal.
- [DISPATCH_MEMORYPRESSURE_CRITICAL](dispatch_memorypressure_critical.md): The system memory pressure condition is at the critical stage.

## See Also

### Getting Dispatch Source Attributes

- [dispatch_source_get_data](dispatch_source_get_data.md): Returns pending data for the dispatch source.
- [dispatch_source_get_mask](dispatch_source_get_mask.md): Returns the mask of events monitored by the dispatch source.
- [dispatch_source_get_handle](dispatch_source_get_handle.md): Returns the underlying system handle associated with the specified dispatch source.
- [dispatch_source_merge_data](dispatch_source_merge_data.md): Merges data into a dispatch source and submits its event handler block to its target queue.
- [dispatch_source_proc_flags_t](dispatch_source_proc_flags_t.md): Events related to a process.
- [dispatch_source_vnode_flags_t](dispatch_source_vnode_flags_t.md): Events involving a change to a file system object.
- [dispatch_source_mach_recv_flags_t](dispatch_source_mach_recv_flags_t.md): Mach receive-right flags.
- [dispatch_source_mach_send_flags_t](dispatch_source_mach_send_flags_t.md): Mach send-right flags.
