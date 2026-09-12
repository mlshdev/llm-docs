> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlinstanceaccelerationstructuredescriptor/motiontransformbuffer](https://developer.apple.com/documentation/metal/mtlinstanceaccelerationstructuredescriptor/motiontransformbuffer)

# motionTransformBuffer (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

A buffer that contains descriptions of each motion transform in the acceleration structure.

## Declaration

```swift
var motionTransformBuffer: (any MTLBuffer)? { get set }
```

## See Also

### Specifying motion data

- [motionTransformCount](motiontransformcount.md): The number of motion transforms in the motion transform buffer.
- [motionTransformBufferOffset](motiontransformbufferoffset.md): The offset, in bytes, to the descripton of the first motion transform.

# motionTransformBuffer (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

A buffer that contains descriptions of each motion transform in the acceleration structure.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) id<MTLBuffer> motionTransformBuffer;
```

## See Also

### Specifying motion data

- [motionTransformCount](motiontransformcount.md): The number of motion transforms in the motion transform buffer.
- [motionTransformBufferOffset](motiontransformbufferoffset.md): The offset, in bytes, to the descripton of the first motion transform.
