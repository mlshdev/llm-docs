> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicsbody](https://developer.apple.com/documentation/scenekit/scnphysicsbody)

# SCNPhysicsBody (Swift)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The physics simulation attributes attached to a scene graph node.

## Declaration

```swift
class SCNPhysicsBody
```

<a id="overview"></a>

## Overview

When SceneKit prepares to render a new frame, it performs physics calculations on physics bodies attached to nodes in the scene. These calculations include gravity, friction, and collisions with other bodies. You can also apply your own forces and impulses to a body. After SceneKit completes these calculations, it updates the positions and orientations of the node objects before rendering the frame.

To add physics to a node, create and configure an [SCNPhysicsBody](scnphysicsbody.md) object and then assign it to the [physicsBody](scnnode/physicsbody.md) property of the [SCNNode](scnnode.md) object. A physics body must be associated with a node object before you apply forces or impulses to it.

<a id="A-Bodys-Physical-Characteristics"></a>

### A Body’s Physical Characteristics

The [SCNPhysicsBody](scnphysicsbody.md) class defines the physical characteristics for the body when it is simulated by the scene. Three properties are most important for physics simulation:

- The [type](scnphysicsbody/type.md) property, which determines how the body interacts with forces and other bodies in the simulation. *Static* bodies are unaffected by forces and collisions and cannot move. *Dynamic* bodies are affected by forces and collisions with other body types. *Kinematic* bodies are not affected by forces or collisions, but by moving them directly you can cause collisions that affect dynamic bodies.
- The [physicsShape](scnphysicsbody/physicsshape.md) property, which defines the three-dimensional form of the body for collision detection purposes. Physics simulations run faster when using simple shapes instead of the fine detail of a node’s visible geometry. Typically, you set a body’s physics shape to a bounding box, sphere, or primitive shape that roughly matches its node’s visible content. For details on creating physics shapes, see [SCNPhysicsShape](scnphysicsshape.md).
- The [kinematic()](scnphysicsbody/kinematic%28%29.md) property. Applying a force or torque to a dynamic body results in an acceleration (or angular acceleration) proportional to its mass.

All values in SceneKit’s physics simulation use the International System of Units (SI): The unit of mass is the kilogram; the units of force, impulse, and torque are the newton, newton-second, and newton-meter; and the unit of distance for node positions and sizes is the meter. Note that you need not attempt to provide realistic values for physical quantities—use whatever values produce the behavior or gameplay you’re looking for.

For a dynamic body, you can control how the body is affected by forces or collisions. See Defining How Forces Affect a Physics Body.

<a id="Defining-a-Bodys-Category-and-Collisions"></a>

### Defining a Body’s Category and Collisions

When you design a game that uses physics, you define the different categories of physics objects that appear in the scene. You define different categories of physics bodies for the behaviors your want for your app. A body can be assigned to as many of these categories as you want. In addition to declaring its own categories, a physics body also declares which categories of bodies it interacts with.

Use the [categoryBitMask](scnphysicsbody/categorybitmask.md) and [collisionBitMask](scnphysicsbody/collisionbitmask.md) properties to define an object’s collision behavior. The constants listed in [SCNPhysicsCollisionCategory](scnphysicscollisioncategory.md) provide default values for these properties. In addition, with the [contactTestBitMask](scnphysicsbody/contacttestbitmask.md) property you can define interactions where a pair of bodies generates contact messages (see the [SCNPhysicsContactDelegate](scnphysicscontactdelegate.md) protocol) without the bodies being affected by the collision.

<a id="Related-Physics-Classes"></a>

### Related Physics Classes

Physics fields create forces that affect all bodies in an area, such as vortices and gravitational attraction. For details and a list of available field types, see [SCNPhysicsField](scnphysicsfield.md).

You can add higher-level behaviors that control interactions between multiple bodies, such as joints and wheeled vehicles. For details and a list of available behaviors, see [SCNPhysicsBehavior](scnphysicsbehavior.md).

A scene’s [physicsWorld](scnscene/physicsworld.md) property holds an [SCNPhysicsWorld](scnphysicsworld.md) object that manages physics characteristics that affect the entire scene.

<a id="Physics-and-the-Rendering-Loop"></a>

### Physics and the Rendering Loop

SceneKit evaluates its physics simulation as part of the rendering loop described in [SCNSceneRendererDelegate](scnscenerendererdelegate.md). On each pass through this loop, SceneKit determines the state of all nodes with attached physics bodies, and simulates the effects of physics on those bodies for one time step—for example, by updating the position or rotation of a body based on its velocity and angular velocity. After simulating physics, SceneKit applies the results of the physics simulation to the scene for display.

Because you can animate SceneKit content not only through physics, but also through actions and implicitly and explicitly defined animations, SceneKit applies the results of physics simulation not to the [SCNNode](scnnode.md) objects in your scene, but to each node’s [presentation](scnnode/presentation.md) object that represents its currently displayed state. As such, changing properties of a node that are affected by physics  requires special consideration.

If you change the [transform](scnnode/transform.md) value—or any of the other properties that are components of the transform, such as [position](scnnode/position.md) and [rotation](scnnode/rotation.md)—of a node affected by physics, SceneKit resets the physics simulation for that node. If you want to change only one component of the transform, while leaving the others at their physics-simulated values, copy the presentation node’s transform before making changes, as shown below:

**Swift**

```swift
// Copy the presentation node's transform to the model node.
node.transform = node.presentationNode.transform
// Change one component of the new transform
node.eulerAngles.z = newRollValue
```

**Objective-C**

```objc
// Copy the presentation node's transform to the model node.
node.transform = node.presentationNode.transform;
// Change one component of the new transform
node.eulerAngles = SCNVector3Make(node.eulerAngles.x, node.eulerAngles.y, newRollValue);
```

## Topics

### Creating Physics Bodies

- [init(type:shape:)](scnphysicsbody/init%28type_shape_%29.md): Creates a physics body with the specified type and shape.
- [static()](scnphysicsbody/static%28%29.md): Creates a physics body that is unaffected by forces or collisions and that cannot move.
- [dynamic()](scnphysicsbody/dynamic%28%29.md): Creates a physics body that can be affected by forces and collisions.
- [kinematic()](scnphysicsbody/kinematic%28%29.md): Creates a physics body that is unaffected by forces or collisions but that can cause collisions affecting other bodies when moved.

### Defining How Forces Affect a Physics Body

- [physicsShape](scnphysicsbody/physicsshape.md): An object that defines the solid volume of the physics body for use in collision detection.
- [type](scnphysicsbody/type.md): A constant that determines how the physics body responds to forces and collisions.
- [SCNPhysicsBodyType](scnphysicsbodytype.md): Constants that determine how a physics body interacts with forces and other bodies, used by the [type](scnphysicsbody/type.md) property and when creating a physics body.
- [velocityFactor](scnphysicsbody/velocityfactor.md): A multiplier affecting how SceneKit applies translations computed by the physics simulation to the node containing the physics body.
- [angularVelocityFactor](scnphysicsbody/angularvelocityfactor.md): A multiplier affecting how SceneKit applies rotations computed by the physics simulation to the node containing the physics body.
- [isAffectedByGravity](scnphysicsbody/isaffectedbygravity.md): A Boolean value that determines whether the constant gravity of a scene accelerates the body.

### Defining a Body’s Physical Properties

- [mass](scnphysicsbody/mass.md): The mass of the body, in kilograms.
- [charge](scnphysicsbody/charge.md): The electric charge of the body, in coulombs.
- [friction](scnphysicsbody/friction.md): The body’s resistance to sliding motion.
- [rollingFriction](scnphysicsbody/rollingfriction.md): The body’s resistance to rolling motion.
- [restitution](scnphysicsbody/restitution.md): A factor that determines how much kinetic energy the body loses or gains in collisions.
- [damping](scnphysicsbody/damping.md): A factor that reduces the body’s linear velocity.
- [angularDamping](scnphysicsbody/angulardamping.md): A factor that reduces the body’s angular velocity.
- [momentOfInertia](scnphysicsbody/momentofinertia.md): The body’s moment of inertia, expressed in the local coordinate system of the node that contains the body.
- [usesDefaultMomentOfInertia](scnphysicsbody/usesdefaultmomentofinertia.md): A Boolean value that determines whether SceneKit automatically calculates the body’s moment of inertia or allows setting a custom value.
- [centerOfMassOffset](scnphysicsbody/centerofmassoffset.md): The position of the body’s center of mass relative to its local coordinate origin.

### Working with Contacts and Collisions

- [categoryBitMask](scnphysicsbody/categorybitmask.md): A mask that defines which categories this physics body belongs to.
- [contactTestBitMask](scnphysicsbody/contacttestbitmask.md): A mask that defines which categories of bodies cause intersection notifications with this physics body.
- [collisionBitMask](scnphysicsbody/collisionbitmask.md): A mask that defines which categories of physics bodies can collide with this physics body.
- [SCNPhysicsCollisionCategory](scnphysicscollisioncategory.md): Default values for a physics body’s [categoryBitMask](scnphysicsbody/categorybitmask.md) and [collisionBitMask](scnphysicsbody/collisionbitmask.md) properties.
- [continuousCollisionDetectionThreshold](scnphysicsbody/continuouscollisiondetectionthreshold.md): The minimum distance the body must travel for SceneKit to apply a more precise (but more costly) algorithm to detect contacts with other bodies.

### Applying Forces, Impulses, and Torques

- [applyForce(\_:asImpulse:)](scnphysicsbody/applyforce%28__asimpulse_%29.md): Applies a force or impulse to the body at its center of mass.
- [applyForce(\_:at:asImpulse:)](scnphysicsbody/applyforce%28__at_asimpulse_%29.md): Applies a force or impulse to the body at a specific point.
- [applyTorque(\_:asImpulse:)](scnphysicsbody/applytorque%28__asimpulse_%29.md): Applies a net torque or a change in angular momentum to the body.
- [clearAllForces()](scnphysicsbody/clearallforces%28%29.md): Cancels all continuous forces and torques acting on the physics body during the current simulation step.

### Interacting with Bodies in Motion

- [velocity](scnphysicsbody/velocity.md): A vector describing both the current speed (in meters per second) and direction of motion of the physics body.
- [angularVelocity](scnphysicsbody/angularvelocity.md): A vector describing both the current rotation axis and rotational speed (in radians per second) of the physics body.

### Defining When a Body Can Move

- [isResting](scnphysicsbody/isresting.md): A Boolean value that indicates whether the physics body is at rest.
- [allowsResting](scnphysicsbody/allowsresting.md): A Boolean value that specifies whether SceneKit can automatically mark the physics body at rest.
- [setResting(\_:)](scnphysicsbody/setresting%28__%29.md): Tells SceneKit whether to treat the body as currently being in motion.

### Synchronizing a Physics Body with its Node

- [resetTransform()](scnphysicsbody/resettransform%28%29.md): Updates the position and orientation of a body in the physics simulation to match that of the node to which the body is attached.

### Initializers

- [init(coder:)](scnphysicsbody/init%28coder_%29.md)

### Instance Properties

- [angularRestingThreshold](scnphysicsbody/angularrestingthreshold.md)
- [linearRestingThreshold](scnphysicsbody/linearrestingthreshold.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Physics Bodies

- [SCNPhysicsShape](scnphysicsshape.md): An abstraction of a physics body’s solid volume for tuning collision detection.

# SCNPhysicsBody (Objective-C)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The physics simulation attributes attached to a scene graph node.

## Declaration

```objectivec
@interface SCNPhysicsBody : NSObject
```

<a id="overview"></a>

## Overview

When SceneKit prepares to render a new frame, it performs physics calculations on physics bodies attached to nodes in the scene. These calculations include gravity, friction, and collisions with other bodies. You can also apply your own forces and impulses to a body. After SceneKit completes these calculations, it updates the positions and orientations of the node objects before rendering the frame.

To add physics to a node, create and configure an [SCNPhysicsBody](scnphysicsbody.md) object and then assign it to the [physicsBody](scnnode/physicsbody.md) property of the [SCNNode](scnnode.md) object. A physics body must be associated with a node object before you apply forces or impulses to it.

<a id="A-Bodys-Physical-Characteristics"></a>

### A Body’s Physical Characteristics

The [SCNPhysicsBody](scnphysicsbody.md) class defines the physical characteristics for the body when it is simulated by the scene. Three properties are most important for physics simulation:

- The [type](scnphysicsbody/type.md) property, which determines how the body interacts with forces and other bodies in the simulation. *Static* bodies are unaffected by forces and collisions and cannot move. *Dynamic* bodies are affected by forces and collisions with other body types. *Kinematic* bodies are not affected by forces or collisions, but by moving them directly you can cause collisions that affect dynamic bodies.
- The [physicsShape](scnphysicsbody/physicsshape.md) property, which defines the three-dimensional form of the body for collision detection purposes. Physics simulations run faster when using simple shapes instead of the fine detail of a node’s visible geometry. Typically, you set a body’s physics shape to a bounding box, sphere, or primitive shape that roughly matches its node’s visible content. For details on creating physics shapes, see [SCNPhysicsShape](scnphysicsshape.md).
- The [kinematicBody](scnphysicsbody/kinematic%28%29.md) property. Applying a force or torque to a dynamic body results in an acceleration (or angular acceleration) proportional to its mass.

All values in SceneKit’s physics simulation use the International System of Units (SI): The unit of mass is the kilogram; the units of force, impulse, and torque are the newton, newton-second, and newton-meter; and the unit of distance for node positions and sizes is the meter. Note that you need not attempt to provide realistic values for physical quantities—use whatever values produce the behavior or gameplay you’re looking for.

For a dynamic body, you can control how the body is affected by forces or collisions. See Defining How Forces Affect a Physics Body.

<a id="Defining-a-Bodys-Category-and-Collisions"></a>

### Defining a Body’s Category and Collisions

When you design a game that uses physics, you define the different categories of physics objects that appear in the scene. You define different categories of physics bodies for the behaviors your want for your app. A body can be assigned to as many of these categories as you want. In addition to declaring its own categories, a physics body also declares which categories of bodies it interacts with.

Use the [categoryBitMask](scnphysicsbody/categorybitmask.md) and [collisionBitMask](scnphysicsbody/collisionbitmask.md) properties to define an object’s collision behavior. The constants listed in [SCNPhysicsCollisionCategory](scnphysicscollisioncategory.md) provide default values for these properties. In addition, with the [contactTestBitMask](scnphysicsbody/contacttestbitmask.md) property you can define interactions where a pair of bodies generates contact messages (see the [SCNPhysicsContactDelegate](scnphysicscontactdelegate.md) protocol) without the bodies being affected by the collision.

<a id="Related-Physics-Classes"></a>

### Related Physics Classes

Physics fields create forces that affect all bodies in an area, such as vortices and gravitational attraction. For details and a list of available field types, see [SCNPhysicsField](scnphysicsfield.md).

You can add higher-level behaviors that control interactions between multiple bodies, such as joints and wheeled vehicles. For details and a list of available behaviors, see [SCNPhysicsBehavior](scnphysicsbehavior.md).

A scene’s [physicsWorld](scnscene/physicsworld.md) property holds an [SCNPhysicsWorld](scnphysicsworld.md) object that manages physics characteristics that affect the entire scene.

<a id="Physics-and-the-Rendering-Loop"></a>

### Physics and the Rendering Loop

SceneKit evaluates its physics simulation as part of the rendering loop described in [SCNSceneRendererDelegate](scnscenerendererdelegate.md). On each pass through this loop, SceneKit determines the state of all nodes with attached physics bodies, and simulates the effects of physics on those bodies for one time step—for example, by updating the position or rotation of a body based on its velocity and angular velocity. After simulating physics, SceneKit applies the results of the physics simulation to the scene for display.

Because you can animate SceneKit content not only through physics, but also through actions and implicitly and explicitly defined animations, SceneKit applies the results of physics simulation not to the [SCNNode](scnnode.md) objects in your scene, but to each node’s [presentationNode](scnnode/presentation.md) object that represents its currently displayed state. As such, changing properties of a node that are affected by physics  requires special consideration.

If you change the [transform](scnnode/transform.md) value—or any of the other properties that are components of the transform, such as [position](scnnode/position.md) and [rotation](scnnode/rotation.md)—of a node affected by physics, SceneKit resets the physics simulation for that node. If you want to change only one component of the transform, while leaving the others at their physics-simulated values, copy the presentation node’s transform before making changes, as shown below:

**Swift**

```swift
// Copy the presentation node's transform to the model node.
node.transform = node.presentationNode.transform
// Change one component of the new transform
node.eulerAngles.z = newRollValue
```

**Objective-C**

```objc
// Copy the presentation node's transform to the model node.
node.transform = node.presentationNode.transform;
// Change one component of the new transform
node.eulerAngles = SCNVector3Make(node.eulerAngles.x, node.eulerAngles.y, newRollValue);
```

## Topics

### Creating Physics Bodies

- [bodyWithType:shape:](scnphysicsbody/init%28type_shape_%29.md): Creates a physics body with the specified type and shape.
- [staticBody](scnphysicsbody/static%28%29.md): Creates a physics body that is unaffected by forces or collisions and that cannot move.
- [dynamicBody](scnphysicsbody/dynamic%28%29.md): Creates a physics body that can be affected by forces and collisions.
- [kinematicBody](scnphysicsbody/kinematic%28%29.md): Creates a physics body that is unaffected by forces or collisions but that can cause collisions affecting other bodies when moved.

### Defining How Forces Affect a Physics Body

- [physicsShape](scnphysicsbody/physicsshape.md): An object that defines the solid volume of the physics body for use in collision detection.
- [type](scnphysicsbody/type.md): A constant that determines how the physics body responds to forces and collisions.
- [SCNPhysicsBodyType](scnphysicsbodytype.md): Constants that determine how a physics body interacts with forces and other bodies, used by the [type](scnphysicsbody/type.md) property and when creating a physics body.
- [velocityFactor](scnphysicsbody/velocityfactor.md): A multiplier affecting how SceneKit applies translations computed by the physics simulation to the node containing the physics body.
- [angularVelocityFactor](scnphysicsbody/angularvelocityfactor.md): A multiplier affecting how SceneKit applies rotations computed by the physics simulation to the node containing the physics body.
- [affectedByGravity](scnphysicsbody/isaffectedbygravity.md): A Boolean value that determines whether the constant gravity of a scene accelerates the body.

### Defining a Body’s Physical Properties

- [mass](scnphysicsbody/mass.md): The mass of the body, in kilograms.
- [charge](scnphysicsbody/charge.md): The electric charge of the body, in coulombs.
- [friction](scnphysicsbody/friction.md): The body’s resistance to sliding motion.
- [rollingFriction](scnphysicsbody/rollingfriction.md): The body’s resistance to rolling motion.
- [restitution](scnphysicsbody/restitution.md): A factor that determines how much kinetic energy the body loses or gains in collisions.
- [damping](scnphysicsbody/damping.md): A factor that reduces the body’s linear velocity.
- [angularDamping](scnphysicsbody/angulardamping.md): A factor that reduces the body’s angular velocity.
- [momentOfInertia](scnphysicsbody/momentofinertia.md): The body’s moment of inertia, expressed in the local coordinate system of the node that contains the body.
- [usesDefaultMomentOfInertia](scnphysicsbody/usesdefaultmomentofinertia.md): A Boolean value that determines whether SceneKit automatically calculates the body’s moment of inertia or allows setting a custom value.
- [centerOfMassOffset](scnphysicsbody/centerofmassoffset.md): The position of the body’s center of mass relative to its local coordinate origin.

### Working with Contacts and Collisions

- [categoryBitMask](scnphysicsbody/categorybitmask.md): A mask that defines which categories this physics body belongs to.
- [contactTestBitMask](scnphysicsbody/contacttestbitmask.md): A mask that defines which categories of bodies cause intersection notifications with this physics body.
- [collisionBitMask](scnphysicsbody/collisionbitmask.md): A mask that defines which categories of physics bodies can collide with this physics body.
- [SCNPhysicsCollisionCategory](scnphysicscollisioncategory.md): Default values for a physics body’s [categoryBitMask](scnphysicsbody/categorybitmask.md) and [collisionBitMask](scnphysicsbody/collisionbitmask.md) properties.
- [continuousCollisionDetectionThreshold](scnphysicsbody/continuouscollisiondetectionthreshold.md): The minimum distance the body must travel for SceneKit to apply a more precise (but more costly) algorithm to detect contacts with other bodies.

### Applying Forces, Impulses, and Torques

- [applyForce:impulse:](scnphysicsbody/applyforce%28__asimpulse_%29.md): Applies a force or impulse to the body at its center of mass.
- [applyForce:atPosition:impulse:](scnphysicsbody/applyforce%28__at_asimpulse_%29.md): Applies a force or impulse to the body at a specific point.
- [applyTorque:impulse:](scnphysicsbody/applytorque%28__asimpulse_%29.md): Applies a net torque or a change in angular momentum to the body.
- [clearAllForces](scnphysicsbody/clearallforces%28%29.md): Cancels all continuous forces and torques acting on the physics body during the current simulation step.

### Interacting with Bodies in Motion

- [velocity](scnphysicsbody/velocity.md): A vector describing both the current speed (in meters per second) and direction of motion of the physics body.
- [angularVelocity](scnphysicsbody/angularvelocity.md): A vector describing both the current rotation axis and rotational speed (in radians per second) of the physics body.

### Defining When a Body Can Move

- [isResting](scnphysicsbody/isresting.md): A Boolean value that indicates whether the physics body is at rest.
- [allowsResting](scnphysicsbody/allowsresting.md): A Boolean value that specifies whether SceneKit can automatically mark the physics body at rest.
- [setResting:](scnphysicsbody/setresting%28__%29.md): Tells SceneKit whether to treat the body as currently being in motion.

### Synchronizing a Physics Body with its Node

- [resetTransform](scnphysicsbody/resettransform%28%29.md): Updates the position and orientation of a body in the physics simulation to match that of the node to which the body is attached.

### Instance Properties

- [angularRestingThreshold](scnphysicsbody/angularrestingthreshold.md)
- [linearRestingThreshold](scnphysicsbody/linearrestingthreshold.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Physics Bodies

- [SCNPhysicsShape](scnphysicsshape.md): An abstraction of a physics body’s solid volume for tuning collision detection.
