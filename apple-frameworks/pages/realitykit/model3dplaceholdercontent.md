> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/model3dplaceholdercontent](https://developer.apple.com/documentation/realitykit/model3dplaceholdercontent)

# Model3DPlaceholderContent

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** visionOS 1.0+

A container view that presents either a 3D model or a placeholder for one.

## Declaration

```swift
@MainActor @preconcurrency struct Model3DPlaceholderContent<Model, Placeholder> where Model : View, Placeholder : View
```

<a id="overview"></a>

## Overview

Don’t instantiate this type directly. [Model3D](model3d.md) creates it for you.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [View](https://developer.apple.com/documentation/swiftui/view)

## See Also

### SwiftUI 3D model presentation

- [Model3D](model3d.md): A view that asynchronously loads and displays a 3D model.
- [Model3DPhase](model3dphase.md): The current phase of the asynchronous model loading operation.
- [ResolvedModel3D](resolvedmodel3d.md): A view for displaying static three-dimensional models.
- [Model3DAsset](model3dasset.md): A container used to represent the asset loaded into the Model3D View.
