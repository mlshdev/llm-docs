> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/anchorstateevents/didfailtoanchor/reason-swift.enum](https://developer.apple.com/documentation/realitykit/anchorstateevents/didfailtoanchor/reason-swift.enum)

# AnchorStateEvents.DidFailToAnchor.Reason

**Framework:** RealityKit  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

## Declaration

```swift
enum Reason
```

## Topics

### Enumeration Cases

- [AnchorStateEvents.DidFailToAnchor.Reason.addAnchorFailed](reason-swift.enum/addanchorfailed.md): anchor fails to be added, due to anchor tracking provider error
- [AnchorStateEvents.DidFailToAnchor.Reason.anchorNotSupported](reason-swift.enum/anchornotsupported.md): anchor fails because the anchor type is not supported by the hardware configuration
- [AnchorStateEvents.DidFailToAnchor.Reason.maximumLimitReached](reason-swift.enum/maximumlimitreached.md): anchor fails to be added, due to anchor tracking provider reaching its maximum anchor limit
- [AnchorStateEvents.DidFailToAnchor.Reason.unspecified](reason-swift.enum/unspecified.md): anchor fails with no specified reason

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
