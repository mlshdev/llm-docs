> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/messages/mscriticalsmsmessenger](https://developer.apple.com/documentation/messages/mscriticalsmsmessenger)

# MSCriticalSMSMessenger

**Framework:** Messages  
**Kind:** Class  
**Availability:** iOS 18.2+ · iPadOS 18.2+

The user interface for the Critical Messaging API.

## Declaration

```swift
@objc class MSCriticalSMSMessenger
```

## Topics

### Determining the maximum allowed recipients

- [maximumCriticalMessagingRecipients](mscriticalsmsmessenger/maximumcriticalmessagingrecipients.md): An integer that defines the maximum number of recipients to which the framework can send messages at one time.

### Requesting authorization

- [requestAuthorization(for:)](mscriticalsmsmessenger/requestauthorization%28for_%29.md): Requests a person’s authorization to send messages to the provided recipients.

### Checking authorization status

- [checkAuthorizationStatus(for:)](mscriticalsmsmessenger/checkauthorizationstatus%28for_%29.md): Confirms the current authorization status for sending critical messages from this app.

### Sending critical messages

- [send(\_:to:)](mscriticalsmsmessenger/send%28__to_%29.md): Sends a critical message to the specified recipient.

### Instance Methods

- [init()](mscriticalsmsmessenger/init%28%29.md): Creates an instance of the critical messenger object.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Critical messages

- [Sending SMS messages from an app](critical-messaging-api.md): Send critical messages from inside your app using the Critical Messaging API.
- [MSRecipient](msrecipient.md): A structure that describes the recipient of a critical message.
- [MSCriticalMessage](mscriticalmessage.md): A message for critical communications.
- [MSCriticalMessagingAuthorizationStatus](mscriticalmessagingauthorizationstatus.md): Values that describe the authorization status for the Critical Messaging API.
