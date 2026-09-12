> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/os/osallocatedunfairlock/precondition(_:)](https://developer.apple.com/documentation/os/osallocatedunfairlock/precondition(_:))

# precondition(\_:)

**Framework:** os  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Asserts if the lock object fails to meet specified ownership requirements.

## Declaration

```swift
func precondition(_ condition: OSAllocatedUnfairLock<State>.Ownership)
```

## Parameters

- `condition`: The ownership status to check.

<a id="Discussion"></a>

## Discussion

Call this function to ensure the ownership state of the lock is what your code requires. For example, if you call this function and pass [OSAllocatedUnfairLock.Ownership.owner](ownership/owner.md), the app terminates if the object is locked, but the calling code doesn’t own the lock. Similarly, if you call it and pass [OSAllocatedUnfairLock.Ownership.notOwner](ownership/notowner.md), the app terminates if the calling code doesn’t own the lock, or if the object isn’t locked.

## See Also

### Determining lock ownership

- [OSAllocatedUnfairLock.Ownership](ownership.md): An enumeration that represents the ownership status of an unfair lock.
