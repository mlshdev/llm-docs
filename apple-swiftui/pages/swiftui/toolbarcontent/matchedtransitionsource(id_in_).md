> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/toolbarcontent/matchedtransitionsource(id:in:)](https://developer.apple.com/documentation/swiftui/toolbarcontent/matchedtransitionsource(id:in:))

# matchedTransitionSource(id:in:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Identifies this toolbar content as the source of a navigation transition, such as a zoom transition.

## Declaration

```swift
nonisolated func matchedTransitionSource(id: some Hashable, in namespace: Namespace.ID) -> some ToolbarContent

```

## Parameters

- `id`: The identifier, often derived from the identifier of the data being displayed by the toolbar content.
- `namespace`: The namespace in which defines the `id`. New namespaces are created by adding an [Namespace](../namespace.md) variable to a [View](../view.md) or \`\`ToolbarContent\` type and reading its value in the type’s body method.

<a id="discussion"></a>

## Discussion

Use this modifier in conjunction with `View.navigationTransition(_:)` to provide a source for the transition effect:

```swift
struct ContentView: View {
    @State private var isPresented = false
    @Namespace private var namespace

    var body: some View {
        NavigationStack {
            DetailView()
                .toolbar {
                    ToolbarItem(placement: .topBarTrailing) {
                        Button("Show Sheet", systemImage: "globe") {
                            isPresented = true
                        }
                    }
                    .matchedTransitionSource(
                        id: "world", in: namespace)
                }
                .sheet(isPresented: $isPresented) {
                    SheetView()
                        .navigationTransition(
                            .zoom(sourceID: "world", in: namespace))
                }
        }
    }
}
```
