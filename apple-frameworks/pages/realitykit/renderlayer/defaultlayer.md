> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/renderlayer/defaultlayer

# defaultLayer

**Framework:** RealityKit  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The default layer.

## Declaration

```swift
static var defaultLayer: RenderLayer { get }
```

<a id="discussion"></a>

## Discussion

Entities without a [RenderLayerComponent](../renderlayercomponent.md) belong to this layer. Lights illuminate only this layer unless their `layers` set is changed.
