> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/transaction/offertype-swift.struct/code](https://developer.apple.com/documentation/storekit/transaction/offertype-swift.struct/code)

# code

**Framework:** StoreKit  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An offer code.

## Declaration

```swift
static let code: Transaction.OfferType
```

## Mentioned In

- [Supporting offer codes in your app](../../supporting-offer-codes-in-your-app.md)
- [Supporting subscription offer codes in your app](../../supporting-subscription-offer-codes-in-your-app.md)

<a id="Discussion"></a>

## Discussion

You create and define offer codes in App Store Connect. Offer codes are available for any In-App Purchase product type.

For more information about offer codes, see [Set up offer codes](https://developer.apple.com/help/app-store-connect/manage-subscriptions/set-up-offer-codes).

The raw value of the [code](code.md) offer type is `3`.

## See Also

### Getting offer types

- [introductory](introductory.md): An introductory offer for an auto-renewable subscription.
- [promotional](promotional.md): A promotional offer for an auto-renewable subscription.
- [winBack](winback.md): A win-back offer for an auto-renewable subscription.
