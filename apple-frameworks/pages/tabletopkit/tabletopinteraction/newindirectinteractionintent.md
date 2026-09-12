> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/tabletopinteraction/newindirectinteractionintent](https://developer.apple.com/documentation/tabletopkit/tabletopinteraction/newindirectinteractionintent)

# TabletopInteraction.NewIndirectInteractionIntent

**Framework:** TabletopKit  
**Kind:** Structure  
**Availability:** visionOS 26.0+

An object that represent the developer’s intent when a new indirect interaction is proposed by the system

## Declaration

```swift
struct NewIndirectInteractionIntent
```

## Topics

### Rejecting the intent

- [reject](newindirectinteractionintent/reject.md): Return `reject` to indicate that interaction should not be started

### Accepting the intent

- [accept(configuration:constants:)](newindirectinteractionintent/accept%28configuration_constants_%29.md): Return `accept` to indicate that the interaction should be allowed to start and to specify its constants and initial configuration

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Handling interaction intents

- [TabletopInteraction.NewInteractionIntent](newinteractionintent.md)
- [TabletopInteraction.NewDirectInteractionIntent](newdirectinteractionintent.md): An object that represent the developer’s intent when a new direct interaction is proposed by the system
