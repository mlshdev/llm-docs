> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/constraints](https://developer.apple.com/documentation/scenekit/constraints)

# Constraints

**Interface languages:** Swift, Objective-C

**Framework:** SceneKit  
**Kind:** API Collection

Automatically adjust the position or orientation of a node based on specified rules.

<a id="overview"></a>

## Overview

By modifying the results of animation, physics, and other scene graph changes, constraints make it easier manage dynamic behaviors and relationships between elements of your scene.

For example, when developing a game, you might want a camera node to always point at the player character, even as that character moves around the scene. Instead of directly reorienting the camera node each time you move the character, you can add a look-at constraint to the camera node to make SceneKit reorient the camera automatically.

## Topics

### First Steps

- [SCNConstraint](scnconstraint.md): The abstract superclass for objects that automatically adjust the position, rotation, or scale of a node based on specified rules.

### Orientation Constraints

- [SCNBillboardConstraint](scnbillboardconstraint.md): A constraint that orients a node to always point toward the current camera.
- [SCNLookAtConstraint](scnlookatconstraint.md): A constraint that orients a node to always point toward a specified other node.

### Position Constraints

- [SCNDistanceConstraint](scndistanceconstraint.md)
- [SCNAvoidOccluderConstraint](scnavoidoccluderconstraint.md)

### Motion Constraints

- [SCNAccelerationConstraint](scnaccelerationconstraint.md)
- [SCNSliderConstraint](scnsliderconstraint.md)

### Synchronization

- [SCNReplicatorConstraint](scnreplicatorconstraint.md)

### Inverse Kinematics

- [SCNIKConstraint](scnikconstraint.md): A constraint that applies inverse kinematics to make a chain of nodes “reach” toward a target point.

### Customization

- [SCNTransformConstraint](scntransformconstraint.md): A constraint that runs a specified closure, block in Objective-C, to compute a new transform (position, rotation, and scale) for each node that the constraint affects.

## See Also

### Animation and Constraints

- [Animation](animation.md): Create declarative animations that move elements of a scene in predetermined ways, or manage animations imported with external authoring tools.
- [SCNSkinner](scnskinner.md): An object that manages the relationship between skeletal animations and the nodes and geometries they animate.
- [SCNMorpher](scnmorpher.md): An object that manages smooth transitions between a node’s base geometry and one or more target geometries.
