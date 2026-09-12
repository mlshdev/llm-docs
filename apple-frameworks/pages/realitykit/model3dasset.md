> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/model3dasset](https://developer.apple.com/documentation/realitykit/model3dasset)

# Model3DAsset

**Framework:** RealityKit  
**Kind:** Class  
**Availability:** visionOS 26.0+

A container used to represent the asset loaded into the Model3D View.

## Declaration

```swift
class Model3DAsset
```

## Topics

### Structures

- [Model3DAsset.EntityAnimation](model3dasset/entityanimation.md): An animation resource for an entity loaded from a bundle.

### Initializers

- [init(named:in:)](model3dasset/init%28named_in_%29.md): Creates a named 3D model asset from the provided bundle.
- [init(url:)](model3dasset/init%28url_%29.md): Creates a 3D model asset from the provided URL.

### Instance Properties

- [animationPlaybackController](model3dasset/animationplaybackcontroller.md): Reference to the animation playback controller instance that corresponds to the active animation on the entity.
- [availableAnimations](model3dasset/availableanimations.md): List of all available animations on the entity.
- [selectedAnimation](model3dasset/selectedanimation.md): The currently active animation on the entity.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Observable](https://developer.apple.com/documentation/observation/observable)

## See Also

### SwiftUI 3D model presentation

- [Model3D](model3d.md): A view that asynchronously loads and displays a 3D model.
- [Model3DPhase](model3dphase.md): The current phase of the asynchronous model loading operation.
- [ResolvedModel3D](resolvedmodel3d.md): A view for displaying static three-dimensional models.
- [Model3DPlaceholderContent](model3dplaceholdercontent.md): A container view that presents either a 3D model or a placeholder for one.
