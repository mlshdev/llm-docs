> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carkey/carkeyremotecontrolsession/continuationstrategy](https://developer.apple.com/documentation/carkey/carkeyremotecontrolsession/continuationstrategy)

# CarKeyRemoteControlSession.ContinuationStrategy

**Framework:** CarKey  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · watchOS 11.0+

Strategy to use on reception of a continuation request.

## Declaration

```swift
enum ContinuationStrategy
```

## Topics

### Enumeration Cases

- [CarKeyRemoteControlSession.ContinuationStrategy.automatic](continuationstrategy/automatic.md): Auto-confirm any incoming continuation requests until the requested action is stopped or completed with no intervention from the client.
- [CarKeyRemoteControlSession.ContinuationStrategy.manual](continuationstrategy/manual.md): Give your app control over the incoming continuation requests and allow to exchange data with the vehicle.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
