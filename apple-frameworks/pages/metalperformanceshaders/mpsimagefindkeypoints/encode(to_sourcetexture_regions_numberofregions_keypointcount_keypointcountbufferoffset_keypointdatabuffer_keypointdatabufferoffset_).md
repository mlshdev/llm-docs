> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsimagefindkeypoints/encode(to:sourcetexture:regions:numberofregions:keypointcount:keypointcountbufferoffset:keypointdatabuffer:keypointdatabufferoffset:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsimagefindkeypoints/encode(to:sourcetexture:regions:numberofregions:keypointcount:keypointcountbufferoffset:keypointdatabuffer:keypointdatabufferoffset:))

# encode(to:sourceTexture:regions:numberOfRegions:keypointCount:keypointCountBufferOffset:keypointDataBuffer:keypointDataBufferOffset:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```swift
func encode(to commandBuffer: any MTLCommandBuffer, sourceTexture source: any MTLTexture, regions: UnsafePointer<MTLRegion>, numberOfRegions: Int, keypointCount keypointCountBuffer: any MTLBuffer, keypointCountBufferOffset: Int, keypointDataBuffer: any MTLBuffer, keypointDataBufferOffset: Int)
```

# encodeToCommandBuffer:sourceTexture:regions:numberOfRegions:keypointCountBuffer:keypointCountBufferOffset:keypointDataBuffer:keypointDataBufferOffset: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```objectivec
- (void) encodeToCommandBuffer:(id<MTLCommandBuffer>) commandBuffer sourceTexture:(id<MTLTexture>) source regions:(const MTLRegion *) regions numberOfRegions:(NSUInteger) numberOfRegions keypointCountBuffer:(id<MTLBuffer>) keypointCountBuffer keypointCountBufferOffset:(NSUInteger) keypointCountBufferOffset keypointDataBuffer:(id<MTLBuffer>) keypointDataBuffer keypointDataBufferOffset:(NSUInteger) keypointDataBufferOffset;
```
