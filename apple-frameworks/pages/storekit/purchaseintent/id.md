> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/purchaseintent/id](https://developer.apple.com/documentation/storekit/purchaseintent/id)

# id

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 14.4+

The product identifier of the In-App Purchase that the customer selects to purchase outside of the app.

## Declaration

```swift
@backDeployed(before: iOS 18.0, macOS 15.0, macCatalyst 18.0)
var id: Product.ID { get }
```

## See Also

### Identifying the product

- [product](product.md): The product information of the In-App Purchase the customer selects to purchase outside of the app.
