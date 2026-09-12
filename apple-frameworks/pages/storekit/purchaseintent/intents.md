> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/purchaseintent/intents](https://developer.apple.com/documentation/storekit/purchaseintent/intents)

# intents

**Framework:** StoreKit  
**Kind:** Type Property  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 14.4+

The asynchronous sequence that emits a purchase intent when customers initiate a purchase outside of the app.

## Declaration

```swift
static var intents: PurchaseIntent.PurchaseIntents { get }
```

## Mentioned In

- [Supporting win-back offers in your app](../supporting-win-back-offers-in-your-app.md)
- [Supporting promoted In-App Purchases in your app](../supporting-promoted-in-app-purchases-in-your-app.md)

<a id="Discussion"></a>

## Discussion

Your app receives a purchase intent when customers initiate a purchase outside of your app by selecting a promoted product on the App Store, or redeeming a win-back offer. Use the [product](product.md) object to complete your app’s purchase workflow, including finishing the purchase, unlocking the product, and any other workflows specific to your app.

The following example code receives the purchase intent, and calls a method to complete the purchase workflow:

```swift
func purchaseProduct(_ product: Product) async {
    // Complete the purchase workflow.
    do {
        try await product.purchase()
    }
    catch {
        // Add your code to handle errors.
    }
    // Add your code for the remaining purchase workflow.
}

for await purchaseIntent in PurchaseIntent.intents {
    // Receive the purchase intent and then complete the purchase workflow.
    await purchaseProduct(purchaseIntent.product)
}

```

## See Also

### Getting purchase intents

- [PurchaseIntent.PurchaseIntents](purchaseintents.md): An asynchronous sequence of purchase intents for purchases that customers initiate outside of the app.
