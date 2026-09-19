> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metal/mtlinstanceaccelerationstructuredescriptor/motiontransformcount

# motionTransformCount (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

The number of motion transforms in the motion transform buffer.

## Declaration

```swift
var motionTransformCount: Int { get set }
```

## See Also

### Specifying motion data

- [motionTransformBuffer](motiontransformbuffer.md): A buffer that contains descriptions of each motion transform in the acceleration structure.
- [motionTransformBufferOffset](motiontransformbufferoffset.md): The offset, in bytes, to the descripton of the first motion transform.

# motionTransformCount (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

The number of motion transforms in the motion transform buffer.

## Declaration

```objectivec
@property (nonatomic) NSUInteger motionTransformCount;
```

## See Also

### Specifying motion data

- [motionTransformBuffer](motiontransformbuffer.md): A buffer that contains descriptions of each motion transform in the acceleration structure.
- [motionTransformBufferOffset](motiontransformbufferoffset.md): The offset, in bytes, to the descripton of the first motion transform.
