> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/collectiondifference/iterator

# CollectionDifference.Iterator

**Framework:** Swift  
**Kind:** Type Alias  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A type that provides the collection’s iteration interface and encapsulates its iteration state.

## Declaration

```swift
typealias Iterator = IndexingIterator<CollectionDifference<ChangeElement>>
```

<a id="discussion"></a>

## Discussion

By default, a collection conforms to the `Sequence` protocol by supplying `IndexingIterator` as its associated `Iterator` type.
