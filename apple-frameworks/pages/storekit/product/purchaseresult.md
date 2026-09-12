> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/product/purchaseresult](https://developer.apple.com/documentation/storekit/product/purchaseresult)

# Product.PurchaseResult

**Framework:** StoreKit  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The result of a purchase.

## Declaration

```swift
enum PurchaseResult
```

## Mentioned In

- [Supporting monthly subscriptions with a 12-month commitment](../supporting-monthly-subscriptions-with-a-12-month-commitment.md)

<a id="overview"></a>

## Overview

The value of the purchase result represents the state of the purchase. When successful, the associated value contains a [VerificationResult](../verificationresult.md) of the transaction. The following example illustrates calling [purchase(options:)](purchase%28options_%29.md) on a [Product](../product.md) value, checking the purchase status, and inspecting information about a successful transaction.

```swift
let result = try await product.purchase()
switch result {
case .success(let verificationResult):
    switch verificationResult {
    case .verified(let transaction):
        // Give the user access to purchased content.
        ...
        // Complete the transaction after providing
        // the user access to the content.
        await transaction.finish()
    case .unverified(let transaction, let verificationError):
        // Handle unverified transactions based 
        // on your business model.
        ...
    }
case .pending:
    // The purchase requires action from the customer. 
    // If the transaction completes, 
    // it's available through Transaction.updates.
    break
case .userCancelled:
    // The user canceled the purchase.
    break
@unknown default:
    break
}

```

## Topics

### Getting the Purchase Results

- [Product.PurchaseResult.success(\_:)](purchaseresult/success%28__%29.md): The purchase succeeded and results in a transaction.
- [Product.PurchaseResult.userCancelled](purchaseresult/usercancelled.md): The user canceled the purchase.
- [Product.PurchaseResult.pending](purchaseresult/pending.md): The purchase is pending, and requires action from the customer.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Purchase requests and results

- [PurchaseAction](../purchaseaction.md): An action that starts an In-App Purchase.
- [purchase(options:)](purchase%28options_%29.md): Initiates a purchase for the product with the App Store and displays the confirmation sheet.
