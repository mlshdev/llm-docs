> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/streamloader](https://developer.apple.com/documentation/evaluations/streamloader)

# StreamLoader

**Framework:** Evaluations  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

A loader backed by a custom async sequence.

## Declaration

```swift
struct StreamLoader<Sample> where Sample : SampleProtocol
```

<a id="overview"></a>

## Overview

```swift
let loader = StreamLoader(stream: AsyncThrowingStream { continuation in
    continuation.yield(ModelSample(prompt: "What is 2+2?", expected: "4"))
    continuation.finish()
})
```

## Topics

### Initializers

- [init(stream:)](streamloader/init%28stream_%29.md): Creates a loader backed by the given async sequence.

### Instance Properties

- [stream](streamloader/stream.md): The async sequence that forwards each sample from the underlying async sequence during an evaluation run.

## Relationships

### Conforms To

- [Loader](loader.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Loaders

- [ArrayLoader](arrayloader.md): A loader backed by an in-memory array.
- [JSONLoader](jsonloader.md): A loader backed by a JSON or JSONL file.
