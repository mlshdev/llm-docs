> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/scene/modelcontainer(_:)](https://developer.apple.com/documentation/swiftui/scene/modelcontainer(_:))

# modelContainer(\_:)

**Framework:** SwiftData  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · watchOS 10.0+

Sets the model container and associated model context in this scene’s environment.

## Declaration

```swift
@MainActor @preconcurrency func modelContainer(_ container: ModelContainer) -> some Scene

```

## Parameters

- `container`: The model container to use for this scene.

<a id="discussion"></a>

## Discussion

In this example, `RecipesApp` sets a shared model container to use for all of its windows:

```swift
@main
struct RecipesApp: App {
    @State private var container = ModelContainer(...)

    var body: some Scene {
        WindowGroup {
            RecipesList()
        }
        .modelContainer(container)
    }
}
```

The environment’s [modelContext](../environmentvalues/modelcontext.md) property will be assigned a new context associated with this container. All implicit model context operations in this scene, such as `Query` properties, will use the environment’s context.

## See Also

### Configuring a data model

- [modelContext(\_:)](modelcontext%28__%29.md): Sets the model context in this scene’s environment.
- [modelContainer(for:inMemory:isAutosaveEnabled:isUndoEnabled:onSetup:)](modelcontainer%28for_inmemory_isautosaveenabled_isundoenabled_onsetup_%29.md): Sets the model container in this scene for storing the provided model type, creating a new container if necessary, and also sets a model context for that container in this scene’s environment.
