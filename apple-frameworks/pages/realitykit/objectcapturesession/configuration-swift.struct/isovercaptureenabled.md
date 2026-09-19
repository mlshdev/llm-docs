> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/objectcapturesession/configuration-swift.struct/isovercaptureenabled

# isOverCaptureEnabled

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+

Enables the session to continue capturing even after the number of captured images exceeds `maximumNumberOfInputImages`.  This setting is meant for use when the images are intended to be transferred to macOS for model reconstruction.

## Declaration

```swift
var isOverCaptureEnabled: Bool
```

<a id="discussion"></a>

## Discussion

Note: The number of images used for on-device reconstruction will be limited to `maximumNumberOfInputImages` with any extra images skipped.
