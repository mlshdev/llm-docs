> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/os/osallocatedunfairlock/ownership](https://developer.apple.com/documentation/os/osallocatedunfairlock/ownership)

# OSAllocatedUnfairLock.Ownership

**Framework:** os  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

An enumeration that represents the ownership status of an unfair lock.

## Declaration

```swift
@frozen enum Ownership
```

## Topics

### Specifying ownership

- [OSAllocatedUnfairLock.Ownership.owner](ownership/owner.md): Describes code that owns the lock.
- [OSAllocatedUnfairLock.Ownership.notOwner](ownership/notowner.md): Describes code that doesn’t own the lock.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Determining lock ownership

- [precondition(\_:)](precondition%28__%29.md): Asserts if the lock object fails to meet specified ownership requirements.
