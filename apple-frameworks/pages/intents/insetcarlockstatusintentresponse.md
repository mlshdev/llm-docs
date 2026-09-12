> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insetcarlockstatusintentresponse](https://developer.apple.com/documentation/intents/insetcarlockstatusintentresponse)

# INSetCarLockStatusIntentResponse (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Your app’s response to a request to lock or unlock the car.

## Declaration

```swift
class INSetCarLockStatusIntentResponse
```

<a id="overview"></a>

## Overview

Use an `INSetCarLockStatusIntentResponse` object to specify the result of a request to lock or unlock the user’s car. You create instances of this class when confirming or handling a set car lock intent. Use this object to confirm that the request is valid and communicate whether the car was successfully locked or unlocked, or to report any errors that occur.

You create an `INSetCarLockStatusIntentResponse` object in the [confirm(intent:completion:)](insetcarlockstatusintenthandling/confirm%28intent_completion_%29.md) and [handle(intent:completion:)](insetcarlockstatusintenthandling/handle%28intent_completion_%29.md) methods of your handler object. For more information about implementing your handler object, see [INSetCarLockStatusIntentHandling](insetcarlockstatusintenthandling.md).

## Topics

### Initializing the Response Object

- [init(code:userActivity:)](insetcarlockstatusintentresponse/init%28code_useractivity_%29.md): Initializes the response object with the specified code and user activity.

### Getting the Response Code

- [code](insetcarlockstatusintentresponse/code.md): The code indicating success or failure when confirming or handling an intent.
- [INSetCarLockStatusIntentResponseCode](insetcarlockstatusintentresponsecode.md): Constants indicating the status of the response.

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

### Set Car Lock Status

- [INSetCarLockStatusIntentHandling](insetcarlockstatusintenthandling.md): The handler interface for requesting to lock or unlock a car.
- [INSetCarLockStatusIntent](insetcarlockstatusintent.md): A request to lock or unlock the user’s car.

# INSetCarLockStatusIntentResponse (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Your app’s response to a request to lock or unlock the car.

## Declaration

```objectivec
@interface INSetCarLockStatusIntentResponse : INIntentResponse
```

<a id="overview"></a>

## Overview

Use an `INSetCarLockStatusIntentResponse` object to specify the result of a request to lock or unlock the user’s car. You create instances of this class when confirming or handling a set car lock intent. Use this object to confirm that the request is valid and communicate whether the car was successfully locked or unlocked, or to report any errors that occur.

You create an `INSetCarLockStatusIntentResponse` object in the [confirmSetCarLockStatus:completion:](insetcarlockstatusintenthandling/confirm%28intent_completion_%29.md) and [handleSetCarLockStatus:completion:](insetcarlockstatusintenthandling/handle%28intent_completion_%29.md) methods of your handler object. For more information about implementing your handler object, see [INSetCarLockStatusIntentHandling](insetcarlockstatusintenthandling.md).

## Topics

### Initializing the Response Object

- [initWithCode:userActivity:](insetcarlockstatusintentresponse/init%28code_useractivity_%29.md): Initializes the response object with the specified code and user activity.

### Getting the Response Code

- [code](insetcarlockstatusintentresponse/code.md): The code indicating success or failure when confirming or handling an intent.
- [INSetCarLockStatusIntentResponseCode](insetcarlockstatusintentresponsecode.md): Constants indicating the status of the response.

## Relationships

### Inherits From

- [INIntentResponse](inintentresponse.md)

## See Also

### Set Car Lock Status

- [INSetCarLockStatusIntentHandling](insetcarlockstatusintenthandling.md): The handler interface for requesting to lock or unlock a car.
- [INSetCarLockStatusIntent](insetcarlockstatusintent.md): A request to lock or unlock the user’s car.
