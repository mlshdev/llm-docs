> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/product/subscriptioninfo/renewalinfo/offer](https://developer.apple.com/documentation/storekit/product/subscriptioninfo/renewalinfo/offer)

# offer

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A subscription offer that applies to the transaction at the next renewal period.

## Declaration

```swift
let offer: Transaction.Offer?
```

<a id="Discussion"></a>

## Discussion

This value is populated if a customer redeems a subscription offer that applies to more than one subscription period.

This value is `nil` if there’s no subscription offer.

## See Also

### Getting offers

- [Transaction.Offer](../../../transaction/offer-swift.struct.md): Discounts or promotions that apply to a transaction.
- [eligibleWinBackOfferIDs](eligiblewinbackofferids.md): An array of strings that represent identifiers of win-back offers that the customer is eligible to redeem, sorted with the best offers first.
