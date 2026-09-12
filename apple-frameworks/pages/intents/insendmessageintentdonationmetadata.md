> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insendmessageintentdonationmetadata](https://developer.apple.com/documentation/intents/insendmessageintentdonationmetadata)

# INSendMessageIntentDonationMetadata (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 8.0+

## Declaration

```swift
class INSendMessageIntentDonationMetadata
```

## Topics

### Initializers

- [init()](insendmessageintentdonationmetadata/init%28%29.md)

### Instance Properties

- [isReplyToCurrentUser](insendmessageintentdonationmetadata/isreplytocurrentuser.md)
- [mentionsCurrentUser](insendmessageintentdonationmetadata/mentionscurrentuser.md)
- [notifyRecipientAnyway](insendmessageintentdonationmetadata/notifyrecipientanyway.md)
- [recipientCount](insendmessageintentdonationmetadata/recipientcount.md)

## Relationships

### Inherits From

- [INIntentDonationMetadata](inintentdonationmetadata.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Sending a Message

- [INSendMessageIntentHandling](insendmessageintenthandling.md): An interface to handle sending messages to one or more designated users.
- [INSendMessageIntent](insendmessageintent.md): A request to send a message to the designated recipients.
- [INSendMessageIntentResponse](insendmessageintentresponse.md): Your app’s response to a send message intent.
- [INOutgoingMessageType](inoutgoingmessagetype.md): The format of the message.
- [INSendMessageAttachment](insendmessageattachment.md): A file to include in a message.

# INSendMessageIntentDonationMetadata (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 8.0+

## Declaration

```objectivec
@interface INSendMessageIntentDonationMetadata : INIntentDonationMetadata
```

## Topics

### Instance Properties

- [replyToCurrentUser](insendmessageintentdonationmetadata/isreplytocurrentuser.md)
- [mentionsCurrentUser](insendmessageintentdonationmetadata/mentionscurrentuser.md)
- [notifyRecipientAnyway](insendmessageintentdonationmetadata/notifyrecipientanyway.md)
- [recipientCount](insendmessageintentdonationmetadata/recipientcount.md)

### Instance Methods

- [init](insendmessageintentdonationmetadata/init%28%29.md)

## Relationships

### Inherits From

- [INIntentDonationMetadata](inintentdonationmetadata.md)

## See Also

### Sending a Message

- [INSendMessageIntentHandling](insendmessageintenthandling.md): An interface to handle sending messages to one or more designated users.
- [INSendMessageIntent](insendmessageintent.md): A request to send a message to the designated recipients.
- [INSendMessageIntentResponse](insendmessageintentresponse.md): Your app’s response to a send message intent.
- [INOutgoingMessageType](inoutgoingmessagetype.md): The format of the message.
- [INSendMessageAttachment](insendmessageattachment.md): A file to include in a message.
