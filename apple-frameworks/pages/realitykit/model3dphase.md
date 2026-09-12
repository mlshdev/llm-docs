> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/model3dphase](https://developer.apple.com/documentation/realitykit/model3dphase)

# Model3DPhase

**Framework:** RealityKit  
**Kind:** Enumeration  
**Availability:** visionOS 1.0+

The current phase of the asynchronous model loading operation.

## Declaration

```swift
enum Model3DPhase
```

<a id="overview"></a>

## Overview

When you create a [Model3D](model3d.md) instance with the [init(url:transaction:content:)](model3d/init%28url_transaction_content_%29.md) or `Model3D/init(named:transaction:content:)` initializers, you define the appearance of the view using a `content` closure. [Model3D](model3d.md) calls the closure with a phase value at different points during the load operation to indicate the current state. Use the phase to decide what to display. For example, you can display the loaded model if it exists, a view that indicates an error, or a placeholder:

```swift
let url = URL(string: "https://example.com/robot.usdz")!
Model3D(url: url) { phase in
    if let model = phase.model {
        model // Displays the loaded model.
    } else if phase.error != nil {
        Color.red // Indicates an error.
    } else {
        ProgressView()
    }
}
```

## Topics

### Accessing the model

- [model](model3dphase/model.md): The loaded model, if any.
- [error](model3dphase/error.md): The error that occurred when attempting to load a model, if any.

### Obtaining the result

- [Model3DPhase.empty](model3dphase/empty.md): No model is loaded.
- [Model3DPhase.success(\_:)](model3dphase/success%28__%29.md): A model has successfully loaded.
- [Model3DPhase.failure(\_:)](model3dphase/failure%28__%29.md): An model failed to load with an error.

## See Also

### SwiftUI 3D model presentation

- [Model3D](model3d.md): A view that asynchronously loads and displays a 3D model.
- [ResolvedModel3D](resolvedmodel3d.md): A view for displaying static three-dimensional models.
- [Model3DPlaceholderContent](model3dplaceholdercontent.md): A container view that presents either a 3D model or a placeholder for one.
- [Model3DAsset](model3dasset.md): A container used to represent the asset loaded into the Model3D View.
