> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/hasdirectionallight/shadow](https://developer.apple.com/documentation/realitykit/hasdirectionallight/shadow)

# shadow

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS 2.0+

The shadow settings for a directional light.

## Declaration

```swift
@MainActor @preconcurrency var shadow: DirectionalLightComponent.Shadow? { get set }
```

<a id="discussion"></a>

## Discussion

Set this value to `nil` to remove shadows.
