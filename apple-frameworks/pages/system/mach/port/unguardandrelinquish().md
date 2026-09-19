> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/system/mach/port/unguardandrelinquish()

# unguardAndRelinquish()

**Framework:** System  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.0+ · watchOS 10.4+

Remove guard and transfer ownership of the underlying port right to the caller.

## Declaration

```swift
consuming func unguardAndRelinquish() -> mach_port_name_t
```

<a id="discussion"></a>

## Discussion

Returns the Mach port name representing the right.

This operation liberates the right from management by the Mach.Port, and the underlying right will no longer be automatically deallocated.

After this function completes, the Mach.Port is destroyed and no longer usable.

This function makes a syscall to remove the guard from Mach.ReceiveRights. Use relinquish() to avoid the syscall and extract the context value along with the port name.
