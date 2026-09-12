> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/ikcomponent/constraint](https://developer.apple.com/documentation/realitykit/ikcomponent/constraint)

# IKComponent.Constraint

**Framework:** RealityKit  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

The update stage object that lets you read and update the current settings of a single constraint in an IK solver.

## Declaration

```swift
class Constraint
```

<a id="overview"></a>

## Overview

The settings this object exposes are the runtime editable values of the solver constraint. Initial values are set in [IKRig.Constraint](../ikrig/constraint.md).

## Topics

### Structures

- [IKComponent.Constraint.DemandOptions](constraint/demandoptions.md): Flags for the different demands types that can be active in a single constraint.

### Instance Properties

- [animationOverrideWeight](constraint/animationoverrideweight.md): The blending weights between the FK demand and the your target per demand type.
- [demands](constraint/demands.md): The set of the active demands of the constraint.
- [id](constraint/id.md): ID of the constraint, that is unique within the solver instance.
- [jointID](constraint/jointid.md): The identifier of the constrained rig joint.
- [lookAtTargetPosition](constraint/lookattargetposition.md): The point demand which the look-at constraint uses to generate a new orientation demand.
- [name](constraint/name.md): The name of the constraint as defined in the rig.
- [offset](constraint/offset.md): The offset applied on top of the target transform before the solve.
- [target](constraint/target.md): The packed targets for the positional and orientational demands in model space.

## Relationships

### Conforms To

- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)

## See Also

### Inverse kinematics components

- [IKComponent](../ikcomponent.md): A component that allows you to procedurally animate a skeletal model using a full body inverse kinematics solver.
- [IKComponent.Joint](joint.md): The update stage object that lets you read and update the current settings of a single joint in an IK solver.
- [IKComponent.JointCollection](jointcollection.md): Ordered dictionary like container with fixed size.
- [IKComponent.Solver](solver.md): The update stage object that lets you read and update the current settings of a single solver instance.
- [IKComponent.SolverCollection](solvercollection.md): Ordered dictionary like container with fixed size.
- [IKComponent.ConstraintCollection](constraintcollection.md): Ordered dictionary like container with fixed size.
- [IKResource](../ikresource.md): A reference counted immutable resource which contains one or more inverse kinematics solver rigs.
- [IKSolverDefinition](../iksolverdefinition.md): A container describing a solver instance.
