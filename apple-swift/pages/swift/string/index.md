> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/string/index](https://developer.apple.com/documentation/swift/string/index)

# String.Index

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A position of a character or code unit in a string.

## Declaration

```swift
@frozen struct Index
```

## Topics

### Initializers

- [init(\_:within:)](index/init%28__within_%29-2txd4.md): Creates an index in the given UTF-16 view that corresponds exactly to the specified string position.
- [init(\_:within:)](index/init%28__within_%29-2u3iq.md): Creates an index in the given string that corresponds exactly to the specified position.
- [init(\_:within:)](index/init%28__within_%29-379kg.md)
- [init(\_:within:)](index/init%28__within_%29-3eir6.md): Creates an index in the given string that corresponds exactly to the specified position.
- [init(\_:within:)](index/init%28__within_%29-5lb6l.md): Creates an index in the given UTF-8 view that corresponds exactly to the specified `UTF16View` position.
- [init(\_:within:)](index/init%28__within_%29-7e1rw.md): Creates an index in the given Unicode scalars view that corresponds exactly to the specified `UTF16View` position.
- [init(encodedOffset:)](index/init%28encodedoffset_%29.md): Deprecated. Creates a new index at the specified code unit offset.
- [init(utf16Offset:in:)](index/init%28utf16offset_in_%29.md): Creates a new index at the specified UTF-16 code unit offset

### Instance Properties

- [encodedOffset](index/encodedoffset.md): Deprecated. The offset into a string’s code units for this index.

### Instance Methods

- [samePosition(in:)](index/sameposition%28in_%29-3mz95.md): Returns the position in the given UTF-8 view that corresponds exactly to this index.
- [samePosition(in:)](index/sameposition%28in_%29-4yeo1.md): Returns the position in the given view of Unicode scalars that corresponds exactly to this index.
- [samePosition(in:)](index/sameposition%28in_%29-6oxfv.md): Returns the position in the given string that corresponds exactly to this index.
- [samePosition(in:)](index/sameposition%28in_%29-86cct.md): Returns the position in the given UTF-16 view that corresponds exactly to this index.
- [utf16Offset(in:)](index/utf16offset%28in_%29.md): The UTF-16 code unit offset corresponding to this index.

### Default Implementations

- [Comparable Implementations](index/comparable-implementations.md)
- [CustomDebugStringConvertible Implementations](index/customdebugstringconvertible-implementations.md)
- [Equatable Implementations](index/equatable-implementations.md)
- [Hashable Implementations](index/hashable-implementations.md)

## Relationships

### Conforms To

- [BitwiseCopyable](../bitwisecopyable.md)
- [Comparable](../comparable.md)
- [Copyable](../copyable.md)
- [CustomDebugStringConvertible](../customdebugstringconvertible.md)
- [Equatable](../equatable.md)
- [Escapable](../escapable.md)
- [Hashable](../hashable.md)
- [Sendable](../sendable.md)
- [SendableMetatype](../sendablemetatype.md)

## See Also

### Related String Types

- [Substring](../substring.md): A slice of a string.
- [StringProtocol](../stringprotocol.md): A type that can represent a string as a collection of characters.
- [String.UnicodeScalarView](unicodescalarview.md): A view of a string’s contents as a collection of Unicode scalar values.
- [String.UTF16View](utf16view.md): A view of a string’s contents as a collection of UTF-16 code units.
- [String.UTF8View](utf8view.md): A view of a string’s contents as a collection of UTF-8 code units.
- [String.Iterator](iterator.md): A type that provides the collection’s iteration interface and encapsulates its iteration state.
- [String.Encoding](encoding.md)
