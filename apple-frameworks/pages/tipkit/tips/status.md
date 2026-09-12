> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tipkit/tips/status](https://developer.apple.com/documentation/tipkit/tips/status)

# Status

**Framework:** TipKit  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A type that describes the current display eligibility status for a tip.

## Declaration

```swift
enum Status
```

## Topics

### Enumeration Cases

- [Tips.Status.available](status/available.md): The tip is eligible for display.
- [Tips.Status.invalidated(\_:)](status/invalidated%28__%29.md): The tip is no longer valid.
- [Tips.Status.pending](status/pending.md): The tip is not eligible for display.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Status

- [InvalidationReason](invalidationreason.md): A type that describes why the system permanently invalidated a tip.
