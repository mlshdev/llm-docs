> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insendmessagerecipientunsupportedreason](https://developer.apple.com/documentation/intents/insendmessagerecipientunsupportedreason)

# INSendMessageRecipientUnsupportedReason (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 4.0+

Constants indicating the reason why a recipient is not supported.

## Declaration

```swift
enum INSendMessageRecipientUnsupportedReason
```

## Topics

### Enumeration Cases

- [INSendMessageRecipientUnsupportedReason.noAccount](insendmessagerecipientunsupportedreason/noaccount.md): A recipient without an account.
- [INSendMessageRecipientUnsupportedReason.offline](insendmessagerecipientunsupportedreason/offline.md): An offline recipient.
- [INSendMessageRecipientUnsupportedReason.messagingServiceNotEnabledForRecipient](insendmessagerecipientunsupportedreason/messagingservicenotenabledforrecipient.md): A recipient for whom messaging is not enabled.
- [INSendMessageRecipientUnsupportedReason.noHandleForLabel](insendmessagerecipientunsupportedreason/nohandleforlabel.md): A recipient for whom there is no handle for the provided label.
- [INSendMessageRecipientUnsupportedReason.noValidHandle](insendmessagerecipientunsupportedreason/novalidhandle.md): A recipient for whom there is no valid handle.
- [INSendMessageRecipientUnsupportedReason.requestedHandleInvalid](insendmessagerecipientunsupportedreason/requestedhandleinvalid.md): A recipient for whom the requested handle is invalid.
- [INSendMessageRecipientUnsupportedReason.requiringInAppAuthentication](insendmessagerecipientunsupportedreason/requiringinappauthentication.md)

### Initializers

- [init(rawValue:)](insendmessagerecipientunsupportedreason/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating a Resolution Result Object

- [unsupported(forReason:)](insendmessagerecipientresolutionresult/unsupported%28forreason_%29.md): Creates an object whose resolution indicates that your app can’t use the specified person as a message recipient.
- [init(personResolutionResult:)](insendmessagerecipientresolutionresult/init%28personresolutionresult_%29.md): Creates a resolution result object with the specified person resolution result object.

# INSendMessageRecipientUnsupportedReason (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 4.0+

Constants indicating the reason why a recipient is not supported.

## Declaration

```objectivec
enum INSendMessageRecipientUnsupportedReason : NSInteger;
```

## Topics

### Enumeration Cases

- [INSendMessageRecipientUnsupportedReasonNoAccount](insendmessagerecipientunsupportedreason/noaccount.md): A recipient without an account.
- [INSendMessageRecipientUnsupportedReasonOffline](insendmessagerecipientunsupportedreason/offline.md): An offline recipient.
- [INSendMessageRecipientUnsupportedReasonMessagingServiceNotEnabledForRecipient](insendmessagerecipientunsupportedreason/messagingservicenotenabledforrecipient.md): A recipient for whom messaging is not enabled.
- [INSendMessageRecipientUnsupportedReasonNoHandleForLabel](insendmessagerecipientunsupportedreason/nohandleforlabel.md): A recipient for whom there is no handle for the provided label.
- [INSendMessageRecipientUnsupportedReasonNoValidHandle](insendmessagerecipientunsupportedreason/novalidhandle.md): A recipient for whom there is no valid handle.
- [INSendMessageRecipientUnsupportedReasonRequestedHandleInvalid](insendmessagerecipientunsupportedreason/requestedhandleinvalid.md): A recipient for whom the requested handle is invalid.
- [INSendMessageRecipientUnsupportedReasonRequiringInAppAuthentication](insendmessagerecipientunsupportedreason/requiringinappauthentication.md)

## See Also

### Creating a Resolution Result Object

- [unsupportedForReason:](insendmessagerecipientresolutionresult/unsupported%28forreason_%29.md): Creates an object whose resolution indicates that your app can’t use the specified person as a message recipient.
- [initWithPersonResolutionResult:](insendmessagerecipientresolutionresult/init%28personresolutionresult_%29.md): Creates a resolution result object with the specified person resolution result object.
