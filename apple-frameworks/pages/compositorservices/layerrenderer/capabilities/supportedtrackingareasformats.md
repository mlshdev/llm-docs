> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/compositorservices/layerrenderer/capabilities/supportedtrackingareasformats

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
