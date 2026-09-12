> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/lazyfiltersequence/lazysequenceprotocol-implementations](https://developer.apple.com/documentation/swift/lazyfiltersequence/lazysequenceprotocol-implementations)

# LazySequenceProtocol Implementations

**Framework:** Swift  
**Kind:** API Collection

## Topics

### Instance Properties

- [elements](elements-swift.property.md): Conforms when `Self` is `Self.Elements`. Identical to `self`.
- [lazy](lazy.md): Conforms when `Elements` conforms to `LazySequenceProtocol`.

### Instance Methods

- [compactMap(\_:)](compactmap%28__%29-72vhr.md): Returns the non-`nil` results of mapping the given transformation over this sequence.
- [drop(while:)](drop%28while_%29.md): Returns a lazy sequence that skips any initial elements that satisfy `predicate`.
- [flatMap(\_:)](flatmap%28__%29-5g3dt.md): Returns the concatenated results of mapping the given transformation over this sequence.
- [flatMap(\_:)](flatmap%28__%29-5pe4l.md): Deprecated. Returns the non-`nil` results of mapping the given transformation over this sequence.
- [joined()](joined%28%29-2q2lq.md): Conforms when `Element` conforms to `Sequence`. Returns a lazy sequence that concatenates the elements of this sequence of sequences.
- [map(\_:)](map%28__%29-9kh6q.md): Returns a `LazyMapSequence` over this `Sequence`. The elements of the result are computed lazily, each time they are read, by calling `transform` function on a base element.
- [prefix(while:)](prefix%28while_%29.md): Returns a lazy sequence of the initial consecutive elements that satisfy `predicate`.

### Type Aliases

- [LazyFilterSequence.Elements](elements.md): Conforms when `Base` conforms to `Sequence`. A `Sequence` that can contain the same elements as this one, possibly with a simpler type.
