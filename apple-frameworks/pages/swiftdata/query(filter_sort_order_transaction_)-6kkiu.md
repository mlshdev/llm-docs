> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/query(filter:sort:order:transaction:)-6kkiu](https://developer.apple.com/documentation/swiftdata/query(filter:sort:order:transaction:)-6kkiu)

# Query(filter:sort:order:transaction:)

**Framework:** SwiftData  
**Kind:** Macro  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Fetches a subset of the attached model type, in a specific order, by sorting on a nonoptional attribute.

## Declaration

```swift
@attached(accessor) @attached(peer, names: prefixed(`_`)) macro Query<Value, Element>(filter: Predicate<Element>? = nil, sort keyPath: KeyPath<Element, Value>, order: SortOrder = .forward, transaction: Transaction? = nil) where Value : Comparable, Element : PersistentModel
```

## Parameters

- `filter`: The logical condition the query uses to determine if it returns a specific model instance.
- `keyPath`: The keypath of the nonoptional attribute to sort by.
- `order`: The order of the sort.
- `transaction`: The transaction to use when updates to the fetched models trigger user interface changes.

## See Also

### Predicate-based queries

- [Query(filter:sort:animation:)](query%28filter_sort_animation_%29.md): Fetches a sorted subset of the attached model type that satisfy the specified predicate.
- [Query(filter:sort:order:animation:)](query%28filter_sort_order_animation_%29-80h6f.md): Fetches a subset of the attached model type, in a specific order, by sorting on a nonoptional attribute.
- [Query(filter:sort:order:animation:)](query%28filter_sort_order_animation_%29-pb15.md): Fetches a subset of the attached model type, in a specific order, by sorting on an optional attribute.
- [Query(filter:sort:animation:sectionBy:)](query%28filter_sort_animation_sectionby_%29-1s3xp.md)
- [Query(filter:sort:animation:sectionBy:)](query%28filter_sort_animation_sectionby_%29-82mot.md)
- [Query(filter:sort:order:animation:sectionBy:)](query%28filter_sort_order_animation_sectionby_%29-132tv.md)
- [Query(filter:sort:order:animation:sectionBy:)](query%28filter_sort_order_animation_sectionby_%29-66vd3.md)
- [Query(filter:sort:order:animation:sectionBy:)](query%28filter_sort_order_animation_sectionby_%29-75r20.md)
- [Query(filter:sort:order:animation:sectionBy:)](query%28filter_sort_order_animation_sectionby_%29-7o0vo.md)
- [Query(filter:sort:transaction:)](query%28filter_sort_transaction_%29.md): Fetches and sorts the subset of the attached model type that satisfy the specified predicate.
- [Query(filter:sort:order:transaction:)](query%28filter_sort_order_transaction_%29-8tk8u.md): Fetches a subset of the attached model type, in a specific order, by sorting on an optional attribute.
- [Query(filter:sort:order:transaction:sectionBy:)](query%28filter_sort_order_transaction_sectionby_%29-3cn7t.md)
- [Query(filter:sort:order:transaction:sectionBy:)](query%28filter_sort_order_transaction_sectionby_%29-6c6ho.md)
- [Query(filter:sort:order:transaction:sectionBy:)](query%28filter_sort_order_transaction_sectionby_%29-9mbr6.md)
- [Query(filter:sort:order:transaction:sectionBy:)](query%28filter_sort_order_transaction_sectionby_%29-i779.md)
