> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/sequence/element](https://developer.apple.com/documentation/swift/sequence/element)

# Element

**Framework:** Swift  
**Kind:** Associated Type  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A type representing the sequence’s elements.

## Declaration

```swift
associatedtype Element where Self.Element == Self.Iterator.Element
```

## See Also

### Creating an Iterator

- [makeIterator()](makeiterator%28%29.md): Returns an iterator over the elements of this sequence.
- [Iterator](iterator.md): A type that provides the sequence’s iteration interface and encapsulates its iteration state.
