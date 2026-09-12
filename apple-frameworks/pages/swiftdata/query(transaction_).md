> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/query(transaction:)](https://developer.apple.com/documentation/swiftdata/query(transaction:))

# Query(transaction:)

**Framework:** SwiftData  
**Kind:** Macro  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Fetches all instances of the attached model type, using the specified transaction to animate any subsequent changes.

## Declaration

```swift
@attached(accessor) @attached(peer, names: prefixed(`_`)) macro Query(transaction: Transaction)
```

## Parameters

- `transaction`: The transaction to use when updates to the fetched models trigger user interface changes.

## See Also

### Basic queries

- [Query(animation:)](query%28animation_%29.md): Fetches all instances of the attached model type, using the specified animation to animate any subsequent changes.
- [Query(\_:animation:sectionBy:)](query%28__animation_sectionby_%29-91gkm.md)
- [Query(\_:animation:sectionBy:)](query%28__animation_sectionby_%29-9futr.md)
- [Query(\_:transaction:sectionBy:)](query%28__transaction_sectionby_%29-1poj9.md)
- [Query(\_:transaction:sectionBy:)](query%28__transaction_sectionby_%29-2iol.md)
- [Query(filter:sort:transaction:sectionBy:)](query%28filter_sort_transaction_sectionby_%29-4wwsy.md)
- [Query(filter:sort:transaction:sectionBy:)](query%28filter_sort_transaction_sectionby_%29-6qrae.md)
