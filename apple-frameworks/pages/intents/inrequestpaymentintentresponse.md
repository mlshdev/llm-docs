> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrequestpaymentintentresponse](https://developer.apple.com/documentation/intents/inrequestpaymentintentresponse)

# INRequestPaymentIntentResponse (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Your app’s response to a request payment intent.

## Declaration

```swift
class INRequestPaymentIntentResponse
```

<a id="overview"></a>

## Overview

Use an [INRequestPaymentIntentResponse](inrequestpaymentintentresponse.md) object to specify the details of a payment request that you make. After creating the object, assign the details of the payment transaction to the [paymentRecord](inrequestpaymentintentresponse/paymentrecord.md) property, the details of which Siri communicates to the user at appropriate times.

You create an [INRequestPaymentIntentResponse](inrequestpaymentintentresponse.md) object in the [confirm(intent:completion:)](inrequestpaymentintenthandling/confirm%28intent_completion_%29.md) and [handle(intent:completion:)](inrequestpaymentintenthandling/handle%28intent_completion_%29.md) methods of your handler object. For more information about implementing your handler object, see [INRequestPaymentIntentHandling](inrequestpaymentintenthandling.md).

## Topics

### Initializing the Response Object

- [init(code:userActivity:)](inrequestpaymentintentresponse/init%28code_useractivity_%29.md): Initializes the response object with the specified code and user activity object.

### Getting the Response Code

- [code](inrequestpaymentintentresponse/code.md): The code indicating whether you successfully handled the intent.
- [INRequestPaymentIntentResponseCode](inrequestpaymentintentresponsecode.md): Constants indicating the state of the response.

### Accessing the Response Data

- [paymentRecord](inrequestpaymentintentresponse/paymentrecord.md): The details of the request.

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

### Request a Payment

- [INRequestPaymentIntentHandling](inrequestpaymentintenthandling.md): The handler interface for delivering a request for payment from another user of your app.
- [INRequestPaymentIntent](inrequestpaymentintent.md): An intent for requesting money from another user’s account.

# INRequestPaymentIntentResponse (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Your app’s response to a request payment intent.

## Declaration

```objectivec
@interface INRequestPaymentIntentResponse : INIntentResponse
```

<a id="overview"></a>

## Overview

Use an [INRequestPaymentIntentResponse](inrequestpaymentintentresponse.md) object to specify the details of a payment request that you make. After creating the object, assign the details of the payment transaction to the [paymentRecord](inrequestpaymentintentresponse/paymentrecord.md) property, the details of which Siri communicates to the user at appropriate times.

You create an [INRequestPaymentIntentResponse](inrequestpaymentintentresponse.md) object in the [confirmRequestPayment:completion:](inrequestpaymentintenthandling/confirm%28intent_completion_%29.md) and [handleRequestPayment:completion:](inrequestpaymentintenthandling/handle%28intent_completion_%29.md) methods of your handler object. For more information about implementing your handler object, see [INRequestPaymentIntentHandling](inrequestpaymentintenthandling.md).

## Topics

### Initializing the Response Object

- [initWithCode:userActivity:](inrequestpaymentintentresponse/init%28code_useractivity_%29.md): Initializes the response object with the specified code and user activity object.

### Getting the Response Code

- [code](inrequestpaymentintentresponse/code.md): The code indicating whether you successfully handled the intent.
- [INRequestPaymentIntentResponseCode](inrequestpaymentintentresponsecode.md): Constants indicating the state of the response.

### Accessing the Response Data

- [paymentRecord](inrequestpaymentintentresponse/paymentrecord.md): The details of the request.

## Relationships

### Inherits From

- [INIntentResponse](inintentresponse.md)

## See Also

### Request a Payment

- [INRequestPaymentIntentHandling](inrequestpaymentintenthandling.md): The handler interface for delivering a request for payment from another user of your app.
- [INRequestPaymentIntent](inrequestpaymentintent.md): An intent for requesting money from another user’s account.
