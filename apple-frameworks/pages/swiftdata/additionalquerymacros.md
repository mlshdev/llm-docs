> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/additionalquerymacros](https://developer.apple.com/documentation/swiftdata/additionalquerymacros)

# Additional query macros

**Framework:** SwiftData  
**Kind:** API Collection

Supplementary macros that enable you to narrow query results and tell SwiftData how to sort, order, and section those results.

## Topics

### Basic queries

- [Query(animation:)](query%28animation_%29.md): Fetches all instances of the attached model type, using the specified animation to animate any subsequent changes.
- [Query(\_:animation:sectionBy:)](query%28__animation_sectionby_%29-91gkm.md)
- [Query(\_:animation:sectionBy:)](query%28__animation_sectionby_%29-9futr.md)
- [Query(transaction:)](query%28transaction_%29.md): Fetches all instances of the attached model type, using the specified transaction to animate any subsequent changes.
- [Query(\_:transaction:sectionBy:)](query%28__transaction_sectionby_%29-1poj9.md)
- [Query(\_:transaction:sectionBy:)](query%28__transaction_sectionby_%29-2iol.md)
- [Query(filter:sort:transaction:sectionBy:)](query%28filter_sort_transaction_sectionby_%29-4wwsy.md)
- [Query(filter:sort:transaction:sectionBy:)](query%28filter_sort_transaction_sectionby_%29-6qrae.md)

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
- [Query(filter:sort:order:transaction:)](query%28filter_sort_order_transaction_%29-6kkiu.md): Fetches a subset of the attached model type, in a specific order, by sorting on a nonoptional attribute.
- [Query(filter:sort:order:transaction:)](query%28filter_sort_order_transaction_%29-8tk8u.md): Fetches a subset of the attached model type, in a specific order, by sorting on an optional attribute.
- [Query(filter:sort:order:transaction:sectionBy:)](query%28filter_sort_order_transaction_sectionby_%29-3cn7t.md)
- [Query(filter:sort:order:transaction:sectionBy:)](query%28filter_sort_order_transaction_sectionby_%29-6c6ho.md)
- [Query(filter:sort:order:transaction:sectionBy:)](query%28filter_sort_order_transaction_sectionby_%29-9mbr6.md)
- [Query(filter:sort:order:transaction:sectionBy:)](query%28filter_sort_order_transaction_sectionby_%29-i779.md)

### Descriptor-based queries

- [Query(\_:animation:)](query%28__animation_%29.md): Fetches only the subset of the attached model type that satisfy the provided fetch descriptor’s criteria.
- [Query(\_:transaction:)](query%28__transaction_%29.md): Fetches only the subset of the attached model type that satisfy the provided fetch descriptor’s criteria.

## See Also

### Model fetch

- [Filtering and sorting persistent data](filtering-and-sorting-persistent-data.md): Manage data store presentation using predicates and dynamic queries.
- [Query()](query%28%29.md): Fetches all instances of the attached model type.
- [Query](query.md): A type that fetches models using the specified criteria, and manages those models so they remain in sync with the underlying data.
- [FetchDescriptor](fetchdescriptor.md): A type that describes the criteria, sort order, and any additional configuration to use when performing a fetch.
