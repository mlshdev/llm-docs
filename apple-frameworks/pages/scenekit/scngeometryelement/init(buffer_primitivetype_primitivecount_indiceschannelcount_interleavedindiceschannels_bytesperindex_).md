> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scngeometryelement/init(buffer:primitivetype:primitivecount:indiceschannelcount:interleavedindiceschannels:bytesperindex:)](https://developer.apple.com/documentation/scenekit/scngeometryelement/init(buffer:primitivetype:primitivecount:indiceschannelcount:interleavedindiceschannels:bytesperindex:))

# init(buffer:primitiveType:primitiveCount:indicesChannelCount:interleavedIndicesChannels:bytesPerIndex:) (Swift)

**Framework:** SceneKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

## Declaration

```swift
convenience init(buffer: any MTLBuffer, primitiveType: SCNGeometryPrimitiveType, primitiveCount: Int, indicesChannelCount: Int, interleavedIndicesChannels: Bool, bytesPerIndex: Int)
```

# geometryElementWithBuffer:primitiveType:primitiveCount:indicesChannelCount:interleavedIndicesChannels:bytesPerIndex: (Objective-C)

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

## Declaration

```objectivec
+ (instancetype) geometryElementWithBuffer:(id<MTLBuffer>) buffer primitiveType:(SCNGeometryPrimitiveType) primitiveType primitiveCount:(NSInteger) primitiveCount indicesChannelCount:(NSInteger) indicesChannelCount interleavedIndicesChannels:(BOOL) interleavedIndicesChannels bytesPerIndex:(NSInteger) bytesPerIndex;
```
