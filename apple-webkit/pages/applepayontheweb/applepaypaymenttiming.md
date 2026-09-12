> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applepayontheweb/applepaypaymenttiming](https://developer.apple.com/documentation/applepayontheweb/applepaypaymenttiming)

# ApplePayPaymentTiming

**Interface language:** Data

**Framework:** Apple Pay on the Web  
**Kind:** Enumeration  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 10.0+

A type that indicates the time a payment occurs in a transaction.

## Declaration

```
enum ApplePayPaymentTiming
```

## Mentioned In

- [Apple Pay on the Web Version 14 Release Notes](apple-pay-on-the-web-version-14-release-notes.md)

<a id="overview"></a>

## Overview

The following are the payment timing values:

- **`"immediate"`**: A value that specifies that the payment occurs when the transaction is complete.
- **`"recurring"`**: A value that specifies that the payment occurs on a regular basis.
- **`"deferred"`**: A value that specifies that the payment occurs in the future.
- **`"automaticReload"`**: A value that specifies that the payment occurs automatically when the account falls below the [automaticReloadPaymentThresholdAmount](applepaylineitem/automaticreloadpaymentthresholdamount.md) amount.

## Topics

### Enumeration Cases

- [automaticReload](applepaypaymenttiming/automaticreload.md)
- [deferred](applepaypaymenttiming/deferred.md)
- [immediate](applepaypaymenttiming/immediate.md)
- [recurring](applepaypaymenttiming/recurring.md)

## See Also

### Configuring payment timing

- [paymentTiming](applepaylineitem/paymenttiming.md): The time that the payment occurs as part of a successful transaction.
