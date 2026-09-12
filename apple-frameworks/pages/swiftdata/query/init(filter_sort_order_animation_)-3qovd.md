> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/query/init(filter:sort:order:animation:)-3qovd](https://developer.apple.com/documentation/swiftdata/query/init(filter:sort:order:animation:)-3qovd)

# init(filter:sort:order:animation:)

**Framework:** SwiftData  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates a query with a predicate, a key path to a property for sorting, and the order to sort by.

## Declaration

```swift
@MainActor @preconcurrency init<Value>(filter: Predicate<Element>? = nil, sort keyPath: KeyPath<Element, Value>, order: SortOrder = .forward, animation: Animation) where Result == [Element], Value : Comparable
```

## Parameters

- `filter`: A predicate on `Element`
- `sort`: Key path to property used for sorting.
- `order`: Whether to sort in forward or reverse order.
- `animation`: The animation to use for user interface changes that result from changes to the fetched results.

<a id="discussion"></a>

## Discussion

Use `Query` within a view by wrapping the variable for the query’s result:

```swift
struct RecipeList: View {
    // Recipes sorted by date of creation
    @Query(sort: \.dateCreated)
    var favoriteRecipes: [Recipe]

    var body: some View {
        List(favoriteRecipes) { RecipeDetails($0) }
    }
}
```

## See Also

### Creating a query

- [init(\_:animation:)](init%28__animation_%29.md): Create a query with a SwiftData fetch descriptor.
- [init(filter:sort:animation:)](init%28filter_sort_animation_%29.md): Create a query with a predicate, and a list of sort descriptors.
- [init(filter:sort:order:animation:)](init%28filter_sort_order_animation_%29-1qfoj.md): Creates a query with a predicate, a key path to a property for sorting, and the order to sort by.
- [init(\_:transaction:)](init%28__transaction_%29.md): Create a query with a SwiftData fetch descriptor.
- [init(filter:sort:transaction:)](init%28filter_sort_transaction_%29.md): Create a query with a predicate, and a list of sort descriptors.
- [init(filter:sort:order:transaction:)](init%28filter_sort_order_transaction_%29-2bx9a.md): Create a query with a predicate, a key path to a property for sorting, and the order to sort by.
- [init(filter:sort:order:transaction:)](init%28filter_sort_order_transaction_%29-8q7vs.md): Create a query with a predicate, a key path to a property for sorting, and the order to sort by.
