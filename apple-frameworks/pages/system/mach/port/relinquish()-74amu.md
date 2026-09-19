> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/system/mach/port/relinquish()-74amu

# relinquish()

**Framework:** System  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.0+ · watchOS 10.4+

Transfer ownership of the underlying port right to the caller.

## Declaration

```swift
consuming func relinquish() -> mach_port_name_t
```

<a id="discussion"></a>

## Discussion

Returns the Mach port name representing the right.

This operation liberates the right from management by the Mach.Port, and the underlying right will no longer be automatically deallocated.

After this function completes, the Mach.Port is destroyed and no longer usable.
