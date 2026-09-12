> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ininteractiondirection](https://developer.apple.com/documentation/intents/ininteractiondirection)

# INInteractionDirection (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 3.2+

Constants indicating whether the app is providing or receiving information.

## Declaration

```swift
enum INInteractionDirection
```

## Topics

### Constants

- [INInteractionDirection.unspecified](ininteractiondirection/unspecified.md): An unspecified direction.
- [INInteractionDirection.outgoing](ininteractiondirection/outgoing.md): An interaction in which information is sent from the device.
- [INInteractionDirection.incoming](ininteractiondirection/incoming.md): An interaction in which information is received on the device.

### Initializers

- [init(rawValue:)](ininteractiondirection/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [INIntentHandlingStatus](inintenthandlingstatus.md): Constants indicating the current state of the interaction.

# INInteractionDirection (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 3.2+

Constants indicating whether the app is providing or receiving information.

## Declaration

```objectivec
enum INInteractionDirection : NSInteger;
```

## Topics

### Constants

- [INInteractionDirectionUnspecified](ininteractiondirection/unspecified.md): An unspecified direction.
- [INInteractionDirectionOutgoing](ininteractiondirection/outgoing.md): An interaction in which information is sent from the device.
- [INInteractionDirectionIncoming](ininteractiondirection/incoming.md): An interaction in which information is received on the device.

## See Also

### Constants

- [INIntentHandlingStatus](inintenthandlingstatus.md): Constants indicating the current state of the interaction.
