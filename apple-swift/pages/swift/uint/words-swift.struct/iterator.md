> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/uint/words-swift.struct/iterator

# UInt.Words.Iterator

**Framework:** Swift  
**Kind:** Type Alias  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A type that provides the collection’s iteration interface and encapsulates its iteration state.

## Declaration

```swift
typealias Iterator = IndexingIterator<UInt.Words>
```

<a id="discussion"></a>

## Discussion

By default, a collection conforms to the `Sequence` protocol by supplying `IndexingIterator` as its associated `Iterator` type.
