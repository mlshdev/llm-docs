> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicsbody/centerofmassoffset](https://developer.apple.com/documentation/scenekit/scnphysicsbody/centerofmassoffset)

# centerOfMassOffset (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The position of the body’s center of mass relative to its local coordinate origin.

## Declaration

```swift
var centerOfMassOffset: SCNVector3 { get set }
```

<a id="Discussion"></a>

## Discussion

The results of physics interactions with a body depend on its center of mass. For example, a collision close to or in line with the center of mass tends to move the whole body (that is, it adds linear velocity), but a collision not aligned with the center of mass tends to cause the body to rotate or topple (that is, it adds angular velocity).

When this property’s value is the vector `(0, 0, 0)` (the default), SceneKit simulates interactions with the assumption that the body’s center of mass is at the origin of its local coordinate space (the [simdPosition](../scnnode/simdposition.md) of the node owning the physics body).

Change this value when you want to introduce a difference between the object’s geometric center and its center of mass. For example:

- To simulate a body with uneven distribution of mass, such as a hammer with a long handle and heavy head.
- To use a point other than the center of mass for positioning the object in the scene, such as the point where the object rests on a surface.

## See Also

### Defining a Body’s Physical Properties

- [mass](mass.md): The mass of the body, in kilograms.
- [charge](charge.md): The electric charge of the body, in coulombs.
- [friction](friction.md): The body’s resistance to sliding motion.
- [rollingFriction](rollingfriction.md): The body’s resistance to rolling motion.
- [restitution](restitution.md): A factor that determines how much kinetic energy the body loses or gains in collisions.
- [damping](damping.md): A factor that reduces the body’s linear velocity.
- [angularDamping](angulardamping.md): A factor that reduces the body’s angular velocity.
- [momentOfInertia](momentofinertia.md): The body’s moment of inertia, expressed in the local coordinate system of the node that contains the body.
- [usesDefaultMomentOfInertia](usesdefaultmomentofinertia.md): A Boolean value that determines whether SceneKit automatically calculates the body’s moment of inertia or allows setting a custom value.

# centerOfMassOffset (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The position of the body’s center of mass relative to its local coordinate origin.

## Declaration

```objectivec
@property (nonatomic) SCNVector3 centerOfMassOffset;
```

<a id="Discussion"></a>

## Discussion

The results of physics interactions with a body depend on its center of mass. For example, a collision close to or in line with the center of mass tends to move the whole body (that is, it adds linear velocity), but a collision not aligned with the center of mass tends to cause the body to rotate or topple (that is, it adds angular velocity).

When this property’s value is the vector `(0, 0, 0)` (the default), SceneKit simulates interactions with the assumption that the body’s center of mass is at the origin of its local coordinate space (the [simdPosition](../scnnode/simdposition.md) of the node owning the physics body).

Change this value when you want to introduce a difference between the object’s geometric center and its center of mass. For example:

- To simulate a body with uneven distribution of mass, such as a hammer with a long handle and heavy head.
- To use a point other than the center of mass for positioning the object in the scene, such as the point where the object rests on a surface.

## See Also

### Defining a Body’s Physical Properties

- [mass](mass.md): The mass of the body, in kilograms.
- [charge](charge.md): The electric charge of the body, in coulombs.
- [friction](friction.md): The body’s resistance to sliding motion.
- [rollingFriction](rollingfriction.md): The body’s resistance to rolling motion.
- [restitution](restitution.md): A factor that determines how much kinetic energy the body loses or gains in collisions.
- [damping](damping.md): A factor that reduces the body’s linear velocity.
- [angularDamping](angulardamping.md): A factor that reduces the body’s angular velocity.
- [momentOfInertia](momentofinertia.md): The body’s moment of inertia, expressed in the local coordinate system of the node that contains the body.
- [usesDefaultMomentOfInertia](usesdefaultmomentofinertia.md): A Boolean value that determines whether SceneKit automatically calculates the body’s moment of inertia or allows setting a custom value.
