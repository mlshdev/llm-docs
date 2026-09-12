> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/streamloader/init(stream:)](https://developer.apple.com/documentation/evaluations/streamloader/init(stream:))

# init(stream:)

**Framework:** Evaluations  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

Creates a loader backed by the given async sequence.

## Declaration

```swift
init(stream: some Sendable & AsyncSequence<Sample, any Error>)
```

<a id="discussion"></a>

## Discussion

```swift
let loader = StreamLoader(stream: AsyncThrowingStream { continuation in
    continuation.yield(ModelSample(prompt: "What is 2+2?", expected: "4"))
    continuation.finish()
})
```
