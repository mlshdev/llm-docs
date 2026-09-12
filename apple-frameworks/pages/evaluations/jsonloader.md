> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/jsonloader](https://developer.apple.com/documentation/evaluations/jsonloader)

# JSONLoader

**Framework:** Evaluations  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

A loader backed by a JSON or JSONL file.

## Declaration

```swift
struct JSONLoader<Sample> where Sample : SampleProtocol
```

<a id="overview"></a>

## Overview

```swift
let url = Bundle.main.url(forResource: "samples", withExtension: "jsonl")!
let loader = JSONLoader<ModelSample<String>>(url: url)
```

The format is detected automatically from the file contents:

- If the first non-whitespace character is `[`, the file is treated as a JSON array (`[{...}, {...}]`) and decoded in one pass.
- Otherwise, the file is treated as JSONL (JSON Lines), where the loader decodes each non-empty line as an individual sample.

Malformed entries are logged using `OSLog` and skipped. A failure to open the file propagates as a thrown error.

## Topics

### Initializers

- [init(url:)](jsonloader/init%28url_%29.md): Creates a loader backed by the JSON or JSONL file at the given URL.

### Instance Properties

- [stream](jsonloader/stream.md): The async sequence that reads and yields each sample from the JSON or JSONL file during an evaluation run.

## Relationships

### Conforms To

- [Loader](loader.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Loaders

- [ArrayLoader](arrayloader.md): A loader backed by an in-memory array.
- [StreamLoader](streamloader.md): A loader backed by a custom async sequence.
