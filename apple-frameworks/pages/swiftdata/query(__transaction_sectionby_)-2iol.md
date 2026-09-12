> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/query(_:transaction:sectionby:)-2iol](https://developer.apple.com/documentation/swiftdata/query(_:transaction:sectionby:)-2iol)

# Query(\_:transaction:sectionBy:)

**Framework:** SwiftData  
**Kind:** Macro  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

## Declaration

```swift
@attached(accessor) @attached(peer, names: prefixed(`_`)) macro Query<Element>(_ descriptor: FetchDescriptor<Element>, transaction: Transaction? = nil, sectionBy sectionKeyPath: KeyPath<Element, String?>) where Element : PersistentModel
```

## See Also

### Basic queries

- [Query(animation:)](query%28animation_%29.md): Fetches all instances of the attached model type, using the specified animation to animate any subsequent changes.
- [Query(\_:animation:sectionBy:)](query%28__animation_sectionby_%29-91gkm.md)
- [Query(\_:animation:sectionBy:)](query%28__animation_sectionby_%29-9futr.md)
- [Query(transaction:)](query%28transaction_%29.md): Fetches all instances of the attached model type, using the specified transaction to animate any subsequent changes.
- [Query(\_:transaction:sectionBy:)](query%28__transaction_sectionby_%29-1poj9.md)
- [Query(filter:sort:transaction:sectionBy:)](query%28filter_sort_transaction_sectionby_%29-4wwsy.md)
- [Query(filter:sort:transaction:sectionBy:)](query%28filter_sort_transaction_sectionby_%29-6qrae.md)
