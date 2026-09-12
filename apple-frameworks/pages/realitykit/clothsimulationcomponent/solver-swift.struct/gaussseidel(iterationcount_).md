> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothsimulationcomponent/solver-swift.struct/gaussseidel(iterationcount:)](https://developer.apple.com/documentation/realitykit/clothsimulationcomponent/solver-swift.struct/gaussseidel(iterationcount:))

# gaussSeidel(iterationCount:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

Gauss-Seidel solver for a cloth simulation.

## Declaration

```swift
static func gaussSeidel(iterationCount: Int = 1) -> ClothSimulationComponent.Solver
```

## Parameters

- `iterationCount`: The number of solver iterations to perform per time step.

<a id="return-value"></a>

## Return Value

A Gauss-Seidel solver configuration.

<a id="discussion"></a>

## Discussion

This is the default solver. It provides the best trade-off between accuracy and performance in most cases.

## See Also

### Creating a solver

- [jacobi(iterationCount:)](jacobi%28iterationcount_%29.md): Jacobi solver for a cloth simulation.
