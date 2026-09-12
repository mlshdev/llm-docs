> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tipkit/tips/invalidationreason](https://developer.apple.com/documentation/tipkit/tips/invalidationreason)

# InvalidationReason

**Framework:** TipKit  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A type that describes why the system permanently invalidated a tip.

## Declaration

```swift
enum InvalidationReason
```

## Topics

### Enumeration Cases

- [Tips.InvalidationReason.actionPerformed](invalidationreason/actionperformed.md): The user performed the action that the tip describes.
- [Tips.InvalidationReason.displayCountExceeded](invalidationreason/displaycountexceeded.md): The tip exceeded its maximum display count.
- [Tips.InvalidationReason.displayDurationExceeded](invalidationreason/displaydurationexceeded.md): The tip exceeded its max display duration.
- [Tips.InvalidationReason.tipClosed](invalidationreason/tipclosed.md): The user explicitly closed the tip view while it was displaying.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Status

- [Status](status.md): A type that describes the current display eligibility status for a tip.
