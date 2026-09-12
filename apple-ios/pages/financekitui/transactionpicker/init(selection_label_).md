> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/financekitui/transactionpicker/init(selection:label:)](https://developer.apple.com/documentation/financekitui/transactionpicker/init(selection:label:))

# init(selection:label:)

**Framework:** FinanceKitUI  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+

Creates a picker that selects a collection of transactions.

## Declaration

```swift
@MainActor @preconcurrency init(selection: Binding<[Transaction]>, @ViewBuilder label: () -> Label)
```

## Parameters

- `selection`: The selection of transactions from the transaction picker.
- `label`: The view that describes the action of choosing transactions.
