> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inpersonrelationship](https://developer.apple.com/documentation/intents/inpersonrelationship)

# INPersonRelationship (Swift)

**Framework:** Intents  
**Kind:** Structure

Constants indicating the relationship between the person using the device and another person.

## Declaration

```swift
struct INPersonRelationship
```

## Topics

### Relationship Type

- [assistant](inpersonrelationship/assistant.md): The person is an assistant to the current user.
- [brother](inpersonrelationship/brother.md): The person is the brother of the current user.
- [child](inpersonrelationship/child.md): The person is a child of the current user.
- [father](inpersonrelationship/father.md): The person is the father of the current user.
- [friend](inpersonrelationship/friend.md): The person is a friend of the current user.
- [manager](inpersonrelationship/manager.md): The person is the manager of the current user.
- [mother](inpersonrelationship/mother.md): The person is the mother of the current user.
- [parent](inpersonrelationship/parent.md): The person is a parent of the current user.
- [partner](inpersonrelationship/partner.md): The person is the partner of the current user.
- [sister](inpersonrelationship/sister.md): The person is the sister of the current user.
- [spouse](inpersonrelationship/spouse.md): The person is the spouse of the current user.
- [daughter](inpersonrelationship/daughter.md): The person is the daughter of the current user.
- [son](inpersonrelationship/son.md): The person is the son of the current user.

### Initializers

- [init(\_:)](inpersonrelationship/init%28__%29.md): Creates a person relationship type with the specified raw value.
- [init(rawValue:)](inpersonrelationship/init%28rawvalue_%29.md): Creates a person relationship type with the specified raw value.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing relationship details

- [relationship](inperson/relationship.md): The relationship between this person and the person using the device.

# INPersonRelationship (Objective-C)

**Framework:** Intents  
**Kind:** Type Alias

Constants indicating the relationship between the person using the device and another person.

## Declaration

```objectivec
typedef NSString * INPersonRelationship;
```

## Topics

### Relationship Type

- [INPersonRelationshipAssistant](inpersonrelationship/assistant.md): The person is an assistant to the current user.
- [INPersonRelationshipBrother](inpersonrelationship/brother.md): The person is the brother of the current user.
- [INPersonRelationshipChild](inpersonrelationship/child.md): The person is a child of the current user.
- [INPersonRelationshipFather](inpersonrelationship/father.md): The person is the father of the current user.
- [INPersonRelationshipFriend](inpersonrelationship/friend.md): The person is a friend of the current user.
- [INPersonRelationshipManager](inpersonrelationship/manager.md): The person is the manager of the current user.
- [INPersonRelationshipMother](inpersonrelationship/mother.md): The person is the mother of the current user.
- [INPersonRelationshipParent](inpersonrelationship/parent.md): The person is a parent of the current user.
- [INPersonRelationshipPartner](inpersonrelationship/partner.md): The person is the partner of the current user.
- [INPersonRelationshipSister](inpersonrelationship/sister.md): The person is the sister of the current user.
- [INPersonRelationshipSpouse](inpersonrelationship/spouse.md): The person is the spouse of the current user.
- [INPersonRelationshipDaughter](inpersonrelationship/daughter.md): The person is the daughter of the current user.
- [INPersonRelationshipSon](inpersonrelationship/son.md): The person is the son of the current user.

## See Also

### Accessing relationship details

- [relationship](inperson/relationship.md): The relationship between this person and the person using the device.
