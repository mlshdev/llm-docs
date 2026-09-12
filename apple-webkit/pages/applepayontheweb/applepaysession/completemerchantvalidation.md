> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applepayontheweb/applepaysession/completemerchantvalidation](https://developer.apple.com/documentation/applepayontheweb/applepaysession/completemerchantvalidation)

# completeMerchantValidation

**Interface language:** Data

**Framework:** Apple Pay on the Web  
**Kind:** Instance Method  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 10.0+

Completes the validation for a merchant session.

## Declaration

```
undefined completeMerchantValidation(
	any merchantSession
);
```

## Parameters

- `merchantSession`: An opaque message session object, received from the Apple Pay server.

## Mentioned In

- [Providing Merchant Validation](../providing-merchant-validation.md)
- [Requesting an Apple Pay payment session](../requesting-an-apple-pay-payment-session.md)

<a id="Discussion"></a>

## Discussion

Your server receives the merchant session object when it calls the `Payment Session` endpoint as described in [Providing Merchant Validation](../providing-merchant-validation.md).

You must pass the valid merchant session object to the [completeMerchantValidation](completemerchantvalidation.md) method to enable the user to authorize a transaction.

The guidelines for working with a merchant session are:

- Request a new merchant session object for each transaction. You can only use a merchant session object a single time.
- The merchant session object expires five minutes after it is created.
- Never request the merchant session from the client. The request must be sent from your server.

## See Also

### Getting merchant validation

- [begin](begin.md): Begins the merchant validation process.
- [onvalidatemerchant](onvalidatemerchant.md): An event handler the system calls when it displays the payment sheet.
- [ApplePayValidateMerchantEvent](../applepayvalidatemerchantevent.md): An event object that contains the validation URL.
