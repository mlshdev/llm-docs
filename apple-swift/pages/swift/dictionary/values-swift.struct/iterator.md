> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/dictionary/values-swift.struct/iterator

# Dictionary.Values.Iterator

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A type that provides the collection’s iteration interface and encapsulates its iteration state.

## Declaration

```swift
@frozen struct Iterator
```

<a id="overview"></a>

## Overview

By default, a collection conforms to the `Sequence` protocol by supplying `IndexingIterator` as its associated `Iterator` type.

## Topics

### Instance Methods

- [next()](iterator/next%28%29.md): Advances to the next element and returns it, or `nil` if no next element exists.

### Type Aliases

- [Dictionary.Values.Iterator.Element](iterator/element.md): The type of element traversed by the iterator.

## Relationships

### Conforms To

- [IteratorProtocol](../../iteratorprotocol.md)
- [Sendable](../../sendable.md)
- [SendableMetatype](../../sendablemetatype.md)
