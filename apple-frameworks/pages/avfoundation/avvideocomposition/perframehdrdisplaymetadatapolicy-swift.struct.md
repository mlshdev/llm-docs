> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avvideocomposition/perframehdrdisplaymetadatapolicy-swift.struct](https://developer.apple.com/documentation/avfoundation/avvideocomposition/perframehdrdisplaymetadatapolicy-swift.struct)

# AVVideoComposition.PerFrameHDRDisplayMetadataPolicy (Swift)

**Framework:** AVFoundation  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

A type that defines the policy for handling of per frame HDR metadata.

## Declaration

```swift
struct PerFrameHDRDisplayMetadataPolicy
```

<a id="Discussion"></a>

## Discussion

Use this type to specify what HDR display metadata to attach to the rendered frame.

## Topics

### Policies

- [propagate](perframehdrdisplaymetadatapolicy-swift.struct/propagate.md): A policy that passes HDR metadata through, if present on the composed frame.
- [generate](perframehdrdisplaymetadatapolicy-swift.struct/generate.md): A video composition may generate HDR metadata and attach it to the rendered frame.

### Initializers

- [init(rawValue:)](perframehdrdisplaymetadatapolicy-swift.struct/init%28rawvalue_%29.md): Creates a policy with a string value.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring HDR metadata

- [perFrameHDRDisplayMetadataPolicy](../avmutablevideocomposition/perframehdrdisplaymetadatapolicy.md): Configures the policy for display of HDR display metadata on the rendered frame.

# AVVideoCompositionPerFrameHDRDisplayMetadataPolicy (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Alias  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

A type that defines the policy for handling of per frame HDR metadata.

## Declaration

```objectivec
typedef NSString * AVVideoCompositionPerFrameHDRDisplayMetadataPolicy;
```

<a id="Discussion"></a>

## Discussion

Use this type to specify what HDR display metadata to attach to the rendered frame.

## Topics

### Policies

- [AVVideoCompositionPerFrameHDRDisplayMetadataPolicyPropagate](perframehdrdisplaymetadatapolicy-swift.struct/propagate.md): A policy that passes HDR metadata through, if present on the composed frame.
- [AVVideoCompositionPerFrameHDRDisplayMetadataPolicyGenerate](perframehdrdisplaymetadatapolicy-swift.struct/generate.md): A video composition may generate HDR metadata and attach it to the rendered frame.

## See Also

### Configuring HDR metadata

- [perFrameHDRDisplayMetadataPolicy](../avmutablevideocomposition/perframehdrdisplaymetadatapolicy.md): Configures the policy for display of HDR display metadata on the rendered frame.
