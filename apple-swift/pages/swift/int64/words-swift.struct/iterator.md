> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/int64/words-swift.struct/iterator](https://developer.apple.com/documentation/swift/int64/words-swift.struct/iterator)

# Int64.Words.Iterator

**Framework:** Swift  
**Kind:** Type Alias  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A type that provides the collection’s iteration interface and encapsulates its iteration state.

## Declaration

```swift
typealias Iterator = IndexingIterator<Int64.Words>
```

<a id="discussion"></a>

## Discussion

By default, a collection conforms to the `Sequence` protocol by supplying `IndexingIterator` as its associated `Iterator` type.
