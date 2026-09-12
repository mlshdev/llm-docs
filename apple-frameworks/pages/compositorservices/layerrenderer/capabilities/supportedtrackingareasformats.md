> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/layerrenderer/capabilities/supportedtrackingareasformats](https://developer.apple.com/documentation/compositorservices/layerrenderer/capabilities/supportedtrackingareasformats)

# supportedTrackingAreasFormats

**Framework:** Compositor Services  
**Kind:** Instance Property  
**Availability:** macOS 26.0+ · visionOS 26.0+

An array of tracking areas formats that the layer supports for its textures.

## Declaration

```swift
var supportedTrackingAreasFormats: [MTLPixelFormat] { get }
```

<a id="discussion"></a>

## Discussion

The pixel formats in this property tell you which pixel arrangements and characteristics the layer supports for its tracking areas textures.
