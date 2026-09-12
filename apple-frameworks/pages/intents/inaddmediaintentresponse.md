> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inaddmediaintentresponse](https://developer.apple.com/documentation/intents/inaddmediaintentresponse)

# INAddMediaIntentResponse (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

An intents handler’s response to an add media intent.

## Declaration

```swift
class INAddMediaIntentResponse
```

<a id="overview"></a>

## Overview

Use an [INAddMediaIntentResponse](inaddmediaintentresponse.md) object to specify the results after the user attempts to add the specified media. After performing the add action using the criteria specified in the [INAddMediaIntent](inaddmediaintent.md) object, create an instance of this class with the results of the action. Siri communicates the status from your response to the user at appropriate times.

You create an [INAddMediaIntentResponse](inaddmediaintentresponse.md) object in the [confirm(intent:completion:)](inaddmediaintenthandling/confirm%28intent_completion_%29.md) and [handle(intent:completion:)](inaddmediaintenthandling/handle%28intent_completion_%29.md) methods of your add media handler object. For more information about implementing your handler object, see [INAddMediaIntentHandling](inaddmediaintenthandling.md).

## Topics

### Initializing the Response Object

- [init(code:userActivity:)](inaddmediaintentresponse/init%28code_useractivity_%29.md): Initializes the response object with the specified code and user activity object.

### Providing the Response Code

- [code](inaddmediaintentresponse/code.md): A response code that indicates whether the app successfully added the media.
- [INAddMediaIntentResponseCode](inaddmediaintentresponsecode.md): Codes returned by an app or Intents app extension when handling or confirming an add media intent.

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

### Add Media

- [INAddMediaIntentHandling](inaddmediaintenthandling.md): The handler interface that adds media.
- [INAddMediaIntent](inaddmediaintent.md): A request to add a media item.

# INAddMediaIntentResponse (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

An intents handler’s response to an add media intent.

## Declaration

```objectivec
@interface INAddMediaIntentResponse : INIntentResponse
```

<a id="overview"></a>

## Overview

Use an [INAddMediaIntentResponse](inaddmediaintentresponse.md) object to specify the results after the user attempts to add the specified media. After performing the add action using the criteria specified in the [INAddMediaIntent](inaddmediaintent.md) object, create an instance of this class with the results of the action. Siri communicates the status from your response to the user at appropriate times.

You create an [INAddMediaIntentResponse](inaddmediaintentresponse.md) object in the [confirmAddMedia:completion:](inaddmediaintenthandling/confirm%28intent_completion_%29.md) and [handleAddMedia:completion:](inaddmediaintenthandling/handle%28intent_completion_%29.md) methods of your add media handler object. For more information about implementing your handler object, see [INAddMediaIntentHandling](inaddmediaintenthandling.md).

## Topics

### Initializing the Response Object

- [initWithCode:userActivity:](inaddmediaintentresponse/init%28code_useractivity_%29.md): Initializes the response object with the specified code and user activity object.

### Providing the Response Code

- [code](inaddmediaintentresponse/code.md): A response code that indicates whether the app successfully added the media.
- [INAddMediaIntentResponseCode](inaddmediaintentresponsecode.md): Codes returned by an app or Intents app extension when handling or confirming an add media intent.

## Relationships

### Inherits From

- [INIntentResponse](inintentresponse.md)

## See Also

### Add Media

- [INAddMediaIntentHandling](inaddmediaintenthandling.md): The handler interface that adds media.
- [INAddMediaIntent](inaddmediaintent.md): A request to add a media item.
