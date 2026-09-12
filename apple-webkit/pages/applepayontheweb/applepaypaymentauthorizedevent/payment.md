> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applepayontheweb/applepaypaymentauthorizedevent/payment](https://developer.apple.com/documentation/applepayontheweb/applepaypaymentauthorizedevent/payment)

# payment

**Interface language:** Data

**Framework:** Apple Pay on the Web  
**Kind:** Instance Property  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 10.0+

The authorized payment information for this transaction.

## Declaration

```
readonly attribute ApplePayPayment payment;
```

<a id="Discussion"></a>

## Discussion

This attribute is contained by the [onpaymentauthorized](../applepaysession/onpaymentauthorized.md) event. Access this attribute using the event parameter in the callback function; for example, `var payinfo = event.payment;`.

[ApplePayPayment](../applepaypayment.md)  contains `billingContact` and `shippingContact` if they were requested, and it also contains [ApplePayPaymentToken](../applepaypaymenttoken.md).
