> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ininteraction/intenthandlingstatus](https://developer.apple.com/documentation/intents/ininteraction/intenthandlingstatus)

# intentHandlingStatus (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 3.2+

The current state of the interaction.

## Declaration

```swift
var intentHandlingStatus: INIntentHandlingStatus { get }
```

<a id="Discussion"></a>

## Discussion

This property reflects your app’s current progress (if any) toward completing the interaction. The value of this property is set automatically using the code in the response object. The default value of this property is [INIntentHandlingStatus.unspecified](../inintenthandlingstatus/unspecified.md).

## See Also

### Accessing Interaction Attributes

- [direction](direction.md): The direction in which information flowed to or from the device.
- [dateInterval](dateinterval.md): The time at which the interaction started and its duration.
- [identifier](identifier.md): The unique identifier of the interaction.
- [groupIdentifier](groupidentifier.md): The unique identifier of the interaction’s group.

# intentHandlingStatus (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 3.2+

The current state of the interaction.

## Declaration

```objectivec
@property (nonatomic, readonly) INIntentHandlingStatus intentHandlingStatus;
```

```objectivec
@property (atomic, readonly) INIntentHandlingStatus intentHandlingStatus;
```

<a id="Discussion"></a>

## Discussion

This property reflects your app’s current progress (if any) toward completing the interaction. The value of this property is set automatically using the code in the response object. The default value of this property is [INIntentHandlingStatusUnspecified](../inintenthandlingstatus/unspecified.md).

## See Also

### Accessing Interaction Attributes

- [direction](direction.md): The direction in which information flowed to or from the device.
- [dateInterval](dateinterval.md): The time at which the interaction started and its duration.
- [identifier](identifier.md): The unique identifier of the interaction.
- [groupIdentifier](groupidentifier.md): The unique identifier of the interaction’s group.
