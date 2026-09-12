> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/entitlementtaskstate/transaction](https://developer.apple.com/documentation/storekit/entitlementtaskstate/transaction)

# transaction

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The transaction value if the task is successful.

## Declaration

```swift
var transaction: VerificationResult<Transaction>? { get }
```

<a id="Discussion"></a>

## Discussion

Use [transaction](transaction.md) as a convenience to access the transaction value in code that doesn’t depend on the reason a transaction isn’t available. The value is `nil` while the transaction is loading, if it fails to load for any reason, or if the customer isn’t entitled to the product.

## See Also

### Getting the transaction with the entitlement

- [value](value.md): The entitlement value if the task is successful.
