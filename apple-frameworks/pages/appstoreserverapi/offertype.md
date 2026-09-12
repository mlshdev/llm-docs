> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreserverapi/offertype](https://developer.apple.com/documentation/appstoreserverapi/offertype)

# offerType

**Interface language:** Data

**Framework:** App Store Server API  
**Kind:** Type  
**Availability:** App Store Server API 1.0+

The type of offer.

## Declaration

```
int32 offerType
```

## Possible Values

- `1`: An introductory offer.
- `2`: A promotional offer.
- `3`: An offer with an offer code.
- `4`: A win-back offer.

## Mentioned In

- [App Store Server API changelog](app-store-server-api-changelog.md)

<a id="Discussion"></a>

## Discussion

All offer types, except offer type `1`, have an [offerIdentifier](offeridentifier.md).

You set up offers in App Store Connect. For more information on subscription offers, see [Set up introductory offers for auto-renewable subscriptions](https://developer.apple.com/help/app-store-connect/manage-subscriptions/set-up-introductory-offers-for-auto-renewable-subscriptions), [Set up promotional offers for auto-renewable subscriptions](https://developer.apple.com/help/app-store-connect/manage-subscriptions/set-up-promotional-offers-for-auto-renewable-subscriptions), [Set up offer codes](https://developer.apple.com/help/app-store-connect/manage-subscriptions/set-up-offer-codes), and [Set up win-back offers](https://developer.apple.com/help/app-store-connect/manage-subscriptions/set-up-win-back-offers). For more information on offer codes, see [Create offer codes for In-App Purchases](https://developer.apple.com/help/app-store-connect/manage-in-app-purchases/create-offer-codes-for-in-app-purchases).

## See Also

### Offers

- [eligibleWinBackOfferIds](eligiblewinbackofferids.md): An array of win-back offer identifiers that a customer is eligible to redeem, which sorts the identifiers with the best offers first.
- [offerIdentifier](offeridentifier.md): The string identifier of a subscription offer that you create in App Store Connect.
- [offerPeriod](offerperiod.md): The duration of the offer.
- [offerDiscountType](offerdiscounttype.md): The payment mode for a discount offer on an In-App Purchase.
