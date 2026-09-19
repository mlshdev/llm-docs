> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metalperformanceshaders/mpsrayintersector/encodeintersection(commandbuffer:intersectiontype:raytexture:intersectiontexture:accelerationstructure:)

# encodeIntersection(commandBuffer:intersectionType:rayTexture:intersectionTexture:accelerationStructure:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 17.0) · iPadOS 13.0+ (deprecated in 17.0) · Mac Catalyst 13.0+ (deprecated in 17.0) · macOS 10.15+ (deprecated in 14.0) · tvOS 13.0+ (deprecated in 17.0) · visionOS 1.0+ (deprecated in 1.0)

## Declaration

```swift
func encodeIntersection(commandBuffer: any MTLCommandBuffer, intersectionType: MPSIntersectionType, rayTexture: any MTLTexture, intersectionTexture: any MTLTexture, accelerationStructure: MPSAccelerationStructure)
```

# encodeIntersectionToCommandBuffer:intersectionType:rayTexture:intersectionTexture:accelerationStructure: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 17.0) · iPadOS 13.0+ (deprecated in 17.0) · Mac Catalyst 13.0+ (deprecated in 17.0) · macOS 10.15+ (deprecated in 14.0) · tvOS 13.0+ (deprecated in 17.0) · visionOS 1.0+ (deprecated in 1.0)

## Declaration

```objectivec
- (void) encodeIntersectionToCommandBuffer:(id<MTLCommandBuffer>) commandBuffer intersectionType:(MPSIntersectionType) intersectionType rayTexture:(id<MTLTexture>) rayTexture intersectionTexture:(id<MTLTexture>) intersectionTexture accelerationStructure:(MPSAccelerationStructure *) accelerationStructure;
```
