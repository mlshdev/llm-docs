> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetimagegenerator/dynamicrangepolicy-swift.struct/forcesdr](https://developer.apple.com/documentation/avfoundation/avassetimagegenerator/dynamicrangepolicy-swift.struct/forcesdr)

# forceSDR (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

A policy that forces conversion to standard dynamic range.

## Declaration

```swift
static let forceSDR: AVAssetImageGenerator.DynamicRangePolicy
```

<a id="Discussion"></a>

## Discussion

This policy converts PQ or HLG transfer functions to 709, while maintaining color primaries and matrix.

## See Also

### Policies

- [matchSource](matchsource.md): A policy that preserves the color parameters of the source media.

# AVAssetImageGeneratorDynamicRangePolicyForceSDR (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

A policy that forces conversion to standard dynamic range.

## Declaration

```objectivec
extern AVAssetImageGeneratorDynamicRangePolicy const AVAssetImageGeneratorDynamicRangePolicyForceSDR;
```

<a id="Discussion"></a>

## Discussion

This policy converts PQ or HLG transfer functions to 709, while maintaining color primaries and matrix.

## See Also

### Policies

- [AVAssetImageGeneratorDynamicRangePolicyMatchSource](matchsource.md): A policy that preserves the color parameters of the source media.
