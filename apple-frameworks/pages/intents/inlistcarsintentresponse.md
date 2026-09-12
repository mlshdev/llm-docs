> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inlistcarsintentresponse](https://developer.apple.com/documentation/intents/inlistcarsintentresponse)

# INListCarsIntentResponse (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+ · watchOS 7.0+

Your app’s response to a request to list the user’s electric vehicles.

## Declaration

```swift
class INListCarsIntentResponse
```

<a id="overview"></a>

## Overview

Use an `INListCarsIntentResponse` to specify the result of a request from Maps for a list of the user’s electric vehicles. You create instances of this class when confirming or handling a List Cars intent. Use this object to confirm the request is valid and return a list of the user’s cars, or to report any errors that occur. Each entry in the [cars](inlistcarsintentresponse/cars.md) array provides information about one of the user’s electric vehicles, including its unique car identifier and model information, such as name and year.

When creating a response that requires the system to launch your host app, always provide a relevant [NSUserActivity](../foundation/nsuseractivity.md) object. This ensures your host app has the context it needs to handle the operation.

You create an `INListCarsIntentResponse` in the [confirm(intent:completion:)](inlistcarsintenthandling/confirm%28intent_completion_%29.md) and [handle(intent:completion:)](inlistcarsintenthandling/handle%28intent_completion_%29.md) methods of your handler object. For more information about implementing your handler object, see [INListCarsIntentHandling](inlistcarsintenthandling.md).

## Topics

### Creating a Response

- [init(code:userActivity:)](inlistcarsintentresponse/init%28code_useractivity_%29.md): Creates a response object with the specified code and user activity.

### Getting the Response Code

- [code](inlistcarsintentresponse/code.md): The code that indicates success or failure when confirming or handling the intent.
- [INListCarsIntentResponseCode](inlistcarsintentresponsecode.md): Constants that represent the status of a response.

### Providing a List of Cars

- [cars](inlistcarsintentresponse/cars.md): An array of the user’s electric vehicles.
- [INCar](incar.md): A specific electric vehicle that Maps uses during route planning and navigation.

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

### List Cars

- [INListCarsIntentHandling](inlistcarsintenthandling.md): The handler interface for requesting a list of the user’s electric vehicles.
- [INListCarsIntent](inlistcarsintent.md): An intent for retrieving a list of the user’s electric vehicles.

# INListCarsIntentResponse (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+ · watchOS 7.0+

Your app’s response to a request to list the user’s electric vehicles.

## Declaration

```objectivec
@interface INListCarsIntentResponse : INIntentResponse
```

<a id="overview"></a>

## Overview

Use an `INListCarsIntentResponse` to specify the result of a request from Maps for a list of the user’s electric vehicles. You create instances of this class when confirming or handling a List Cars intent. Use this object to confirm the request is valid and return a list of the user’s cars, or to report any errors that occur. Each entry in the [cars](inlistcarsintentresponse/cars.md) array provides information about one of the user’s electric vehicles, including its unique car identifier and model information, such as name and year.

When creating a response that requires the system to launch your host app, always provide a relevant [NSUserActivity](../foundation/nsuseractivity.md) object. This ensures your host app has the context it needs to handle the operation.

You create an `INListCarsIntentResponse` in the [confirmListCars:completion:](inlistcarsintenthandling/confirm%28intent_completion_%29.md) and [handleListCars:completion:](inlistcarsintenthandling/handle%28intent_completion_%29.md) methods of your handler object. For more information about implementing your handler object, see [INListCarsIntentHandling](inlistcarsintenthandling.md).

## Topics

### Creating a Response

- [initWithCode:userActivity:](inlistcarsintentresponse/init%28code_useractivity_%29.md): Creates a response object with the specified code and user activity.

### Getting the Response Code

- [code](inlistcarsintentresponse/code.md): The code that indicates success or failure when confirming or handling the intent.
- [INListCarsIntentResponseCode](inlistcarsintentresponsecode.md): Constants that represent the status of a response.

### Providing a List of Cars

- [cars](inlistcarsintentresponse/cars.md): An array of the user’s electric vehicles.
- [INCar](incar.md): A specific electric vehicle that Maps uses during route planning and navigation.

## Relationships

### Inherits From

- [INIntentResponse](inintentresponse.md)

## See Also

### List Cars

- [INListCarsIntentHandling](inlistcarsintenthandling.md): The handler interface for requesting a list of the user’s electric vehicles.
- [INListCarsIntent](inlistcarsintent.md): An intent for retrieving a list of the user’s electric vehicles.
