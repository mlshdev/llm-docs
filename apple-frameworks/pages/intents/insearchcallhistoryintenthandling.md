> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchcallhistoryintenthandling](https://developer.apple.com/documentation/intents/insearchcallhistoryintenthandling)

# INSearchCallHistoryIntentHandling (Swift)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

The handler interface for searching the user’s call history.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
protocol INSearchCallHistoryIntentHandling : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Use the methods of the [INSearchCallHistoryIntentHandling](insearchcallhistoryintenthandling.md) protocol to resolve, confirm, and handle requests to search for calls in the user’s call history. Adopt this protocol in an object of your Intents extension that’s capable of performing the search and finding any matching records. Siri doesn’t display the call information found during the search. After a successful search, Siri launches your app to display that information.

Siri delivers an [INSearchCallHistoryIntent](insearchcallhistoryintent.md) object to your handler when the user asks to search their call history. The provided intent object contains the search parameters, such as any contacts involved in the call or the range of dates to search. Use the methods of this protocol to resolve the search parameters and to perform the search.

## Topics

### Resolving the Intent Parameters

- [resolveCallTypes(for:with:)](insearchcallhistoryintenthandling/resolvecalltypes%28for_with_%29.md): Deprecated. Resolves the search criteria for the call type.
- [resolveCallType(for:with:)](insearchcallhistoryintenthandling/resolvecalltype%28for_with_%29.md): Deprecated. Resolves the search criteria for the call type.
- [resolveRecipient(for:with:)](insearchcallhistoryintenthandling/resolverecipient%28for_with_%29.md): Deprecated. Resolves the search criteria for the recipients.
- [resolveDateCreated(for:with:)](insearchcallhistoryintenthandling/resolvedatecreated%28for_with_%29.md): Deprecated. Resolves the range of dates for the search.
- [resolveUnseen(for:with:)](insearchcallhistoryintenthandling/resolveunseen%28for_with_%29.md): Deprecated. Resolves whether you can search for calls that the user hasn’t yet seen.

### Confirming the Response

- [confirm(intent:completion:)](insearchcallhistoryintenthandling/confirm%28intent_completion_%29.md): Deprecated. Confirms that you can perform the search.

### Handling the Intent

- [handle(intent:completion:)](insearchcallhistoryintenthandling/handle%28intent_completion_%29.md): Deprecated. Handles searching the user’s call history.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Inherited By

- [INCallsDomainHandling](incallsdomainhandling.md)

## See Also

### Call History Search

- [INSearchCallHistoryIntent](insearchcallhistoryintent.md): Deprecated. A request to list the calls matching the specified criteria.
- [INSearchCallHistoryIntentResponse](insearchcallhistoryintentresponse.md): Deprecated. Your app’s response to a search call history intent.

# INSearchCallHistoryIntentHandling (Objective-C)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

The handler interface for searching the user’s call history.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@protocol INSearchCallHistoryIntentHandling <NSObject>
```

<a id="overview"></a>

## Overview

Use the methods of the [INSearchCallHistoryIntentHandling](insearchcallhistoryintenthandling.md) protocol to resolve, confirm, and handle requests to search for calls in the user’s call history. Adopt this protocol in an object of your Intents extension that’s capable of performing the search and finding any matching records. Siri doesn’t display the call information found during the search. After a successful search, Siri launches your app to display that information.

Siri delivers an [INSearchCallHistoryIntent](insearchcallhistoryintent.md) object to your handler when the user asks to search their call history. The provided intent object contains the search parameters, such as any contacts involved in the call or the range of dates to search. Use the methods of this protocol to resolve the search parameters and to perform the search.

## Topics

### Resolving the Intent Parameters

- [resolveCallTypesForSearchCallHistory:withCompletion:](insearchcallhistoryintenthandling/resolvecalltypes%28for_with_%29.md): Deprecated. Resolves the search criteria for the call type.
- [resolveCallTypeForSearchCallHistory:withCompletion:](insearchcallhistoryintenthandling/resolvecalltype%28for_with_%29.md): Deprecated. Resolves the search criteria for the call type.
- [resolveRecipientForSearchCallHistory:withCompletion:](insearchcallhistoryintenthandling/resolverecipient%28for_with_%29.md): Deprecated. Resolves the search criteria for the recipients.
- [resolveDateCreatedForSearchCallHistory:withCompletion:](insearchcallhistoryintenthandling/resolvedatecreated%28for_with_%29.md): Deprecated. Resolves the range of dates for the search.
- [resolveUnseenForSearchCallHistory:withCompletion:](insearchcallhistoryintenthandling/resolveunseen%28for_with_%29.md): Deprecated. Resolves whether you can search for calls that the user hasn’t yet seen.

### Confirming the Response

- [confirmSearchCallHistory:completion:](insearchcallhistoryintenthandling/confirm%28intent_completion_%29.md): Deprecated. Confirms that you can perform the search.

### Handling the Intent

- [handleSearchCallHistory:completion:](insearchcallhistoryintenthandling/handle%28intent_completion_%29.md): Deprecated. Handles searching the user’s call history.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Inherited By

- [INCallsDomainHandling](incallsdomainhandling.md)

## See Also

### Call History Search

- [INSearchCallHistoryIntent](insearchcallhistoryintent.md): Deprecated. A request to list the calls matching the specified criteria.
- [INSearchCallHistoryIntentResponse](insearchcallhistoryintentresponse.md): Deprecated. Your app’s response to a search call history intent.
