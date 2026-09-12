> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/binding/transaction](https://developer.apple.com/documentation/swiftui/binding/transaction)

# transaction

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The binding’s transaction.

## Declaration

```swift
var transaction: Transaction
```

<a id="discussion"></a>

## Discussion

The transaction captures the information needed to update the view when the binding value changes.

## See Also

### Managing changes

- [id](id.md): Conforms when `Value` conforms to `Identifiable`. The stable identity of the entity associated with this instance, corresponding to the `id` of the binding’s wrapped value.
- [animation(\_:)](animation%28__%29.md): Specifies an animation to perform when the binding value changes.
- [transaction(\_:)](transaction%28__%29.md): Specifies a transaction for the binding.
