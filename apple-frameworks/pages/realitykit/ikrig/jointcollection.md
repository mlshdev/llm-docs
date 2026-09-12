> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/ikrig/jointcollection](https://developer.apple.com/documentation/realitykit/ikrig/jointcollection)

# IKRig.JointCollection

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Ordered dictionary-like container with a fixed size.

## Declaration

```swift
struct JointCollection
```

<a id="overview"></a>

## Overview

Supports subscripting by index, element’s identifier or element’s name.

## Topics

### Instance Properties

- [count](jointcollection/count.md): The number of elements in the collection.
- [isEmpty](jointcollection/isempty.md): A Boolean value indicating whether the collection is empty.

### Instance Methods

- [contains(\_:)](jointcollection/contains%28__%29.md): Returns a Boolean value that indicates whether the collection contains an element with a specific identifier.
- [forEach(descendantOf:inclusive:update:)](jointcollection/foreach%28descendantof_inclusive_update_%29.md): Calls the provided closure on each element in the hierarchy rooted at the named joint.
- [set(\_:)](jointcollection/set%28__%29.md): Updates the element with identifier matching the provided value’s identifier.

### Subscripts

- [subscript(\_:)](jointcollection/subscript%28__%29.md): Accesses the element with the specified identifier.

## Relationships

### Conforms To

- [Collection](https://developer.apple.com/documentation/swift/collection)
- [Sequence](https://developer.apple.com/documentation/swift/sequence)

## See Also

### Inverse kinematics rigs

- [IKRig](../ikrig.md): A full body inverse kinematics rig definition for a single skeleton.
- [IKRig.Joint](joint.md): A definition of a rig joint and its IK solver settings.
- [IKRig.Constraint](constraint.md): A definition of a rig constraint.
- [IKRig.ConstraintsCollection](constraintscollection.md): Ordered dictionary-like container.
