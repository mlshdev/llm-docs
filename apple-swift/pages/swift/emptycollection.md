> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/emptycollection](https://developer.apple.com/documentation/swift/emptycollection)

# EmptyCollection

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A collection whose element type is `Element` but that is always empty.

## Declaration

```swift
@frozen struct EmptyCollection<Element>
```

## Topics

### Initializers

- [init()](emptycollection/init%28%29.md): Creates an instance.

### Default Implementations

- [BidirectionalCollection Implementations](emptycollection/bidirectionalcollection-implementations.md)
- [Collection Implementations](emptycollection/collection-implementations.md)
- [Equatable Implementations](emptycollection/equatable-implementations.md)
- [Hashable Implementations](emptycollection/hashable-implementations.md)
- [MutableCollection Implementations](emptycollection/mutablecollection-implementations.md)
- [RandomAccessCollection Implementations](emptycollection/randomaccesscollection-implementations.md)
- [Sequence Implementations](emptycollection/sequence-implementations.md)

## Relationships

### Conforms To

- [BidirectionalCollection](bidirectionalcollection.md)
- [BitwiseCopyable](bitwisecopyable.md)
- [Collection](collection.md)
- [ContiguousBytes](https://developer.apple.com/documentation/foundation/contiguousbytes)
- [Copyable](copyable.md)
- [DataProtocol](https://developer.apple.com/documentation/foundation/dataprotocol)
- [Equatable](equatable.md)
- [Escapable](escapable.md)
- [Hashable](hashable.md)
- [MutableCollection](mutablecollection.md)
- [RandomAccessCollection](randomaccesscollection.md)
- [Sendable](sendable.md)
- [SendableMetatype](sendablemetatype.md)
- [Sequence](sequence.md)

## See Also

### Special-Use Collections

- [repeatElement(\_:count:)](repeatelement%28__count_%29.md): Creates a collection containing the specified number of the given element.
- [CollectionOfOne](collectionofone.md): A collection containing a single element.
- [KeyValuePairs](keyvaluepairs.md): A lightweight collection of key-value pairs.
- [DictionaryLiteral](dictionaryliteral.md): Deprecated.
