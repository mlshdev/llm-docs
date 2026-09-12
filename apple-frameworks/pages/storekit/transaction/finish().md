> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/transaction/finish()](https://developer.apple.com/documentation/storekit/transaction/finish())

# finish()

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Indicates to the App Store that the app delivered the purchased content or enabled the service to finish the transaction.

## Declaration

```swift
func finish() async
```

## Mentioned In

- [Supporting offer codes in your app](../supporting-offer-codes-in-your-app.md)
- [Supporting subscription offer codes in your app](../supporting-subscription-offer-codes-in-your-app.md)
- [Supporting win-back offers in your app](../supporting-win-back-offers-in-your-app.md)
- [Supporting promoted In-App Purchases in your app](../supporting-promoted-in-app-purchases-in-your-app.md)
- [Testing at all stages of development with Xcode and the sandbox](../testing-at-all-stages-of-development-with-xcode-and-the-sandbox.md)

<a id="Discussion"></a>

## Discussion

Call [finish()](finish%28%29.md) to complete a transaction after you deliver the purchased content or enable the purchased service. For on-demand resources, don’t finish the transaction until the app completes downloading the resource or you’ve otherwise delivered the resource.

## See Also

### Finishing the transaction

- [unfinished](unfinished.md): A sequence that emits unfinished transactions for the customer.
