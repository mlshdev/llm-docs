> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/upsampledaugmentationsequence/makeasynciterator()](https://developer.apple.com/documentation/createmlcomponents/upsampledaugmentationsequence/makeasynciterator())

# makeAsyncIterator()

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 11.0+

Creates the asynchronous iterator that produces elements of this asynchronous sequence.

## Declaration

```swift
func makeAsyncIterator() -> UpsampledAugmentationSequence<Base, RandomTransformer, RandomNumberGenerator, Annotation>.AsyncIterator
```

## See Also

### Creating an iterator

- [UpsampledAugmentationSequence.Element](element.md): The type of element produced by this asynchronous sequence.
