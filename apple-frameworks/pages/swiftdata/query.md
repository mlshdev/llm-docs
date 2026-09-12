> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/query](https://developer.apple.com/documentation/swiftdata/query)

# Query

**Framework:** SwiftData  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A type that fetches models using the specified criteria, and manages those models so they remain in sync with the underlying data.

## Declaration

```swift
@MainActor @preconcurrency struct Query<Element, Result> where Element : PersistentModel
```

## Mentioned In

- [Preserving your app’s model data across launches](preserving-your-apps-model-data-across-launches.md)

## Topics

### Creating a query

- [init(\_:animation:)](query/init%28__animation_%29.md): Create a query with a SwiftData fetch descriptor.
- [init(filter:sort:animation:)](query/init%28filter_sort_animation_%29.md): Create a query with a predicate, and a list of sort descriptors.
- [init(filter:sort:order:animation:)](query/init%28filter_sort_order_animation_%29-1qfoj.md): Creates a query with a predicate, a key path to a property for sorting, and the order to sort by.
- [init(filter:sort:order:animation:)](query/init%28filter_sort_order_animation_%29-3qovd.md): Creates a query with a predicate, a key path to a property for sorting, and the order to sort by.
- [init(\_:transaction:)](query/init%28__transaction_%29.md): Create a query with a SwiftData fetch descriptor.
- [init(filter:sort:transaction:)](query/init%28filter_sort_transaction_%29.md): Create a query with a predicate, and a list of sort descriptors.
- [init(filter:sort:order:transaction:)](query/init%28filter_sort_order_transaction_%29-2bx9a.md): Create a query with a predicate, a key path to a property for sorting, and the order to sort by.
- [init(filter:sort:order:transaction:)](query/init%28filter_sort_order_transaction_%29-8q7vs.md): Create a query with a predicate, a key path to a property for sorting, and the order to sort by.

### Getting query configuration

- [modelContext](query/modelcontext.md): Current model context `Query` interacts with.
- [fetchError](query/fetcherror.md): An error encountered during the most recent attempt to fetch data.

### Accessing the value

- [wrappedValue](query/wrappedvalue.md): The most recent fetched result from the Query.

### Accessing sections

- [sections](query/sections.md): Conforms when `Element` conforms to `PersistentModel`. The sections computed from the current results, grouped by the `sectionBy` key path.

### Initializers

- [init(\_:animation:sectionBy:)](query/init%28__animation_sectionby_%29-1yoyc.md): Conforms when `Element` conforms to `PersistentModel`. Creates a sectioned query from a fetch descriptor, grouped into sections by a required String key path.
- [init(\_:animation:sectionBy:)](query/init%28__animation_sectionby_%29-8yip7.md): Conforms when `Element` conforms to `PersistentModel`. Creates a sectioned query from a fetch descriptor, grouped by a required optional-String key path.
- [init(\_:transaction:sectionBy:)](query/init%28__transaction_sectionby_%29-3pg23.md): Conforms when `Element` conforms to `PersistentModel`. Creates a sectioned query from a fetch descriptor, grouped into sections by a required String key path.
- [init(\_:transaction:sectionBy:)](query/init%28__transaction_sectionby_%29-8ecyq.md): Conforms when `Element` conforms to `PersistentModel`. Creates a sectioned query from a fetch descriptor, grouped by a required optional-String key path.
- [init(filter:sort:animation:sectionBy:)](query/init%28filter_sort_animation_sectionby_%29-1sjv1.md): Conforms when `Element` conforms to `PersistentModel`. Creates a sectioned query with sort descriptors, grouped by a required optional-String key path.
- [init(filter:sort:animation:sectionBy:)](query/init%28filter_sort_animation_sectionby_%29-35eif.md): Conforms when `Element` conforms to `PersistentModel`. Creates a sectioned query with sort descriptors, grouped into sections by a required String key path.
- [init(filter:sort:order:animation:sectionBy:)](query/init%28filter_sort_order_animation_sectionby_%29-39v3n.md): Conforms when `Element` conforms to `PersistentModel`. Creates a sectioned query sorted by an optional key path, grouped by a required optional-String key path.
- [init(filter:sort:order:animation:sectionBy:)](query/init%28filter_sort_order_animation_sectionby_%29-3myq0.md): Conforms when `Element` conforms to `PersistentModel`. Creates a sectioned query sorted by a key path, grouped into sections by a required String key path.
- [init(filter:sort:order:animation:sectionBy:)](query/init%28filter_sort_order_animation_sectionby_%29-4peqq.md): Conforms when `Element` conforms to `PersistentModel`. Creates a sectioned query sorted by a key path, grouped by a required optional-String key path. `nil` values share the empty-string section.
- [init(filter:sort:order:animation:sectionBy:)](query/init%28filter_sort_order_animation_sectionby_%29-6td6n.md): Conforms when `Element` conforms to `PersistentModel`. Creates a sectioned query sorted by an optional key path, grouped into sections by a required String key path.
- [init(filter:sort:order:transaction:sectionBy:)](query/init%28filter_sort_order_transaction_sectionby_%29-2kk0t.md): Conforms when `Element` conforms to `PersistentModel`. Creates a sectioned query sorted by an optional key path, grouped into sections by a required String key path.
- [init(filter:sort:order:transaction:sectionBy:)](query/init%28filter_sort_order_transaction_sectionby_%29-62fdm.md): Conforms when `Element` conforms to `PersistentModel`. Creates a sectioned query sorted by an optional key path, grouped by a required optional-String key path.
- [init(filter:sort:order:transaction:sectionBy:)](query/init%28filter_sort_order_transaction_sectionby_%29-68vqy.md): Conforms when `Element` conforms to `PersistentModel`. Creates a sectioned query sorted by a key path, grouped by a required optional-String key path.
- [init(filter:sort:order:transaction:sectionBy:)](query/init%28filter_sort_order_transaction_sectionby_%29-8finq.md): Conforms when `Element` conforms to `PersistentModel`. Creates a sectioned query sorted by a key path, grouped into sections by a required String key path.
- [init(filter:sort:transaction:sectionBy:)](query/init%28filter_sort_transaction_sectionby_%29-353r3.md): Conforms when `Element` conforms to `PersistentModel`. Creates a sectioned query with sort descriptors, grouped by a required optional-String key path.
- [init(filter:sort:transaction:sectionBy:)](query/init%28filter_sort_transaction_sectionby_%29-90bbe.md): Conforms when `Element` conforms to `PersistentModel`. Creates a sectioned query with sort descriptors, grouped into sections by a required String key path.

## Relationships

### Conforms To

- [DynamicProperty](https://developer.apple.com/documentation/swiftui/dynamicproperty)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Model fetch

- [Filtering and sorting persistent data](filtering-and-sorting-persistent-data.md): Manage data store presentation using predicates and dynamic queries.
- [Query()](query%28%29.md): Fetches all instances of the attached model type.
- [Additional query macros](additionalquerymacros.md): Supplementary macros that enable you to narrow query results and tell SwiftData how to sort, order, and section those results.
- [FetchDescriptor](fetchdescriptor.md): A type that describes the criteria, sort order, and any additional configuration to use when performing a fetch.
