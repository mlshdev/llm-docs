> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchforphotosintentresponse](https://developer.apple.com/documentation/intents/insearchforphotosintentresponse)

# INSearchForPhotosIntentResponse (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

Your app’s response to a search for photos intent.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
class INSearchForPhotosIntentResponse
```

<a id="overview"></a>

## Overview

Use an [INSearchForPhotosIntentResponse](insearchforphotosintentresponse.md) object to specify the results of searching the user’s photos. After performing a search using the criteria specified in the [INSearchForPhotosIntent](insearchforphotosintent.md) object, create an instance of this class with the results of that search. Siri communicates the status from your response to the user at appropriate times.

You create an [INSearchForPhotosIntentResponse](insearchforphotosintentresponse.md) object in the [confirm(intent:completion:)](insearchforphotosintenthandling/confirm%28intent_completion_%29.md) and [handle(intent:completion:)](insearchforphotosintenthandling/handle%28intent_completion_%29.md) methods of your search for photos handler object. For more information about implementing your handler object, see [INSearchForPhotosIntentHandling](insearchforphotosintenthandling.md).

## Topics

### Initializing the Response Object

- [init(code:userActivity:)](insearchforphotosintentresponse/init%28code_useractivity_%29.md): Deprecated. Initializes the response object with the specified code and user activity object.

### Getting the Response Code

- [code](insearchforphotosintentresponse/code.md): Deprecated. The code indicating whether you successfully handled the intent.
- [INSearchForPhotosIntentResponseCode](insearchforphotosintentresponsecode.md): Deprecated. Constants indicating the status of the response.

### Accessing the Response Details

- [searchResultsCount](insearchforphotosintentresponse/searchresultscount-82lnb.md): Deprecated. The number of photos that match the search parameters.

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

### Photo Search

- [INSearchForPhotosIntentHandling](insearchforphotosintenthandling.md): Deprecated. The handler interface for searching the user’s photos.
- [INSearchForPhotosIntent](insearchforphotosintent.md): Deprecated. A request for the list of photos that match the specified criteria.

# INSearchForPhotosIntentResponse (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

Your app’s response to a search for photos intent.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@interface INSearchForPhotosIntentResponse : INIntentResponse
```

<a id="overview"></a>

## Overview

Use an [INSearchForPhotosIntentResponse](insearchforphotosintentresponse.md) object to specify the results of searching the user’s photos. After performing a search using the criteria specified in the [INSearchForPhotosIntent](insearchforphotosintent.md) object, create an instance of this class with the results of that search. Siri communicates the status from your response to the user at appropriate times.

You create an [INSearchForPhotosIntentResponse](insearchforphotosintentresponse.md) object in the [confirmSearchForPhotos:completion:](insearchforphotosintenthandling/confirm%28intent_completion_%29.md) and [handleSearchForPhotos:completion:](insearchforphotosintenthandling/handle%28intent_completion_%29.md) methods of your search for photos handler object. For more information about implementing your handler object, see [INSearchForPhotosIntentHandling](insearchforphotosintenthandling.md).

## Topics

### Initializing the Response Object

- [initWithCode:userActivity:](insearchforphotosintentresponse/init%28code_useractivity_%29.md): Deprecated. Initializes the response object with the specified code and user activity object.

### Getting the Response Code

- [code](insearchforphotosintentresponse/code.md): Deprecated. The code indicating whether you successfully handled the intent.
- [INSearchForPhotosIntentResponseCode](insearchforphotosintentresponsecode.md): Deprecated. Constants indicating the status of the response.

### Accessing the Response Details

- [searchResultsCount](https://developer.apple.com/documentation/intents/insearchforphotosintentresponse/searchresultscount-3i5mz): Deprecated. The number of photos that match the search parameters.

## Relationships

### Inherits From

- [INIntentResponse](inintentresponse.md)

## See Also

### Photo Search

- [INSearchForPhotosIntentHandling](insearchforphotosintenthandling.md): Deprecated. The handler interface for searching the user’s photos.
- [INSearchForPhotosIntent](insearchforphotosintent.md): Deprecated. A request for the list of photos that match the specified criteria.
