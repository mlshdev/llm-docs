> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/os/os_sync_wake_by_address_flags_t/os_sync_wake_by_address_none

# OS_SYNC_WAKE_BY_ADDRESS_NONE

**Interface language:** Objective-C

**Framework:** os  
**Kind:** Enumeration Case  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+ · watchOS 10.4+

The default behavior for futex functions that wake a thread.

## Declaration

```objectivec
OS_SYNC_WAKE_BY_ADDRESS_NONE
```

<a id="Discussion"></a>

## Discussion

Use this flag when you pass an address only accessed in the calling process’s memory space. This flag enables kernel optimizations that can’t be used on shared memory.
