> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/permissionkit/significantappupdatetopic](https://developer.apple.com/documentation/permissionkit/significantappupdatetopic)

# SignificantAppUpdateTopic

**Framework:** PermissionKit  
**Kind:** Structure  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+ · macOS 26.2+ · visionOS 26.2+

A topic for requesting permission for significant app updates.

## Declaration

```swift
struct SignificantAppUpdateTopic
```

<a id="overview"></a>

## Overview

Use `SignificantAppUpdateTopic` when your app has a significant update that requires parents or guardians to consent on behalf of their child. This topic helps you create consistent asking experiences that may comply with regulations that require notification or permission for app changes. You determine what constitutes a significant update based on applicable regulations.

Use concise, understandable language that clearly explains what changed in your app. Parents and guardians see this description when deciding whether to grant permission.

```swift
// Specific
let topic = SignificantAppUpdateTopic(
     description: "This update adds video calling and location sharing features."
)

// Vague
let topic = SignificantAppUpdateTopic(
    description: "We've made improvements to the app."
)
```

## Topics

### Creating topics

- [init(description:)](significantappupdatetopic/init%28description_%29.md): Creates a new significant app update topic with the specified description.

### Accessing properties

- [description](significantappupdatetopic/description.md): A description of the significant update that initiates the permission question.
- [id](significantappupdatetopic/id.md): The unique identifier the system uses to categorize this topic type.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [QuestionTopic](questiontopic.md)

## See Also

### Permission topics

- [CommunicationTopic](communicationtopic.md): A topic for requesting communication permission with specific people.
