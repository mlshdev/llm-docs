> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avvideocomposition/perframehdrdisplaymetadatapolicy-swift.struct/propagate](https://developer.apple.com/documentation/avfoundation/avvideocomposition/perframehdrdisplaymetadatapolicy-swift.struct/propagate)

# propagate (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

A policy that passes HDR metadata through, if present on the composed frame.

## Declaration

```swift
static let propagate: AVVideoComposition.PerFrameHDRDisplayMetadataPolicy
```

## See Also

### Policies

- [generate](generate.md): A video composition may generate HDR metadata and attach it to the rendered frame.

# AVVideoCompositionPerFrameHDRDisplayMetadataPolicyPropagate (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

A policy that passes HDR metadata through, if present on the composed frame.

## Declaration

```objectivec
extern AVVideoCompositionPerFrameHDRDisplayMetadataPolicy const AVVideoCompositionPerFrameHDRDisplayMetadataPolicyPropagate;
```

## See Also

### Policies

- [AVVideoCompositionPerFrameHDRDisplayMetadataPolicyGenerate](generate.md): A video composition may generate HDR metadata and attach it to the rendered frame.
