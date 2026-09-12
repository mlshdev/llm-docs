> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/ikcomponent/joint](https://developer.apple.com/documentation/realitykit/ikcomponent/joint)

# IKComponent.Joint

**Framework:** RealityKit  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

The update stage object that lets you read and update the current settings of a single joint in an IK solver.

## Declaration

```swift
class Joint
```

<a id="overview"></a>

## Overview

The settings this object exposes are the runtime editable values of a solver joint. Initial values are set in [IKRig.Joint](../ikrig/joint.md).

## Topics

### Instance Properties

- [fkWeightPerAxis](joint/fkweightperaxis.md): The per-axis weight of the source animation demand on the joint.
- [id](joint/id.md): The identifier of this joint.
- [name](joint/name.md): The name of the joint.
- [rotationStiffness](joint/rotationstiffness.md): The per-axis rotational stiffness of the joint.

## Relationships

### Conforms To

- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)

## See Also

### Inverse kinematics components

- [IKComponent](../ikcomponent.md): A component that allows you to procedurally animate a skeletal model using a full body inverse kinematics solver.
- [IKComponent.JointCollection](jointcollection.md): Ordered dictionary like container with fixed size.
- [IKComponent.Solver](solver.md): The update stage object that lets you read and update the current settings of a single solver instance.
- [IKComponent.SolverCollection](solvercollection.md): Ordered dictionary like container with fixed size.
- [IKComponent.Constraint](constraint.md): The update stage object that lets you read and update the current settings of a single constraint in an IK solver.
- [IKComponent.ConstraintCollection](constraintcollection.md): Ordered dictionary like container with fixed size.
- [IKResource](../ikresource.md): A reference counted immutable resource which contains one or more inverse kinematics solver rigs.
- [IKSolverDefinition](../iksolverdefinition.md): A container describing a solver instance.
