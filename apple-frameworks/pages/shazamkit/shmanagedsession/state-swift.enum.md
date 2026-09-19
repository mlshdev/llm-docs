> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/shazamkit/shmanagedsession/state-swift.enum

# SHManagedSession.State

**Framework:** ShazamKit  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The state of a managed session.

## Declaration

```swift
@frozen enum State
```

## Topics

### Getting session states

- [SHManagedSession.State.idle](state-swift.enum/idle.md): The session isn’t recording or making a match attempt.
- [SHManagedSession.State.matching](state-swift.enum/matching.md): The session is recording and making at least one match attempt.
- [SHManagedSession.State.prerecording](state-swift.enum/prerecording.md): The session has the resources it needs for matching and is prerecording.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the session state

- [state](state-swift.property.md): The current state of the managed session.
