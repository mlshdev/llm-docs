> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/purchaseintent/product](https://developer.apple.com/documentation/storekit/purchaseintent/product)

# product

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 14.4+

The product information of the In-App Purchase the customer selects to purchase outside of the app.

## Declaration

```swift
let product: Product
```

## Mentioned In

- [Supporting promoted In-App Purchases in your app](../supporting-promoted-in-app-purchases-in-your-app.md)
- [Supporting win-back offers in your app](../supporting-win-back-offers-in-your-app.md)

<a id="Discussion"></a>

## Discussion

To enable users to complete the purchase they start on the App Store, call [purchase(options:)](../product/purchase%28options_%29.md) on this product instance.

## See Also

### Identifying the product

- [id](id.md): The product identifier of the In-App Purchase that the customer selects to purchase outside of the app.
