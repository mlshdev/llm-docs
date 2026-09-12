> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/os/os_sync_wake_by_address_flags_t/os_sync_wake_by_address_shared](https://developer.apple.com/documentation/os/os_sync_wake_by_address_flags_t/os_sync_wake_by_address_shared)

# OS_SYNC_WAKE_BY_ADDRESS_SHARED

**Interface language:** Objective-C

**Framework:** os  
**Kind:** Enumeration Case  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+ · watchOS 10.4+

A flag to indicate an address is in a shared memory region, allowing you to wake another waiting process.

## Declaration

```objectivec
OS_SYNC_WAKE_BY_ADDRESS_SHARED
```

<a id="Discussion"></a>

## Discussion

Use this flag when you pass an address allocated in shared memory to any futex wake function. Shared memory can be used for waits and wakes within a single process, but incur a performance hit.

> **Important**

> Use this flag when waking threads which were waited on with the [OS_SYNC_WAIT_ON_ADDRESS_SHARED](../os_sync_wait_on_address_flags_t/os_sync_wait_on_address_shared.md) flag.
