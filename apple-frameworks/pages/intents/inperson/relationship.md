> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inperson/relationship](https://developer.apple.com/documentation/intents/inperson/relationship)

# relationship (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.2+ · iPadOS 10.2+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.1+

The relationship between this person and the person using the device.

## Declaration

```swift
var relationship: INPersonRelationship? { get }
```

<a id="Discussion"></a>

## Discussion

SiriKit sets the value of this property for you based on information provided by the user. For example, if the user says “send a message to my brother”, Siri sets this property to [brother](../inpersonrelationship/brother.md). However, if the user said “send a message to Shelly” and Shelly happened to be my spouse, Siri would not set this property.

## See Also

### Accessing relationship details

- [INPersonRelationship](../inpersonrelationship.md): Constants indicating the relationship between the person using the device and another person.

# relationship (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.2+ · iPadOS 10.2+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.2+

The relationship between this person and the person using the device.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) INPersonRelationship relationship;
```

```objectivec
@property (atomic, copy, readonly, nullable) INPersonRelationship relationship;
```

<a id="Discussion"></a>

## Discussion

SiriKit sets the value of this property for you based on information provided by the user. For example, if the user says “send a message to my brother”, Siri sets this property to [INPersonRelationshipBrother](../inpersonrelationship/brother.md). However, if the user said “send a message to Shelly” and Shelly happened to be my spouse, Siri would not set this property.

## See Also

### Accessing relationship details

- [INPersonRelationship](../inpersonrelationship.md): Constants indicating the relationship between the person using the device and another person.
