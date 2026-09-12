> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/ikcomponent/solvercollection](https://developer.apple.com/documentation/realitykit/ikcomponent/solvercollection)

# IKComponent.SolverCollection

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Ordered dictionary like container with fixed size.

## Declaration

```swift
struct SolverCollection
```

<a id="overview"></a>

## Overview

Supports subscripting by index, element’s identifier or element’s name.

## Topics

### Instance Properties

- [count](solvercollection/count.md): The number of elements in the collection.
- [isEmpty](solvercollection/isempty.md): A Boolean value indicating whether the collection is empty.

### Instance Methods

- [contains(\_:)](solvercollection/contains%28__%29.md): Returns a Boolean value that indicates whether the collection contains an element with a specific identifier.
- [set(\_:)](solvercollection/set%28__%29.md): Updates the element with identifier matching the new value.

### Subscripts

- [subscript(\_:)](solvercollection/subscript%28__%29.md): Accesses the element with the specified identifier.

## Relationships

### Conforms To

- [Collection](https://developer.apple.com/documentation/swift/collection)
- [Sequence](https://developer.apple.com/documentation/swift/sequence)

## See Also

### Inverse kinematics components

- [IKComponent](../ikcomponent.md): A component that allows you to procedurally animate a skeletal model using a full body inverse kinematics solver.
- [IKComponent.Joint](joint.md): The update stage object that lets you read and update the current settings of a single joint in an IK solver.
- [IKComponent.JointCollection](jointcollection.md): Ordered dictionary like container with fixed size.
- [IKComponent.Solver](solver.md): The update stage object that lets you read and update the current settings of a single solver instance.
- [IKComponent.Constraint](constraint.md): The update stage object that lets you read and update the current settings of a single constraint in an IK solver.
- [IKComponent.ConstraintCollection](constraintcollection.md): Ordered dictionary like container with fixed size.
- [IKResource](../ikresource.md): A reference counted immutable resource which contains one or more inverse kinematics solver rigs.
- [IKSolverDefinition](../iksolverdefinition.md): A container describing a solver instance.
