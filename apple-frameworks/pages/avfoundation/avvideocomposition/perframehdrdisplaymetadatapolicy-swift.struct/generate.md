> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avvideocomposition/perframehdrdisplaymetadatapolicy-swift.struct/generate](https://developer.apple.com/documentation/avfoundation/avvideocomposition/perframehdrdisplaymetadatapolicy-swift.struct/generate)

# generate (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

A video composition may generate HDR metadata and attach it to the rendered frame.

## Declaration

```swift
static let generate: AVVideoComposition.PerFrameHDRDisplayMetadataPolicy
```

<a id="Discussion"></a>

## Discussion

HDR metadata generation is influenced by the color space of the rendered frame, device, and HDR metadata format platform support. Any previously attached HDR metadata of the same metadata format is overwritten.

## See Also

### Policies

- [propagate](propagate.md): A policy that passes HDR metadata through, if present on the composed frame.

# AVVideoCompositionPerFrameHDRDisplayMetadataPolicyGenerate (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

A video composition may generate HDR metadata and attach it to the rendered frame.

## Declaration

```objectivec
extern AVVideoCompositionPerFrameHDRDisplayMetadataPolicy const AVVideoCompositionPerFrameHDRDisplayMetadataPolicyGenerate;
```

<a id="Discussion"></a>

## Discussion

HDR metadata generation is influenced by the color space of the rendered frame, device, and HDR metadata format platform support. Any previously attached HDR metadata of the same metadata format is overwritten.

## See Also

### Policies

- [AVVideoCompositionPerFrameHDRDisplayMetadataPolicyPropagate](propagate.md): A policy that passes HDR metadata through, if present on the composed frame.
