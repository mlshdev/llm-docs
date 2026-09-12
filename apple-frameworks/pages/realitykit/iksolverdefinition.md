> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/iksolverdefinition](https://developer.apple.com/documentation/realitykit/iksolverdefinition)

# IKSolverDefinition

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

A container describing a solver instance.

## Declaration

```swift
struct IKSolverDefinition
```

<a id="overview"></a>

## Overview

Adds unique identifier for each solver instance as the rig can be reused.

## Topics

### Initializers

- [init(id:rig:)](iksolverdefinition/init%28id_rig_%29.md): Creates a solver definition for with a unique solver identifier and a rig.

### Instance Properties

- [id](iksolverdefinition/id.md): The identifier of the solver instance.
- [rigDefinition](iksolverdefinition/rigdefinition.md): The solver’s rig definition.

## Relationships

### Conforms To

- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)

## See Also

### Inverse kinematics components

- [IKComponent](ikcomponent.md): A component that allows you to procedurally animate a skeletal model using a full body inverse kinematics solver.
- [IKComponent.Joint](ikcomponent/joint.md): The update stage object that lets you read and update the current settings of a single joint in an IK solver.
- [IKComponent.JointCollection](ikcomponent/jointcollection.md): Ordered dictionary like container with fixed size.
- [IKComponent.Solver](ikcomponent/solver.md): The update stage object that lets you read and update the current settings of a single solver instance.
- [IKComponent.SolverCollection](ikcomponent/solvercollection.md): Ordered dictionary like container with fixed size.
- [IKComponent.Constraint](ikcomponent/constraint.md): The update stage object that lets you read and update the current settings of a single constraint in an IK solver.
- [IKComponent.ConstraintCollection](ikcomponent/constraintcollection.md): Ordered dictionary like container with fixed size.
- [IKResource](ikresource.md): A reference counted immutable resource which contains one or more inverse kinematics solver rigs.
