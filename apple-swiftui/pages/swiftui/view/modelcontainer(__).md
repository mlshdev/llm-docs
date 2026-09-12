> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/modelcontainer(_:)](https://developer.apple.com/documentation/swiftui/view/modelcontainer(_:))

# modelContainer(\_:)

**Framework:** SwiftData  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · watchOS 10.0+

Sets the model container and associated model context in this view’s environment.

## Declaration

```swift
@MainActor @preconcurrency func modelContainer(_ container: ModelContainer) -> some View

```

## Parameters

- `container`: The model container to use for this view.

<a id="discussion"></a>

## Discussion

In this example, `ContentView` sets a model container to use for `RecipesList`:

```swift
struct ContentView: View {
    @State private var container = ModelContainer(...)

    var body: some Scene {
        RecipesList()
            .modelContainer(container)
    }
}
```

The environment’s [modelContext](../environmentvalues/modelcontext.md) property will be assigned a new context associated with this container. All implicit model context operations in this view, such as `Query` properties, will use the environment’s context.

## See Also

### Configuring a model

- [modelContext(\_:)](modelcontext%28__%29.md): Sets the model context in this view’s environment.
- [modelContainer(for:inMemory:isAutosaveEnabled:isUndoEnabled:onSetup:)](modelcontainer%28for_inmemory_isautosaveenabled_isundoenabled_onsetup_%29.md): Sets the model container in this view for storing the provided model type, creating a new container if necessary, and also sets a model context for that container in this view’s environment.
