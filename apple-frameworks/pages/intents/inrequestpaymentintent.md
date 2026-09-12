> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrequestpaymentintent](https://developer.apple.com/documentation/intents/inrequestpaymentintent)

# INRequestPaymentIntent (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

An intent for requesting money from another user’s account.

## Declaration

```swift
class INRequestPaymentIntent
```

<a id="overview"></a>

## Overview

Siri creates an [INRequestPaymentIntent](inrequestpaymentintent.md) object when the current user requests a payment from another user. A request payment intent object includes the payment amount and the person receiving the request. This intent represents only a request for payment and shouldn’t initiate any payments.

To handle this intent, the handler object in your Intents extension must adopt the [INRequestPaymentIntentHandling](inrequestpaymentintenthandling.md) protocol. Your handler should confirm the request and create an [INRequestPaymentIntentResponse](inrequestpaymentintentresponse.md) object with the results of making the request.

<a id="Additional-Intent-Attributes"></a>

### Additional Intent Attributes

The following table lists additional attributes of this intent object:

| Attribute | Description |
| --- | --- |
| Supported by | Siri Intents, Siri Suggestions, Shortcuts app |
| Always requires unlocked device | Yes |

When performing a search, Siri automatically asks the user to unlock a currently locked device. You don’t need to explicitly ask to unlock the device. In addition, Siri always prompts the user to confirm the request before asking your Intents extension to handle it.

## Topics

### Initializing the Intent Object

- [init(payer:currencyAmount:note:)](inrequestpaymentintent/init%28payer_currencyamount_note_%29.md): Initializes the request payment intent object with the specified recipient and payment information.

### Getting Details About the Payment

- [payer](inrequestpaymentintent/payer.md): The recipient of the payment request.
- [currencyAmount](inrequestpaymentintent/currencyamount.md): The amount of the payment.
- [note](inrequestpaymentintent/note.md): A note associated with the request.

## Relationships

### Inherits From

- [INIntent](inintent.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [INIntentSetImageKeyPath](inintentsetimagekeypath.md)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Request a Payment

- [INRequestPaymentIntentHandling](inrequestpaymentintenthandling.md): The handler interface for delivering a request for payment from another user of your app.
- [INRequestPaymentIntentResponse](inrequestpaymentintentresponse.md): Your app’s response to a request payment intent.

# INRequestPaymentIntent (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

An intent for requesting money from another user’s account.

## Declaration

```objectivec
@interface INRequestPaymentIntent : INIntent
```

<a id="overview"></a>

## Overview

Siri creates an [INRequestPaymentIntent](inrequestpaymentintent.md) object when the current user requests a payment from another user. A request payment intent object includes the payment amount and the person receiving the request. This intent represents only a request for payment and shouldn’t initiate any payments.

To handle this intent, the handler object in your Intents extension must adopt the [INRequestPaymentIntentHandling](inrequestpaymentintenthandling.md) protocol. Your handler should confirm the request and create an [INRequestPaymentIntentResponse](inrequestpaymentintentresponse.md) object with the results of making the request.

<a id="Additional-Intent-Attributes"></a>

### Additional Intent Attributes

The following table lists additional attributes of this intent object:

| Attribute | Description |
| --- | --- |
| Supported by | Siri Intents, Siri Suggestions, Shortcuts app |
| Always requires unlocked device | Yes |

When performing a search, Siri automatically asks the user to unlock a currently locked device. You don’t need to explicitly ask to unlock the device. In addition, Siri always prompts the user to confirm the request before asking your Intents extension to handle it.

## Topics

### Initializing the Intent Object

- [initWithPayer:currencyAmount:note:](inrequestpaymentintent/init%28payer_currencyamount_note_%29.md): Initializes the request payment intent object with the specified recipient and payment information.

### Getting Details About the Payment

- [payer](inrequestpaymentintent/payer.md): The recipient of the payment request.
- [currencyAmount](inrequestpaymentintent/currencyamount.md): The amount of the payment.
- [note](inrequestpaymentintent/note.md): A note associated with the request.

## Relationships

### Inherits From

- [INIntent](inintent.md)

## See Also

### Request a Payment

- [INRequestPaymentIntentHandling](inrequestpaymentintenthandling.md): The handler interface for delivering a request for payment from another user of your app.
- [INRequestPaymentIntentResponse](inrequestpaymentintentresponse.md): Your app’s response to a request payment intent.
