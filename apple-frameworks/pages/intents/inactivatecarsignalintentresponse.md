> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inactivatecarsignalintentresponse](https://developer.apple.com/documentation/intents/inactivatecarsignalintentresponse)

# INActivateCarSignalIntentResponse (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Your app’s response to a request to activate a car’s signals.

## Declaration

```swift
class INActivateCarSignalIntentResponse
```

<a id="overview"></a>

## Overview

Use an `INActivateCarSignalIntentResponse` object to specify the result of a request to activate the signal on the user’s car. You create instances of this class when confirming or handling an activate car signal intent. Use this object to confirm that the request is valid and communicate whether the signal was successfully activated, or to report any errors that occur.

You create an `INActivateCarSignalIntentResponse` object in the [confirm(intent:completion:)](inactivatecarsignalintenthandling/confirm%28intent_completion_%29.md) and [handle(intent:completion:)](inactivatecarsignalintenthandling/handle%28intent_completion_%29.md) methods of your handler object. For more information about implementing your handler object, see [INActivateCarSignalIntentHandling](inactivatecarsignalintenthandling.md).

## Topics

### Initializing the Response Object

- [init(code:userActivity:)](inactivatecarsignalintentresponse/init%28code_useractivity_%29.md): Initializes the response object with the specified code and user activity.

### Getting the Response Code

- [code](inactivatecarsignalintentresponse/code.md): The code indicating success or failure when confirming or handling an intent.
- [INActivateCarSignalIntentResponseCode](inactivatecarsignalintentresponsecode.md): Constants indicating the status of the response.

### Providing the Signal Information

- [signals](inactivatecarsignalintentresponse/signals.md): The type of signal produced (audible or visual).

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

### Activate Car Signal

- [INActivateCarSignalIntentHandling](inactivatecarsignalintenthandling.md): The handler interface for requesting to activate the car’s signals.
- [INActivateCarSignalIntent](inactivatecarsignalintent.md): A request to activate the signals on the user’s car.

# INActivateCarSignalIntentResponse (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Your app’s response to a request to activate a car’s signals.

## Declaration

```objectivec
@interface INActivateCarSignalIntentResponse : INIntentResponse
```

<a id="overview"></a>

## Overview

Use an `INActivateCarSignalIntentResponse` object to specify the result of a request to activate the signal on the user’s car. You create instances of this class when confirming or handling an activate car signal intent. Use this object to confirm that the request is valid and communicate whether the signal was successfully activated, or to report any errors that occur.

You create an `INActivateCarSignalIntentResponse` object in the [confirmActivateCarSignal:completion:](inactivatecarsignalintenthandling/confirm%28intent_completion_%29.md) and [handleActivateCarSignal:completion:](inactivatecarsignalintenthandling/handle%28intent_completion_%29.md) methods of your handler object. For more information about implementing your handler object, see [INActivateCarSignalIntentHandling](inactivatecarsignalintenthandling.md).

## Topics

### Initializing the Response Object

- [initWithCode:userActivity:](inactivatecarsignalintentresponse/init%28code_useractivity_%29.md): Initializes the response object with the specified code and user activity.

### Getting the Response Code

- [code](inactivatecarsignalintentresponse/code.md): The code indicating success or failure when confirming or handling an intent.
- [INActivateCarSignalIntentResponseCode](inactivatecarsignalintentresponsecode.md): Constants indicating the status of the response.

### Providing the Signal Information

- [signals](inactivatecarsignalintentresponse/signals.md): The type of signal produced (audible or visual).

## Relationships

### Inherits From

- [INIntentResponse](inintentresponse.md)

## See Also

### Activate Car Signal

- [INActivateCarSignalIntentHandling](inactivatecarsignalintenthandling.md): The handler interface for requesting to activate the car’s signals.
- [INActivateCarSignalIntent](inactivatecarsignalintent.md): A request to activate the signals on the user’s car.
