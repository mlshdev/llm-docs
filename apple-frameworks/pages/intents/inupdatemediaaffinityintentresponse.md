> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inupdatemediaaffinityintentresponse](https://developer.apple.com/documentation/intents/inupdatemediaaffinityintentresponse)

# INUpdateMediaAffinityIntentResponse (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

An intents handler’s response to an update media affinity intent.

## Declaration

```swift
class INUpdateMediaAffinityIntentResponse
```

<a id="overview"></a>

## Overview

Use an [INUpdateMediaAffinityIntentResponse](inupdatemediaaffinityintentresponse.md) object to specify the results from trying to update the user’s affinity for a media item. After performing the add action using the criteria specified in the [INUpdateMediaAffinityIntent](inupdatemediaaffinityintent.md) object, create an instance of this class with the results of the action. Siri communicates the response status to the user at appropriate times.

You create an [INUpdateMediaAffinityIntentResponse](inupdatemediaaffinityintentresponse.md) object in the [confirm(intent:completion:)](inupdatemediaaffinityintenthandling/confirm%28intent_completion_%29.md) and [handle(intent:completion:)](inupdatemediaaffinityintenthandling/handle%28intent_completion_%29.md) methods of your add media handler object. For more information about implementing your handler object, see [INUpdateMediaAffinityIntentHandling](inupdatemediaaffinityintenthandling.md).

## Topics

### Initializing the Response Object

- [init(code:userActivity:)](inupdatemediaaffinityintentresponse/init%28code_useractivity_%29.md): Initializes the response object with the specified code and user activity object.

### Providing the Response Code

- [code](inupdatemediaaffinityintentresponse/code.md): The code that indicates whether the app successfully updated the user’s affinity for the media.
- [INUpdateMediaAffinityIntentResponseCode](inupdatemediaaffinityintentresponsecode.md): Codes returned by an intents handler in response to an update media affinity request.

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

### Update Media Affinity

- [INUpdateMediaAffinityIntentHandling](inupdatemediaaffinityintenthandling.md): The interface that handles requests to update the user’s preference for a media item.
- [INUpdateMediaAffinityIntent](inupdatemediaaffinityintent.md): A request to update the user’s affinity for a media item.

# INUpdateMediaAffinityIntentResponse (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

An intents handler’s response to an update media affinity intent.

## Declaration

```objectivec
@interface INUpdateMediaAffinityIntentResponse : INIntentResponse
```

<a id="overview"></a>

## Overview

Use an [INUpdateMediaAffinityIntentResponse](inupdatemediaaffinityintentresponse.md) object to specify the results from trying to update the user’s affinity for a media item. After performing the add action using the criteria specified in the [INUpdateMediaAffinityIntent](inupdatemediaaffinityintent.md) object, create an instance of this class with the results of the action. Siri communicates the response status to the user at appropriate times.

You create an [INUpdateMediaAffinityIntentResponse](inupdatemediaaffinityintentresponse.md) object in the [confirmUpdateMediaAffinity:completion:](inupdatemediaaffinityintenthandling/confirm%28intent_completion_%29.md) and [handleUpdateMediaAffinity:completion:](inupdatemediaaffinityintenthandling/handle%28intent_completion_%29.md) methods of your add media handler object. For more information about implementing your handler object, see [INUpdateMediaAffinityIntentHandling](inupdatemediaaffinityintenthandling.md).

## Topics

### Initializing the Response Object

- [initWithCode:userActivity:](inupdatemediaaffinityintentresponse/init%28code_useractivity_%29.md): Initializes the response object with the specified code and user activity object.

### Providing the Response Code

- [code](inupdatemediaaffinityintentresponse/code.md): The code that indicates whether the app successfully updated the user’s affinity for the media.
- [INUpdateMediaAffinityIntentResponseCode](inupdatemediaaffinityintentresponsecode.md): Codes returned by an intents handler in response to an update media affinity request.

## Relationships

### Inherits From

- [INIntentResponse](inintentresponse.md)

## See Also

### Update Media Affinity

- [INUpdateMediaAffinityIntentHandling](inupdatemediaaffinityintenthandling.md): The interface that handles requests to update the user’s preference for a media item.
- [INUpdateMediaAffinityIntent](inupdatemediaaffinityintent.md): A request to update the user’s affinity for a media item.
