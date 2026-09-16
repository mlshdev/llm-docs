> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/immersivespace/init(foveatedstreaming:)

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
