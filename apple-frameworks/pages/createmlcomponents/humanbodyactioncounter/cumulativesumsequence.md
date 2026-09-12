> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/humanbodyactioncounter/cumulativesumsequence](https://developer.apple.com/documentation/createmlcomponents/humanbodyactioncounter/cumulativesumsequence)

# HumanBodyActionCounter.CumulativeSumSequence

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Cumulative human body action count sequence.

## Declaration

```swift
struct CumulativeSumSequence
```

## Topics

### Getting the count

- [count](cumulativesumsequence/count.md): The estimated number of predictions.

### Creating an iterator

- [makeAsyncIterator()](cumulativesumsequence/makeasynciterator%28%29.md): Constructs an iterator.
- [HumanBodyActionCounter.CumulativeSumSequence.Iterator](cumulativesumsequence/iterator.md): An async iterator of cumulative count sequence.

## Relationships

### Conforms To

- [AsyncSequence](https://developer.apple.com/documentation/swift/asyncsequence)
- [TemporalSequence](../temporalsequence.md)

## See Also

### Performing the transformation

- [applied(to:eventHandler:)](applied%28to_eventhandler_%29.md): Predicts cumulative human body action counts from a sequence of human body pose windows.
