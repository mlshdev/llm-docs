> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpssvgf](https://developer.apple.com/documentation/metalperformanceshaders/mpssvgf)

# MPSSVGF (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```swift
class MPSSVGF
```

## Topics

### Initializers

- [init(coder:device:)](mpssvgf/init%28coder_device_%29.md)
- [init(device:)](mpssvgf/init%28device_%29.md)

### Instance Properties

- [bilateralFilterRadius](mpssvgf/bilateralfilterradius.md)
- [bilateralFilterSigma](mpssvgf/bilateralfiltersigma.md)
- [channelCount](mpssvgf/channelcount.md)
- [channelCount2](mpssvgf/channelcount2.md)
- [depthWeight](mpssvgf/depthweight.md)
- [luminanceWeight](mpssvgf/luminanceweight.md)
- [minimumFramesForVarianceEstimation](mpssvgf/minimumframesforvarianceestimation.md)
- [normalWeight](mpssvgf/normalweight.md)
- [reprojectionThreshold](mpssvgf/reprojectionthreshold.md)
- [temporalReprojectionBlendFactor](mpssvgf/temporalreprojectionblendfactor.md)
- [temporalWeighting](mpssvgf/temporalweighting.md)
- [varianceEstimationRadius](mpssvgf/varianceestimationradius.md)
- [varianceEstimationSigma](mpssvgf/varianceestimationsigma.md)
- [variancePrefilterRadius](mpssvgf/varianceprefilterradius.md)
- [variancePrefilterSigma](mpssvgf/varianceprefiltersigma.md)

### Instance Methods

- [copy(with:device:)](mpssvgf/copy%28with_device_%29.md)
- [encode(with:)](mpssvgf/encode%28with_%29.md)
- [encodeBilateralFilter(to:stepDistance:sourceTexture:destinationTexture:depthNormalTexture:)](mpssvgf/encodebilateralfilter%28to_stepdistance_sourcetexture_destinationtexture_depthnormaltexture_%29.md)
- [encodeBilateralFilter(to:stepDistance:sourceTexture:destinationTexture:sourceTexture2:destinationTexture2:depthNormalTexture:)](mpssvgf/encodebilateralfilter%28to_stepdistance_sourcetexture_destinationtexture_sourcetexture2_destinationtexture2_depthnormaltexture_%29.md)
- [encodeReprojection(to:sourceTexture:previousTexture:destinationTexture:previousLuminanceMomentsTexture:destinationLuminanceMomentsTexture:previousFrameCount:destinationFrameCount:motionVectorTexture:depthNormalTexture:previousDepthNormalTexture:)](mpssvgf/encodereprojection%28to_sourcetexture_previoustexture_destinationtexture_previousluminancemomentstexture_destinationluminancemomentstexture_previousframecount_destinationframecount_m~b41497b8.md)
- [encodeReprojection(to:sourceTexture:previousTexture:destinationTexture:previousLuminanceMomentsTexture:destinationLuminanceMomentsTexture:sourceTexture2:previousTexture2:destinationTexture2:previousLuminanceMomentsTexture2:destinationLuminanceMomentsTexture2:previousFrameCount:destinationFrameCount:motionVectorTexture:depthNormalTexture:previousDepthNormalTexture:)](mpssvgf/encodereprojection%28to_sourcetexture_previoustexture_destinationtexture_previousluminancemomentstexture_destinationluminancemomentstexture_sourcetexture2_previoustexture2_destinatio~a9ee93bd.md)
- [encodeVarianceEstimation(to:sourceTexture:luminanceMomentsTexture:destinationTexture:frameCount:depthNormalTexture:)](mpssvgf/encodevarianceestimation%28to_sourcetexture_luminancemomentstexture_destinationtexture_framecount_depthnormaltexture_%29.md)
- [encodeVarianceEstimation(to:sourceTexture:luminanceMomentsTexture:destinationTexture:sourceTexture2:luminanceMomentsTexture2:destinationTexture2:frameCount:depthNormalTexture:)](mpssvgf/encodevarianceestimation%28to_sourcetexture_luminancemomentstexture_destinationtexture_sourcetexture2_luminancemomentstexture2_destinationtexture2_framecount_depthnormaltexture_%29.md)

## Relationships

### Inherits From

- [MPSKernel](mpskernel.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

# MPSSVGF (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```objectivec
@interface MPSSVGF : MPSKernel
```

## Topics

### Instance Properties

- [bilateralFilterRadius](mpssvgf/bilateralfilterradius.md)
- [bilateralFilterSigma](mpssvgf/bilateralfiltersigma.md)
- [channelCount](mpssvgf/channelcount.md)
- [channelCount2](mpssvgf/channelcount2.md)
- [depthWeight](mpssvgf/depthweight.md)
- [luminanceWeight](mpssvgf/luminanceweight.md)
- [minimumFramesForVarianceEstimation](mpssvgf/minimumframesforvarianceestimation.md)
- [normalWeight](mpssvgf/normalweight.md)
- [reprojectionThreshold](mpssvgf/reprojectionthreshold.md)
- [temporalReprojectionBlendFactor](mpssvgf/temporalreprojectionblendfactor.md)
- [temporalWeighting](mpssvgf/temporalweighting.md)
- [varianceEstimationRadius](mpssvgf/varianceestimationradius.md)
- [varianceEstimationSigma](mpssvgf/varianceestimationsigma.md)
- [variancePrefilterRadius](mpssvgf/varianceprefilterradius.md)
- [variancePrefilterSigma](mpssvgf/varianceprefiltersigma.md)

### Instance Methods

- [copyWithZone:device:](mpssvgf/copy%28with_device_%29.md)
- [encodeWithCoder:](mpssvgf/encode%28with_%29.md)
- [encodeBilateralFilterToCommandBuffer:stepDistance:sourceTexture:destinationTexture:depthNormalTexture:](mpssvgf/encodebilateralfilter%28to_stepdistance_sourcetexture_destinationtexture_depthnormaltexture_%29.md)
- [encodeBilateralFilterToCommandBuffer:stepDistance:sourceTexture:destinationTexture:sourceTexture2:destinationTexture2:depthNormalTexture:](mpssvgf/encodebilateralfilter%28to_stepdistance_sourcetexture_destinationtexture_sourcetexture2_destinationtexture2_depthnormaltexture_%29.md)
- [encodeReprojectionToCommandBuffer:sourceTexture:previousTexture:destinationTexture:previousLuminanceMomentsTexture:destinationLuminanceMomentsTexture:previousFrameCountTexture:destinationFrameCountTexture:motionVectorTexture:depthNormalTexture:previousDepthNormalTexture:](mpssvgf/encodereprojection%28to_sourcetexture_previoustexture_destinationtexture_previousluminancemomentstexture_destinationluminancemomentstexture_previousframecount_destinationframecount_m~b41497b8.md)
- [encodeReprojectionToCommandBuffer:sourceTexture:previousTexture:destinationTexture:previousLuminanceMomentsTexture:destinationLuminanceMomentsTexture:sourceTexture2:previousTexture2:destinationTexture2:previousLuminanceMomentsTexture2:destinationLuminanceMomentsTexture2:previousFrameCountTexture:destinationFrameCountTexture:motionVectorTexture:depthNormalTexture:previousDepthNormalTexture:](mpssvgf/encodereprojection%28to_sourcetexture_previoustexture_destinationtexture_previousluminancemomentstexture_destinationluminancemomentstexture_sourcetexture2_previoustexture2_destinatio~a9ee93bd.md)
- [encodeVarianceEstimationToCommandBuffer:sourceTexture:luminanceMomentsTexture:destinationTexture:frameCountTexture:depthNormalTexture:](mpssvgf/encodevarianceestimation%28to_sourcetexture_luminancemomentstexture_destinationtexture_framecount_depthnormaltexture_%29.md)
- [encodeVarianceEstimationToCommandBuffer:sourceTexture:luminanceMomentsTexture:destinationTexture:sourceTexture2:luminanceMomentsTexture2:destinationTexture2:frameCountTexture:depthNormalTexture:](mpssvgf/encodevarianceestimation%28to_sourcetexture_luminancemomentstexture_destinationtexture_sourcetexture2_luminancemomentstexture2_destinationtexture2_framecount_depthnormaltexture_%29.md)
- [initWithCoder:device:](mpssvgf/init%28coder_device_%29.md)
- [initWithDevice:](mpssvgf/init%28device_%29.md)

## Relationships

### Inherits From

- [MPSKernel](mpskernel.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
