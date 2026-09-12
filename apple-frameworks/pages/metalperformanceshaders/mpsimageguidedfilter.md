> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsimageguidedfilter](https://developer.apple.com/documentation/metalperformanceshaders/mpsimageguidedfilter)

# MPSImageGuidedFilter (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

A filter that performs edge-aware filtering on an image.

## Declaration

```swift
class MPSImageGuidedFilter
```

## Topics

### Initializers

- [init(coder:device:)](mpsimageguidedfilter/init%28coder_device_%29.md)
- [init(device:kernelDiameter:)](mpsimageguidedfilter/init%28device_kerneldiameter_%29.md)

### Instance Properties

- [epsilon](mpsimageguidedfilter/epsilon.md)
- [kernelDiameter](mpsimageguidedfilter/kerneldiameter.md)
- [reconstructOffset](mpsimageguidedfilter/reconstructoffset.md)
- [reconstructScale](mpsimageguidedfilter/reconstructscale.md)

### Instance Methods

- [encodeReconstruction(commandBuffer:guidance:coefficientsA:coefficientsB:destination:)](mpsimageguidedfilter/encodereconstruction%28commandbuffer_guidance_coefficientsa_coefficientsb_destination_%29.md)
- [encodeReconstruction(to:guidanceTexture:coefficientsTexture:destinationTexture:)](mpsimageguidedfilter/encodereconstruction%28to_guidancetexture_coefficientstexture_destinationtexture_%29.md)
- [encodeRegression(commandBuffer:source:guidance:weights:destinationCoefficientsA:destinationCoefficientsB:)](mpsimageguidedfilter/encoderegression%28commandbuffer_source_guidance_weights_destinationcoefficientsa_destinationcoefficientsb_%29.md)
- [encodeRegression(to:sourceTexture:guidanceTexture:weightsTexture:destinationCoefficientsTexture:)](mpsimageguidedfilter/encoderegression%28to_sourcetexture_guidancetexture_weightstexture_destinationcoefficientstexture_%29.md)

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

# MPSImageGuidedFilter (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

A filter that performs edge-aware filtering on an image.

## Declaration

```objectivec
@interface MPSImageGuidedFilter : MPSKernel
```

## Topics

### Instance Properties

- [epsilon](mpsimageguidedfilter/epsilon.md)
- [kernelDiameter](mpsimageguidedfilter/kerneldiameter.md)
- [reconstructOffset](mpsimageguidedfilter/reconstructoffset.md)
- [reconstructScale](mpsimageguidedfilter/reconstructscale.md)

### Instance Methods

- [encodeReconstructionToCommandBuffer:guidanceTexture:coefficientsTextureA:coefficientsTextureB:destinationTexture:](mpsimageguidedfilter/encodereconstruction%28commandbuffer_guidance_coefficientsa_coefficientsb_destination_%29.md)
- [encodeReconstructionToCommandBuffer:guidanceTexture:coefficientsTexture:destinationTexture:](mpsimageguidedfilter/encodereconstruction%28to_guidancetexture_coefficientstexture_destinationtexture_%29.md)
- [encodeRegressionToCommandBuffer:sourceTexture:guidanceTexture:weightsTexture:destinationCoefficientsTextureA:destinationCoefficientsTextureB:](mpsimageguidedfilter/encoderegression%28commandbuffer_source_guidance_weights_destinationcoefficientsa_destinationcoefficientsb_%29.md)
- [encodeRegressionToCommandBuffer:sourceTexture:guidanceTexture:weightsTexture:destinationCoefficientsTexture:](mpsimageguidedfilter/encoderegression%28to_sourcetexture_guidancetexture_weightstexture_destinationcoefficientstexture_%29.md)
- [initWithCoder:device:](mpsimageguidedfilter/init%28coder_device_%29.md)
- [initWithDevice:kernelDiameter:](mpsimageguidedfilter/init%28device_kerneldiameter_%29.md)

## Relationships

### Inherits From

- [MPSKernel](mpskernel.md)
