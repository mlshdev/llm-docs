> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/lazymapsequence/lazysequenceprotocol-implementations](https://developer.apple.com/documentation/swift/lazymapsequence/lazysequenceprotocol-implementations)

# LazySequenceProtocol Implementations

**Framework:** Swift  
**Kind:** API Collection

## Topics

### Instance Properties

- [elements](elements-swift.property.md): Conforms when `Self` is `Self.Elements`. Identical to `self`.
- [lazy](lazy.md): Conforms when `Elements` conforms to `LazySequenceProtocol`.

### Instance Methods

- [compactMap(\_:)](compactmap%28__%29-9pvcf.md): Returns the non-`nil` results of mapping the given transformation over this sequence.
- [drop(while:)](drop%28while_%29.md): Returns a lazy sequence that skips any initial elements that satisfy `predicate`.
- [filter(\_:)](filter%28__%29.md): Returns the elements of `self` that satisfy `isIncluded`.
- [flatMap(\_:)](flatmap%28__%29-94qg.md): Deprecated. Returns the non-`nil` results of mapping the given transformation over this sequence.
- [flatMap(\_:)](flatmap%28__%29-q9wd.md): Returns the concatenated results of mapping the given transformation over this sequence.
- [joined()](joined%28%29-3sfyr.md): Conforms when `Element` conforms to `Sequence`. Returns a lazy sequence that concatenates the elements of this sequence of sequences.
- [map(\_:)](map%28__%29-8mwhr.md): Returns a `LazyMapSequence` over this `Sequence`. The elements of the result are computed lazily, each time they are read, by calling `transform` function on a base element.
- [prefix(while:)](prefix%28while_%29.md): Returns a lazy sequence of the initial consecutive elements that satisfy `predicate`.
