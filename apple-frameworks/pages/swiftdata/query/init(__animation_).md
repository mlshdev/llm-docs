> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/query/init(_:animation:)](https://developer.apple.com/documentation/swiftdata/query/init(_:animation:))

# init(\_:animation:)

**Framework:** SwiftData  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Create a query with a SwiftData fetch descriptor.

## Declaration

```swift
@MainActor @preconcurrency init(_ descriptor: FetchDescriptor<Element>, animation: Animation) where Result == [Element]
```

## Parameters

- `descriptor`: A `SwiftData.FetchDescriptor`.
- `animation`: The animation to use for user interface changes that result from changes to the fetched results.

## See Also

### Creating a query

- [init(filter:sort:animation:)](init%28filter_sort_animation_%29.md): Create a query with a predicate, and a list of sort descriptors.
- [init(filter:sort:order:animation:)](init%28filter_sort_order_animation_%29-1qfoj.md): Creates a query with a predicate, a key path to a property for sorting, and the order to sort by.
- [init(filter:sort:order:animation:)](init%28filter_sort_order_animation_%29-3qovd.md): Creates a query with a predicate, a key path to a property for sorting, and the order to sort by.
- [init(\_:transaction:)](init%28__transaction_%29.md): Create a query with a SwiftData fetch descriptor.
- [init(filter:sort:transaction:)](init%28filter_sort_transaction_%29.md): Create a query with a predicate, and a list of sort descriptors.
- [init(filter:sort:order:transaction:)](init%28filter_sort_order_transaction_%29-2bx9a.md): Create a query with a predicate, a key path to a property for sorting, and the order to sort by.
- [init(filter:sort:order:transaction:)](init%28filter_sort_order_transaction_%29-8q7vs.md): Create a query with a predicate, a key path to a property for sorting, and the order to sort by.
