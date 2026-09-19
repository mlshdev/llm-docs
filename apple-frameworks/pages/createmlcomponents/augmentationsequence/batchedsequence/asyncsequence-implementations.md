> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createmlcomponents/augmentationsequence/batchedsequence/asyncsequence-implementations

# AsyncSequence Implementations

**Framework:** Create ML Components  
**Kind:** API Collection

## Topics

### Structures

- [AugmentationSequence.BatchedSequence.AsyncIterator](asynciterator.md): Conforms when `Base` conforms to `Sequence`, `RandomTransformer` conforms to `RandomTransformer`, `RandomNumberGenerator` conforms to `RandomNumberGenerator`, `Base.Element` is `AnnotatedFeature<RandomTransformer.Input, Annotation>`, and `RandomTransformer.Input` is `RandomTransformer.Output`. The iterator that produces batches.
