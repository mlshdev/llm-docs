> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/slidingwindowtransformer/windowsequence](https://developer.apple.com/documentation/createmlcomponents/slidingwindowtransformer/windowsequence)

# SlidingWindowTransformer.WindowSequence

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

An async sequence of windows.

## Declaration

```swift
struct WindowSequence
```

## Topics

### Getting the count

- [count](windowsequence/count.md): The number of elements in the sequence.

### Creating an iterator

- [SlidingWindowTransformer.WindowSequence.Iterator](windowsequence/iterator.md): Conforms when `Input` conforms to `Sendable`. An async iterator of window sequence.

## Relationships

### Conforms To

- [AsyncSequence](https://developer.apple.com/documentation/swift/asyncsequence)
- [TemporalSequence](../temporalsequence.md)

## See Also

### Performing the transformation

- [applied(to:eventHandler:)](applied%28to_eventhandler_%29.md): Extracts a window sequence from the input sequence
