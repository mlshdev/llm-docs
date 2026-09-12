> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skphysicsbody](https://developer.apple.com/documentation/spritekit/skphysicsbody)

# SKPhysicsBody (Swift)

**Framework:** SpriteKit  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An object that adds physics simulation to a node.

## Declaration

```swift
class SKPhysicsBody
```

## Mentioned In

- [Getting Started with Physics](getting-started-with-physics.md)
- [Getting Started with Physics Bodies](getting-started-with-physics-bodies.md)
- [Responding to Frame-Cycle Events](responding-to-frame-cycle-events.md)

<a id="overview"></a>

## Overview

Assign a [SKPhysicsBody](skphysicsbody.md) object to the [physicsBody](sknode/physicsbody.md) property of the [SKNode](sknode.md) object to add physics simulation to the node. When a scene processes a new frame, it performs physics calculations on physics bodies attached to nodes in the scene. These calculations include gravity, friction, and collisions with other bodies. You can also apply your own forces and impulses to a body. After the scene completes these calculations, it updates the positions and orientations of the node objects.

> **Important**

>  A physics body must be associated with a node before you apply forces or impulses to it.

SpriteKit supports two kinds of physics bodies, *volume-based bodies* and *edge-based bodies*. When you create a physics body, its kind, size, and shape are determined by the constructor method you call. An edge-based body does not have mass or volume and is unaffected by forces or impulses in the system. Edge-based bodies are used to represent volumeless boundaries or hollow spaces in your physics simulation. In contrast, volume-based bodies are used to represent objects with mass and volume. The [isDynamic](skphysicsbody/isdynamic.md) property controls whether a volume-based body is affected by gravity, friction, collisions with other objects, and forces or impulses you directly apply to it.

The [SKPhysicsBody](skphysicsbody.md) class defines the physical characteristics for the body when it is simulated by the scene. For volume-based bodies, the most important property is the [mass](skphysicsbody/mass.md) property. A volume-based body is assumed to have a uniform density. You can either set the [mass](skphysicsbody/mass.md) property directly, or you can set the body’s [density](skphysicsbody/density.md) property and let the physics body calculate its own mass. All values in Sprite Kit are specified using the International System of Units (SI units). The actual forces and mass values are not important so long as your game uses consistent values.

When you design a game that uses physics, you define the different categories of physics objects that appear in the scene. You define up to 32 different categories of physics bodies, and a body can be assigned to as many of these categories as you want. In addition to declaring its own categories, a physics body also declares which categories of bodies it interacts with. See [SKPhysicsBody](skphysicsbody.md). You use a similar mechanism to declare which physics field nodes ([SKFieldNode](skfieldnode.md)) can affect the physics body.

For a volume-based body, you can dynamically control how the body is affected by forces or collisions. See [SKPhysicsBody](skphysicsbody.md).

## Topics

### First Steps

- [Getting Started with Physics Bodies](getting-started-with-physics-bodies.md): Create and assign a physics body to enable physics.

### Creating a Body from a Shape

- [init(circleOfRadius:)](skphysicsbody/init%28circleofradius_%29.md): Creates a circular physics body centered on the owning node’s origin.
- [init(circleOfRadius:center:)](skphysicsbody/init%28circleofradius_center_%29.md): Creates a circular physics body centered on an arbitrary point.
- [init(rectangleOf:)](skphysicsbody/init%28rectangleof_%29.md): Creates a rectangular physics body centered on the owning node’s origin.
- [init(rectangleOf:center:)](skphysicsbody/init%28rectangleof_center_%29.md): Creates a rectangular physics body centered on an arbitrary point.
- [init(polygonFrom:)](skphysicsbody/init%28polygonfrom_%29.md): Creates a polygonal physics body.

### Creating a Body from a Texture

- [Shaping a Physics Body to Match a Node’s Graphics](shaping-a-physics-body-to-match-a-node-s-graphics.md): Shape a physics body to your graphics for the right blend of collision accuracy and performance.
- [init(texture:size:)](skphysicsbody/init%28texture_size_%29.md): Creates a physics body from the contents of a texture.
- [init(texture:alphaThreshold:size:)](skphysicsbody/init%28texture_alphathreshold_size_%29.md): Creates a physics body from the contents of a texture, capturing only the texels that exceed a specified transparency value.

### Creating a Body from a Collection of Bodies

- [init(bodies:)](skphysicsbody/init%28bodies_%29.md): Creates a physics body that’s shaped like a union of the argument physics bodies.

### Creating an Edge-Based Physics Body

- [Creating an Edge Loop Around a Scene](creating-an-edge-loop-around-a-scene.md): Border your scene with an obstacle that physics bodies cannot penetrate.
- [init(edgeLoopFrom:)](skphysicsbody/init%28edgeloopfrom_%29-8sqfy.md): Creates an edge loop from a rectangle.
- [init(edgeFrom:to:)](skphysicsbody/init%28edgefrom_to_%29.md): Creates an edge between two points.
- [init(edgeLoopFrom:)](skphysicsbody/init%28edgeloopfrom_%29-5grxu.md): Creates an edge loop from a path.
- [init(edgeChainFrom:)](skphysicsbody/init%28edgechainfrom_%29.md): Creates an edge chain from a path.

### Defining How Forces Affect a Physics Body

- [affectedByGravity](skphysicsbody/affectedbygravity.md): A Boolean value that indicates whether this physics body is affected by the physics world’s gravity.
- [allowsRotation](skphysicsbody/allowsrotation.md): A Boolean value that indicates whether the physics body is affected by angular forces and impulses applied to it.
- [isDynamic](skphysicsbody/isdynamic.md): A Boolean value that indicates whether the physics body is moved by the physics simulation.

### Defining a Physics Body’s Physical Properties

- [Configuring a Physics Body](configuring-a-physics-body.md): Move a physics body, and make it collide with other objects, by setting its physical properties once or changing them dynamically.
- [mass](skphysicsbody/mass.md): The mass of the body, in kilograms.
- [density](skphysicsbody/density.md): The density of the object, in kilograms per square meter.
- [area](skphysicsbody/area.md): The area covered by the body.
- [friction](skphysicsbody/friction.md): The roughness of the surface of the physics body.
- [restitution](skphysicsbody/restitution.md): The bounciness of the physics body.
- [linearDamping](skphysicsbody/lineardamping.md): A property that reduces the body’s linear velocity.
- [angularDamping](skphysicsbody/angulardamping.md): A property that reduces the body’s rotational velocity.

### Working with Collisions and Contacts

- [About Collisions and Contacts](about-collisions-and-contacts.md): Learn how to set up nodes for collision detection.
- [categoryBitMask](skphysicsbody/categorybitmask.md): A mask that defines which categories this physics body belongs to.
- [collisionBitMask](skphysicsbody/collisionbitmask.md): A mask that defines which categories of physics bodies can collide with this physics body.
- [usesPreciseCollisionDetection](skphysicsbody/usesprecisecollisiondetection.md): A Boolean value that determines whether the physics world uses an iterative collision detection algorithm.
- [contactTestBitMask](skphysicsbody/contacttestbitmask.md): A mask that defines which categories of physics bodies cause intersection notifications with this physics body.
- [allContactedBodies()](skphysicsbody/allcontactedbodies%28%29.md): The physics bodies that this physics body is in contact with.

### Applying Forces and Impulses to a Physics Body

- [Making Physics Bodies Move](making-physics-bodies-move.md): Move a body using various physics properties, like velocity, gravity or impulses.
- [applyForce(\_:)](skphysicsbody/applyforce%28__%29.md): Applies a force to the center of gravity of a physics body.
- [applyTorque(\_:)](skphysicsbody/applytorque%28__%29.md): Applies torque to an object.
- [applyForce(\_:at:)](skphysicsbody/applyforce%28__at_%29.md): Applies a force to a specific point of a physics body.
- [applyImpulse(\_:)](skphysicsbody/applyimpulse%28__%29.md): Applies an impulse to the center of gravity of a physics body.
- [applyAngularImpulse(\_:)](skphysicsbody/applyangularimpulse%28__%29.md): Applies an impulse that imparts angular momentum to an object.
- [applyImpulse(\_:at:)](skphysicsbody/applyimpulse%28__at_%29.md): Applies an impulse to a specific point of a physics body.

### Inspecting a Physics Body’s Position and Velocity

- [velocity](skphysicsbody/velocity.md): The physics body’s velocity vector, measured in meters per second.
- [angularVelocity](skphysicsbody/angularvelocity.md): The physics body’s angular speed.
- [isResting](skphysicsbody/isresting.md): A Boolean property that indicates whether the object is at rest within the physics simulation.

### Reading a Physics Body’s Node

- [node](skphysicsbody/node.md): The node that this body is connected to.

### Determining Which Joints Are Connected to a Physics Body

- [joints](skphysicsbody/joints.md): The joints connected to this physics body.

### Interacting with Physics Fields

- [fieldBitMask](skphysicsbody/fieldbitmask.md): A mask that defines which categories of physics fields can exert forces on this physics body.
- [charge](skphysicsbody/charge.md): The electrical charge of the physics body.

### Pinning a Physics Body to a Node’s Parent

- [Pinning and Rotating Physics Bodies](pinning-and-rotating-physics-bodies.md): Pin a node so it’s free to rotate about a certain point on its parent node.
- [pinned](skphysicsbody/pinned.md): A Boolean value that indicates whether the physics body’s node is pinned to its parent node.

### Initializers

- [init(coder:)](skphysicsbody/init%28coder_%29.md)
- [init(edgeChainFromPath:)](skphysicsbody/init%28edgechainfrompath_%29.md)
- [init(edgeFromPoint:toPoint:)](skphysicsbody/init%28edgefrompoint_topoint_%29.md)
- [init(edgeLoopFromPath:)](skphysicsbody/init%28edgeloopfrompath_%29.md)
- [init(edgeLoopFromRect:)](skphysicsbody/init%28edgeloopfromrect_%29.md)
- [init(polygonFromPath:)](skphysicsbody/init%28polygonfrompath_%29.md)
- [init(rectangleOfSize:)](skphysicsbody/init%28rectangleofsize_%29.md)
- [init(rectangleOfSize:center:)](skphysicsbody/init%28rectangleofsize_center_%29.md)

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

### Physics Simulation

- [Getting Started with Physics](getting-started-with-physics.md): Simulate gravity, acceleration, collision detection, or joints.
- [SKPhysicsWorld](skphysicsworld.md): The driver of the physics engine in a scene; it exposes the ability for you to configure and query the physics system.
- [SKPhysicsContact](skphysicscontact.md): A description of the contact between two physics bodies.
- [SKPhysicsContactDelegate](skphysicscontactdelegate.md): Methods your app can implement to respond when physics bodies come into contact.
- [SKFieldNode](skfieldnode.md): A node that applies physics effects to nearby nodes.

# SKPhysicsBody (Objective-C)

**Framework:** SpriteKit  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An object that adds physics simulation to a node.

## Declaration

```objectivec
@interface SKPhysicsBody : NSObject
```

## Mentioned In

- [Getting Started with Physics](getting-started-with-physics.md)
- [Getting Started with Physics Bodies](getting-started-with-physics-bodies.md)
- [Responding to Frame-Cycle Events](responding-to-frame-cycle-events.md)

<a id="overview"></a>

## Overview

Assign a [SKPhysicsBody](skphysicsbody.md) object to the [physicsBody](sknode/physicsbody.md) property of the [SKNode](sknode.md) object to add physics simulation to the node. When a scene processes a new frame, it performs physics calculations on physics bodies attached to nodes in the scene. These calculations include gravity, friction, and collisions with other bodies. You can also apply your own forces and impulses to a body. After the scene completes these calculations, it updates the positions and orientations of the node objects.

> **Important**

>  A physics body must be associated with a node before you apply forces or impulses to it.

SpriteKit supports two kinds of physics bodies, *volume-based bodies* and *edge-based bodies*. When you create a physics body, its kind, size, and shape are determined by the constructor method you call. An edge-based body does not have mass or volume and is unaffected by forces or impulses in the system. Edge-based bodies are used to represent volumeless boundaries or hollow spaces in your physics simulation. In contrast, volume-based bodies are used to represent objects with mass and volume. The [dynamic](skphysicsbody/isdynamic.md) property controls whether a volume-based body is affected by gravity, friction, collisions with other objects, and forces or impulses you directly apply to it.

The [SKPhysicsBody](skphysicsbody.md) class defines the physical characteristics for the body when it is simulated by the scene. For volume-based bodies, the most important property is the [mass](skphysicsbody/mass.md) property. A volume-based body is assumed to have a uniform density. You can either set the [mass](skphysicsbody/mass.md) property directly, or you can set the body’s [density](skphysicsbody/density.md) property and let the physics body calculate its own mass. All values in Sprite Kit are specified using the International System of Units (SI units). The actual forces and mass values are not important so long as your game uses consistent values.

When you design a game that uses physics, you define the different categories of physics objects that appear in the scene. You define up to 32 different categories of physics bodies, and a body can be assigned to as many of these categories as you want. In addition to declaring its own categories, a physics body also declares which categories of bodies it interacts with. See [SKPhysicsBody](skphysicsbody.md). You use a similar mechanism to declare which physics field nodes ([SKFieldNode](skfieldnode.md)) can affect the physics body.

For a volume-based body, you can dynamically control how the body is affected by forces or collisions. See [SKPhysicsBody](skphysicsbody.md).

## Topics

### First Steps

- [Getting Started with Physics Bodies](getting-started-with-physics-bodies.md): Create and assign a physics body to enable physics.

### Creating a Body from a Shape

- [bodyWithCircleOfRadius:](skphysicsbody/init%28circleofradius_%29.md): Creates a circular physics body centered on the owning node’s origin.
- [bodyWithCircleOfRadius:center:](skphysicsbody/init%28circleofradius_center_%29.md): Creates a circular physics body centered on an arbitrary point.
- [bodyWithRectangleOfSize:](skphysicsbody/init%28rectangleof_%29.md): Creates a rectangular physics body centered on the owning node’s origin.
- [bodyWithRectangleOfSize:center:](skphysicsbody/init%28rectangleof_center_%29.md): Creates a rectangular physics body centered on an arbitrary point.
- [bodyWithPolygonFromPath:](skphysicsbody/init%28polygonfrom_%29.md): Creates a polygonal physics body.

### Creating a Body from a Texture

- [Shaping a Physics Body to Match a Node’s Graphics](shaping-a-physics-body-to-match-a-node-s-graphics.md): Shape a physics body to your graphics for the right blend of collision accuracy and performance.
- [bodyWithTexture:size:](skphysicsbody/init%28texture_size_%29.md): Creates a physics body from the contents of a texture.
- [bodyWithTexture:alphaThreshold:size:](skphysicsbody/init%28texture_alphathreshold_size_%29.md): Creates a physics body from the contents of a texture, capturing only the texels that exceed a specified transparency value.

### Creating a Body from a Collection of Bodies

- [bodyWithBodies:](skphysicsbody/init%28bodies_%29.md): Creates a physics body that’s shaped like a union of the argument physics bodies.

### Creating an Edge-Based Physics Body

- [Creating an Edge Loop Around a Scene](creating-an-edge-loop-around-a-scene.md): Border your scene with an obstacle that physics bodies cannot penetrate.
- [bodyWithEdgeLoopFromRect:](skphysicsbody/init%28edgeloopfrom_%29-8sqfy.md): Creates an edge loop from a rectangle.
- [bodyWithEdgeFromPoint:toPoint:](skphysicsbody/init%28edgefrom_to_%29.md): Creates an edge between two points.
- [bodyWithEdgeLoopFromPath:](skphysicsbody/init%28edgeloopfrom_%29-5grxu.md): Creates an edge loop from a path.
- [bodyWithEdgeChainFromPath:](skphysicsbody/init%28edgechainfrom_%29.md): Creates an edge chain from a path.

### Defining How Forces Affect a Physics Body

- [affectedByGravity](skphysicsbody/affectedbygravity.md): A Boolean value that indicates whether this physics body is affected by the physics world’s gravity.
- [allowsRotation](skphysicsbody/allowsrotation.md): A Boolean value that indicates whether the physics body is affected by angular forces and impulses applied to it.
- [dynamic](skphysicsbody/isdynamic.md): A Boolean value that indicates whether the physics body is moved by the physics simulation.

### Defining a Physics Body’s Physical Properties

- [Configuring a Physics Body](configuring-a-physics-body.md): Move a physics body, and make it collide with other objects, by setting its physical properties once or changing them dynamically.
- [mass](skphysicsbody/mass.md): The mass of the body, in kilograms.
- [density](skphysicsbody/density.md): The density of the object, in kilograms per square meter.
- [area](skphysicsbody/area.md): The area covered by the body.
- [friction](skphysicsbody/friction.md): The roughness of the surface of the physics body.
- [restitution](skphysicsbody/restitution.md): The bounciness of the physics body.
- [linearDamping](skphysicsbody/lineardamping.md): A property that reduces the body’s linear velocity.
- [angularDamping](skphysicsbody/angulardamping.md): A property that reduces the body’s rotational velocity.

### Working with Collisions and Contacts

- [About Collisions and Contacts](about-collisions-and-contacts.md): Learn how to set up nodes for collision detection.
- [categoryBitMask](skphysicsbody/categorybitmask.md): A mask that defines which categories this physics body belongs to.
- [collisionBitMask](skphysicsbody/collisionbitmask.md): A mask that defines which categories of physics bodies can collide with this physics body.
- [usesPreciseCollisionDetection](skphysicsbody/usesprecisecollisiondetection.md): A Boolean value that determines whether the physics world uses an iterative collision detection algorithm.
- [contactTestBitMask](skphysicsbody/contacttestbitmask.md): A mask that defines which categories of physics bodies cause intersection notifications with this physics body.
- [allContactedBodies](skphysicsbody/allcontactedbodies%28%29.md): The physics bodies that this physics body is in contact with.

### Applying Forces and Impulses to a Physics Body

- [Making Physics Bodies Move](making-physics-bodies-move.md): Move a body using various physics properties, like velocity, gravity or impulses.
- [applyForce:](skphysicsbody/applyforce%28__%29.md): Applies a force to the center of gravity of a physics body.
- [applyTorque:](skphysicsbody/applytorque%28__%29.md): Applies torque to an object.
- [applyForce:atPoint:](skphysicsbody/applyforce%28__at_%29.md): Applies a force to a specific point of a physics body.
- [applyImpulse:](skphysicsbody/applyimpulse%28__%29.md): Applies an impulse to the center of gravity of a physics body.
- [applyAngularImpulse:](skphysicsbody/applyangularimpulse%28__%29.md): Applies an impulse that imparts angular momentum to an object.
- [applyImpulse:atPoint:](skphysicsbody/applyimpulse%28__at_%29.md): Applies an impulse to a specific point of a physics body.

### Inspecting a Physics Body’s Position and Velocity

- [velocity](skphysicsbody/velocity.md): The physics body’s velocity vector, measured in meters per second.
- [angularVelocity](skphysicsbody/angularvelocity.md): The physics body’s angular speed.
- [resting](skphysicsbody/isresting.md): A Boolean property that indicates whether the object is at rest within the physics simulation.

### Reading a Physics Body’s Node

- [node](skphysicsbody/node.md): The node that this body is connected to.

### Determining Which Joints Are Connected to a Physics Body

- [joints](skphysicsbody/joints.md): The joints connected to this physics body.

### Interacting with Physics Fields

- [fieldBitMask](skphysicsbody/fieldbitmask.md): A mask that defines which categories of physics fields can exert forces on this physics body.
- [charge](skphysicsbody/charge.md): The electrical charge of the physics body.

### Pinning a Physics Body to a Node’s Parent

- [Pinning and Rotating Physics Bodies](pinning-and-rotating-physics-bodies.md): Pin a node so it’s free to rotate about a certain point on its parent node.
- [pinned](skphysicsbody/pinned.md): A Boolean value that indicates whether the physics body’s node is pinned to its parent node.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Physics Simulation

- [Getting Started with Physics](getting-started-with-physics.md): Simulate gravity, acceleration, collision detection, or joints.
- [SKPhysicsWorld](skphysicsworld.md): The driver of the physics engine in a scene; it exposes the ability for you to configure and query the physics system.
- [SKPhysicsContact](skphysicscontact.md): A description of the contact between two physics bodies.
- [SKPhysicsContactDelegate](skphysicscontactdelegate.md): Methods your app can implement to respond when physics bodies come into contact.
- [SKFieldNode](skfieldnode.md): A node that applies physics effects to nearby nodes.
