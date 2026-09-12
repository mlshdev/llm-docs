> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/permissionkit/permissionquestion](https://developer.apple.com/documentation/permissionkit/permissionquestion)

# PermissionQuestion

**Framework:** PermissionKit  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

A class that captures a permission question posed by a person.

## Declaration

```swift
final class PermissionQuestion<Topic> where Topic : QuestionTopic
```

## Mentioned In

- [Creating a communication experience](creating-a-communication-experience.md)

## Topics

### Creating permission requests

- [init(handle:)](permissionquestion/init%28handle_%29.md): Conforms when `Topic` is `CommunicationTopic`. Creates a permission question that asks parents or guardians for permission to communicate with a person.
- [init(handles:)](permissionquestion/init%28handles_%29.md): Conforms when `Topic` is `CommunicationTopic`. Creates a permission question that asks parents or guardians for permission to communicate with multiple people.
- [init(communicationTopic:)](permissionquestion/init%28communicationtopic_%29.md): Conforms when `Topic` is `CommunicationTopic`. Creates a permission question that asks parents or guardians for communication permission.
- [init(significantAppUpdateTopic:)](permissionquestion/init%28significantappupdatetopic_%29.md): Conforms when `Topic` is `SignificantAppUpdateTopic`. Creates a permission question that asks parents or guardians for permission to continue using your app after a significant update.

### Working with choices

- [choices](permissionquestion/choices.md): The possible answer choices associated with this question.
- [defaultChoice](permissionquestion/defaultchoice.md): The default answer choice associated with the question.

### Accessing properties

- [id](permissionquestion/id.md): A unique identifier for the question.
- [topic](permissionquestion/topic.md): A topic that can be used to interpret a person’s request.
- [expirationDate](permissionquestion/expirationdate.md): The date that this question expires, if any.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)

## See Also

### Essentials

- [Creating a communication experience](creating-a-communication-experience.md): Request permission from a parent or guardian to modify a child’s communication rules.
- [AskCenter](askcenter.md): A class that manages permission requests you send to parents or guardians for approval.
