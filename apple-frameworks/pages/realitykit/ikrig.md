> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/ikrig](https://developer.apple.com/documentation/realitykit/ikrig)

# IKRig

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

A full body inverse kinematics rig definition for a single skeleton.

## Declaration

```swift
struct IKRig
```

<a id="overview"></a>

## Overview

Describes the skeleton, its tuning, and the active constraints for the solver instance.

<a id="Balance-of-demands-weights-in-a-full-body-solver"></a>

### Balance of demands’ weights in a full body solver

The full body solver calculates the final pose by balancing the various demands based on their assigned weights. This process ensures that each demand, ranging from forward kinematics (FK) demands to constraints on joint movement, affects the pose proportionally to its importance.

The solver reads the FK demands from the [SkeletalPosesComponent](skeletalposescomponent.md). As such these demands are either a playing animation for the model, or just a static pose.

All demands have an element specific weight, and some have a global rig weight. The rig weights influence the overall rig, while element weights adjust individual aspects of the model.

The table below provides detailed mappings of these weights to their respective demand types.

| Demand type | Rig weight | Element weight |
| --- | --- | --- |
| FK demands | [globalFkWeight](ikrig/globalfkweight.md) | [fkWeightPerAxis](ikrig/joint/fkweightperaxis.md) |
| Joint rotation limits | [globalLimitsWeight](ikrig/globallimitsweight.md) | [weight](ikrig/joint/limitsdefinition/weight.md) |
| Constraint position | Not applicable | [weight](ikrig/constraint/ikpositiondemand/weight.md) |
| Constraint orientation | Not applicable | [weight](ikrig/constraint/ikorientationdemand/weight.md) |

> **Note**

> While constraints do not have rig weight, they have blending weight between automatic and custom targets. See [animationOverrideWeight](ikcomponent/constraint/animationoverrideweight.md) for more information.

## Topics

### Creating a rig

- [init(named:rootJoint:)](ikrig/init%28named_rootjoint_%29.md): Creates an IK rig from a joint hierarchy.

### Structures

- [IKRig.Constraint](ikrig/constraint.md): A definition of a rig constraint.
- [IKRig.ConstraintsCollection](ikrig/constraintscollection.md): Ordered dictionary-like container.
- [IKRig.Joint](ikrig/joint.md): A definition of a rig joint and its IK solver settings.
- [IKRig.JointCollection](ikrig/jointcollection.md): Ordered dictionary-like container with a fixed size.

### Initializers

- [init(for:)](ikrig/init%28for_%29.md): Creates an inverse kinematics rig definition for the provided skeleton.

### Instance Properties

- [constraints](ikrig/constraints.md): A collection of all of the rig’s constraint settings.
- [globalFkWeight](ikrig/globalfkweight.md): The solver global weight for the forward kinematics demands.
- [globalLimitsWeight](ikrig/globallimitsweight.md): The solver global weight for the joint rotation limits.
- [joints](ikrig/joints.md): A collection of all of the rig’s joint settings.
- [maxIterations](ikrig/maxiterations.md): The maximum number of iterations the solver is allowed to do per frame.

## See Also

### Inverse kinematics rigs

- [IKRig.Joint](ikrig/joint.md): A definition of a rig joint and its IK solver settings.
- [IKRig.JointCollection](ikrig/jointcollection.md): Ordered dictionary-like container with a fixed size.
- [IKRig.Constraint](ikrig/constraint.md): A definition of a rig constraint.
- [IKRig.ConstraintsCollection](ikrig/constraintscollection.md): Ordered dictionary-like container.
