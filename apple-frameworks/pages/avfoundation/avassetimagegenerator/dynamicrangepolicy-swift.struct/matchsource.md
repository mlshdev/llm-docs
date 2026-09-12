> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetimagegenerator/dynamicrangepolicy-swift.struct/matchsource](https://developer.apple.com/documentation/avfoundation/avassetimagegenerator/dynamicrangepolicy-swift.struct/matchsource)

# matchSource (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

A policy that preserves the color parameters of the source media.

## Declaration

```swift
static let matchSource: AVAssetImageGenerator.DynamicRangePolicy
```

<a id="Discussion"></a>

## Discussion

By default, an image generator converts images to standard dynamic range. When working with HDR video, use this policy to preserve HDR color in the resulting images.

## See Also

### Policies

- [forceSDR](forcesdr.md): A policy that forces conversion to standard dynamic range.

# AVAssetImageGeneratorDynamicRangePolicyMatchSource (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

A policy that preserves the color parameters of the source media.

## Declaration

```objectivec
extern AVAssetImageGeneratorDynamicRangePolicy const AVAssetImageGeneratorDynamicRangePolicyMatchSource;
```

<a id="Discussion"></a>

## Discussion

By default, an image generator converts images to standard dynamic range. When working with HDR video, use this policy to preserve HDR color in the resulting images.

## See Also

### Policies

- [AVAssetImageGeneratorDynamicRangePolicyForceSDR](forcesdr.md): A policy that forces conversion to standard dynamic range.
