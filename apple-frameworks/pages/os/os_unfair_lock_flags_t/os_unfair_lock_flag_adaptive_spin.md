> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/os/os_unfair_lock_flags_t/os_unfair_lock_flag_adaptive_spin

# OS_UNFAIR_LOCK_FLAG_ADAPTIVE_SPIN

**Interface language:** Objective-C

**Framework:** os  
**Kind:** Enumeration Case  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A flag to allow an unfair lock caller to spin temporarily before blocking.

## Declaration

```objectivec
OS_UNFAIR_LOCK_FLAG_ADAPTIVE_SPIN
```

<a id="discussion"></a>

## Discussion

This flag is particularly useful when the holder of the lock is on core. Only use this flag for locks where the protected critical section is always extremely short.
