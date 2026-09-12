> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/downsampler/downstreamsequence](https://developer.apple.com/documentation/createmlcomponents/downsampler/downstreamsequence)

# Downsampler.DownStreamSequence

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

An async sequence of down stream elements.

## Declaration

```swift
struct DownStreamSequence
```

## Topics

### Getting the count

- [count](downstreamsequence/count.md): The count of elements.

### Creating an iterator

- [Downsampler.DownStreamSequence.Iterator](downstreamsequence/iterator.md): Conforms when `Input` conforms to `Sendable`. An async iterator of down stream sequence.

## Relationships

### Conforms To

- [AsyncSequence](https://developer.apple.com/documentation/swift/asyncsequence)
- [TemporalSequence](../temporalsequence.md)

## See Also

### Performing the transformation

- [applied(to:eventHandler:)](applied%28to_eventhandler_%29.md): Down samples the input sequence
