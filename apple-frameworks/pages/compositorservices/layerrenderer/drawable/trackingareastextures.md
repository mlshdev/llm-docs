> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/compositorservices/layerrenderer/drawable/trackingareastextures

# trackingAreasTextures

**Framework:** Compositor Services  
**Kind:** Instance Property  
**Availability:** macOS 26.0+ · visionOS 26.0+

Use the returned texture in your render pipeline to store the tracking areas ID used for hover effects and indirect gestures. The layer’s texture topology determines the layout and content for each texture. The drawable’s views contain information about how those views map to the textures.

## Declaration

```swift
var trackingAreasTextures: [any MTLTexture] { get }
```
