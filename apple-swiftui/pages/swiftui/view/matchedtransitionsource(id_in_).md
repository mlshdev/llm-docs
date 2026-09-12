> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/matchedtransitionsource(id:in:)](https://developer.apple.com/documentation/swiftui/view/matchedtransitionsource(id:in:))

# matchedTransitionSource(id:in:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Identifies this view as the source of a navigation transition, such as a zoom transition.

## Declaration

```swift
nonisolated func matchedTransitionSource(id: some Hashable, in namespace: Namespace.ID) -> some View

```

## Parameters

- `id`: The identifier, often derived from the identifier of the data being displayed by the view.
- `namespace`: The namespace in which defines the `id`. New namespaces are created by adding an [Namespace](../namespace.md) variable to a [View](../view.md) type and reading its value in the view’s body method.

## See Also

### Defining matched transitions

- [matchedTransitionSource(id:in:configuration:)](matchedtransitionsource%28id_in_configuration_%29.md): Identifies this view as the source of a navigation transition, such as a zoom transition.
- [MatchedTransitionSourceConfiguration](../matchedtransitionsourceconfiguration.md): A configuration that defines the appearance of a matched transition source.
- [EmptyMatchedTransitionSourceConfiguration](../emptymatchedtransitionsourceconfiguration.md): An unstyled matched transition source configuration.
