> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insendpaymentintent](https://developer.apple.com/documentation/intents/insendpaymentintent)

# INSendPaymentIntent (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

A request to transfer money from the current user’s account to a different user’s account.

## Declaration

```swift
class INSendPaymentIntent
```

<a id="overview"></a>

## Overview

Siri creates an [INSendPaymentIntent](insendpaymentintent.md) object when the current user asks to transfer money to another user. A send payment intent object includes the payment amount and the recipient of the payment. Use that information to validate the transaction and transfer the funds.

To handle this intent, the handler object in your Intents extension must adopt the [INSendPaymentIntentHandling](insendpaymentintenthandling.md) protocol. Your handler should confirm the request and create an [INSendPaymentIntentResponse](insendpaymentintentresponse.md) object with the result of sending the money to the specified user.

This intent object represents a financial transaction between two users.

<a id="Additional-Intent-Attributes"></a>

### Additional Intent Attributes

The following table lists additional attributes of this intent object:

| Attribute | Description |
| --- | --- |
| Supported by | Siri Intents, Siri Suggestions, Shortcuts App |
| Always requires unlocked device | Yes |

When performing a search, Siri automatically asks the user to unlock a currently locked device. You don’t need to explicitly ask to unlock the device. In addition, Siri always prompts the user to confirm the payment before asking your Intents extension to handle the transaction.

## Topics

### Initializing the Intent Object

- [init(payee:currencyAmount:note:)](insendpaymentintent/init%28payee_currencyamount_note_%29.md): Initializes the send payment intent object with the specified recipient and payment information.

### Getting Details About the Payment

- [payee](insendpaymentintent/payee.md): The recipient of the payment.
- [currencyAmount](insendpaymentintent/currencyamount.md): The amount of the payment.
- [note](insendpaymentintent/note.md): A note associated with the payment.

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

### Send a Payment

- [INSendPaymentIntentHandling](insendpaymentintenthandling.md): The handler interface for transferring money from the current user’s account to a different user’s account.
- [INSendPaymentIntentResponse](insendpaymentintentresponse.md): Your app’s response to a send payment intent.

# INSendPaymentIntent (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

A request to transfer money from the current user’s account to a different user’s account.

## Declaration

```objectivec
@interface INSendPaymentIntent : INIntent
```

<a id="overview"></a>

## Overview

Siri creates an [INSendPaymentIntent](insendpaymentintent.md) object when the current user asks to transfer money to another user. A send payment intent object includes the payment amount and the recipient of the payment. Use that information to validate the transaction and transfer the funds.

To handle this intent, the handler object in your Intents extension must adopt the [INSendPaymentIntentHandling](insendpaymentintenthandling.md) protocol. Your handler should confirm the request and create an [INSendPaymentIntentResponse](insendpaymentintentresponse.md) object with the result of sending the money to the specified user.

This intent object represents a financial transaction between two users.

<a id="Additional-Intent-Attributes"></a>

### Additional Intent Attributes

The following table lists additional attributes of this intent object:

| Attribute | Description |
| --- | --- |
| Supported by | Siri Intents, Siri Suggestions, Shortcuts App |
| Always requires unlocked device | Yes |

When performing a search, Siri automatically asks the user to unlock a currently locked device. You don’t need to explicitly ask to unlock the device. In addition, Siri always prompts the user to confirm the payment before asking your Intents extension to handle the transaction.

## Topics

### Initializing the Intent Object

- [initWithPayee:currencyAmount:note:](insendpaymentintent/init%28payee_currencyamount_note_%29.md): Initializes the send payment intent object with the specified recipient and payment information.

### Getting Details About the Payment

- [payee](insendpaymentintent/payee.md): The recipient of the payment.
- [currencyAmount](insendpaymentintent/currencyamount.md): The amount of the payment.
- [note](insendpaymentintent/note.md): A note associated with the payment.

## Relationships

### Inherits From

- [INIntent](inintent.md)

## See Also

### Send a Payment

- [INSendPaymentIntentHandling](insendpaymentintenthandling.md): The handler interface for transferring money from the current user’s account to a different user’s account.
- [INSendPaymentIntentResponse](insendpaymentintentresponse.md): Your app’s response to a send payment intent.
