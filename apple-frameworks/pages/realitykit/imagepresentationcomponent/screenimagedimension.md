> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/imagepresentationcomponent/screenimagedimension](https://developer.apple.com/documentation/realitykit/imagepresentationcomponent/screenimagedimension)

# screenImageDimension

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** visionOS 26.0+

The image resolution of the currently presented image, in pixels.

## Declaration

```swift
var screenImageDimension: SIMD2<Float> { get }
```

<a id="discussion"></a>

## Discussion

The meaning of this resolution depends on the current viewing mode:

- In monoscopic viewing modes, this property returns the size of the monoscopic image
- In spatial stereo viewing modes, this property returns the size of each image in the spatial stereo pair
- In spatial 3D viewing modes, this property returns the size of the monoscopic image used to generate the spatial 3D resource

This property has the format `[width, height]` in pixels.
