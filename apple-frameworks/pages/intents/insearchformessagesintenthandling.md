> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchformessagesintenthandling](https://developer.apple.com/documentation/intents/insearchformessagesintenthandling)

# INSearchForMessagesIntentHandling (Swift)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

An interface that handles requests to search the current user’s messages.

## Declaration

```swift
protocol INSearchForMessagesIntentHandling : NSObjectProtocol
```

## Mentioned In

- [Dispatching intents to handlers](../sirikit/dispatching-intents-to-handlers.md)

<a id="overview"></a>

## Overview

Use the methods of the [INSearchForMessagesIntentHandling](insearchformessagesintenthandling.md) protocol to resolve, confirm, and handle requests to search the current user’s messages. Adopt this protocol in an object of your Intents extension capable of searching your app’s messages.

Siri delivers an [INSearchForMessagesIntent](insearchformessagesintent.md) object to your handler when the user asks to search their messages. The provided intent object contains the search parameters to use when matching messages. Use the methods of this protocol to resolve the search parameters, to perform the search, and to return the results.

## Topics

### Resolving the Intent Parameters

- [resolveRecipients(for:with:)](insearchformessagesintenthandling/resolverecipients%28for_with_%29.md): Resolves the user’s input when they search for messages sent to specific people.
- [resolveSenders(for:with:)](insearchformessagesintenthandling/resolvesenders%28for_with_%29.md): Resolves the user’s input when they search for messages sent by specific people.
- [resolveAttributes(for:with:)](insearchformessagesintenthandling/resolveattributes%28for_with_%29.md): Resolves the user’s input when they search for messages with specific attributes.
- [resolveDateTimeRange(for:with:)](insearchformessagesintenthandling/resolvedatetimerange%28for_with_%29.md): Resolves the user’s input when they search for messages sent in a specific time period.
- [resolveSpeakableGroupNames(for:with:)](insearchformessagesintenthandling/resolvespeakablegroupnames%28for_with_%29.md): Resolves the user’s input when they search for messages sent to a specific group of people.
- [resolveGroupNames(for:with:)](insearchformessagesintenthandling/resolvegroupnames%28for_with_%29.md): Deprecated. Resolves the user’s input when they search for messages sent to a specific group of people.

### Confirming the Response

- [confirm(intent:completion:)](insearchformessagesintenthandling/confirm%28intent_completion_%29.md): Confirms whether you can perform the search.

### Handling the Intent

- [handle(intent:completion:)](insearchformessagesintenthandling/handle%28intent_completion_%29.md): Performs the search and returns the results.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Inherited By

- [INMessagesDomainHandling](inmessagesdomainhandling.md)

## See Also

### Searching for Messages

- [INSearchForMessagesIntent](insearchformessagesintent.md): A request to list the messages that match the specified criteria.
- [INSearchForMessagesIntentResponse](insearchformessagesintentresponse.md): Your app’s response to a search for messages intent.

# INSearchForMessagesIntentHandling (Objective-C)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

An interface that handles requests to search the current user’s messages.

## Declaration

```objectivec
@protocol INSearchForMessagesIntentHandling <NSObject>
```

## Mentioned In

- [Dispatching intents to handlers](../sirikit/dispatching-intents-to-handlers.md)

<a id="overview"></a>

## Overview

Use the methods of the [INSearchForMessagesIntentHandling](insearchformessagesintenthandling.md) protocol to resolve, confirm, and handle requests to search the current user’s messages. Adopt this protocol in an object of your Intents extension capable of searching your app’s messages.

Siri delivers an [INSearchForMessagesIntent](insearchformessagesintent.md) object to your handler when the user asks to search their messages. The provided intent object contains the search parameters to use when matching messages. Use the methods of this protocol to resolve the search parameters, to perform the search, and to return the results.

## Topics

### Resolving the Intent Parameters

- [resolveRecipientsForSearchForMessages:withCompletion:](insearchformessagesintenthandling/resolverecipients%28for_with_%29.md): Resolves the user’s input when they search for messages sent to specific people.
- [resolveSendersForSearchForMessages:withCompletion:](insearchformessagesintenthandling/resolvesenders%28for_with_%29.md): Resolves the user’s input when they search for messages sent by specific people.
- [resolveAttributesForSearchForMessages:withCompletion:](insearchformessagesintenthandling/resolveattributes%28for_with_%29.md): Resolves the user’s input when they search for messages with specific attributes.
- [resolveDateTimeRangeForSearchForMessages:withCompletion:](insearchformessagesintenthandling/resolvedatetimerange%28for_with_%29.md): Resolves the user’s input when they search for messages sent in a specific time period.
- [resolveSpeakableGroupNamesForSearchForMessages:withCompletion:](insearchformessagesintenthandling/resolvespeakablegroupnames%28for_with_%29.md): Resolves the user’s input when they search for messages sent to a specific group of people.
- [resolveGroupNamesForSearchForMessages:withCompletion:](insearchformessagesintenthandling/resolvegroupnames%28for_with_%29.md): Deprecated. Resolves the user’s input when they search for messages sent to a specific group of people.

### Confirming the Response

- [confirmSearchForMessages:completion:](insearchformessagesintenthandling/confirm%28intent_completion_%29.md): Confirms whether you can perform the search.

### Handling the Intent

- [handleSearchForMessages:completion:](insearchformessagesintenthandling/handle%28intent_completion_%29.md): Performs the search and returns the results.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Inherited By

- [INMessagesDomainHandling](inmessagesdomainhandling.md)

## See Also

### Searching for Messages

- [INSearchForMessagesIntent](insearchformessagesintent.md): A request to list the messages that match the specified criteria.
- [INSearchForMessagesIntentResponse](insearchformessagesintentresponse.md): Your app’s response to a search for messages intent.
