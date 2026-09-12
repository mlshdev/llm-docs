> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothsimulationcomponent/solver-swift.struct](https://developer.apple.com/documentation/realitykit/clothsimulationcomponent/solver-swift.struct)

# ClothSimulationComponent.Solver

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

The permanent solver configuration of a cloth simulation.

## Declaration

```swift
struct Solver
```

<a id="overview"></a>

## Overview

The solver used for a simulation affects the quality, performance and power cost of the simulation.

## Topics

### Creating a solver

- [gaussSeidel(iterationCount:)](solver-swift.struct/gaussseidel%28iterationcount_%29.md): Gauss-Seidel solver for a cloth simulation.
- [jacobi(iterationCount:)](solver-swift.struct/jacobi%28iterationcount_%29.md): Jacobi solver for a cloth simulation.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring the solver

- [solver](solver-swift.property.md): The solver used by this simulation, configured at initialization and immutable thereafter.
