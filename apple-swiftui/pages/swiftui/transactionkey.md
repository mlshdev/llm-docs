> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/transactionkey](https://developer.apple.com/documentation/swiftui/transactionkey)

# TransactionKey

**Framework:** SwiftUI  
**Kind:** Protocol  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A key for accessing values in a transaction.

## Declaration

```swift
protocol TransactionKey
```

<a id="overview"></a>

## Overview

You can create custom transaction values by extending the [Transaction](transaction.md) structure with new properties. First declare a new transaction key type and specify a value for the required [defaultValue](transactionkey/defaultvalue.md) property:

```swift
private struct MyTransactionKey: TransactionKey {
    static let defaultValue = false
}
```

The Swift compiler automatically infers the associated [Value](transactionkey/value.md) type as the type you specify for the default value. Then use the key to define a new transaction value property:

```swift
extension Transaction {
    var myCustomValue: Bool {
        get { self[MyTransactionKey.self] }
        set { self[MyTransactionKey.self] = newValue }
    }
}
```

Clients of your transaction value never use the key directly. Instead, they use the key path of your custom transaction value property. To set the transaction value for a change, wrap that change in a call to `withTransaction`:

```swift
withTransaction(\.myCustomValue, true) {
    isActive.toggle()
}
```

To use the value from inside `MyView` or one of its descendants, use the [transaction(\_:)](view/transaction%28__%29.md) view modifier:

```swift
MyView()
    .transaction { transaction in
        if transaction.myCustomValue {
            transaction.animation = .default.repeatCount(3)
        }
    }
```

## Topics

### Setting a default value

- [defaultValue](transactionkey/defaultvalue.md): The default value for the transaction key.
- [Value](transactionkey/value.md): The associated type representing the type of the transaction key’s value.

## See Also

### Moving an animation to another view

- [withTransaction(\_:\_:)](withtransaction%28____%29.md): Executes a closure with the specified transaction and returns the result.
- [withTransaction(\_:\_:\_:)](withtransaction%28______%29.md): Executes a closure with the specified transaction key path and value and returns the result.
- [transaction(\_:)](view/transaction%28__%29.md): Applies the given transaction mutation function to all animations used within the view.
- [transaction(value:\_:)](view/transaction%28value___%29.md): Applies the given transaction mutation function to all animations used within the view.
- [transaction(\_:body:)](view/transaction%28__body_%29.md): Applies the given transaction mutation function to all animations used within the `body` closure.
- [Transaction](transaction.md): The context of the current state-processing update.
- [Entry()](entry%28%29.md): Creates an environment values, transaction, container values, or focused values entry.
