> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/product/promotioninfo/update()](https://developer.apple.com/documentation/storekit/product/promotioninfo/update())

# update()

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+

Saves your changes to the promoted product’s visibility.

## Declaration

```swift
func update() async throws
```

## Mentioned In

- [Supporting promoted In-App Purchases in your app](../../supporting-promoted-in-app-purchases-in-your-app.md)

<a id="Discussion"></a>

## Discussion

If you change the [visibility](visibility-swift.property.md) value by setting it directly, call [update()](update%28%29.md) to save your changes to the App Store server. Changes take effect after you call [update()](update%28%29.md) or [updateAll(\_:)](updateall%28__%29.md).

## See Also

### Updating order and visibility

- [updateAll(\_:)](updateall%28__%29.md): Sets the order and visibility of all the promoted products and saves your changes.
