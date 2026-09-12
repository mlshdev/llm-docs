> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applepayontheweb/applepaysession/canmakepayments](https://developer.apple.com/documentation/applepayontheweb/applepaysession/canmakepayments)

# canMakePayments

**Interface language:** Data

**Framework:** Apple Pay on the Web  
**Kind:** Type Method  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 10.0+

Indicates whether the device supports Apple Pay.

## Declaration

```
static boolean canMakePayments();
```

<a id="return-value"></a>

## Return Value

`true` if the device supports making payments with Apple Pay; otherwise, `false`.

## Mentioned In

- [Checking for Apple Pay availability](../checking-for-apple-pay-availability.md)

<a id="Discussion"></a>

## Discussion

This method only checks to ensure that the device supports processing payments with Apple Pay. It doesn’t verify whether or not the user has any provisioned cards in Wallet.

This method can be called any time.

## See Also

### Apple Pay availability

- [Checking for Apple Pay availability](../checking-for-apple-pay-availability.md): Use the Apple Pay JS API to check whether Apple Pay is available, to check whether a device has a payment credential provisioned in Wallet, and to determine when to display an Apple Pay button.
- [applePayCapabilities](applepaycapabilities.md): Indicates whether the device supports Apple Pay and whether the person has an active card in Wallet that qualifies for web payments.
- [canMakePaymentsWithActiveCard](canmakepaymentswithactivecard.md): Deprecated. Indicates whether the device supports Apple Pay and whether the user has an active card in Wallet.
- [PaymentCredentialStatus](../paymentcredentialstatus.md): Information about whether the device supports Apple Pay and the possible payment credentials the person has provisioned in Wallet.
- [PaymentCredentialStatusResponse](../paymentcredentialstatusresponse.md): The response for information about the device’s support for Apple Pay and the payment credential status.
