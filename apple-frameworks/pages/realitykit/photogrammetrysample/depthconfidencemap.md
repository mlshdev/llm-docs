> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/photogrammetrysample/depthconfidencemap

# depthConfidenceMap

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+

Depth confidence map associated with the `depthDataMap` if available. Pixel format is `kCVPixelFormatType_OneComponent8`.

## Declaration

```swift
var depthConfidenceMap: CVPixelBuffer? { get }
```
