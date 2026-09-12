> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreservernotifications/offeridentifier](https://developer.apple.com/documentation/appstoreservernotifications/offeridentifier)

# offerIdentifier

**Interface language:** Data

**Framework:** App Store Server Notifications  
**Kind:** Type  
**Availability:** App Store Server Notifications 2.0+

The string identifier of an offer that you create in App Store Connect.

## Declaration

```
string offerIdentifier
```

<a id="Discussion"></a>

## Discussion

The `offerIdentifier` is a string that you provide in App Store Connect when you set up an offer. All offer types ([offerType](offertype.md)) have offer identifiers, except for introductory offers.

For more information on offer codes, see [Supporting offer codes in your app](../storekit/supporting-offer-codes-in-your-app.md). For more information on promotional offers, see [Set up promotional offers for auto-renewable subscriptions](https://help.apple.com/app-store-connect/#/dev16dfca448).

## See Also

### Offers

- [eligibleWinBackOfferIds](eligiblewinbackofferids.md): An array of win-back offer identifiers that a customer is eligible to redeem, which sorts the identifiers to present the better offers first.
- [offerPeriod](offerperiod.md): The duration of the offer.
- [offerType](offertype.md): The type of offer.
- [offerDiscountType](offerdiscounttype.md): The payment mode for a discount offer on an In-App Purchase.
