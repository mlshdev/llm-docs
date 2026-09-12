> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applepayontheweb/applepaypaymentmethod/network](https://developer.apple.com/documentation/applepayontheweb/applepaypaymentmethod/network)

# network

**Interface language:** Data

**Framework:** Apple Pay on the Web  
**Kind:** Instance Property  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 10.0+

A string, suitable for display, that is the name of the payment network backing the card.

## Declaration

```
DOMString network;
```

<a id="Discussion"></a>

## Discussion

The value is one of the supported networks specified in the [supportedNetworks](../applepaypaymentrequest/supportednetworks.md) property of the [ApplePayPaymentRequest](../applepaypaymentrequest.md).

## See Also

### Accessing payment method data

- [displayName](displayname.md): A string, suitable for display, that describes the card.
- [type](type.md): A string value representing the card’s type of payment.
- [paymentPass](paymentpass.md): The payment pass object currently selected to complete the payment.
- [billingContact](billingcontact.md): The billing contact associated with the card.
