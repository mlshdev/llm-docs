> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/suggestedactions/suggestedactionsmessage](https://developer.apple.com/documentation/suggestedactions/suggestedactionsmessage)

# SuggestedActionsMessage

**Framework:** Suggested Actions  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

A representation of the message you use as context for suggested actions.

## Declaration

```swift
struct SuggestedActionsMessage
```

<a id="overview"></a>

## Overview

Create a `SuggestedActionsMessage` from your app’s data model for a message, then pass it to [init(message:previousMessages:)](suggestedactionsview/init%28message_previousmessages_%29.md) or [generate(message:previousMessages:)](suggestedactionsview/generate%28message_previousmessages_%29.md).

The `id` you pass to the create a `SuggestedActionsMessage` must be unique for each message and stable across app launches. Creating stable identifiers lets the framework match messages against previously cached suggested actions.

> **Note**

> To use the Suggested Actions framework, add the [Suggested Actions](../bundleresources/entitlements/com.apple.developer.suggested-actions.md) entitlement to your app target.

## Topics

### Creating the message representation

- [init(id:date:subject:body:sender:recipients:)](suggestedactionsmessage/init%28id_date_subject_body_sender_recipients_%29.md): Creates a representation of a message that the system uses to display suggested actions.
- [SuggestedActionsMessage.Participant](suggestedactionsmessage/participant.md): A sender or recipient of a message in a conversation.

### Accessing the considered number of messages

- [previousMessagesLimit](suggestedactionsmessage/previousmessageslimit.md): The maximum number of previous messages that contribute to generating suggested actions.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Displaying suggested actions

- [init(message:previousMessages:)](suggestedactionsview/init%28message_previousmessages_%29.md): Creates a view that shows suggested actions for the specified message.
- [generate(message:previousMessages:)](suggestedactionsview/generate%28message_previousmessages_%29.md): Fetches and caches suggested actions for the provided message.
