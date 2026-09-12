> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ininteraction/dateinterval](https://developer.apple.com/documentation/intents/ininteraction/dateinterval)

# dateInterval (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 3.2+

The time at which the interaction started and its duration.

## Declaration

```swift
var dateInterval: DateInterval? { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to reflect time-related information for the interaction. For example, you could use this property to reflect the duration of a phone call or the timestamp of a message. At initialization time, the date portion is set to the current time and the duration is set to `0`.

## See Also

### Accessing Interaction Attributes

- [intentHandlingStatus](intenthandlingstatus.md): The current state of the interaction.
- [direction](direction.md): The direction in which information flowed to or from the device.
- [identifier](identifier.md): The unique identifier of the interaction.
- [groupIdentifier](groupidentifier.md): The unique identifier of the interaction’s group.

# dateInterval (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 3.2+

The time at which the interaction started and its duration.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSDateInterval * dateInterval;
```

```objectivec
@property (atomic, copy, nullable) NSDateInterval * dateInterval;
```

<a id="Discussion"></a>

## Discussion

Use this property to reflect time-related information for the interaction. For example, you could use this property to reflect the duration of a phone call or the timestamp of a message. At initialization time, the date portion is set to the current time and the duration is set to `0`.

## See Also

### Accessing Interaction Attributes

- [intentHandlingStatus](intenthandlingstatus.md): The current state of the interaction.
- [direction](direction.md): The direction in which information flowed to or from the device.
- [identifier](identifier.md): The unique identifier of the interaction.
- [groupIdentifier](groupidentifier.md): The unique identifier of the interaction’s group.
