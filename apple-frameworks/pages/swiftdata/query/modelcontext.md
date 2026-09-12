> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/query/modelcontext](https://developer.apple.com/documentation/swiftdata/query/modelcontext)

# modelContext

**Framework:** SwiftData  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Current model context `Query` interacts with.

## Declaration

```swift
@MainActor @preconcurrency var modelContext: ModelContext { get }
```

<a id="discussion"></a>

## Discussion

Access this value from `Query` property wrapper’s stored property:

```swift
struct RecipeList: View {
    @Query var recipes: [Recipe]
    var body: some View {
        ChangesIndicator(
            hasChanges: _recipes.modelContext.hasChanges)
    }
}
```

Only access this property within of a view’s `body` property, otherwise its value may be invalid.

## See Also

### Getting query configuration

- [fetchError](fetcherror.md): An error encountered during the most recent attempt to fetch data.
