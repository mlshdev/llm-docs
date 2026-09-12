> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insetmessageattributeintenthandling](https://developer.apple.com/documentation/intents/insetmessageattributeintenthandling)

# INSetMessageAttributeIntentHandling (Swift)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An interface that handles modifying message attributes.

## Declaration

```swift
protocol INSetMessageAttributeIntentHandling : NSObjectProtocol
```

## Mentioned In

- [Dispatching intents to handlers](../sirikit/dispatching-intents-to-handlers.md)

<a id="overview"></a>

## Overview

Use the methods of the [INSetMessageAttributeIntentHandling](insetmessageattributeintenthandling.md) protocol to resolve, confirm, and handle requests to modify attributes of a user’s messages. Adopt this protocol in an object of your Intents extension that is capable of updating the state of messages, such as whether a user has read or flagged the message.

Siri delivers an [INSetMessageAttributeIntent](insetmessageattributeintent.md) object to your handler when the user asks to modify one or more messages. The provided intent object contains the identifier strings for the messages to modify and information about which attributes to set. Use the methods of this protocol to resolve whether you can modify the messages in the intended way and to make the modifications.

## Topics

### Resolving the Intent Parameters

- [resolveAttribute(for:with:)](insetmessageattributeintenthandling/resolveattribute%28for_with_%29.md): Resolves the attribute to apply to the messages.

### Confirming the Response

- [confirm(intent:completion:)](insetmessageattributeintenthandling/confirm%28intent_completion_%29.md): Confirms that you can modify the attributes.

### Handling the Intent

- [handle(intent:completion:)](insetmessageattributeintenthandling/handle%28intent_completion_%29.md): Handles modifying the message attributes.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Inherited By

- [INMessagesDomainHandling](inmessagesdomainhandling.md)

## See Also

### Setting Message Attributes

- [INSetMessageAttributeIntent](insetmessageattributeintent.md): A request to modify the attributes of a message.
- [INSetMessageAttributeIntentResponse](insetmessageattributeintentresponse.md): Your app’s response to a set message attribute intent.

# INSetMessageAttributeIntentHandling (Objective-C)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An interface that handles modifying message attributes.

## Declaration

```objectivec
@protocol INSetMessageAttributeIntentHandling <NSObject>
```

## Mentioned In

- [Dispatching intents to handlers](../sirikit/dispatching-intents-to-handlers.md)

<a id="overview"></a>

## Overview

Use the methods of the [INSetMessageAttributeIntentHandling](insetmessageattributeintenthandling.md) protocol to resolve, confirm, and handle requests to modify attributes of a user’s messages. Adopt this protocol in an object of your Intents extension that is capable of updating the state of messages, such as whether a user has read or flagged the message.

Siri delivers an [INSetMessageAttributeIntent](insetmessageattributeintent.md) object to your handler when the user asks to modify one or more messages. The provided intent object contains the identifier strings for the messages to modify and information about which attributes to set. Use the methods of this protocol to resolve whether you can modify the messages in the intended way and to make the modifications.

## Topics

### Resolving the Intent Parameters

- [resolveAttributeForSetMessageAttribute:withCompletion:](insetmessageattributeintenthandling/resolveattribute%28for_with_%29.md): Resolves the attribute to apply to the messages.

### Confirming the Response

- [confirmSetMessageAttribute:completion:](insetmessageattributeintenthandling/confirm%28intent_completion_%29.md): Confirms that you can modify the attributes.

### Handling the Intent

- [handleSetMessageAttribute:completion:](insetmessageattributeintenthandling/handle%28intent_completion_%29.md): Handles modifying the message attributes.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Inherited By

- [INMessagesDomainHandling](inmessagesdomainhandling.md)

## See Also

### Setting Message Attributes

- [INSetMessageAttributeIntent](insetmessageattributeintent.md): A request to modify the attributes of a message.
- [INSetMessageAttributeIntentResponse](insetmessageattributeintentresponse.md): Your app’s response to a set message attribute intent.
