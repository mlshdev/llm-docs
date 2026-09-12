> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/fetchdescriptor](https://developer.apple.com/documentation/swiftdata/fetchdescriptor)

# FetchDescriptor

**Framework:** SwiftData  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+ · Swift 5.9+

A type that describes the criteria, sort order, and any additional configuration to use when performing a fetch.

## Declaration

```swift
struct FetchDescriptor<T> where T : PersistentModel
```

## Mentioned In

- [Preserving your app’s model data across launches](preserving-your-apps-model-data-across-launches.md)

<a id="overview"></a>

## Overview

Use a fetch descriptor to capture the criteria necessary to select, and optionally sort, a specific collection of models from your app’s persistent storage. A fetch descriptor retrieves only a single type of persistent model, and relies on type inference to determine the appropriate type. However, you can configure a fetch descriptor to prefetch related models of different types using the [relationshipKeyPathsForPrefetching](fetchdescriptor/relationshipkeypathsforprefetching.md) property.

To fetch a collection of models, first create a fetch descriptor and specify a predicate and one or more sort descriptors. The predicate describes the attributes to filter by and the constraints to apply to those attributes. If you don’t specify a predicate, the fetch returns all models of the inferred type. You can further tweak a fetch by limiting the number of models it returns, or indicating whether the fetch evaluates any unsaved changes when it selects the models to return. After configuring the fetch descriptor, pass it to the model context’s [fetch(\_:)](modelcontext/fetch%28__%29.md) method to run the fetch.

```swift
let descriptor = FetchDescriptor<Recipe>(
    predicate: #Predicate { $0.isFavorite == true },
    sortBy: [
        .init(\.createdAt)
    ]
)
descriptor.fetchLimit = 10

let favoriteRecipes = try modelContext.fetch(descriptor)
```

If you’re displaying the fetched models in a SwiftUI view, use the descriptor with the [Query(\_:animation:)](query%28__animation_%29.md) macro instead.

```swift
struct FavoriteRecipesList: View {
    static var fetchDescriptor: FetchDescriptor<Recipe> {
        let descriptor = FetchDescriptor<Recipe>(
            predicate: #Predicate { $0.isFavorite == true },
            sortBy: [
                .init(\.createdAt)
            ]
        )
        descriptor.fetchLimit = 10
        return descriptor
    }

    @Query(FavoriteRecipesList.fetchDescriptor) private var favoriteRecipes: [Recipe]
    
    var body: some View {
        List(favoriteRecipes) { RecipeRowView($0) }
    }
} 
```

## Topics

### Creating a fetch descriptor

- [init(predicate:sortBy:)](fetchdescriptor/init%28predicate_sortby_%29.md): Creates a fetch descriptor with the specified predicate that, optionally, arranges the fetched models in a particular order.
- [Predicate](../foundation/predicate.md): A logical condition used to test a set of input values for searching or filtering.
- [SortDescriptor](../foundation/sortdescriptor.md): A serializable description of how to sort numerics and strings.

### Constraining the fetch

- [predicate](fetchdescriptor/predicate.md): The logical condition that determines whether the fetch includes a specific model in its results.
- [sortBy](fetchdescriptor/sortby.md): The sort descriptors that tell the fetch how to order its results.
- [fetchLimit](fetchdescriptor/fetchlimit.md): The maximum number of models the fetch can return.
- [fetchOffset](fetchdescriptor/fetchoffset.md): The offset of the first matching model to fetch.
- [includePendingChanges](fetchdescriptor/includependingchanges.md): A Boolean value that indicates whether, when the fetch runs, it matches against currently unsaved changes in the model context.

### Specifying the fetched attributes

- [relationshipKeyPathsForPrefetching](fetchdescriptor/relationshipkeypathsforprefetching.md): The key paths that identify any related models to include as part of the fetch.
- [propertiesToFetch](fetchdescriptor/propertiestofetch.md): The specific subset of attributes to fetch if you don’t require them all.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Model fetch

- [Filtering and sorting persistent data](filtering-and-sorting-persistent-data.md): Manage data store presentation using predicates and dynamic queries.
- [Query()](query%28%29.md): Fetches all instances of the attached model type.
- [Additional query macros](additionalquerymacros.md): Supplementary macros that enable you to narrow query results and tell SwiftData how to sort, order, and section those results.
- [Query](query.md): A type that fetches models using the specified criteria, and manages those models so they remain in sync with the underlying data.
