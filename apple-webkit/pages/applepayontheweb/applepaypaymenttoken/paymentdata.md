> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applepayontheweb/applepaypaymenttoken/paymentdata](https://developer.apple.com/documentation/applepayontheweb/applepaypaymenttoken/paymentdata)

# paymentData

**Interface language:** Data

**Framework:** Apple Pay on the Web  
**Kind:** Instance Property  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 10.0+

An object containing the encrypted payment data.

## Declaration

```
JSON paymentData;
```

<a id="Discussion"></a>

## Discussion

This data is used by your e-commerce back-end system, which decrypts it and submits it to your payment processor.

For the format of the payment data, see [Payment token format reference](https://developer.apple.com/documentation/passkit/payment-token-format-reference).

## See Also

### Payment Token Properties

- [paymentMethod](paymentmethod.md): Information about the card used in the transaction.
- [transactionIdentifier](transactionidentifier.md): A unique identifier for this payment.
