> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage/channelordering](https://developer.apple.com/documentation/accelerate/vimage/channelordering)

# vImage.ChannelOrdering

**Framework:** Accelerate  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Constants that specify the channel ordering of a pixel buffer.

## Declaration

```swift
enum ChannelOrdering
```

## Topics

### Enumeration Cases

- [vImage.ChannelOrdering.ARGB](channelordering/argb.md): The first channel is the alpha channel.
- [vImage.ChannelOrdering.RGBA](channelordering/rgba.md): The last channel is the alpha channel.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Enumerations

- [vImage.BlendMode](blendmode.md): Constants that specify an alpha blending mode.
- [vImage.BufferType](buffertype.md): Codes that represent vImage buffer types.
- [vImage.CompositeMode](compositemode.md): Constants that specify whether the format of layers is premultiplied or nonpremultiplied.
- [vImage.EdgeMode](edgemode.md): Constants that specify edge modes for convolution operations.
- [vImage.Error](error.md): An error that occurs during a vImage operation.
- [vImage.FloodFillConnectivity](floodfillconnectivity.md)
- [vImage.Gamma](gamma.md): Describes either a used-defined or constant gamma.
- [vImage.MorphologyOperation](morphologyoperation.md): Describes which morphology operation to perform.
- [vImage.ReflectionAxis](reflectionaxis.md): The axis to reflect an image.
- [vImage.Rotation](rotation.md): The angle to rotate an image.
- [vImage.ShearDirection](sheardirection.md): The shear direction.
