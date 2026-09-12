> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreserverapi/offerdiscounttype](https://developer.apple.com/documentation/appstoreserverapi/offerdiscounttype)

# offerDiscountType

**Interface language:** Data

**Framework:** App Store Server API  
**Kind:** Type  
**Availability:** App Store Server API 1.10+

The payment mode for a discount offer on an In-App Purchase.

## Declaration

```
string offerDiscountType
```

## Possible Values

- `FREE_TRIAL`: A payment mode of a discount for auto-renewable subscriptions that indicates a free trial.
- `PAY_AS_YOU_GO`: A payment mode of a discount for auto-renewable subscriptions that customers pay over a single or multiple billing periods.
- `PAY_UP_FRONT`: A payment mode of a discount for auto-renewable subscriptions that customers pay up front.
- `ONE_TIME`: A payment mode for a discount for In-App Purchase types including consumable, non-consumable, and non-renewing subscription.

## Mentioned In

- [App Store Server API changelog](app-store-server-api-changelog.md)

<a id="Discussion"></a>

## Discussion

You set up subscription offers and determine the payment mode when you configure subscriptions in App Store Connect. For more information about the free trial, pay as you go, and pay up front payment modes, see [Pricing and availability](https://developer.apple.com/help/app-store-connect/reference/pricing-and-availability).

For more information on subscription offers, see [Providing subscription offers](https://developer.apple.com/app-store/subscriptions/#providing-subscription-offers).

## See Also

### Offers

- [eligibleWinBackOfferIds](eligiblewinbackofferids.md): An array of win-back offer identifiers that a customer is eligible to redeem, which sorts the identifiers with the best offers first.
- [offerIdentifier](offeridentifier.md): The string identifier of a subscription offer that you create in App Store Connect.
- [offerPeriod](offerperiod.md): The duration of the offer.
- [offerType](offertype.md): The type of offer.
