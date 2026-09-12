> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlaccelerationstructuremotionboundingboxgeometrydescriptor/boundingboxstride](https://developer.apple.com/documentation/metal/mtlaccelerationstructuremotionboundingboxgeometrydescriptor/boundingboxstride)

# boundingBoxStride (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

The stride, in bytes, between bounding boxes in each buffer.

## Declaration

```swift
var boundingBoxStride: Int { get set }
```

## See Also

### Specifying bounding boxes data

- [boundingBoxBuffers](boundingboxbuffers.md): A array of motion keyframes, each containing bounding box data.

# boundingBoxStride (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

The stride, in bytes, between bounding boxes in each buffer.

## Declaration

```objectivec
@property (nonatomic) NSUInteger boundingBoxStride;
```

## See Also

### Specifying bounding boxes data

- [boundingBoxBuffers](boundingboxbuffers.md): A array of motion keyframes, each containing bounding box data.
