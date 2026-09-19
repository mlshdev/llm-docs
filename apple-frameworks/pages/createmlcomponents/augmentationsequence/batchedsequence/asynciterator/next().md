> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createmlcomponents/augmentationsequence/batchedsequence/asynciterator/next()

# next()

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 11.0+

Produces the next batch.

## Declaration

```swift
mutating func next() async throws -> [AugmentationSequence<Base, RandomTransformer, RandomNumberGenerator, Annotation>.Element]?
```
