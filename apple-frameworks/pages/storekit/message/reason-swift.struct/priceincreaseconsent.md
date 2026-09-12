> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/message/reason-swift.struct/priceincreaseconsent](https://developer.apple.com/documentation/storekit/message/reason-swift.struct/priceincreaseconsent)

# priceIncreaseConsent

**Framework:** StoreKit  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

A message the App Store sends when you increase the price of an auto-renewable subscription and the price increase requires the customer’s consent.

## Declaration

```swift
static let priceIncreaseConsent: Message.Reason
```

<a id="Discussion"></a>

## Discussion

For more information about managing prices, see [Managing Prices](https://developer.apple.com/app-store/subscriptions/#managing-prices-for-existing-subscribers) and [Manage pricing for auto-renewable subscriptions](https://help.apple.com/app-store-connect/#/devc9870599e).

## See Also

### Getting the message reasons

- [billingIssue](billingissue.md): A message the App Store sends that informs people of a billing problem and enables them to update billing information.
- [generic](generic.md): A message the App Store sends for a generic reason.
- [winBackOffer](winbackoffer.md): A message the App Store sends when the customer is eligible for a win-back offer that you configure in App Store Connect.
