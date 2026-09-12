> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreservernotifications/offerperiod](https://developer.apple.com/documentation/appstoreservernotifications/offerperiod)

# offerPeriod

**Interface language:** Data

**Framework:** App Store Server Notifications  
**Kind:** Type  
**Availability:** App Store Server Notifications 2.15+

The duration of the offer.

## Declaration

```
string offerPeriod
```

## Mentioned In

- [App Store Server Notifications changelog](app-store-server-notifications-changelog.md)

<a id="Discussion"></a>

## Discussion

This field is in ISO 8601 duration format.

The following table shows examples of offer period values.

| Single period length | Period count | Offer period value |
| --- | --- | --- |
| 1 month | 1 | `P1M` |
| 1 month | 2 | `P2M` |
| 3 days | 1 | `P3D` |

## See Also

### Offers

- [eligibleWinBackOfferIds](eligiblewinbackofferids.md): An array of win-back offer identifiers that a customer is eligible to redeem, which sorts the identifiers to present the better offers first.
- [offerIdentifier](offeridentifier.md): The string identifier of an offer that you create in App Store Connect.
- [offerType](offertype.md): The type of offer.
- [offerDiscountType](offerdiscounttype.md): The payment mode for a discount offer on an In-App Purchase.
