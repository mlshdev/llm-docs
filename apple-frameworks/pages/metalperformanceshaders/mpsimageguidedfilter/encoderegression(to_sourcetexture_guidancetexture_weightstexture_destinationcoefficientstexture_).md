> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsimageguidedfilter/encoderegression(to:sourcetexture:guidancetexture:weightstexture:destinationcoefficientstexture:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsimageguidedfilter/encoderegression(to:sourcetexture:guidancetexture:weightstexture:destinationcoefficientstexture:))

# encodeRegression(to:sourceTexture:guidanceTexture:weightsTexture:destinationCoefficientsTexture:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

## Declaration

```swift
func encodeRegression(to commandBuffer: any MTLCommandBuffer, sourceTexture: any MTLTexture, guidanceTexture: any MTLTexture, weightsTexture: (any MTLTexture)?, destinationCoefficientsTexture: any MTLTexture)
```

# encodeRegressionToCommandBuffer:sourceTexture:guidanceTexture:weightsTexture:destinationCoefficientsTexture: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

## Declaration

```objectivec
- (void) encodeRegressionToCommandBuffer:(id<MTLCommandBuffer>) commandBuffer sourceTexture:(id<MTLTexture>) sourceTexture guidanceTexture:(id<MTLTexture>) guidanceTexture weightsTexture:(id<MTLTexture>) weightsTexture destinationCoefficientsTexture:(id<MTLTexture>) destinationCoefficientsTexture;
```
