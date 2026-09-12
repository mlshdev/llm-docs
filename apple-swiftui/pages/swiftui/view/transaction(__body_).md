> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/transaction(_:body:)](https://developer.apple.com/documentation/swiftui/view/transaction(_:body:))

# transaction(\_:body:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Applies the given transaction mutation function to all animations used within the `body` closure.

## Declaration

```swift
nonisolated func transaction<V>(_ transform: @escaping (inout Transaction) -> Void, @ContentBuilder body: (PlaceholderContentView<Self>) -> V) -> some View where V : View

```

<a id="discussion"></a>

## Discussion

Any modifiers applied to the content of `body` will be applied to this view, and the changes to the transaction performed in the `transform` will only affect the modifiers defined in the `body`.

The following code animates the opacity changing with a faster animation, while the contents of MyView are animated with the implicit transaction:

```swift
MyView(isActive: isActive)
    .transaction { transaction in
        transaction.animation = transaction.animation?.speed(2)
    } body: { content in
        content.opacity(isActive ? 1.0 : 0.0)
    }
```

- See Also: `Transaction.disablesAnimations`

## See Also

### Moving an animation to another view

- [withTransaction(\_:\_:)](../withtransaction%28____%29.md): Executes a closure with the specified transaction and returns the result.
- [withTransaction(\_:\_:\_:)](../withtransaction%28______%29.md): Executes a closure with the specified transaction key path and value and returns the result.
- [transaction(\_:)](transaction%28__%29.md): Applies the given transaction mutation function to all animations used within the view.
- [transaction(value:\_:)](transaction%28value___%29.md): Applies the given transaction mutation function to all animations used within the view.
- [Transaction](../transaction.md): The context of the current state-processing update.
- [Entry()](../entry%28%29.md): Creates an environment values, transaction, container values, or focused values entry.
- [TransactionKey](../transactionkey.md): A key for accessing values in a transaction.
