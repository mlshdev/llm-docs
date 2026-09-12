> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/ikresource](https://developer.apple.com/documentation/realitykit/ikresource)

# IKResource

**Framework:** RealityKit  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

A reference counted immutable resource which contains one or more inverse kinematics solver rigs.

## Declaration

```swift
class IKResource
```

<a id="overview"></a>

## Overview

Use this resource with an [IKComponent](ikcomponent.md).

## Topics

### Initializers

- [init(rig:)](ikresource/init%28rig_%29.md): Creates a new resource instance for a single solver using the given rig and an automatic solver identifier.

### Instance Properties

- [solverDefinitions](ikresource/solverdefinitions.md): Getter for the deserialized resource contents as a collection of solver definitions.

## Relationships

### Conforms To

- [Resource](resource.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Inverse kinematics components

- [IKComponent](ikcomponent.md): A component that allows you to procedurally animate a skeletal model using a full body inverse kinematics solver.
- [IKComponent.Joint](ikcomponent/joint.md): The update stage object that lets you read and update the current settings of a single joint in an IK solver.
- [IKComponent.JointCollection](ikcomponent/jointcollection.md): Ordered dictionary like container with fixed size.
- [IKComponent.Solver](ikcomponent/solver.md): The update stage object that lets you read and update the current settings of a single solver instance.
- [IKComponent.SolverCollection](ikcomponent/solvercollection.md): Ordered dictionary like container with fixed size.
- [IKComponent.Constraint](ikcomponent/constraint.md): The update stage object that lets you read and update the current settings of a single constraint in an IK solver.
- [IKComponent.ConstraintCollection](ikcomponent/constraintcollection.md): Ordered dictionary like container with fixed size.
- [IKSolverDefinition](iksolverdefinition.md): A container describing a solver instance.
