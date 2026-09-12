> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/withtransaction(_:_:)](https://developer.apple.com/documentation/swiftui/withtransaction(_:_:))

# withTransaction(\_:\_:)

**Framework:** SwiftUI  
**Kind:** Function  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Executes a closure with the specified transaction and returns the result.

## Declaration

```swift
func withTransaction<Result>(_ transaction: Transaction, _ body: () throws -> Result) rethrows -> Result
```

## Parameters

- `body`: A closure to execute.

<a id="return-value"></a>

## Return Value

The result of executing the closure with the specified transaction.

## See Also

### Moving an animation to another view

- [withTransaction(\_:\_:\_:)](withtransaction%28______%29.md): Executes a closure with the specified transaction key path and value and returns the result.
- [transaction(\_:)](view/transaction%28__%29.md): Applies the given transaction mutation function to all animations used within the view.
- [transaction(value:\_:)](view/transaction%28value___%29.md): Applies the given transaction mutation function to all animations used within the view.
- [transaction(\_:body:)](view/transaction%28__body_%29.md): Applies the given transaction mutation function to all animations used within the `body` closure.
- [Transaction](transaction.md): The context of the current state-processing update.
- [Entry()](entry%28%29.md): Creates an environment values, transaction, container values, or focused values entry.
- [TransactionKey](transactionkey.md): A key for accessing values in a transaction.
