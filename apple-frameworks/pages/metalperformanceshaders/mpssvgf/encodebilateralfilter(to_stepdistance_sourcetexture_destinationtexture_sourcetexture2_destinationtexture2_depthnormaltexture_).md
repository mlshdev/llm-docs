> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpssvgf/encodebilateralfilter(to:stepdistance:sourcetexture:destinationtexture:sourcetexture2:destinationtexture2:depthnormaltexture:)](https://developer.apple.com/documentation/metalperformanceshaders/mpssvgf/encodebilateralfilter(to:stepdistance:sourcetexture:destinationtexture:sourcetexture2:destinationtexture2:depthnormaltexture:))

# encodeBilateralFilter(to:stepDistance:sourceTexture:destinationTexture:sourceTexture2:destinationTexture2:depthNormalTexture:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```swift
func encodeBilateralFilter(to commandBuffer: any MTLCommandBuffer, stepDistance: Int, sourceTexture: any MTLTexture, destinationTexture: any MTLTexture, sourceTexture2: (any MTLTexture)?, destinationTexture2: (any MTLTexture)?, depthNormalTexture: any MTLTexture)
```

# encodeBilateralFilterToCommandBuffer:stepDistance:sourceTexture:destinationTexture:sourceTexture2:destinationTexture2:depthNormalTexture: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```objectivec
- (void) encodeBilateralFilterToCommandBuffer:(id<MTLCommandBuffer>) commandBuffer stepDistance:(NSUInteger) stepDistance sourceTexture:(id<MTLTexture>) sourceTexture destinationTexture:(id<MTLTexture>) destinationTexture sourceTexture2:(id<MTLTexture>) sourceTexture2 destinationTexture2:(id<MTLTexture>) destinationTexture2 depthNormalTexture:(id<MTLTexture>) depthNormalTexture;
```
