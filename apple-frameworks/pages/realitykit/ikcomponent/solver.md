> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/ikcomponent/solver](https://developer.apple.com/documentation/realitykit/ikcomponent/solver)

# IKComponent.Solver

**Framework:** RealityKit  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

The update stage object that lets you read and update the current settings of a single solver instance.

## Declaration

```swift
class Solver
```

<a id="overview"></a>

## Overview

The settings this object exposes are the runtime editable values on the solver instance itself, the solver joints and constraints. For the full list of settings adjustable during creation, see [IKRig](../ikrig.md).

## Topics

### Structures

- [IKComponent.Solver.ID](solver/id-swift.struct.md): The solver instance identifier type.

### Instance Properties

- [constraints](solver/constraints.md): The collection of all of the constraint update stage objects of the solver instance.
- [globalFkWeight](solver/globalfkweight.md): The solver global forward kinematics demand’s weight.
- [id](solver/id-swift.property.md): The solver instance identifier.
- [joints](solver/joints.md): The collection of all of the joint update stage objects of the solver instance.
- [maxIterations](solver/maxiterations.md): The maximum number of iterations the solver is allowed to do per frame.

### Instance Methods

- [reset()](solver/reset%28%29.md): Enqueues a solver reset call that executes before the next solve.

## Relationships

### Conforms To

- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)

## See Also

### Inverse kinematics components

- [IKComponent](../ikcomponent.md): A component that allows you to procedurally animate a skeletal model using a full body inverse kinematics solver.
- [IKComponent.Joint](joint.md): The update stage object that lets you read and update the current settings of a single joint in an IK solver.
- [IKComponent.JointCollection](jointcollection.md): Ordered dictionary like container with fixed size.
- [IKComponent.SolverCollection](solvercollection.md): Ordered dictionary like container with fixed size.
- [IKComponent.Constraint](constraint.md): The update stage object that lets you read and update the current settings of a single constraint in an IK solver.
- [IKComponent.ConstraintCollection](constraintcollection.md): Ordered dictionary like container with fixed size.
- [IKResource](../ikresource.md): A reference counted immutable resource which contains one or more inverse kinematics solver rigs.
- [IKSolverDefinition](../iksolverdefinition.md): A container describing a solver instance.
