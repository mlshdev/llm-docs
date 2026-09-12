> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insetmessageattributeintentresponse](https://developer.apple.com/documentation/intents/insetmessageattributeintentresponse)

# INSetMessageAttributeIntentResponse (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Your app’s response to a set message attribute intent.

## Declaration

```swift
class INSetMessageAttributeIntentResponse
```

<a id="overview"></a>

## Overview

An [INSetMessageAttributeIntentResponse](insetmessageattributeintentresponse.md) object contains the status of modifying the specified messages. You create instances of this class when confirming or handling a set message attribute intent.

You create an [INSetMessageAttributeIntentResponse](insetmessageattributeintentresponse.md) object in the [confirm(intent:completion:)](insetmessageattributeintenthandling/confirm%28intent_completion_%29.md) and [handle(intent:completion:)](insetmessageattributeintenthandling/handle%28intent_completion_%29.md) methods of your set message attribute handler object. For more information about implementing your handler object, see [INSetMessageAttributeIntentHandling](insetmessageattributeintenthandling.md).

## Topics

### Initializing the Response Object

- [init(code:userActivity:)](insetmessageattributeintentresponse/init%28code_useractivity_%29.md): Initializes the response object with the specified code and user activity object.

### Getting the Response Code

- [code](insetmessageattributeintentresponse/code.md): The code indicating whether you successfully handled the intent.
- [INSetMessageAttributeIntentResponseCode](insetmessageattributeintentresponsecode.md): Constants that indicate the response state.

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

### Setting Message Attributes

- [INSetMessageAttributeIntentHandling](insetmessageattributeintenthandling.md): An interface that handles modifying message attributes.
- [INSetMessageAttributeIntent](insetmessageattributeintent.md): A request to modify the attributes of a message.

# INSetMessageAttributeIntentResponse (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Your app’s response to a set message attribute intent.

## Declaration

```objectivec
@interface INSetMessageAttributeIntentResponse : INIntentResponse
```

<a id="overview"></a>

## Overview

An [INSetMessageAttributeIntentResponse](insetmessageattributeintentresponse.md) object contains the status of modifying the specified messages. You create instances of this class when confirming or handling a set message attribute intent.

You create an [INSetMessageAttributeIntentResponse](insetmessageattributeintentresponse.md) object in the [confirmSetMessageAttribute:completion:](insetmessageattributeintenthandling/confirm%28intent_completion_%29.md) and [handleSetMessageAttribute:completion:](insetmessageattributeintenthandling/handle%28intent_completion_%29.md) methods of your set message attribute handler object. For more information about implementing your handler object, see [INSetMessageAttributeIntentHandling](insetmessageattributeintenthandling.md).

## Topics

### Initializing the Response Object

- [initWithCode:userActivity:](insetmessageattributeintentresponse/init%28code_useractivity_%29.md): Initializes the response object with the specified code and user activity object.

### Getting the Response Code

- [code](insetmessageattributeintentresponse/code.md): The code indicating whether you successfully handled the intent.
- [INSetMessageAttributeIntentResponseCode](insetmessageattributeintentresponsecode.md): Constants that indicate the response state.

## Relationships

### Inherits From

- [INIntentResponse](inintentresponse.md)

## See Also

### Setting Message Attributes

- [INSetMessageAttributeIntentHandling](insetmessageattributeintenthandling.md): An interface that handles modifying message attributes.
- [INSetMessageAttributeIntent](insetmessageattributeintent.md): A request to modify the attributes of a message.
