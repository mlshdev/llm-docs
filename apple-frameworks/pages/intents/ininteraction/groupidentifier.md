> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ininteraction/groupidentifier](https://developer.apple.com/documentation/intents/ininteraction/groupidentifier)

# groupIdentifier (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 3.2+

The unique identifier of the interaction’s group.

## Declaration

```swift
var groupIdentifier: String? { get set }
```

## Mentioned In

- [Deleting Donated Shortcuts](../../sirikit/deleting-donated-shortcuts.md)

<a id="Discussion"></a>

## Discussion

Assigning the same identifier string to two or more interaction objects defines a group. You can use the group identifier later to delete all interactions with that identifier. The default value of this property is `nil`, which means that the interaction is not associated with a group.

## See Also

### Accessing Interaction Attributes

- [intentHandlingStatus](intenthandlingstatus.md): The current state of the interaction.
- [direction](direction.md): The direction in which information flowed to or from the device.
- [dateInterval](dateinterval.md): The time at which the interaction started and its duration.
- [identifier](identifier.md): The unique identifier of the interaction.

# groupIdentifier (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 3.2+

The unique identifier of the interaction’s group.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * groupIdentifier;
```

```objectivec
@property (atomic, copy, nullable) NSString * groupIdentifier;
```

## Mentioned In

- [Deleting Donated Shortcuts](../../sirikit/deleting-donated-shortcuts.md)

<a id="Discussion"></a>

## Discussion

Assigning the same identifier string to two or more interaction objects defines a group. You can use the group identifier later to delete all interactions with that identifier. The default value of this property is `nil`, which means that the interaction is not associated with a group.

## See Also

### Accessing Interaction Attributes

- [intentHandlingStatus](intenthandlingstatus.md): The current state of the interaction.
- [direction](direction.md): The direction in which information flowed to or from the device.
- [dateInterval](dateinterval.md): The time at which the interaction started and its duration.
- [identifier](identifier.md): The unique identifier of the interaction.
