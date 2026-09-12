> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ininteraction/direction](https://developer.apple.com/documentation/intents/ininteraction/direction)

# direction (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 3.2+

The direction in which information flowed to or from the device.

## Declaration

```swift
var direction: INInteractionDirection { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to convey whether the interaction involved information moving to or from the current device. For example, starting a video call from this device indicates an outgoing interaction, which means you should set this property to [INInteractionDirection.outgoing](../ininteractiondirection/outgoing.md). The default value of this property is [INInteractionDirection.unspecified](../ininteractiondirection/unspecified.md).

## See Also

### Accessing Interaction Attributes

- [intentHandlingStatus](intenthandlingstatus.md): The current state of the interaction.
- [dateInterval](dateinterval.md): The time at which the interaction started and its duration.
- [identifier](identifier.md): The unique identifier of the interaction.
- [groupIdentifier](groupidentifier.md): The unique identifier of the interaction’s group.

# direction (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 3.2+

The direction in which information flowed to or from the device.

## Declaration

```objectivec
@property (nonatomic, assign) INInteractionDirection direction;
```

```objectivec
@property (atomic, assign) INInteractionDirection direction;
```

<a id="Discussion"></a>

## Discussion

Use this property to convey whether the interaction involved information moving to or from the current device. For example, starting a video call from this device indicates an outgoing interaction, which means you should set this property to [INInteractionDirectionOutgoing](../ininteractiondirection/outgoing.md). The default value of this property is [INInteractionDirectionUnspecified](../ininteractiondirection/unspecified.md).

## See Also

### Accessing Interaction Attributes

- [intentHandlingStatus](intenthandlingstatus.md): The current state of the interaction.
- [dateInterval](dateinterval.md): The time at which the interaction started and its duration.
- [identifier](identifier.md): The unique identifier of the interaction.
- [groupIdentifier](groupidentifier.md): The unique identifier of the interaction’s group.
