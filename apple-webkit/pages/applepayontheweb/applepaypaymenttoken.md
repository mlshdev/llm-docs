> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applepayontheweb/applepaypaymenttoken](https://developer.apple.com/documentation/applepayontheweb/applepaypaymenttoken)

# ApplePayPaymentToken

**Interface language:** Data

**Framework:** Apple Pay on the Web  
**Kind:** Structure  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 10.0+

An object that contains the user’s payment credentials.

## Declaration

```
dictionary ApplePayPaymentToken {
	required ApplePayPaymentMethod paymentMethod;
	DOMString transactionIdentifier;
	JSON paymentData;
};
```

<a id="overview"></a>

## Overview

You access the payment token of an authorized payment request using the [token](applepaypayment/token.md) property of the [ApplePayPayment](applepaypayment.md) object.

## Topics

### Payment Token Properties

- [paymentMethod](applepaypaymenttoken/paymentmethod.md): Information about the card used in the transaction.
- [paymentData](applepaypaymenttoken/paymentdata.md): An object containing the encrypted payment data.
- [transactionIdentifier](applepaypaymenttoken/transactionidentifier.md): A unique identifier for this payment.

## See Also

### Payment token

- [token](applepaypayment/token.md): The encrypted information for an authorized payment.
- [ApplePayPaymentMethod](applepaypaymentmethod.md): A dictionary that describes an Apple Pay payment method.
- [ApplePayPaymentMethodType](applepaypaymentmethodtype.md): A string that represents the type of the payment method.
- [ApplePayPaymentPass](applepaypaymentpass.md): A provisioned payment card for Apple Pay payments.
