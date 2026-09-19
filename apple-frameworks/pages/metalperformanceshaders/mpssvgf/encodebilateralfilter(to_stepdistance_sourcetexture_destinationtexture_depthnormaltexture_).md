> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metalperformanceshaders/mpssvgf/encodebilateralfilter(to:stepdistance:sourcetexture:destinationtexture:depthnormaltexture:)

# encodeBilateralFilter(to:stepDistance:sourceTexture:destinationTexture:depthNormalTexture:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```swift
func encodeBilateralFilter(to commandBuffer: any MTLCommandBuffer, stepDistance: Int, sourceTexture: any MTLTexture, destinationTexture: any MTLTexture, depthNormalTexture: any MTLTexture)
```

# encodeBilateralFilterToCommandBuffer:stepDistance:sourceTexture:destinationTexture:depthNormalTexture: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```objectivec
- (void) encodeBilateralFilterToCommandBuffer:(id<MTLCommandBuffer>) commandBuffer stepDistance:(NSUInteger) stepDistance sourceTexture:(id<MTLTexture>) sourceTexture destinationTexture:(id<MTLTexture>) destinationTexture depthNormalTexture:(id<MTLTexture>) depthNormalTexture;
```
