> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreserverapi/offeridentifier](https://developer.apple.com/documentation/appstoreserverapi/offeridentifier)

# offerIdentifier

**Interface language:** Data

**Framework:** App Store Server API  
**Kind:** Type  
**Availability:** App Store Server API 1.0+

The string identifier of a subscription offer that you create in App Store Connect.

## Declaration

```
string offerIdentifier
```

<a id="Discussion"></a>

## Discussion

The `offerIdentifier` is a string that you provide in App Store Connect when you set up a subscription offer. All offer types ([offerType](offertype.md)) have offer identifiers, except for introductory offers.

For more information about subscription offers, see [Providing subscription offers](https://developer.apple.com/app-store/subscriptions/#providing-subscription-offers). For information about configuring the various types of subscription offers in App Store Connect, see:

- [Set up offer codes](https://developer.apple.com/help/app-store-connect/manage-subscriptions/set-up-offer-codes/)
- [Set up introductory offers for auto-renewable subscriptions](https://developer.apple.com/help/app-store-connect/manage-subscriptions/set-up-introductory-offers-for-auto-renewable-subscriptions)
- [Set up promotional offers for auto-renewable subscriptions](https://developer.apple.com/help/app-store-connect/manage-subscriptions/set-up-promotional-offers-for-auto-renewable-subscriptions)
- [Set up win-back offers](https://developer.apple.com/help/app-store-connect/manage-subscriptions/set-up-win-back-offers)

## See Also

### Offers

- [eligibleWinBackOfferIds](eligiblewinbackofferids.md): An array of win-back offer identifiers that a customer is eligible to redeem, which sorts the identifiers with the best offers first.
- [offerPeriod](offerperiod.md): The duration of the offer.
- [offerType](offertype.md): The type of offer.
- [offerDiscountType](offerdiscounttype.md): The payment mode for a discount offer on an In-App Purchase.
