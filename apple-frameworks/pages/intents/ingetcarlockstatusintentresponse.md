> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetcarlockstatusintentresponse](https://developer.apple.com/documentation/intents/ingetcarlockstatusintentresponse)

# INGetCarLockStatusIntentResponse (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Your app’s response to a request to get the car’s lock status.

## Declaration

```swift
class INGetCarLockStatusIntentResponse
```

<a id="overview"></a>

## Overview

Use an `INGetCarLockStatusIntentResponse` object to specify the result of a request for a car’s current lock status. You create instances of this class when confirming or handling a get lock status intent. Use this object to confirm that the request is valid and communicate whether the app retrieved the lock status, or to report any errors that occur.

You create an `INGetCarLockStatusIntentResponse` object in the [confirm(intent:completion:)](ingetcarlockstatusintenthandling/confirm%28intent_completion_%29.md) and [handle(intent:completion:)](ingetcarlockstatusintenthandling/handle%28intent_completion_%29.md) methods of your handler object. For more information about implementing your handler object, see [INGetCarLockStatusIntentHandling](ingetcarlockstatusintenthandling.md).

## Topics

### Initializing the Response Object

- [init(code:userActivity:)](ingetcarlockstatusintentresponse/init%28code_useractivity_%29.md): Initializes the response object with the specified code and user activity.

### Getting the Response Code

- [code](ingetcarlockstatusintentresponse/code.md): The code indicating success or failure when confirming or handling an intent.
- [INGetCarLockStatusIntentResponseCode](ingetcarlockstatusintentresponsecode.md): Constants indicating the status of the response.

### Providing the Locked Status

- [locked](ingetcarlockstatusintentresponse/locked-357ju.md): A Boolean value indicating the status of the car’s locks.

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

### Get Car Lock Status

- [INGetCarLockStatusIntentHandling](ingetcarlockstatusintenthandling.md): The handler interface for requesting the current status of the car’s locks.
- [INGetCarLockStatusIntent](ingetcarlockstatusintent.md): A request to get the lock status of the user’s car.

# INGetCarLockStatusIntentResponse (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Your app’s response to a request to get the car’s lock status.

## Declaration

```objectivec
@interface INGetCarLockStatusIntentResponse : INIntentResponse
```

<a id="overview"></a>

## Overview

Use an `INGetCarLockStatusIntentResponse` object to specify the result of a request for a car’s current lock status. You create instances of this class when confirming or handling a get lock status intent. Use this object to confirm that the request is valid and communicate whether the app retrieved the lock status, or to report any errors that occur.

You create an `INGetCarLockStatusIntentResponse` object in the [confirmGetCarLockStatus:completion:](ingetcarlockstatusintenthandling/confirm%28intent_completion_%29.md) and [handleGetCarLockStatus:completion:](ingetcarlockstatusintenthandling/handle%28intent_completion_%29.md) methods of your handler object. For more information about implementing your handler object, see [INGetCarLockStatusIntentHandling](ingetcarlockstatusintenthandling.md).

## Topics

### Initializing the Response Object

- [initWithCode:userActivity:](ingetcarlockstatusintentresponse/init%28code_useractivity_%29.md): Initializes the response object with the specified code and user activity.

### Getting the Response Code

- [code](ingetcarlockstatusintentresponse/code.md): The code indicating success or failure when confirming or handling an intent.
- [INGetCarLockStatusIntentResponseCode](ingetcarlockstatusintentresponsecode.md): Constants indicating the status of the response.

### Providing the Locked Status

- [locked](https://developer.apple.com/documentation/intents/ingetcarlockstatusintentresponse/locked-1eacd): A Boolean value indicating the status of the car’s locks.

## Relationships

### Inherits From

- [INIntentResponse](inintentresponse.md)

## See Also

### Get Car Lock Status

- [INGetCarLockStatusIntentHandling](ingetcarlockstatusintenthandling.md): The handler interface for requesting the current status of the car’s locks.
- [INGetCarLockStatusIntent](ingetcarlockstatusintent.md): A request to get the lock status of the user’s car.
