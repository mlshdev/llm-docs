> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/permissionkit/permissionresponse](https://developer.apple.com/documentation/permissionkit/permissionresponse)

# PermissionResponse

**Framework:** PermissionKit  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

A full permission response that includes the original question and chosen answer.

## Declaration

```swift
struct PermissionResponse<Topic> where Topic : QuestionTopic
```

## Mentioned In

- [Creating a communication experience](creating-a-communication-experience.md)

## Topics

### Getting response information

- [choice](permissionresponse/choice.md): The choice made by the person initiating this response.
- [question](permissionresponse/question.md): The original question that this response answers.

## See Also

### Response management

- [responses(for:)](askcenter/responses%28for_%29.md): Registers the topic type with the system and returns an asynchronous sequence of responses.
- [CommunicationHandle](communicationhandle.md): Contact information for identifying and communicating with a person.
- [PermissionChoice](permissionchoice.md): A class that uniquely identifies a specific, statically defined permission choice.
- [CommunicationLimits](communicationlimits.md): A type that encapsulates the communication limits for your app.
