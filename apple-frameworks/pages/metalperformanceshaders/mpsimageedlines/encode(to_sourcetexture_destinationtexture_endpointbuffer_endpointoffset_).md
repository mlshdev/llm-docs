> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsimageedlines/encode(to:sourcetexture:destinationtexture:endpointbuffer:endpointoffset:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsimageedlines/encode(to:sourcetexture:destinationtexture:endpointbuffer:endpointoffset:))

# encode(to:sourceTexture:destinationTexture:endpointBuffer:endpointOffset:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · tvOS 13.4+ · visionOS 1.0+

## Declaration

```swift
func encode(to commandBuffer: any MTLCommandBuffer, sourceTexture source: any MTLTexture, destinationTexture dest: (any MTLTexture)?, endpointBuffer: any MTLBuffer, endpointOffset: Int)
```

# encodeToCommandBuffer:sourceTexture:destinationTexture:endpointBuffer:endpointOffset: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · tvOS 13.4+ · visionOS 1.0+

## Declaration

```objectivec
- (void) encodeToCommandBuffer:(id<MTLCommandBuffer>) commandBuffer sourceTexture:(id<MTLTexture>) source destinationTexture:(id<MTLTexture>) dest endpointBuffer:(id<MTLBuffer>) endpointBuffer endpointOffset:(NSUInteger) endpointOffset;
```
