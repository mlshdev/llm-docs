> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/mach/port/relinquish()-70vbe](https://developer.apple.com/documentation/system/mach/port/relinquish()-70vbe)

# relinquish()

**Framework:** System  
**Kind:** Instance Method  
**Availability:** macOS 14.4+

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
