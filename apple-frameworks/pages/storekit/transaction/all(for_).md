> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/transaction/all(for:)](https://developer.apple.com/documentation/storekit/transaction/all(for:))

# all(for:)

**Framework:** StoreKit  
**Kind:** Type Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Gets all the transactions associated with this product ID.

## Declaration

```swift
static func all(for productID: String) -> Transaction.Transactions
```

## Parameters

- `productID`: Identifies the product to filter the transaction cache against.

<a id="return-value"></a>

## Return Value

A sequence containing all transactions for the given product.
