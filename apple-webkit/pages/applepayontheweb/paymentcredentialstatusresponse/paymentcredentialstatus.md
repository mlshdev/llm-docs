> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applepayontheweb/paymentcredentialstatusresponse/paymentcredentialstatus](https://developer.apple.com/documentation/applepayontheweb/paymentcredentialstatusresponse/paymentcredentialstatus)

# paymentCredentialStatus

**Interface language:** Data

**Framework:** Apple Pay on the Web  
**Kind:** Instance Property  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 10.0+

The status of the possible payment credentials that a person has provisioned in Wallet.

## Declaration

```
PaymentCredentialStatus paymentCredentialStatus;
```

## Mentioned In

- [Checking for Apple Pay availability](../checking-for-apple-pay-availability.md)

<a id="Discussion"></a>

## Discussion

This object, which [applePayCapabilities](../applepaysession/applepaycapabilities.md) returns, helps you determine when and where to display an Apple Pay button.

The following are possible return values:

- **`paymentCredentialStatusAvailable`**: Confirms that the device supports Apple Pay and there’s at least one active payment credential in Wallet that qualifies for payments on the web. Show an Apple Pay button and offer Apple Pay as the primary, but not necessarily sole payment option.
- **`paymentCredentialStatusUnknown`**: Confirms that the device supports Apple Pay, but the Wallet information is unknown. Show an Apple Pay button and offer Apple Pay as a possible payment option.
- **`paymentCredentialsUnavailable`**: Confirms that the device supports Apple Pay and that the device doesn’t have any active payment credentials in Wallet. Offer Apple Pay as a payment option, but don’t make it the sole or default payment option. This gives people the option to set up Apple Pay as part of their purchase.
- **`applePayUnsupported`**: Indicates that the device doesn’t support Apple Pay. Don’t display an Apple Pay button or offer Apple Pay as a payment option.
