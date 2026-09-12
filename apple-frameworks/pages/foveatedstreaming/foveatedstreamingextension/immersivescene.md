> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foveatedstreaming/foveatedstreamingextension/immersivescene](https://developer.apple.com/documentation/foveatedstreaming/foveatedstreamingextension/immersivescene)

# immersiveScene

**Framework:** Foveated Streaming  
**Kind:** Instance Property  
**Availability:** visionOS 27.0+

The SwiftUI view that renders the streamed content.

## Declaration

```swift
@ViewBuilder @MainActor var immersiveScene: Self.Content { get }
```

<a id="discussion"></a>

## Discussion

This view will be displayed in an immersive space by the extension. Typically this will be a `RealityView` that renders the 3D streamed content.
