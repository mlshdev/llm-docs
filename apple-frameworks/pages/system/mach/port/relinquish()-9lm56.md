> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/mach/port/relinquish()-9lm56](https://developer.apple.com/documentation/system/mach/port/relinquish()-9lm56)

# relinquish()

**Framework:** System  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.0+ · watchOS 10.4+

Transfer ownership of the underlying port right to the caller.

## Declaration

```swift
consuming func relinquish() -> (name: mach_port_name_t, context: mach_port_context_t)
```

<a id="discussion"></a>

## Discussion

Returns a tuple containing the Mach port name representing the right, and the context value used to guard the right.

This operation liberates the right from management by the Mach.Port, and the underlying right will no longer be automatically deallocated.

After this function completes, the Mach.Port is destroyed and no longer usable.
