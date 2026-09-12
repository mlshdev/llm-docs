> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablevideocomposition/perframehdrdisplaymetadatapolicy](https://developer.apple.com/documentation/avfoundation/avmutablevideocomposition/perframehdrdisplaymetadatapolicy)

# perFrameHDRDisplayMetadataPolicy (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

Configures the policy for display of HDR display metadata on the rendered frame.

## Declaration

```swift
var perFrameHDRDisplayMetadataPolicy: AVVideoComposition.PerFrameHDRDisplayMetadataPolicy { get set }
```

<a id="Discussion"></a>

## Discussion

Allows the system to identify situations where it can generate HDR metadata and attach it to the rendered video frame.

The default value is [propagate](../avvideocomposition/perframehdrdisplaymetadatapolicy-swift.struct/propagate.md), which indicates the system propagates any HDR metadata attached to the composed frame to the rendered video frames.

## See Also

### Configuring HDR metadata

- [AVVideoComposition.PerFrameHDRDisplayMetadataPolicy](../avvideocomposition/perframehdrdisplaymetadatapolicy-swift.struct.md): A type that defines the policy for handling of per frame HDR metadata.

# perFrameHDRDisplayMetadataPolicy (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

Configures the policy for display of HDR display metadata on the rendered frame.

## Declaration

```objectivec
@property (nonatomic, copy) AVVideoCompositionPerFrameHDRDisplayMetadataPolicy perFrameHDRDisplayMetadataPolicy;
```

<a id="Discussion"></a>

## Discussion

Allows the system to identify situations where it can generate HDR metadata and attach it to the rendered video frame.

The default value is [AVVideoCompositionPerFrameHDRDisplayMetadataPolicyPropagate](../avvideocomposition/perframehdrdisplaymetadatapolicy-swift.struct/propagate.md), which indicates the system propagates any HDR metadata attached to the composed frame to the rendered video frames.

## See Also

### Configuring HDR metadata

- [AVVideoCompositionPerFrameHDRDisplayMetadataPolicy](../avvideocomposition/perframehdrdisplaymetadatapolicy-swift.struct.md): A type that defines the policy for handling of per frame HDR metadata.
