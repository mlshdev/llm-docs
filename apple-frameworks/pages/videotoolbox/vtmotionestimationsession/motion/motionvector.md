> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videotoolbox/vtmotionestimationsession/motion/motionvector

# motionVector

**Framework:** Video Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

## Declaration

```swift
var motionVector: CVReadOnlyPixelBuffer { get }
```

<a id="discussion"></a>

## Discussion

> **Note**

> motionVector A CVPixelBuffer containing the motion vector information, if processing request was successful.
