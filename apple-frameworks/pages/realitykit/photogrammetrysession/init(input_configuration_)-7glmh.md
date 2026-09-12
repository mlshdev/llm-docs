> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/photogrammetrysession/init(input:configuration:)-7glmh](https://developer.apple.com/documentation/realitykit/photogrammetrysession/init(input:configuration:)-7glmh)

# init(input:configuration:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 15.0+ · macOS 12.0+

Creates a session from a sequence of samples.

## Declaration

```swift
convenience init<S>(input: S, configuration: PhotogrammetrySession.Configuration = Configuration()) throws where S : Sequence, S.Element == PhotogrammetrySample
```

## Parameters

- `input`: The input `Sequence` that will be iterated once to yield all input data.
- `configuration`: The session-wide configuration to use for this session.

<a id="discussion"></a>

## Discussion

Creates a new session instance from a custom sequence of [PhotogrammetrySample](../photogrammetrysample.md) objects by iterating over the provided  [Sequence](https://developer.apple.com/documentation/swift/sequence) object.

The constructor will only use `makeIterator()` on `input` and will then iterate through the sequence only once.  A provided iterator should be lazy, or a lazy  [Sequence](https://developer.apple.com/documentation/swift/sequence) and map used.

> **Note**

> To minimize memory usage, use lazy sequences that only create a [PhotogrammetrySample](../photogrammetrysample.md) as it iterates by making calls to `next()` on its associated [IteratorProtocol](https://developer.apple.com/documentation/swift/iteratorprotocol).

## See Also

### Creating the session

- [init(input:configuration:)](init%28input_configuration_%29-wo4e.md): Creates a session from a specified directory of images.
- [isSupported](issupported.md): Returns `true` if the current hardware supports Object Capture.
