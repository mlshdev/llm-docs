> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ininteraction/identifier](https://developer.apple.com/documentation/intents/ininteraction/identifier)

# identifier (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 3.2+

The unique identifier of the interaction.

## Declaration

```swift
var identifier: String { get set }
```

## Mentioned In

- [Deleting Donated Shortcuts](../../sirikit/deleting-donated-shortcuts.md)

<a id="Discussion"></a>

## Discussion

This property is initialized to a new UUID at initialization time, but you can change it if you want to use a different identification scheme. The identifier you assign to this property must be unique within your app.

## See Also

### Accessing Interaction Attributes

- [intentHandlingStatus](intenthandlingstatus.md): The current state of the interaction.
- [direction](direction.md): The direction in which information flowed to or from the device.
- [dateInterval](dateinterval.md): The time at which the interaction started and its duration.
- [groupIdentifier](groupidentifier.md): The unique identifier of the interaction’s group.

# identifier (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 3.2+

The unique identifier of the interaction.

## Declaration

```objectivec
@property (nonatomic, copy) NSString * identifier;
```

```objectivec
@property (atomic, copy) NSString * identifier;
```

## Mentioned In

- [Deleting Donated Shortcuts](../../sirikit/deleting-donated-shortcuts.md)

<a id="Discussion"></a>

## Discussion

This property is initialized to a new UUID at initialization time, but you can change it if you want to use a different identification scheme. The identifier you assign to this property must be unique within your app.

## See Also

### Accessing Interaction Attributes

- [intentHandlingStatus](intenthandlingstatus.md): The current state of the interaction.
- [direction](direction.md): The direction in which information flowed to or from the device.
- [dateInterval](dateinterval.md): The time at which the interaction started and its duration.
- [groupIdentifier](groupidentifier.md): The unique identifier of the interaction’s group.
