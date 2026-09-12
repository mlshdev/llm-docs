> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsimagenormalizedhistogram/encode(to:sourcetexture:minmaxtexture:histogram:histogramoffset:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsimagenormalizedhistogram/encode(to:sourcetexture:minmaxtexture:histogram:histogramoffset:))

# encode(to:sourceTexture:minmaxTexture:histogram:histogramOffset:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

## Declaration

```swift
func encode(to commandBuffer: any MTLCommandBuffer, sourceTexture source: any MTLTexture, minmaxTexture: any MTLTexture, histogram: any MTLBuffer, histogramOffset: Int)
```

# encodeToCommandBuffer:sourceTexture:minmaxTexture:histogram:histogramOffset: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

## Declaration

```objectivec
- (void) encodeToCommandBuffer:(id<MTLCommandBuffer>) commandBuffer sourceTexture:(id<MTLTexture>) source minmaxTexture:(id<MTLTexture>) minmaxTexture histogram:(id<MTLBuffer>) histogram histogramOffset:(NSUInteger) histogramOffset;
```
