> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/messages/mscriticalmessage](https://developer.apple.com/documentation/messages/mscriticalmessage)

# MSCriticalMessage

**Framework:** Messages  
**Kind:** Structure  
**Availability:** iOS 18.2+ · iPadOS 18.2+

A message for critical communications.

## Declaration

```swift
struct MSCriticalMessage
```

<a id="Overview"></a>

## Overview

Create and send time-sensitive messages that require immediate attention. Critical messages can bypass certain system restrictions to ensure delivery of urgent information.

## Topics

### Creating a message

- [init(messageText:)](mscriticalmessage/init%28messagetext_%29.md): Initializer

### Accessing message content

- [messageText](mscriticalmessage/messagetext.md): The text of the critical message.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Critical messages

- [Sending SMS messages from an app](critical-messaging-api.md): Send critical messages from inside your app using the Critical Messaging API.
- [MSCriticalSMSMessenger](mscriticalsmsmessenger.md): The user interface for the Critical Messaging API.
- [MSRecipient](msrecipient.md): A structure that describes the recipient of a critical message.
- [MSCriticalMessagingAuthorizationStatus](mscriticalmessagingauthorizationstatus.md): Values that describe the authorization status for the Critical Messaging API.
