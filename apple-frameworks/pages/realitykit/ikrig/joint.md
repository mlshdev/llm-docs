> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/ikrig/joint](https://developer.apple.com/documentation/realitykit/ikrig/joint)

# IKRig.Joint

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

A definition of a rig joint and its IK solver settings.

## Declaration

```swift
struct Joint
```

## Topics

### Structures

- [IKRig.Joint.ID](joint/id-swift.struct.md): The identity type for a joint in a rig.
- [IKRig.Joint.LimitsDefinition](joint/limitsdefinition.md): A definition of joint rotation limits.

### Initializers

- [init(name:parentID:restTransform:)](joint/init%28name_parentid_resttransform_%29.md): Creates a joint with the provided base elements.

### Instance Properties

- [active](joint/active.md): A boolean value that sets whether the solver rotates the joint.
- [fkWeightPerAxis](joint/fkweightperaxis.md): The per-axis weight of the FK demand on the joint.
- [id](joint/id-swift.property.md): The identifier of the joint.
- [limits](joint/limits.md): The per-axis rotation limits of the joint.
- [name](joint/name.md): The name of the joint.
- [parentID](joint/parentid.md): The identifier of the parent joint if there is one.
- [restTransform](joint/resttransform.md): The local space transformation of the joint in the solver’s rest pose.
- [rotationStiffness](joint/rotationstiffness.md): The per-axis rotational stiffness of the joint.

## Relationships

### Conforms To

- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)

## See Also

### Inverse kinematics rigs

- [IKRig](../ikrig.md): A full body inverse kinematics rig definition for a single skeleton.
- [IKRig.JointCollection](jointcollection.md): Ordered dictionary-like container with a fixed size.
- [IKRig.Constraint](constraint.md): A definition of a rig constraint.
- [IKRig.ConstraintsCollection](constraintscollection.md): Ordered dictionary-like container.
