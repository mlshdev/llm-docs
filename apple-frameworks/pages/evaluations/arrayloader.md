> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/arrayloader](https://developer.apple.com/documentation/evaluations/arrayloader)

# ArrayLoader

**Framework:** Evaluations  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

A loader backed by an in-memory array.

## Declaration

```swift
struct ArrayLoader<Sample> where Sample : SampleProtocol
```

<a id="overview"></a>

## Overview

```swift
let loader = ArrayLoader(samples: [
    ModelSample(prompt: "What is 2+2?", expected: "4"),
    ModelSample(prompt: "What is the capital of France?", expected: "Paris"),
])
```

## Topics

### Initializers

- [init(samples:)](arrayloader/init%28samples_%29.md): Creates a loader backed by the given array of samples.

### Instance Properties

- [stream](arrayloader/stream.md): The async sequence that yields each sample in the array during an evaluation run.

## Relationships

### Conforms To

- [Loader](loader.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Loaders

- [JSONLoader](jsonloader.md): A loader backed by a JSON or JSONL file.
- [StreamLoader](streamloader.md): A loader backed by a custom async sequence.
