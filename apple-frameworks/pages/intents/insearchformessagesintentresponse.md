> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchformessagesintentresponse](https://developer.apple.com/documentation/intents/insearchformessagesintentresponse)

# INSearchForMessagesIntentResponse (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Your app’s response to a search for messages intent.

## Declaration

```swift
class INSearchForMessagesIntentResponse
```

<a id="overview"></a>

## Overview

Use an [INSearchForMessagesIntentResponse](insearchformessagesintentresponse.md) object to specify the results of searching the user’s messages. After performing a search using the criteria specified in the [INSearchForMessagesIntent](insearchformessagesintent.md) object, create an instance of this class with the results of that search. Siri communicates the status from your response to the user at appropriate times.

You create an [INSearchForMessagesIntentResponse](insearchformessagesintentresponse.md) object in the [confirm(intent:completion:)](insearchformessagesintenthandling/confirm%28intent_completion_%29.md) and [handle(intent:completion:)](insearchformessagesintenthandling/handle%28intent_completion_%29.md) methods of your search for messages handler object. For more information about implementing your handler object, see [INSearchForMessagesIntentHandling](insearchformessagesintenthandling.md).

## Topics

### Initializing the Response Object

- [init(code:userActivity:)](insearchformessagesintentresponse/init%28code_useractivity_%29.md): Initializes the response object with the specified code and user activity object.

### Getting the Response Code

- [code](insearchformessagesintentresponse/code.md): The code indicating whether you successfully handled the intent.
- [INSearchForMessagesIntentResponseCode](insearchformessagesintentresponsecode.md): Constants that indicate the response state.

### Accessing the Response Details

- [messages](insearchformessagesintentresponse/messages.md): The array of messages matching the search parameters.

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

### Searching for Messages

- [INSearchForMessagesIntentHandling](insearchformessagesintenthandling.md): An interface that handles requests to search the current user’s messages.
- [INSearchForMessagesIntent](insearchformessagesintent.md): A request to list the messages that match the specified criteria.

# INSearchForMessagesIntentResponse (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Your app’s response to a search for messages intent.

## Declaration

```objectivec
@interface INSearchForMessagesIntentResponse : INIntentResponse
```

<a id="overview"></a>

## Overview

Use an [INSearchForMessagesIntentResponse](insearchformessagesintentresponse.md) object to specify the results of searching the user’s messages. After performing a search using the criteria specified in the [INSearchForMessagesIntent](insearchformessagesintent.md) object, create an instance of this class with the results of that search. Siri communicates the status from your response to the user at appropriate times.

You create an [INSearchForMessagesIntentResponse](insearchformessagesintentresponse.md) object in the [confirmSearchForMessages:completion:](insearchformessagesintenthandling/confirm%28intent_completion_%29.md) and [handleSearchForMessages:completion:](insearchformessagesintenthandling/handle%28intent_completion_%29.md) methods of your search for messages handler object. For more information about implementing your handler object, see [INSearchForMessagesIntentHandling](insearchformessagesintenthandling.md).

## Topics

### Initializing the Response Object

- [initWithCode:userActivity:](insearchformessagesintentresponse/init%28code_useractivity_%29.md): Initializes the response object with the specified code and user activity object.

### Getting the Response Code

- [code](insearchformessagesintentresponse/code.md): The code indicating whether you successfully handled the intent.
- [INSearchForMessagesIntentResponseCode](insearchformessagesintentresponsecode.md): Constants that indicate the response state.

### Accessing the Response Details

- [messages](insearchformessagesintentresponse/messages.md): The array of messages matching the search parameters.

## Relationships

### Inherits From

- [INIntentResponse](inintentresponse.md)

## See Also

### Searching for Messages

- [INSearchForMessagesIntentHandling](insearchformessagesintenthandling.md): An interface that handles requests to search the current user’s messages.
- [INSearchForMessagesIntent](insearchformessagesintent.md): A request to list the messages that match the specified criteria.
