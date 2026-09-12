> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/dictionary/index](https://developer.apple.com/documentation/swift/dictionary/index)

# Dictionary.Index

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The position of a key-value pair in a dictionary.

## Declaration

```swift
@frozen struct Index
```

<a id="overview"></a>

## Overview

Dictionary has two subscripting interfaces:

1. Subscripting with a key, yielding an optional value:

   ```swift
   v = d[k]!
   ```
2. Subscripting with an index, yielding a key-value pair:

   ```swift
   (k, v) = d[i]
   ```

## Topics

### Default Implementations

- [Comparable Implementations](index/comparable-implementations.md)
- [Equatable Implementations](index/equatable-implementations.md)
- [Hashable Implementations](index/hashable-implementations.md)

## Relationships

### Conforms To

- [Comparable](../comparable.md)
- [Equatable](../equatable.md)
- [Hashable](../hashable.md)
- [Sendable](../sendable.md)
- [SendableMetatype](../sendablemetatype.md)

## See Also

### Supporting Types

- [Dictionary.Keys](keys-swift.struct.md): Conforms when `Key` conforms to `Hashable`. A view of a dictionary’s keys.
- [Dictionary.Values](values-swift.struct.md): Conforms when `Key` conforms to `Hashable`. A view of a dictionary’s values.
- [Dictionary.Indices](indices.md): Conforms when `Key` conforms to `Hashable`. A type that represents the indices that are valid for subscripting the collection, in ascending order.
- [Dictionary.Iterator](iterator.md): Conforms when `Key` conforms to `Hashable`. An iterator over the members of a `Dictionary<Key, Value>`.
