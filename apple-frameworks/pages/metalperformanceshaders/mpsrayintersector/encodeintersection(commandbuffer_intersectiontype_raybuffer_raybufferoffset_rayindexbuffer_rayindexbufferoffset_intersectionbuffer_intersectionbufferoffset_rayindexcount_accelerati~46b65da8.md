> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsrayintersector/encodeintersection(commandbuffer:intersectiontype:raybuffer:raybufferoffset:rayindexbuffer:rayindexbufferoffset:intersectionbuffer:intersectionbufferoffset:rayindexcount:accelerationstructure:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsrayintersector/encodeintersection(commandbuffer:intersectiontype:raybuffer:raybufferoffset:rayindexbuffer:rayindexbufferoffset:intersectionbuffer:intersectionbufferoffset:rayindexcount:accelerationstructure:))

# encodeIntersection(commandBuffer:intersectionType:rayBuffer:rayBufferOffset:rayIndexBuffer:rayIndexBufferOffset:intersectionBuffer:intersectionBufferOffset:rayIndexCount:accelerationStructure:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 17.0) · iPadOS 13.0+ (deprecated in 17.0) · Mac Catalyst 13.0+ (deprecated in 17.0) · macOS 10.15+ (deprecated in 14.0) · tvOS 13.0+ (deprecated in 17.0) · visionOS 1.0+ (deprecated in 1.0)

## Declaration

```swift
func encodeIntersection(commandBuffer: any MTLCommandBuffer, intersectionType: MPSIntersectionType, rayBuffer: any MTLBuffer, rayBufferOffset: Int, rayIndexBuffer: any MTLBuffer, rayIndexBufferOffset: Int, intersectionBuffer: any MTLBuffer, intersectionBufferOffset: Int, rayIndexCount: Int, accelerationStructure: MPSAccelerationStructure)
```

# encodeIntersectionToCommandBuffer:intersectionType:rayBuffer:rayBufferOffset:rayIndexBuffer:rayIndexBufferOffset:intersectionBuffer:intersectionBufferOffset:rayIndexCount:accelerationStructure: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 17.0) · iPadOS 13.0+ (deprecated in 17.0) · Mac Catalyst 13.0+ (deprecated in 17.0) · macOS 10.15+ (deprecated in 14.0) · tvOS 13.0+ (deprecated in 17.0) · visionOS 1.0+ (deprecated in 1.0)

## Declaration

```objectivec
- (void) encodeIntersectionToCommandBuffer:(id<MTLCommandBuffer>) commandBuffer intersectionType:(MPSIntersectionType) intersectionType rayBuffer:(id<MTLBuffer>) rayBuffer rayBufferOffset:(NSUInteger) rayBufferOffset rayIndexBuffer:(id<MTLBuffer>) rayIndexBuffer rayIndexBufferOffset:(NSUInteger) rayIndexBufferOffset intersectionBuffer:(id<MTLBuffer>) intersectionBuffer intersectionBufferOffset:(NSUInteger) intersectionBufferOffset rayIndexCount:(NSUInteger) rayIndexCount accelerationStructure:(MPSAccelerationStructure *) accelerationStructure;
```
