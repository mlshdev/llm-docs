> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/checkedcontinuation/resume(returning:)

# resume(returning:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Resume the task awaiting the continuation by having it return normally from its suspension point.

## Declaration

```swift
func resume(returning value: sending T)
```

## Parameters

- `value`: The value to return from the continuation.

<a id="discussion"></a>

## Discussion

A continuation must be resumed exactly once. If the continuation has already been resumed through this object, then the attempt to resume the continuation will trap.

After `resume` enqueues the task, control immediately returns to the caller. The task continues executing when its executor is able to reschedule it.
