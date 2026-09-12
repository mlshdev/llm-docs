> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/layerrenderer/capabilities/supportsfoveation](https://developer.apple.com/documentation/compositorservices/layerrenderer/capabilities/supportsfoveation)

# supportsFoveation

**Framework:** Compositor Services  
**Kind:** Instance Property  
**Availability:** macOS 26.0+ · visionOS 1.0+

A Boolean value that indicates whether the layer supports variable rasterization rates.

## Declaration

```swift
var supportsFoveation: Bool { get }
```

<a id="discussion"></a>

## Discussion

Foveation support lets you reduce the amount of high-resolution drawing you do. When foveation support is available, the system provides a variable rasterization rate map that defines the content resolution in different parts of the texture. This map allows you to render content in someone’s peripheral vision at a lower resolution than content in the center of their vision.
