> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlinstanceaccelerationstructuredescriptor/motiontransformbufferoffset](https://developer.apple.com/documentation/metal/mtlinstanceaccelerationstructuredescriptor/motiontransformbufferoffset)

# motionTransformBufferOffset (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

The offset, in bytes, to the descripton of the first motion transform.

## Declaration

```swift
var motionTransformBufferOffset: Int { get set }
```

<a id="discussion"></a>

## Discussion

The offset needs to be a multiple of 64 bytes. Check the [Metal feature set tables (PDF)](https://developer.apple.com/metal/Metal-Feature-Set-Tables.pdf) for potential alignment restrictions.

## See Also

### Specifying motion data

- [motionTransformCount](motiontransformcount.md): The number of motion transforms in the motion transform buffer.
- [motionTransformBuffer](motiontransformbuffer.md): A buffer that contains descriptions of each motion transform in the acceleration structure.

# motionTransformBufferOffset (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

The offset, in bytes, to the descripton of the first motion transform.

## Declaration

```objectivec
@property (nonatomic) NSUInteger motionTransformBufferOffset;
```

<a id="discussion"></a>

## Discussion

The offset needs to be a multiple of 64 bytes. Check the [Metal feature set tables (PDF)](https://developer.apple.com/metal/Metal-Feature-Set-Tables.pdf) for potential alignment restrictions.

## See Also

### Specifying motion data

- [motionTransformCount](motiontransformcount.md): The number of motion transforms in the motion transform buffer.
- [motionTransformBuffer](motiontransformbuffer.md): A buffer that contains descriptions of each motion transform in the acceleration structure.
