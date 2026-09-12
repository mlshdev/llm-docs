> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applepayontheweb/applepaysession/begin](https://developer.apple.com/documentation/applepayontheweb/applepaysession/begin)

# begin

**Interface language:** Data

**Framework:** Apple Pay on the Web  
**Kind:** Instance Method  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 10.0+

Begins the merchant validation process.

## Declaration

```
undefined begin();
```

## Mentioned In

- [Creating an Apple Pay Session](../creating-an-apple-pay-session.md)

<a id="Discussion"></a>

## Discussion

When this method is called, the payment sheet is presented and the merchant validation process is initiated.

## See Also

### Getting merchant validation

- [onvalidatemerchant](onvalidatemerchant.md): An event handler the system calls when it displays the payment sheet.
- [completeMerchantValidation](completemerchantvalidation.md): Completes the validation for a merchant session.
- [ApplePayValidateMerchantEvent](../applepayvalidatemerchantevent.md): An event object that contains the validation URL.
