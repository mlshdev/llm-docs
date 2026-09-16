> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/uint128/words-swift.struct/iterator

# UInt128.Words.Iterator

**Framework:** Swift  
**Kind:** Type Alias  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A type that provides the collection’s iteration interface and encapsulates its iteration state.

## Declaration

```swift
typealias Iterator = IndexingIterator<UInt128.Words>
```

<a id="discussion"></a>

## Discussion

By default, a collection conforms to the `Sequence` protocol by supplying `IndexingIterator` as its associated `Iterator` type.
