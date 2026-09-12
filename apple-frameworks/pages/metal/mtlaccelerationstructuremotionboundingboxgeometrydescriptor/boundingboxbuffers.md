> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlaccelerationstructuremotionboundingboxgeometrydescriptor/boundingboxbuffers](https://developer.apple.com/documentation/metal/mtlaccelerationstructuremotionboundingboxgeometrydescriptor/boundingboxbuffers)

# boundingBoxBuffers (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

A array of motion keyframes, each containing bounding box data.

## Declaration

```swift
var boundingBoxBuffers: [MTLMotionKeyframeData] { get set }
```

## See Also

### Specifying bounding boxes data

- [boundingBoxStride](boundingboxstride.md): The stride, in bytes, between bounding boxes in each buffer.

# boundingBoxBuffers (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

A array of motion keyframes, each containing bounding box data.

## Declaration

```objectivec
@property (nonatomic, copy) NSArray<MTLMotionKeyframeData *> * boundingBoxBuffers;
```

## See Also

### Specifying bounding boxes data

- [boundingBoxStride](boundingboxstride.md): The stride, in bytes, between bounding boxes in each buffer.
