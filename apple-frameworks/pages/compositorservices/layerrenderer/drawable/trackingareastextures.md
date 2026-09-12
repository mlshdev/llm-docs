> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/layerrenderer/drawable/trackingareastextures](https://developer.apple.com/documentation/compositorservices/layerrenderer/drawable/trackingareastextures)

# trackingAreasTextures

**Framework:** Compositor Services  
**Kind:** Instance Property  
**Availability:** macOS 26.0+ · visionOS 26.0+

Use the returned texture in your render pipeline to store the tracking areas ID used for hover effects and indirect gestures. The layer’s texture topology determines the layout and content for each texture. The drawable’s views contain information about how those views map to the textures.

## Declaration

```swift
var trackingAreasTextures: [any MTLTexture] { get }
```
