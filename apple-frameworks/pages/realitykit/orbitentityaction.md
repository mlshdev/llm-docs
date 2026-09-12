> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/orbitentityaction](https://developer.apple.com/documentation/realitykit/orbitentityaction)

# OrbitEntityAction

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

An action which animates the transform of an entity to revolve around a specified pivot entity.

## Declaration

```swift
struct OrbitEntityAction
```

<a id="overview"></a>

## Overview

This action moves an entity in a circular path by gradually adjusting its local transform. The animation starts from the entity’s initial transform, and rotates around the pivot entity. The [orbitalAxis](orbitentityaction/orbitalaxis.md) specifies which cartesian axis to rotate around in world space.. The axis is resolved when the action starts to produce an axis of rotation around the pivot entity. The full orbit completes after the action has ended.

The example below creates an animation that orbits an entity around the x-axis two times for five seconds.

```swift
// Create an action entity resolution to the pivot entity 
// that exists in the scene.
let pivotEntity: ActionEntityResolution = .entityNamed("pivotEntity")

// Create an action that performs an orbit around the 
// specified pivot entity.
let orbitEntityAction = OrbitEntityAction(pivotEntity: pivotEntity,
                                          revolutions: 2,
                                          orbitalAxis: [0, 1, 0],
                                          isOrientedToPath: true,
                                          isAdditive: false)

// A five second animation that plays an animation causing the entity to
// orbit around the pivot.
let orbitAnimation = try AnimationResource
    .makeActionAnimation(for: orbitEntityAction,
                         duration: 5.0,
                         bindTarget: .transform)

// Play the five second orbit animation.
entity.playAnimation(orbitAnimation)
```

> **Note**

> Use the [orbitalAxis](orbitentityaction/orbitalaxis.md) to determine whether the entity orbits clockwise or counterclockwise.

> **Important**

> This action directly animates the [BindTarget.transform](bindtarget/transform.md) on the bound entity. Ensure a correct bind target is supplied when creating the animation.

> **Important**

> For a successful orbit, ensure the translational offset between the target and pivot entity are not parallel to the orbit axis.

## Topics

### Initializers

- [init(pivotEntity:revolutions:orbitalAxis:isOrientedToPath:isAdditive:)](orbitentityaction/init%28pivotentity_revolutions_orbitalaxis_isorientedtopath_isadditive_%29.md): Creates a new orbit entity action.

### Instance Properties

- [animatedValueType](orbitentityaction/animatedvaluetype.md): The type for the value that the action modifies over time.
- [isAdditive](orbitentityaction/isadditive.md): A Boolean value that indicates whether the animation system additively blends the action’s output with the base value.
- [isOrientedToPath](orbitentityaction/isorientedtopath.md): A Boolean value that indicates whether the orbiting object updates its orientation during the animation to orient itself along the rotation path.
- [orbitalAxis](orbitentityaction/orbitalaxis.md): A vector that describes the axis of rotation (in world space).
- [pivotEntity](orbitentityaction/pivotentity.md): The entity that the target entity orbits around.
- [revolutions](orbitentityaction/revolutions.md): The number of rotations to complete before stopping.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [EntityAction](entityaction.md)

## See Also

### Built-in actions

- [BillboardAction](billboardaction.md): An action that animates the blend factor of an entity’s billboard component.
- [EmphasizeAction](emphasizeaction.md): An action that performs an animation to call attention to an entity.
- [FromToByAction](fromtobyaction.md): An action that starts, stops, or increments by a specific value.
- [ImpulseAction](impulseaction.md): An action that applies an impulse to the physics body at its center of mass when played as an animation.
- [PlayAnimationAction](playanimationaction.md): An action that plays an animation on the given target entity with a range of playback options.
- [PlayAudioAction](playaudioaction.md): An action which plays an audio resource on the given target entity.
- [SetEntityEnabledAction](setentityenabledaction.md): An action that enables or disables the targeted entity and its descendants when played as an animation.
- [SpinAction](spinaction.md): An action which animates the transform of an entity to rotate around a specified local axis.
