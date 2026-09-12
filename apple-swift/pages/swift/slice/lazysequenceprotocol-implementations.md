> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/slice/lazysequenceprotocol-implementations](https://developer.apple.com/documentation/swift/slice/lazysequenceprotocol-implementations)

# LazySequenceProtocol Implementations

**Framework:** Swift  
**Kind:** API Collection

## Topics

### Instance Properties

- [elements](elements-swift.property.md): Conforms when `Self` is `Self.Elements`. Identical to `self`.

### Instance Methods

- [compactMap(\_:)](compactmap%28__%29-188bn.md): Returns the non-`nil` results of mapping the given transformation over this sequence.
- [filter(\_:)](filter%28__%29-7stzr.md): Returns the elements of `self` that satisfy `isIncluded`.
- [flatMap(\_:)](flatmap%28__%29-1q7p9.md): Returns the concatenated results of mapping the given transformation over this sequence.
- [flatMap(\_:)](flatmap%28__%29-6ng42.md): Deprecated. Returns the non-`nil` results of mapping the given transformation over this sequence.
- [joined()](joined%28%29-3bqi4.md): Conforms when `Element` conforms to `Sequence`. Returns a lazy sequence that concatenates the elements of this sequence of sequences.
- [map(\_:)](map%28__%29-87fp1.md): Returns a `LazyMapSequence` over this `Sequence`. The elements of the result are computed lazily, each time they are read, by calling `transform` function on a base element.

### Type Aliases

- [Slice.Elements](elements.md): Conforms when `Base` conforms to `Collection` and `LazySequenceProtocol`. A `Sequence` that can contain the same elements as this one, possibly with a simpler type.
