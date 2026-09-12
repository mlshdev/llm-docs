> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/ikrig/constraint](https://developer.apple.com/documentation/realitykit/ikrig/constraint)

# IKRig.Constraint

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

A definition of a rig constraint.

## Declaration

```swift
struct Constraint
```

<a id="overview"></a>

## Overview

Each constraint can have its position and orientation demands enabled individually.

## Topics

### Structures

- [IKRig.Constraint.ID](constraint/id-swift.struct.md): The identity type for a constraint in a rig.
- [IKRig.Constraint.IKOrientationDemand](constraint/ikorientationdemand.md): A definition of an orientational demand.
- [IKRig.Constraint.IKPositionDemand](constraint/ikpositiondemand.md): A definition of a positional demand.

### Instance Properties

- [id](constraint/id-swift.property.md): The identifier of the constraint.
- [jointName](constraint/jointname.md): The name of the constrained joint.
- [name](constraint/name.md): The name of the constraint.
- [offset](constraint/offset.md): A constraint target offset.
- [orientationDemand](constraint/orientationdemand.md): The settings of the orientational demand.
- [positionDemand](constraint/positiondemand.md): The settings of the positional demand.

### Type Methods

- [lookAtAbsolute(named:on:lookingAlong:orientationWeight:)](constraint/lookatabsolute%28named_on_lookingalong_orientationweight_%29.md): Creates a constraint with only an orientational demand in absolute look-at mode.
- [lookAtAdditive(named:on:lookingAlong:orientationWeight:)](constraint/lookatadditive%28named_on_lookingalong_orientationweight_%29.md): Creates a constraint with only an orientational demand in additive look-at mode.
- [orient(named:on:orientationWeight:)](constraint/orient%28named_on_orientationweight_%29.md): Creates a constraint with only an orientation demand.
- [parent(named:on:positionWeight:orientationWeight:)](constraint/parent%28named_on_positionweight_orientationweight_%29.md): Creates a constraint with both a positional and an orientational demands.
- [point(named:on:positionWeight:)](constraint/point%28named_on_positionweight_%29.md): Creates a constraint with only a positional demand.

## Relationships

### Conforms To

- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)

## See Also

### Inverse kinematics rigs

- [IKRig](../ikrig.md): A full body inverse kinematics rig definition for a single skeleton.
- [IKRig.Joint](joint.md): A definition of a rig joint and its IK solver settings.
- [IKRig.JointCollection](jointcollection.md): Ordered dictionary-like container with a fixed size.
- [IKRig.ConstraintsCollection](constraintscollection.md): Ordered dictionary-like container.
