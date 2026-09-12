> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/stridethroughiterator](https://developer.apple.com/documentation/swift/stridethroughiterator)

# StrideThroughIterator

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An iterator for a `StrideThrough` instance.

## Declaration

```swift
@frozen struct StrideThroughIterator<Element> where Element : Strideable
```

## Topics

### Default Implementations

- [IteratorProtocol Implementations](stridethroughiterator/iteratorprotocol-implementations.md)

## Relationships

### Conforms To

- [Copyable](copyable.md)
- [Escapable](escapable.md)
- [IteratorProtocol](iteratorprotocol.md)
- [Sendable](sendable.md)
- [SendableMetatype](sendablemetatype.md)

## See Also

### Indices and Iterators

- [IteratorSequence](iteratorsequence.md): A sequence built around an iterator of type `Base`.
- [IndexingIterator](indexingiterator.md): A type that iterates over a collection using its indices.
- [EnumeratedIterator](enumeratediterator.md): Deprecated.
- [SetIterator](setiterator.md)
- [StrideToIterator](stridetoiterator.md): An iterator for a `StrideTo` instance.
