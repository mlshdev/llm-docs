> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/custommessageidentifiable](https://developer.apple.com/documentation/groupactivities/custommessageidentifiable)

# CustomMessageIdentifiable

**Framework:** Group Activities  
**Kind:** Protocol  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

A type that assigns a custom ID string to messages you send to other devices.

## Declaration

```swift
protocol CustomMessageIdentifiable
```

<a id="overview"></a>

## Overview

Adopt this protocol in the custom types you use to send and receive messages during a group activity. You use a [GroupSessionMessenger](groupsessionmessenger.md) object to send custom messages between the same app on different devices. In addition to the message data, [GroupSessionMessenger](groupsessionmessenger.md) encodes your custom type name so that it can construct the correct type on those other devices. Use this protocol to identify your custom message types using an app-specific string instead of the type name.

Providing an app-specific string makes it possible to use different types to support messages. When the message data contains a custom message ID, [GroupSessionMessenger](groupsessionmessenger.md) looks for a type that conforms to the protocol with a [messageIdentifier](custommessageidentifiable/messageidentifier.md) property that contains the matching string. It then creates that type and decodes the message data into it.

> **Note**

> Custom types that adopt this protocol must also adopt the [Codable](https://developer.apple.com/documentation/swift/codable) protocol.

## Topics

### Type Properties

- [messageIdentifier](custommessageidentifiable/messageidentifier.md): A custom identification string for the current type.

## See Also

### Session management

- [Joining and managing a shared activity](joining-and-managing-a-shared-activity.md): Configure the session when a SharePlay activity starts, and handle events that occur during the lifetime of the activity.
- [Drawing content in a group session](drawing-content-in-a-group-session.md): Invite your friends to draw on a shared canvas while on a FaceTime call.
- [GroupSession](groupsession.md): A session for an in-progress activity that synchronizes content among participant devices.
- [Participant](participant.md): An active participant in a group session.
