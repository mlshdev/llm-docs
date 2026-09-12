> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/joinedsequence/iterator](https://developer.apple.com/documentation/swift/joinedsequence/iterator)

# JoinedSequence.Iterator

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An iterator that presents the elements of the sequences traversed by a base iterator, concatenated using a given separator.

## Declaration

```swift
@frozen struct Iterator
```

## Topics

### Initializers

- [init(base:separator:)](iterator/init%28base_separator_%29.md): Creates an iterator that presents the elements of `base` sequences concatenated using `separator`.

### Default Implementations

- [IteratorProtocol Implementations](iterator/iteratorprotocol-implementations.md)

## Relationships

### Conforms To

- [Copyable](../copyable.md)
- [Escapable](../escapable.md)
- [IteratorProtocol](../iteratorprotocol.md)
- [Sendable](../sendable.md)
- [SendableMetatype](../sendablemetatype.md)
