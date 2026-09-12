> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/lazycollectionprotocol](https://developer.apple.com/documentation/swift/lazycollectionprotocol)

# LazyCollectionProtocol

**Framework:** Swift  
**Kind:** Protocol  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

## Declaration

```swift
protocol LazyCollectionProtocol : Collection, LazySequenceProtocol where Self.Elements : Collection
```

## Topics

### Instance Properties

- [lazy](lazycollectionprotocol/lazy-7wmso.md): Conforms when `Elements` conforms to `LazyCollectionProtocol`.
- [lazy](lazycollectionprotocol/lazy-9k7qy.md)

## Relationships

### Inherits From

- [Collection](collection.md)
- [LazySequenceProtocol](lazysequenceprotocol.md)
- [Sequence](sequence.md)

### Conforming Types

- [LazyDropWhileSequence](lazydropwhilesequence.md)
- [LazyFilterSequence](lazyfiltersequence.md)
- [LazyMapSequence](lazymapsequence.md)
- [LazyPrefixWhileSequence](lazyprefixwhilesequence.md)
- [LazySequence](lazysequence.md)

## See Also

### Lazy Collections

- [LazySequenceProtocol](lazysequenceprotocol.md): A sequence on which normally-eager sequence operations are implemented lazily.
