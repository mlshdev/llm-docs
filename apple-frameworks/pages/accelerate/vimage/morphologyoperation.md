> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage/morphologyoperation](https://developer.apple.com/documentation/accelerate/vimage/morphologyoperation)

# vImage.MorphologyOperation

**Framework:** Accelerate  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Describes which morphology operation to perform.

## Declaration

```swift
enum MorphologyOperation<ComponentType>
```

## Topics

### Enumeration Cases

- [vImage.MorphologyOperation.dilate(structuringElement:)](morphologyoperation/dilate%28structuringelement_%29.md): Applies dilation using a structuring element.
- [vImage.MorphologyOperation.erode(structuringElement:)](morphologyoperation/erode%28structuringelement_%29.md): Applies erosion using a structuring element.
- [vImage.MorphologyOperation.maximize(kernelSize:)](morphologyoperation/maximize%28kernelsize_%29.md): Maximizes using an implicit kernel of a specified size.
- [vImage.MorphologyOperation.minimize(kernelSize:)](morphologyoperation/minimize%28kernelsize_%29.md): Minimizes using an implicit kernel of a specified size.

### Instance Properties

- [structuringElement](morphologyoperation/structuringelement.md): The dilation or erosion structuring element.
- [height](morphologyoperation/height.md): The height of the morphology kernel.
- [width](morphologyoperation/width.md): The width of the morphology kernel.

## See Also

### Enumerations

- [vImage.BlendMode](blendmode.md): Constants that specify an alpha blending mode.
- [vImage.BufferType](buffertype.md): Codes that represent vImage buffer types.
- [vImage.ChannelOrdering](channelordering.md): Constants that specify the channel ordering of a pixel buffer.
- [vImage.CompositeMode](compositemode.md): Constants that specify whether the format of layers is premultiplied or nonpremultiplied.
- [vImage.EdgeMode](edgemode.md): Constants that specify edge modes for convolution operations.
- [vImage.Error](error.md): An error that occurs during a vImage operation.
- [vImage.FloodFillConnectivity](floodfillconnectivity.md)
- [vImage.Gamma](gamma.md): Describes either a used-defined or constant gamma.
- [vImage.ReflectionAxis](reflectionaxis.md): The axis to reflect an image.
- [vImage.Rotation](rotation.md): The angle to rotate an image.
- [vImage.ShearDirection](sheardirection.md): The shear direction.
