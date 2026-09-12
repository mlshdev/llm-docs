> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insendmessageintenthandling](https://developer.apple.com/documentation/intents/insendmessageintenthandling)

# INSendMessageIntentHandling (Swift)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 3.2+

An interface to handle sending messages to one or more designated users.

## Declaration

```swift
protocol INSendMessageIntentHandling : NSObjectProtocol
```

## Mentioned In

- [Dispatching intents to handlers](../sirikit/dispatching-intents-to-handlers.md)

<a id="overview"></a>

## Overview

Use the methods of the [INSendMessageIntentHandling](insendmessageintenthandling.md) protocol to resolve, confirm, and handle requests to send text or audio messages to the designated users. Adopt this protocol in an object of your Intents extension that is capable of sending the messages.

Siri delivers an [INSendMessageIntent](insendmessageintent.md) object to your handler when the user asks to send a message using your app. The provided intent object contains the recipients and content of the message. Use the methods of this protocol to resolve the parameters and to validate that sending the message is possible.

## Topics

### Resolving the Intent Parameters

- [resolveRecipients(for:with:)](insendmessageintenthandling/resolverecipients%28for_with_%29-609yw.md): Resolves the user’s input when it isn’t clear who the recipients of the message are.
- [resolveOutgoingMessageType(for:with:)](insendmessageintenthandling/resolveoutgoingmessagetype%28for_with_%29.md): Determines what type of message to send.
- [resolveContent(for:with:)](insendmessageintenthandling/resolvecontent%28for_with_%29.md): Resolves the contents of the message.
- [resolveSpeakableGroupName(for:with:)](insendmessageintenthandling/resolvespeakablegroupname%28for_with_%29.md): Resolves the name of the group receiving the message.

### Confirming the Response

- [confirm(intent:completion:)](insendmessageintenthandling/confirm%28intent_completion_%29.md): Confirms that you can send the message.

### Handling the Intent

- [handle(intent:completion:)](insendmessageintenthandling/handle%28intent_completion_%29.md): Sends the message to the specified recipients.

### Deprecated Methods

- [resolveRecipients(for:with:)](insendmessageintenthandling/resolverecipients%28for_with_%29-2yejx.md): Deprecated. Resolves the recipients of the message.
- [resolveGroupName(for:with:)](insendmessageintenthandling/resolvegroupname%28for_with_%29.md): Deprecated. Resolves the name of the group receiving the message.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Inherited By

- [INMessagesDomainHandling](inmessagesdomainhandling.md)

## See Also

### Sending a Message

- [INSendMessageIntent](insendmessageintent.md): A request to send a message to the designated recipients.
- [INSendMessageIntentResponse](insendmessageintentresponse.md): Your app’s response to a send message intent.
- [INOutgoingMessageType](inoutgoingmessagetype.md): The format of the message.
- [INSendMessageAttachment](insendmessageattachment.md): A file to include in a message.
- [INSendMessageIntentDonationMetadata](insendmessageintentdonationmetadata.md)

# INSendMessageIntentHandling (Objective-C)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 3.2+

An interface to handle sending messages to one or more designated users.

## Declaration

```objectivec
@protocol INSendMessageIntentHandling <NSObject>
```

## Mentioned In

- [Dispatching intents to handlers](../sirikit/dispatching-intents-to-handlers.md)

<a id="overview"></a>

## Overview

Use the methods of the [INSendMessageIntentHandling](insendmessageintenthandling.md) protocol to resolve, confirm, and handle requests to send text or audio messages to the designated users. Adopt this protocol in an object of your Intents extension that is capable of sending the messages.

Siri delivers an [INSendMessageIntent](insendmessageintent.md) object to your handler when the user asks to send a message using your app. The provided intent object contains the recipients and content of the message. Use the methods of this protocol to resolve the parameters and to validate that sending the message is possible.

## Topics

### Resolving the Intent Parameters

- [resolveRecipientsForSendMessage:completion:](insendmessageintenthandling/resolverecipients%28for_with_%29-609yw.md): Resolves the user’s input when it isn’t clear who the recipients of the message are.
- [resolveOutgoingMessageTypeForSendMessage:withCompletion:](insendmessageintenthandling/resolveoutgoingmessagetype%28for_with_%29.md): Determines what type of message to send.
- [resolveContentForSendMessage:withCompletion:](insendmessageintenthandling/resolvecontent%28for_with_%29.md): Resolves the contents of the message.
- [resolveSpeakableGroupNameForSendMessage:withCompletion:](insendmessageintenthandling/resolvespeakablegroupname%28for_with_%29.md): Resolves the name of the group receiving the message.

### Confirming the Response

- [confirmSendMessage:completion:](insendmessageintenthandling/confirm%28intent_completion_%29.md): Confirms that you can send the message.

### Handling the Intent

- [handleSendMessage:completion:](insendmessageintenthandling/handle%28intent_completion_%29.md): Sends the message to the specified recipients.

### Deprecated Methods

- [resolveRecipientsForSendMessage:withCompletion:](insendmessageintenthandling/resolverecipients%28for_with_%29-2yejx.md): Deprecated. Resolves the recipients of the message.
- [resolveGroupNameForSendMessage:withCompletion:](insendmessageintenthandling/resolvegroupname%28for_with_%29.md): Deprecated. Resolves the name of the group receiving the message.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Inherited By

- [INMessagesDomainHandling](inmessagesdomainhandling.md)

## See Also

### Sending a Message

- [INSendMessageIntent](insendmessageintent.md): A request to send a message to the designated recipients.
- [INSendMessageIntentResponse](insendmessageintentresponse.md): Your app’s response to a send message intent.
- [INOutgoingMessageType](inoutgoingmessagetype.md): The format of the message.
- [INSendMessageAttachment](insendmessageattachment.md): A file to include in a message.
- [INSendMessageIntentDonationMetadata](insendmessageintentdonationmetadata.md)
