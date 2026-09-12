> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchformediaintentresponse](https://developer.apple.com/documentation/intents/insearchformediaintentresponse)

# INSearchForMediaIntentResponse (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

An intents handler’s response to a search media intent.

## Declaration

```swift
class INSearchForMediaIntentResponse
```

<a id="overview"></a>

## Overview

Use an [INSearchForMediaIntentResponse](insearchformediaintentresponse.md) object to specify the results after searching for the user-specified media. After performing the search action using the criteria specified in the [INSearchForMediaIntent](insearchformediaintent.md) object, create an instance of this class with the results of the action. Siri communicates the status from your response to the user, at appropriate times.

You create an [INSearchForMediaIntentResponse](insearchformediaintentresponse.md) object in the [confirm(intent:completion:)](insearchformediaintenthandling/confirm%28intent_completion_%29.md) and [handle(intent:completion:)](insearchformediaintenthandling/handle%28intent_completion_%29.md) methods of your add media handler object. For more information about implementing your handler object, see [INSearchForMediaIntentHandling](insearchformediaintenthandling.md).

## Topics

### Initializing the Response Object

- [init(code:userActivity:)](insearchformediaintentresponse/init%28code_useractivity_%29.md): Initializes the response object with the specified code and user activity object.

### Providing the Response Code

- [code](insearchformediaintentresponse/code.md): A response code that indicates whether the app successfully searched for the media.
- [INSearchForMediaIntentResponseCode](insearchformediaintentresponsecode.md): Codes returned by an intents handler in response to a search request.

### Accessing the Media Item

- [mediaItems](insearchformediaintentresponse/mediaitems.md): The media items that were found by the search.

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

### Search for Media

- [INSearchForMediaIntentHandling](insearchformediaintenthandling.md): The interface that handles media search requests.
- [INSearchForMediaIntent](insearchformediaintent.md): A request to search for a media item.

# INSearchForMediaIntentResponse (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

An intents handler’s response to a search media intent.

## Declaration

```objectivec
@interface INSearchForMediaIntentResponse : INIntentResponse
```

<a id="overview"></a>

## Overview

Use an [INSearchForMediaIntentResponse](insearchformediaintentresponse.md) object to specify the results after searching for the user-specified media. After performing the search action using the criteria specified in the [INSearchForMediaIntent](insearchformediaintent.md) object, create an instance of this class with the results of the action. Siri communicates the status from your response to the user, at appropriate times.

You create an [INSearchForMediaIntentResponse](insearchformediaintentresponse.md) object in the [confirmSearchForMedia:completion:](insearchformediaintenthandling/confirm%28intent_completion_%29.md) and [handleSearchForMedia:completion:](insearchformediaintenthandling/handle%28intent_completion_%29.md) methods of your add media handler object. For more information about implementing your handler object, see [INSearchForMediaIntentHandling](insearchformediaintenthandling.md).

## Topics

### Initializing the Response Object

- [initWithCode:userActivity:](insearchformediaintentresponse/init%28code_useractivity_%29.md): Initializes the response object with the specified code and user activity object.

### Providing the Response Code

- [code](insearchformediaintentresponse/code.md): A response code that indicates whether the app successfully searched for the media.
- [INSearchForMediaIntentResponseCode](insearchformediaintentresponsecode.md): Codes returned by an intents handler in response to a search request.

### Accessing the Media Item

- [mediaItems](insearchformediaintentresponse/mediaitems.md): The media items that were found by the search.

## Relationships

### Inherits From

- [INIntentResponse](inintentresponse.md)

## See Also

### Search for Media

- [INSearchForMediaIntentHandling](insearchformediaintenthandling.md): The interface that handles media search requests.
- [INSearchForMediaIntent](insearchformediaintent.md): A request to search for a media item.
