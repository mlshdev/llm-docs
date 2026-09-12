> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insendmessageintentresponse](https://developer.apple.com/documentation/intents/insendmessageintentresponse)

# INSendMessageIntentResponse (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 3.2+

Your app’s response to a send message intent.

## Declaration

```swift
class INSendMessageIntentResponse
```

## Mentioned In

- [Improving interactions between Siri and your messaging app](../sirikit/improving-interactions-between-siri-and-your-messaging-app.md)

<a id="overview"></a>

## Overview

Use an [INSendMessageIntentResponse](insendmessageintentresponse.md) object to specify the results of sending a message to another user. You create instances of this class when confirming or handling a send message intent. Use this object to communicate whether the message was successfully sent or whether an error occurred.

You create an [INSendMessageIntentResponse](insendmessageintentresponse.md) object in the [confirm(intent:completion:)](insendmessageintenthandling/confirm%28intent_completion_%29.md) and [handle(intent:completion:)](insendmessageintenthandling/handle%28intent_completion_%29.md) methods of your send message handler object. For more information about implementing your handler object, see [INSendMessageIntentHandling](insendmessageintenthandling.md).

## Topics

### Initializing the Response Object

- [init(code:userActivity:)](insendmessageintentresponse/init%28code_useractivity_%29.md): Initializes the response object with the specified code and user activity object.

### Getting the Response Code

- [code](insendmessageintentresponse/code.md): The code indicating whether you successfully handled the intent.
- [INSendMessageIntentResponseCode](insendmessageintentresponsecode.md): Constants that indicate the response state.

### Providing the Message

- [sentMessage](insendmessageintentresponse/sentmessage.md): Deprecated. The message sent by the intent.

### Instance Properties

- [sentMessages](insendmessageintentresponse/sentmessages.md)

## Relationships

### Inherits From

- [INIntentResponse](inintentresponse.md)

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
- [INOutgoingMessageType](inoutgoingmessagetype.md): The format of the message.
- [INSendMessageAttachment](insendmessageattachment.md): A file to include in a message.
- [INSendMessageIntentDonationMetadata](insendmessageintentdonationmetadata.md)

# INSendMessageIntentResponse (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 3.2+

Your app’s response to a send message intent.

## Declaration

```objectivec
@interface INSendMessageIntentResponse : INIntentResponse
```

## Mentioned In

- [Improving interactions between Siri and your messaging app](../sirikit/improving-interactions-between-siri-and-your-messaging-app.md)

<a id="overview"></a>

## Overview

Use an [INSendMessageIntentResponse](insendmessageintentresponse.md) object to specify the results of sending a message to another user. You create instances of this class when confirming or handling a send message intent. Use this object to communicate whether the message was successfully sent or whether an error occurred.

You create an [INSendMessageIntentResponse](insendmessageintentresponse.md) object in the [confirmSendMessage:completion:](insendmessageintenthandling/confirm%28intent_completion_%29.md) and [handleSendMessage:completion:](insendmessageintenthandling/handle%28intent_completion_%29.md) methods of your send message handler object. For more information about implementing your handler object, see [INSendMessageIntentHandling](insendmessageintenthandling.md).

## Topics

### Initializing the Response Object

- [initWithCode:userActivity:](insendmessageintentresponse/init%28code_useractivity_%29.md): Initializes the response object with the specified code and user activity object.

### Getting the Response Code

- [code](insendmessageintentresponse/code.md): The code indicating whether you successfully handled the intent.
- [INSendMessageIntentResponseCode](insendmessageintentresponsecode.md): Constants that indicate the response state.

### Providing the Message

- [sentMessage](insendmessageintentresponse/sentmessage.md): Deprecated. The message sent by the intent.

### Instance Properties

- [sentMessages](insendmessageintentresponse/sentmessages.md)

## Relationships

### Inherits From

- [INIntentResponse](inintentresponse.md)

## See Also

### Sending a Message

- [INSendMessageIntentHandling](insendmessageintenthandling.md): An interface to handle sending messages to one or more designated users.
- [INSendMessageIntent](insendmessageintent.md): A request to send a message to the designated recipients.
- [INOutgoingMessageType](inoutgoingmessagetype.md): The format of the message.
- [INSendMessageAttachment](insendmessageattachment.md): A file to include in a message.
- [INSendMessageIntentDonationMetadata](insendmessageintentdonationmetadata.md)
