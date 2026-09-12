> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/observation/observations/untilfinished(_:)](https://developer.apple.com/documentation/observation/observations/untilfinished(_:))

# untilFinished(\_:)

**Framework:** Observation  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Constructs an asynchronous sequence for a given closure by tracking changes of `@Observable` types.

## Declaration

```swift
static func untilFinished(_ emit: @escaping @isolated(any) @Sendable () throws(Failure) -> Observations<Element, Failure>.Iteration) -> Observations<Element, Failure>
```

## Parameters

- `emit`: A closure to generate an element for the sequence.

<a id="discussion"></a>

## Discussion

The emit closure is responsible for extracting a value out of a single or many `@Observable` types. This method continues to be invoked until the .finished option is returned or an error is thrown.
