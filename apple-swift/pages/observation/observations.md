> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/observation/observations](https://developer.apple.com/documentation/observation/observations)

# Observations

**Framework:** Observation  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

An asynchronous sequence generated from a closure that tracks the transactional changes of `@Observable` types.

## Declaration

```swift
struct Observations<Element, Failure> where Element : Sendable, Failure : Error
```

<a id="overview"></a>

## Overview

`Observations` conforms to `AsyncSequence`, providing an intuitive and safe mechanism to track changes to types that are marked as `@Observable` by using Swift Concurrency to indicate transactional boundaries starting from the willSet of the first mutation to the next suspension point of the safe access.

## Topics

### Structures

- [Observations.Iterator](observations/iterator.md)

### Initializers

- [init(\_:)](observations/init%28__%29.md): Constructs an asynchronous sequence for a given closure by tracking changes of `@Observable` types.

### Type Methods

- [untilFinished(\_:)](observations/untilfinished%28__%29.md): Constructs an asynchronous sequence for a given closure by tracking changes of `@Observable` types.

### Enumerations

- [Observations.Iteration](observations/iteration.md)

## Relationships

### Conforms To

- [AsyncSequence](../swift/asyncsequence.md)
- [Sendable](../swift/sendable.md)
- [SendableMetatype](../swift/sendablemetatype.md)
