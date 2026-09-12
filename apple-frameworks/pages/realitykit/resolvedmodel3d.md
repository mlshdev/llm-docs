> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/resolvedmodel3d](https://developer.apple.com/documentation/realitykit/resolvedmodel3d)

# ResolvedModel3D

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** visionOS 1.0+

A view for displaying static three-dimensional models.

## Declaration

```swift
@MainActor @preconcurrency struct ResolvedModel3D
```

<a id="overview"></a>

## Overview

You don’t instantiate this type directly, instead [Model3D](model3d.md) creates instances for you.

## Topics

### Instance Methods

- [resizable(\_:)](resolvedmodel3d/resizable%28__%29.md): Allows this model to resize itself to fit its container.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [View](https://developer.apple.com/documentation/swiftui/view)

## See Also

### SwiftUI 3D model presentation

- [Model3D](model3d.md): A view that asynchronously loads and displays a 3D model.
- [Model3DPhase](model3dphase.md): The current phase of the asynchronous model loading operation.
- [Model3DPlaceholderContent](model3dplaceholdercontent.md): A container view that presents either a 3D model or a placeholder for one.
- [Model3DAsset](model3dasset.md): A container used to represent the asset loaded into the Model3D View.
