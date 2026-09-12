> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchcallhistoryintentresponse](https://developer.apple.com/documentation/intents/insearchcallhistoryintentresponse)

# INSearchCallHistoryIntentResponse (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

Your app’s response to a search call history intent.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
class INSearchCallHistoryIntentResponse
```

<a id="overview"></a>

## Overview

Use an [INSearchCallHistoryIntentResponse](insearchcallhistoryintentresponse.md) object to specify the results of searching the user’s call history. After performing a search using the criteria specified in the [INSearchCallHistoryIntent](insearchcallhistoryintent.md) object, create an instance of this class with the results of that search.

Your app is responsible for displaying the results of your search, so you must communicate the results to it. One way to communicate those results is through the [NSUserActivity](../foundation/nsuseractivity.md) object that you create with your response. After creating that object, place the results in its [userInfo](../foundation/nsuseractivity/userinfo.md) dictionary.

You create an [INSearchCallHistoryIntentResponse](insearchcallhistoryintentresponse.md) object in the [confirm(intent:completion:)](insearchcallhistoryintenthandling/confirm%28intent_completion_%29.md) and [handle(intent:completion:)](insearchcallhistoryintenthandling/handle%28intent_completion_%29.md) methods of your search call history handler object. For more information about implementing your handler object, see [INSearchCallHistoryIntentHandling](insearchcallhistoryintenthandling.md).

## Topics

### Initializing the Response Object

- [init(code:userActivity:)](insearchcallhistoryintentresponse/init%28code_useractivity_%29.md): Deprecated. Initializes the response object with the specified code and user activity object.

### Getting the Response Code

- [code](insearchcallhistoryintentresponse/code.md): Deprecated. The code indicating whether you successfully handled the intent.
- [INSearchCallHistoryIntentResponseCode](insearchcallhistoryintentresponsecode.md): Deprecated. Constants indicating the status of the response.

### Providing the Search Results

- [callRecords](insearchcallhistoryintentresponse/callrecords.md): Deprecated. An array of call records representing the results of the search.

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

### Call History Search

- [INSearchCallHistoryIntentHandling](insearchcallhistoryintenthandling.md): Deprecated. The handler interface for searching the user’s call history.
- [INSearchCallHistoryIntent](insearchcallhistoryintent.md): Deprecated. A request to list the calls matching the specified criteria.

# INSearchCallHistoryIntentResponse (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

Your app’s response to a search call history intent.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@interface INSearchCallHistoryIntentResponse : INIntentResponse
```

<a id="overview"></a>

## Overview

Use an [INSearchCallHistoryIntentResponse](insearchcallhistoryintentresponse.md) object to specify the results of searching the user’s call history. After performing a search using the criteria specified in the [INSearchCallHistoryIntent](insearchcallhistoryintent.md) object, create an instance of this class with the results of that search.

Your app is responsible for displaying the results of your search, so you must communicate the results to it. One way to communicate those results is through the [NSUserActivity](../foundation/nsuseractivity.md) object that you create with your response. After creating that object, place the results in its [userInfo](../foundation/nsuseractivity/userinfo.md) dictionary.

You create an [INSearchCallHistoryIntentResponse](insearchcallhistoryintentresponse.md) object in the [confirmSearchCallHistory:completion:](insearchcallhistoryintenthandling/confirm%28intent_completion_%29.md) and [handleSearchCallHistory:completion:](insearchcallhistoryintenthandling/handle%28intent_completion_%29.md) methods of your search call history handler object. For more information about implementing your handler object, see [INSearchCallHistoryIntentHandling](insearchcallhistoryintenthandling.md).

## Topics

### Initializing the Response Object

- [initWithCode:userActivity:](insearchcallhistoryintentresponse/init%28code_useractivity_%29.md): Deprecated. Initializes the response object with the specified code and user activity object.

### Getting the Response Code

- [code](insearchcallhistoryintentresponse/code.md): Deprecated. The code indicating whether you successfully handled the intent.
- [INSearchCallHistoryIntentResponseCode](insearchcallhistoryintentresponsecode.md): Deprecated. Constants indicating the status of the response.

### Providing the Search Results

- [callRecords](insearchcallhistoryintentresponse/callrecords.md): Deprecated. An array of call records representing the results of the search.

## Relationships

### Inherits From

- [INIntentResponse](inintentresponse.md)

## See Also

### Call History Search

- [INSearchCallHistoryIntentHandling](insearchcallhistoryintenthandling.md): Deprecated. The handler interface for searching the user’s call history.
- [INSearchCallHistoryIntent](insearchcallhistoryintent.md): Deprecated. A request to list the calls matching the specified criteria.
