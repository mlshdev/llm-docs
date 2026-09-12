> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage/rotation](https://developer.apple.com/documentation/accelerate/vimage/rotation)

# vImage.Rotation

**Framework:** Accelerate  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

The angle to rotate an image.

## Declaration

```swift
enum Rotation
```

## Topics

### Enumeration Cases

- [vImage.Rotation.angleInDegrees(\_:)](rotation/angleindegrees%28__%29.md): Rotate by any angle, which you specify in degrees.
- [vImage.Rotation.angleInRadians(\_:)](rotation/angleinradians%28__%29.md): Rotate by any angle, which you specify in radians.
- [vImage.Rotation.clockwise0Degrees](rotation/clockwise0degrees.md): Rotate 0 degrees (that is, copy without rotating).
- [vImage.Rotation.clockwise180Degrees](rotation/clockwise180degrees.md): Rotate 180 degrees clockwise.
- [vImage.Rotation.clockwise270Degrees](rotation/clockwise270degrees.md): Rotate 270 degrees clockwise.
- [vImage.Rotation.clockwise90Degrees](rotation/clockwise90degrees.md): Rotate 90 degrees clockwise.
- [vImage.Rotation.counterClockwise0Degrees](rotation/counterclockwise0degrees.md): Rotate 0 degrees (that is, copy without rotating).
- [vImage.Rotation.counterClockwise180Degrees](rotation/counterclockwise180degrees.md): Rotate 180 degrees counter-clockwise.
- [vImage.Rotation.counterClockwise270Degrees](rotation/counterclockwise270degrees.md): Rotate 270 degrees counter-clockwise.
- [vImage.Rotation.counterClockwise90Degrees](rotation/counterclockwise90degrees.md): Rotate 90 degrees counter-clockwise.

## See Also

### Related Documentation

- [Applying geometric transforms to images](../applying-geometric-transforms-to-images.md): Reflect, shear, rotate, and scale image buffers using vImage.

### Enumerations

- [vImage.BlendMode](blendmode.md): Constants that specify an alpha blending mode.
- [vImage.BufferType](buffertype.md): Codes that represent vImage buffer types.
- [vImage.ChannelOrdering](channelordering.md): Constants that specify the channel ordering of a pixel buffer.
- [vImage.CompositeMode](compositemode.md): Constants that specify whether the format of layers is premultiplied or nonpremultiplied.
- [vImage.EdgeMode](edgemode.md): Constants that specify edge modes for convolution operations.
- [vImage.Error](error.md): An error that occurs during a vImage operation.
- [vImage.FloodFillConnectivity](floodfillconnectivity.md)
- [vImage.Gamma](gamma.md): Describes either a used-defined or constant gamma.
- [vImage.MorphologyOperation](morphologyoperation.md): Describes which morphology operation to perform.
- [vImage.ReflectionAxis](reflectionaxis.md): The axis to reflect an image.
- [vImage.ShearDirection](sheardirection.md): The shear direction.
