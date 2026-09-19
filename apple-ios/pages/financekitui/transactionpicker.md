> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/financekitui/transactionpicker

# TransactionPicker

**Framework:** FinanceKitUI  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+

A view that displays a transaction picker for choosing transactions from FinanceKit.

## Declaration

```swift
@MainActor @preconcurrency struct TransactionPicker<Label> where Label : View
```

## Topics

### Initializers

- [init(selection:label:)](transactionpicker/init%28selection_label_%29.md): Creates a picker that selects a collection of transactions.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [View](https://developer.apple.com/documentation/swiftui/view)
