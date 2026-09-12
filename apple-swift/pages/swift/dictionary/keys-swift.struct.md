> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/dictionary/keys-swift.struct](https://developer.apple.com/documentation/swift/dictionary/keys-swift.struct)

# Dictionary.Keys

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A view of a dictionary’s keys.

## Declaration

```swift
@frozen struct Keys
```

## Topics

### Operators

- [==(\_:\_:)](keys-swift.struct/==%28____%29.md): Returns a Boolean value indicating whether two values are equal.

### Instance Properties

- [count](keys-swift.struct/count.md): The number of keys in the dictionary.
- [endIndex](keys-swift.struct/endindex.md): The collection’s “past the end” position—that is, the position one greater than the last valid subscript argument.
- [isEmpty](keys-swift.struct/isempty.md): A Boolean value indicating whether the collection is empty.
- [startIndex](keys-swift.struct/startindex.md): The position of the first element in a nonempty collection.

### Instance Methods

- [formIndex(after:)](keys-swift.struct/formindex%28after_%29.md): Replaces the given index with its successor.
- [index(after:)](keys-swift.struct/index%28after_%29.md): Returns the position immediately after the given index.

### Subscripts

- [subscript(\_:)](keys-swift.struct/subscript%28__%29.md): Accesses the element at the specified position.

### Type Aliases

- [Dictionary.Keys.Element](keys-swift.struct/element.md): A type representing the sequence’s elements.
- [Dictionary.Keys.Index](keys-swift.struct/index.md): A type that represents a position in the collection.
- [Dictionary.Keys.Indices](keys-swift.struct/indices.md): A type that represents the indices that are valid for subscripting the collection, in ascending order.
- [Dictionary.Keys.SubSequence](keys-swift.struct/subsequence.md): A collection representing a contiguous subrange of this collection’s elements. The subsequence shares indices with the original collection.

### Default Implementations

- [Collection Implementations](keys-swift.struct/collection-implementations.md)
- [CustomDebugStringConvertible Implementations](keys-swift.struct/customdebugstringconvertible-implementations.md)
- [CustomStringConvertible Implementations](keys-swift.struct/customstringconvertible-implementations.md)
- [Equatable Implementations](keys-swift.struct/equatable-implementations.md)
- [Hashable Implementations](keys-swift.struct/hashable-implementations.md)
- [Sequence Implementations](keys-swift.struct/sequence-implementations.md)

## Relationships

### Conforms To

- [Collection](../collection.md)
- [Copyable](../copyable.md)
- [CustomDebugStringConvertible](../customdebugstringconvertible.md)
- [CustomStringConvertible](../customstringconvertible.md)
- [Equatable](../equatable.md)
- [Escapable](../escapable.md)
- [Hashable](../hashable.md)
- [Sendable](../sendable.md)
- [SendableMetatype](../sendablemetatype.md)
- [Sequence](../sequence.md)

## See Also

### Supporting Types

- [Dictionary.Values](values-swift.struct.md): Conforms when `Key` conforms to `Hashable`. A view of a dictionary’s values.
- [Dictionary.Index](index.md): Conforms when `Key` conforms to `Hashable`. The position of a key-value pair in a dictionary.
- [Dictionary.Indices](indices.md): Conforms when `Key` conforms to `Hashable`. A type that represents the indices that are valid for subscripting the collection, in ascending order.
- [Dictionary.Iterator](iterator.md): Conforms when `Key` conforms to `Hashable`. An iterator over the members of a `Dictionary<Key, Value>`.
