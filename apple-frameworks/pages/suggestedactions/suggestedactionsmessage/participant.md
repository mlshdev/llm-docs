> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/suggestedactions/suggestedactionsmessage/participant](https://developer.apple.com/documentation/suggestedactions/suggestedactionsmessage/participant)

# SuggestedActionsMessage.Participant

**Framework:** Suggested Actions  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

A sender or recipient of a message in a conversation.

## Declaration

```swift
struct Participant
```

<a id="overview"></a>

## Overview

Create a `Participant` by providing a display name, a handle that uniquely identifies the participant, and a Boolean value that indicates whether the participant is the user of this device. Common handles are phone numbers or email addresses, but you can use any string that uniquely identifies a participant within your app’s user identity system.

To enable the Suggested Actions to tailor the suggested actions to the person who uses a device, make sure the `isUser` parameter of [init(name:handle:isUser:)](participant/init%28name_handle_isuser_%29.md) is `true` for the participant that uses the device. Set `isUser` to `false` for other participants. The following code snippet shows how an app can initialize a `Participant` who uses the current device and a second participant who sends a message from their own device to the first participant’s device:

```swift
// The participant who uses this device.
let user = SuggestedActionsMessage.Participant(
    name: "Anne Johnson",
    handle: "annejohnson1@icloud.com",
    isUser: true
)

// A second participant, usually contact in the conversation.
let contact = SuggestedActionsMessage.Participant(
    name: "Juan Chavez",
    handle: "chavez4@icloud.com",
    isUser: false
)
```

## Topics

### Creating the participant representation

- [init(name:handle:isUser:)](participant/init%28name_handle_isuser_%29.md): Creates a participant in a conversation.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating the message representation

- [init(id:date:subject:body:sender:recipients:)](init%28id_date_subject_body_sender_recipients_%29.md): Creates a representation of a message that the system uses to display suggested actions.
