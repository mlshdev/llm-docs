> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothsimulationcomponent/solver-swift.struct/jacobi(iterationcount:)](https://developer.apple.com/documentation/realitykit/clothsimulationcomponent/solver-swift.struct/jacobi(iterationcount:))

# jacobi(iterationCount:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

Jacobi solver for a cloth simulation.

## Declaration

```swift
static func jacobi(iterationCount: Int = 1) -> ClothSimulationComponent.Solver
```

## Parameters

- `iterationCount`: The number of solver iterations to perform per time step.

<a id="return-value"></a>

## Return Value

A Jacobi solver configuration.

<a id="discussion"></a>

## Discussion

The Jacobi solver can be faster and more power efficient than Gauss-Seidel, especially if the number of particles in your simulation is low. However, the Jacobi solver has a slower convergence than Gauss-Seidel, so when used with the same number of iterations we can expect bigger errors in the simulation.

Before considering changing the solver to improve performance or power consumption, we recommend playing around with other parameters in your scene. For example:

- Reducing the number of vertices, and making sure triangles are as regular as possible in edge length across all bodies in the simulation.
- If possible, replace cloth mesh colliders with implicit colliders like spheres, boxes, etc.
- Set the Laplacian damping of all bodies to zero.
- Set [crossTetherStiffness](../../clothbodymaterial/crosstetherstiffness.md) and [bendStiffness](../../clothbodymaterial/bendstiffness.md) to zero for all the bodies.

But if you need to improve performance and you think you can tolerate even a bit more stretching in your bodies, you can experiment with Jacobi. Always take actual performance measurements when doing performance-related changes, as the impact of different approaches may vary greatly depending on your specific scene.

## See Also

### Creating a solver

- [gaussSeidel(iterationCount:)](gaussseidel%28iterationcount_%29.md): Gauss-Seidel solver for a cloth simulation.
