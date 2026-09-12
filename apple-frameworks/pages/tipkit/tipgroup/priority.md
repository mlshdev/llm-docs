> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tipkit/tipgroup/priority](https://developer.apple.com/documentation/tipkit/tipgroup/priority)

# TipGroup.Priority

**Framework:** TipKit  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Order priority for a [TipGroup](../tipgroup.md).

## Declaration

```swift
enum Priority
```

## Topics

### Enumeration Cases

- [TipGroup.Priority.firstAvailable](priority/firstavailable.md): Shows the first tip eligible for display.
- [TipGroup.Priority.ordered](priority/ordered.md): Shows an eligible tip when all of the previous tips have been [`invalidated`](../tips/status/invalidated%28__%29.md).

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
