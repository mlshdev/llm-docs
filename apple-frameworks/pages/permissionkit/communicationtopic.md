> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/permissionkit/communicationtopic](https://developer.apple.com/documentation/permissionkit/communicationtopic)

# CommunicationTopic

**Framework:** PermissionKit  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

A topic for requesting communication permission with specific people.

## Declaration

```swift
struct CommunicationTopic
```

## Mentioned In

- [Creating a communication experience](creating-a-communication-experience.md)

## Topics

### Working with supporting types

- [CommunicationTopic.Action](communicationtopic/action.md): A communication action you can request permission for.
- [CommunicationTopic.PersonInformation](communicationtopic/personinformation-swift.struct.md): Information about a person the child wants to communicate with.

### Creating topics

- [init(personInformation:)](communicationtopic/init%28personinformation_%29.md): Creates a communication topic with person information for general communication.
- [init(personInformation:actions:)](communicationtopic/init%28personinformation_actions_%29.md): Creates a communication topic with person information and specific actions.

### Accessing properties

- [actions](communicationtopic/actions.md): The communication actions the child wants to perform.
- [personInformation](communicationtopic/personinformation-swift.property.md): Information about the people the child wants to communicate with.
- [id](communicationtopic/id.md): The topic’s unique identifier.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [QuestionTopic](questiontopic.md)

## See Also

### Permission topics

- [SignificantAppUpdateTopic](significantappupdatetopic.md): A topic for requesting permission for significant app updates.
