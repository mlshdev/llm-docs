> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/transaction/offertype-swift.struct/winback](https://developer.apple.com/documentation/storekit/transaction/offertype-swift.struct/winback)

# winBack

**Framework:** StoreKit  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A win-back offer for an auto-renewable subscription.

## Declaration

```swift
@backDeployed(before: iOS 18.0, macOS 15.0, tvOS 18.0, watchOS 11.0, visionOS 2.0)
static var winBack: Transaction.OfferType { get }
```

<a id="Discussion"></a>

## Discussion

For more information about win-back offers, see [Set up win-back offers](https://developer.apple.com/help/app-store-connect/manage-subscriptions/set-up-win-back-offers).

The raw value of the [winBack](winback.md) offer type is `4`.

## See Also

### Getting offer types

- [introductory](introductory.md): An introductory offer for an auto-renewable subscription.
- [promotional](promotional.md): A promotional offer for an auto-renewable subscription.
- [code](code.md): An offer code.
