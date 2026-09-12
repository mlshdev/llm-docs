> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/modelcontext(_:)](https://developer.apple.com/documentation/swiftui/view/modelcontext(_:))

# modelContext(\_:)

**Framework:** SwiftData  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · watchOS 10.0+

Sets the model context in this view’s environment.

## Declaration

```swift
@MainActor @preconcurrency func modelContext(_ modelContext: ModelContext) -> some View

```

## Parameters

- `modelContext`: The model context to set in this view’s environment.

<a id="discussion"></a>

## Discussion

In this example, the `RecipesList` view sets a model context to use for all of its content:

```swift
@Model class Recipe { ... }
...
RecipesList()
    .modelContext(myContext)
```

The environment’s [modelContext](../environmentvalues/modelcontext.md) property will be assigned `myContext`. All implicit model context operations in this view, such as `Query` properties, will use the environment’s context.

## See Also

### Configuring a model

- [modelContainer(\_:)](modelcontainer%28__%29.md): Sets the model container and associated model context in this view’s environment.
- [modelContainer(for:inMemory:isAutosaveEnabled:isUndoEnabled:onSetup:)](modelcontainer%28for_inmemory_isautosaveenabled_isundoenabled_onsetup_%29.md): Sets the model container in this view for storing the provided model type, creating a new container if necessary, and also sets a model context for that container in this view’s environment.
