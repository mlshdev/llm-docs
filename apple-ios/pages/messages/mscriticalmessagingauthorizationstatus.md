> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/messages/mscriticalmessagingauthorizationstatus](https://developer.apple.com/documentation/messages/mscriticalmessagingauthorizationstatus)

# MSCriticalMessagingAuthorizationStatus

**Framework:** Messages  
**Kind:** Enumeration  
**Availability:** iOS 18.2+ · iPadOS 18.2+

Values that describe the authorization status for the Critical Messaging API.

## Declaration

```swift
enum MSCriticalMessagingAuthorizationStatus
```

## Topics

### Authorization statuses

- [MSCriticalMessagingAuthorizationStatus.unknown](mscriticalmessagingauthorizationstatus/unknown.md): The authorization status is unknown.
- [MSCriticalMessagingAuthorizationStatus.denied](mscriticalmessagingauthorizationstatus/denied.md): A person has denied permission to use the Critical Messaging API.
- [MSCriticalMessagingAuthorizationStatus.approved](mscriticalmessagingauthorizationstatus/approved.md): A person has approved a request to use the Critical Messaging API.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Critical messages

- [Sending SMS messages from an app](critical-messaging-api.md): Send critical messages from inside your app using the Critical Messaging API.
- [MSCriticalSMSMessenger](mscriticalsmsmessenger.md): The user interface for the Critical Messaging API.
- [MSRecipient](msrecipient.md): A structure that describes the recipient of a critical message.
- [MSCriticalMessage](mscriticalmessage.md): A message for critical communications.
