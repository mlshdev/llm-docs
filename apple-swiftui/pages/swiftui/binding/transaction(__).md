> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/binding/transaction(_:)](https://developer.apple.com/documentation/swiftui/binding/transaction(_:))

# transaction(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Specifies a transaction for the binding.

## Declaration

```swift
func transaction(_ transaction: Transaction) -> Binding<Value>
```

## Parameters

- `transaction`: An instance of a [Transaction](../transaction.md).

<a id="return-value"></a>

## Return Value

A new binding.

## See Also

### Managing changes

- [id](id.md): Conforms when `Value` conforms to `Identifiable`. The stable identity of the entity associated with this instance, corresponding to the `id` of the binding’s wrapped value.
- [animation(\_:)](animation%28__%29.md): Specifies an animation to perform when the binding value changes.
- [transaction](transaction.md): The binding’s transaction.
