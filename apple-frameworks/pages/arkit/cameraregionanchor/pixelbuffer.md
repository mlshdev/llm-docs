> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/arkit/cameraregionanchor/pixelbuffer

# pixelBuffer

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** visionOS 26.0+

The pixel buffer. Can be nil, e.g. for anchors which have not yet been added to the provider.

## Declaration

```swift
var pixelBuffer: CVReadOnlyPixelBuffer? { get }
```
