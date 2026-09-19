> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/imagepresentationcomponent/presentationscreensize

# presentationScreenSize

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** visionOS 26.0+

The size of the screen presenting the image, with the format \[width, height\] in meters.

## Declaration

```swift
var presentationScreenSize: SIMD2<Float> { get }
```

<a id="discussion"></a>

## Discussion

For immersive viewing modes (`.spatialStereoImmersive` and `.spatial3DImmersive`), this property represents the screen size of the non-immersive version of that mode (`.spatialStereo` and `.spatial3D` respectively).

This property is expressed relative to the local coordinate space of the entity the `ImagePresentationComponent` is assigned to. To calculate the size of the screen in world coordinate space, multiply `presentationScreenSize` by the entity’s world scale.

## See Also

### Retrieving the current screen mesh size

- [screenHeight](screenheight.md): The height of the screen mesh, in meters, when the image is presented in a non-immersive viewing mode.
