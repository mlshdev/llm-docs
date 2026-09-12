> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/immersivespace/init(foveatedstreaming:)](https://developer.apple.com/documentation/swiftui/immersivespace/init(foveatedstreaming:))

# init(foveatedStreaming:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** visionOS 26.4+

Creates an immersive space to display foveated streaming content.

## Declaration

```swift
nonisolated init(foveatedStreaming session: FoveatedStreamingSession) where Content == ImmersiveSpaceViewContent<FoveatedStreamingSpaceContent>, Data == Never
```

## Parameters

- `session`: The foveated streaming session whose streamed content the space displays.
