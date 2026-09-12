> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/int64/words-swift.struct](https://developer.apple.com/documentation/swift/int64/words-swift.struct)

# Int64.Words

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A type that represents the words of this integer.

## Declaration

```swift
@frozen struct Words
```

## Topics

### Initializers

- [init(\_:)](words-swift.struct/init%28__%29.md)

### Instance Properties

- [count](words-swift.struct/count.md): The number of elements in the collection.
- [endIndex](words-swift.struct/endindex.md): The collection’s “past the end” position—that is, the position one greater than the last valid subscript argument.
- [indices](words-swift.struct/indices-swift.property.md): The indices that are valid for subscripting the collection, in ascending order.
- [startIndex](words-swift.struct/startindex.md): The position of the first element in a nonempty collection.

### Instance Methods

- [index(after:)](words-swift.struct/index%28after_%29.md): Returns the position immediately after the given index.
- [index(before:)](words-swift.struct/index%28before_%29.md): Returns the position immediately before the given index.

### Subscripts

- [subscript(\_:)](words-swift.struct/subscript%28__%29.md): Accesses the element at the specified position.

### Type Aliases

- [Int64.Words.Element](words-swift.struct/element.md): A type representing the sequence’s elements.
- [Int64.Words.Index](words-swift.struct/index.md): A type that represents a position in the collection.
- [Int64.Words.Indices](words-swift.struct/indices-swift.typealias.md): A type that represents the indices that are valid for subscripting the collection, in ascending order.
- [Int64.Words.Iterator](words-swift.struct/iterator.md): A type that provides the collection’s iteration interface and encapsulates its iteration state.
- [Int64.Words.SubSequence](words-swift.struct/subsequence.md): A collection representing a contiguous subrange of this collection’s elements. The subsequence shares indices with the original collection.

### Default Implementations

- [BidirectionalCollection Implementations](words-swift.struct/bidirectionalcollection-implementations.md)
- [Collection Implementations](words-swift.struct/collection-implementations.md)
- [RandomAccessCollection Implementations](words-swift.struct/randomaccesscollection-implementations.md)
- [Sequence Implementations](words-swift.struct/sequence-implementations.md)

## Relationships

### Conforms To

- [BidirectionalCollection](../bidirectionalcollection.md)
- [BitwiseCopyable](../bitwisecopyable.md)
- [Collection](../collection.md)
- [Copyable](../copyable.md)
- [RandomAccessCollection](../randomaccesscollection.md)
- [Sendable](../sendable.md)
- [SendableMetatype](../sendablemetatype.md)
- [Sequence](../sequence.md)
