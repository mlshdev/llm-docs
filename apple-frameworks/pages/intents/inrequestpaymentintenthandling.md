> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrequestpaymentintenthandling](https://developer.apple.com/documentation/intents/inrequestpaymentintenthandling)

# INRequestPaymentIntentHandling (Swift)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The handler interface for delivering a request for payment from another user of your app.

## Declaration

```swift
protocol INRequestPaymentIntentHandling : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Use the methods of the [INRequestPaymentIntentHandling](inrequestpaymentintenthandling.md) protocol to resolve, confirm, and handle the requesting of money from another user of your app. Adopt this protocol in an object of your Intents extension that is capable of contacting the designated user and communicating the request for payment.

Siri delivers an [INRequestPaymentIntent](inrequestpaymentintent.md) object to your handler when the user makes a request for payment using your app. The provided intent object contains the details of the payment request, including the recipient of the request, the amount of the payment, and any memos associated with the payment. Use the methods of this protocol to resolve the payment parameters and to validate that the payment is possible.

## Topics

### Resolving the Intent Parameters

- [resolvePayer(for:with:)](inrequestpaymentintenthandling/resolvepayer%28for_with_%29-4xu87.md): Resolves the person to receive the payment request.
- [resolveCurrencyAmount(for:with:)](inrequestpaymentintenthandling/resolvecurrencyamount%28for_with_%29-1it85.md): Resolves the amount of money requested.
- [resolveNote(for:with:)](inrequestpaymentintenthandling/resolvenote%28for_with_%29.md): Resolves the notes associated with the request.
- [resolvePayer(for:with:)](inrequestpaymentintenthandling/resolvepayer%28for_with_%29-qp42.md): Deprecated. Called when you need to resolve the person who will receive the payment request.
- [resolveCurrencyAmount(for:with:)](inrequestpaymentintenthandling/resolvecurrencyamount%28for_with_%29-78c2m.md): Deprecated. Called when you need to resolve the amount of money being requested.

### Confirming the Response

- [confirm(intent:completion:)](inrequestpaymentintenthandling/confirm%28intent_completion_%29.md): Confirms the payment request and confirm the details.

### Handling the Intent

- [handle(intent:completion:)](inrequestpaymentintenthandling/handle%28intent_completion_%29.md): Handles sending the payment request to the designated user.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Inherited By

- [INPaymentsDomainHandling](inpaymentsdomainhandling.md)

## See Also

### Request a Payment

- [INRequestPaymentIntent](inrequestpaymentintent.md): An intent for requesting money from another user’s account.
- [INRequestPaymentIntentResponse](inrequestpaymentintentresponse.md): Your app’s response to a request payment intent.

# INRequestPaymentIntentHandling (Objective-C)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The handler interface for delivering a request for payment from another user of your app.

## Declaration

```objectivec
@protocol INRequestPaymentIntentHandling <NSObject>
```

<a id="overview"></a>

## Overview

Use the methods of the [INRequestPaymentIntentHandling](inrequestpaymentintenthandling.md) protocol to resolve, confirm, and handle the requesting of money from another user of your app. Adopt this protocol in an object of your Intents extension that is capable of contacting the designated user and communicating the request for payment.

Siri delivers an [INRequestPaymentIntent](inrequestpaymentintent.md) object to your handler when the user makes a request for payment using your app. The provided intent object contains the details of the payment request, including the recipient of the request, the amount of the payment, and any memos associated with the payment. Use the methods of this protocol to resolve the payment parameters and to validate that the payment is possible.

## Topics

### Resolving the Intent Parameters

- [resolvePayerForRequestPayment:completion:](inrequestpaymentintenthandling/resolvepayer%28for_with_%29-4xu87.md): Resolves the person to receive the payment request.
- [resolveCurrencyAmountForRequestPayment:completion:](inrequestpaymentintenthandling/resolvecurrencyamount%28for_with_%29-1it85.md): Resolves the amount of money requested.
- [resolveNoteForRequestPayment:withCompletion:](inrequestpaymentintenthandling/resolvenote%28for_with_%29.md): Resolves the notes associated with the request.
- [resolvePayerForRequestPayment:withCompletion:](inrequestpaymentintenthandling/resolvepayer%28for_with_%29-qp42.md): Deprecated. Called when you need to resolve the person who will receive the payment request.
- [resolveCurrencyAmountForRequestPayment:withCompletion:](inrequestpaymentintenthandling/resolvecurrencyamount%28for_with_%29-78c2m.md): Deprecated. Called when you need to resolve the amount of money being requested.

### Confirming the Response

- [confirmRequestPayment:completion:](inrequestpaymentintenthandling/confirm%28intent_completion_%29.md): Confirms the payment request and confirm the details.

### Handling the Intent

- [handleRequestPayment:completion:](inrequestpaymentintenthandling/handle%28intent_completion_%29.md): Handles sending the payment request to the designated user.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Inherited By

- [INPaymentsDomainHandling](inpaymentsdomainhandling.md)

## See Also

### Request a Payment

- [INRequestPaymentIntent](inrequestpaymentintent.md): An intent for requesting money from another user’s account.
- [INRequestPaymentIntentResponse](inrequestpaymentintentresponse.md): Your app’s response to a request payment intent.
