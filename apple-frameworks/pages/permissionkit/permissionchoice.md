> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/permissionkit/permissionchoice](https://developer.apple.com/documentation/permissionkit/permissionchoice)

# PermissionChoice

**Framework:** PermissionKit  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

A class that uniquely identifies a specific, statically defined permission choice.

## Declaration

```swift
struct PermissionChoice
```

## Mentioned In

- [Creating a communication experience](creating-a-communication-experience.md)

<a id="overview"></a>

## Overview

Each [PermissionQuestion](permissionquestion.md) contains a set of possible answer choices, each corresponding to a globally unique identifier that you can interpret.

The code below is an example of how to use `PermissionChoice` to set permission choices for a person using your app.

```swift
   let approveOneHour = PermissionChoice(id: AnswerIdentifier.approveOneHour,
   title: "Approve for one hour", answer: .approval)
   let approveAllDay = PermissionChoice(id: AnswerIdentifier.approveAllDay,
    title: "Approve all day", answer: .approval)
   let approveIndefinitely = PermissionChoice(id: AnswerIdentifier.approveIndefinitely,
     title: "Approve indefinitely", answer: .approval)
   let decline = PermissionChoice(id: AnswerIdentifier.decline,
                          title: "Decline", answer: .denial)
```

If your application only requires a yes or no response, you can use the two predefined `PermissionChoice` options: [approve](permissionchoice/approve.md) and [decline](permissionchoice/decline.md).

## Topics

### Accessing answers

- [answer](permissionchoice/answer-swift.property.md): The type of answer this choice represents.
- [PermissionChoice.Answer](permissionchoice/answer-swift.enum.md): An answer to the permission request.
- [approve](permissionchoice/approve.md): The system-preferred choice to approve a permission request.
- [decline](permissionchoice/decline.md): The system-preferred choice to decline a permission request.

### Identifying permissions

- [id](permissionchoice/id.md): A unique identifier for this choice.
- [title](permissionchoice/title.md): The title of the choice that’s displayed to the person by the system.

### Computing hashes

- [hash(into:)](permissionchoice/hash%28into_%29.md): Performs a hash operation on the value by feeding its hash values into the given hasher.
- [==(\_:\_:)](permissionchoice/==%28____%29.md): Returns a Boolean value indicating whether two values are equal.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)

## See Also

### Response management

- [responses(for:)](askcenter/responses%28for_%29.md): Registers the topic type with the system and returns an asynchronous sequence of responses.
- [PermissionResponse](permissionresponse.md): A full permission response that includes the original question and chosen answer.
- [CommunicationHandle](communicationhandle.md): Contact information for identifying and communicating with a person.
- [CommunicationLimits](communicationlimits.md): A type that encapsulates the communication limits for your app.
