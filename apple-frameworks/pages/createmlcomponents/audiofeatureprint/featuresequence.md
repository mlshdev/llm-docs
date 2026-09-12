> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/audiofeatureprint/featuresequence](https://developer.apple.com/documentation/createmlcomponents/audiofeatureprint/featuresequence)

# AudioFeaturePrint.FeatureSequence

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

An async sequence of audio buffers.

## Declaration

```swift
struct FeatureSequence
```

## Topics

### Getting the count

- [count](featuresequence/count.md): The number of elements in the sequence. For this sequence count is always nil.

### Creating an iterator

- [makeAsyncIterator()](featuresequence/makeasynciterator%28%29.md): Constructs an iterator.
- [AudioFeaturePrint.FeatureSequence.Iterator](featuresequence/iterator.md): An async iterator of audio buffers.

## Relationships

### Conforms To

- [AsyncSequence](https://developer.apple.com/documentation/swift/asyncsequence)
- [TemporalSequence](../temporalsequence.md)

## See Also

### Performing the transformation

- [applied(to:eventHandler:)](applied%28to_eventhandler_%29.md): Extracts audio features from an a sequence of audio buffers
