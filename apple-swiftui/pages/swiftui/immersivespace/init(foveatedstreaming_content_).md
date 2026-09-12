> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/immersivespace/init(foveatedstreaming:content:)](https://developer.apple.com/documentation/swiftui/immersivespace/init(foveatedstreaming:content:))

# init(foveatedStreaming:content:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** visionOS 26.4+

Creates an immersive space to display foveated streaming content alongside `RealityKit` content.

## Declaration

```swift
nonisolated init<V>(foveatedStreaming session: FoveatedStreamingSession, @ViewBuilder content: @escaping () -> V) where Content == ImmersiveSpaceViewContent<FoveatedStreamingSpaceContent>, Data == Never, V : View
```

## Parameters

- `session`: The foveated streaming session whose streamed content the space displays.
- `content`: An immersive space content builder that defines the content of the space.

<a id="discussion"></a>

## Discussion

You can add [RealityKit](https://developer.apple.com/documentation/realitykit) content to your space that coexists alongside the streamed content, for example:

```swift
ImmersiveSpace(foveatedStreaming: session) {
    RealityView { content in
        // Add a sphere to the immersive space.
        let entity = ModelEntity(mesh: .generateSphere(radius: 0.1),
                         materials: [SimpleMaterial()])
        content.add(entity)
    }
}
```
