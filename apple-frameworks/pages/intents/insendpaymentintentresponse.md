> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insendpaymentintentresponse](https://developer.apple.com/documentation/intents/insendpaymentintentresponse)

# INSendPaymentIntentResponse (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Your app’s response to a send payment intent.

## Declaration

```swift
class INSendPaymentIntentResponse
```

<a id="overview"></a>

## Overview

Use an [INSendPaymentIntentResponse](insendpaymentintentresponse.md) object to specify the details of the financial transaction that you perform. After creating the object, assign the details of the payment transaction to the [paymentRecord](insendpaymentintentresponse/paymentrecord.md) property, the details of which Siri communicates to the user at appropriate times.

You create an [INSendPaymentIntentResponse](insendpaymentintentresponse.md) object in the [confirm(intent:completion:)](insendpaymentintenthandling/confirm%28intent_completion_%29.md) and [handle(intent:completion:)](insendpaymentintenthandling/handle%28intent_completion_%29.md) methods of your handler object. For more information about implementing your handler object, see [INSendPaymentIntentHandling](insendpaymentintenthandling.md).

## Topics

### Initializing the Response Object

- [init(code:userActivity:)](insendpaymentintentresponse/init%28code_useractivity_%29.md): Initializes the response object with the specified code and user activity object.

### Getting the Response Code

- [code](insendpaymentintentresponse/code.md): The code indicating whether you successfully handled the intent.
- [INSendPaymentIntentResponseCode](insendpaymentintentresponsecode.md): Constants indicating the state of the response.

### Accessing the Payment Information

- [paymentRecord](insendpaymentintentresponse/paymentrecord.md): The details of the payment transaction.

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

### Send a Payment

- [INSendPaymentIntentHandling](insendpaymentintenthandling.md): The handler interface for transferring money from the current user’s account to a different user’s account.
- [INSendPaymentIntent](insendpaymentintent.md): A request to transfer money from the current user’s account to a different user’s account.

# INSendPaymentIntentResponse (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Your app’s response to a send payment intent.

## Declaration

```objectivec
@interface INSendPaymentIntentResponse : INIntentResponse
```

<a id="overview"></a>

## Overview

Use an [INSendPaymentIntentResponse](insendpaymentintentresponse.md) object to specify the details of the financial transaction that you perform. After creating the object, assign the details of the payment transaction to the [paymentRecord](insendpaymentintentresponse/paymentrecord.md) property, the details of which Siri communicates to the user at appropriate times.

You create an [INSendPaymentIntentResponse](insendpaymentintentresponse.md) object in the [confirmSendPayment:completion:](insendpaymentintenthandling/confirm%28intent_completion_%29.md) and [handleSendPayment:completion:](insendpaymentintenthandling/handle%28intent_completion_%29.md) methods of your handler object. For more information about implementing your handler object, see [INSendPaymentIntentHandling](insendpaymentintenthandling.md).

## Topics

### Initializing the Response Object

- [initWithCode:userActivity:](insendpaymentintentresponse/init%28code_useractivity_%29.md): Initializes the response object with the specified code and user activity object.

### Getting the Response Code

- [code](insendpaymentintentresponse/code.md): The code indicating whether you successfully handled the intent.
- [INSendPaymentIntentResponseCode](insendpaymentintentresponsecode.md): Constants indicating the state of the response.

### Accessing the Payment Information

- [paymentRecord](insendpaymentintentresponse/paymentrecord.md): The details of the payment transaction.

## Relationships

### Inherits From

- [INIntentResponse](inintentresponse.md)

## See Also

### Send a Payment

- [INSendPaymentIntentHandling](insendpaymentintenthandling.md): The handler interface for transferring money from the current user’s account to a different user’s account.
- [INSendPaymentIntent](insendpaymentintent.md): A request to transfer money from the current user’s account to a different user’s account.
