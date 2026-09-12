> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/matchedtransitionsource(id:in:configuration:)](https://developer.apple.com/documentation/swiftui/view/matchedtransitionsource(id:in:configuration:))

# matchedTransitionSource(id:in:configuration:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Identifies this view as the source of a navigation transition, such as a zoom transition.

## Declaration

```swift
nonisolated func matchedTransitionSource(id: some Hashable, in namespace: Namespace.ID, configuration: (EmptyMatchedTransitionSourceConfiguration) -> some MatchedTransitionSourceConfiguration) -> some View

```

## Parameters

- `id`: The identifier, often derived from the identifier of the data being displayed by the view.
- `namespace`: The namespace in which defines the `id`. New namespaces are created by adding an [Namespace](../namespace.md) variable to a [View](../view.md) type and reading its value in the view’s body method.
- `configuration`: A closure that you can use to apply styling to the source.

<a id="discussion"></a>

## Discussion

The appearance of the source can be configured using the `configuration` trailing closure. Any modifiers applied will be smoothly interpolated when a zoom transition originates from this matched transition source.

```swift
MyView()
    .matchedTransitionSource(id: someID, in: someNamespace) { source in
        source
            .cornerRadius(8.0)
    }
```

## See Also

### Defining matched transitions

- [matchedTransitionSource(id:in:)](matchedtransitionsource%28id_in_%29.md): Identifies this view as the source of a navigation transition, such as a zoom transition.
- [MatchedTransitionSourceConfiguration](../matchedtransitionsourceconfiguration.md): A configuration that defines the appearance of a matched transition source.
- [EmptyMatchedTransitionSourceConfiguration](../emptymatchedtransitionsourceconfiguration.md): An unstyled matched transition source configuration.
