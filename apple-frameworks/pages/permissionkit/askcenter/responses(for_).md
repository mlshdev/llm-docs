> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/permissionkit/askcenter/responses(for:)](https://developer.apple.com/documentation/permissionkit/askcenter/responses(for:))

# responses(for:)

**Framework:** PermissionKit  
**Kind:** Instance Method  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+ · macOS 26.2+ · visionOS 26.2+

Registers the topic type with the system and returns an asynchronous sequence of responses.

## Declaration

```swift
final func responses<Topic>(for topicType: Topic.Type) -> some AsyncSequence<PermissionResponse<Topic>, Never> where Topic : QuestionTopic

```

## Parameters

- `topicType`: The type of the topic to register.

## See Also

### Response management

- [PermissionResponse](../permissionresponse.md): A full permission response that includes the original question and chosen answer.
- [CommunicationHandle](../communicationhandle.md): Contact information for identifying and communicating with a person.
- [PermissionChoice](../permissionchoice.md): A class that uniquely identifies a specific, statically defined permission choice.
- [CommunicationLimits](../communicationlimits.md): A type that encapsulates the communication limits for your app.
