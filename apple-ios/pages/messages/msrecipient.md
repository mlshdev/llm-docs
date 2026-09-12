> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/messages/msrecipient](https://developer.apple.com/documentation/messages/msrecipient)

# MSRecipient

**Framework:** Messages  
**Kind:** Structure  
**Availability:** iOS 18.2+ · iPadOS 18.2+

A structure that describes the recipient of a critical message.

## Declaration

```swift
struct MSRecipient
```

## Topics

### Creating recipients

- [init(phoneNumber:)](msrecipient/init%28phonenumber_%29.md): Creates a new critical message recipient with the provided phone number.

### Properties

- [phoneNumber](msrecipient/phonenumber.md): The phone number of a critical message recipient.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Critical messages

- [Sending SMS messages from an app](critical-messaging-api.md): Send critical messages from inside your app using the Critical Messaging API.
- [MSCriticalSMSMessenger](mscriticalsmsmessenger.md): The user interface for the Critical Messaging API.
- [MSCriticalMessage](mscriticalmessage.md): A message for critical communications.
- [MSCriticalMessagingAuthorizationStatus](mscriticalmessagingauthorizationstatus.md): Values that describe the authorization status for the Critical Messaging API.
