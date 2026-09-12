> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skphysicscontactdelegate](https://developer.apple.com/documentation/spritekit/skphysicscontactdelegate)

# SKPhysicsContactDelegate (Swift)

**Framework:** SpriteKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Methods your app can implement to respond when physics bodies come into contact.

## Declaration

```swift
protocol SKPhysicsContactDelegate : NSObjectProtocol
```

## Mentioned In

- [Getting Started with Physics](getting-started-with-physics.md)
- [Responding to Frame-Cycle Events](responding-to-frame-cycle-events.md)

<a id="overview"></a>

## Overview

An object that implements the [SKPhysicsContactDelegate](skphysicscontactdelegate.md) protocol can respond when two physics bodies with overlapping [contactTestBitMask](skphysicsbody/contacttestbitmask.md) values are in contact with each other in a physics world. To receive contact messages, you set the [contactDelegate](skphysicsworld/contactdelegate.md) property of a [SKPhysicsWorld](skphysicsworld.md) object. The delegate is called when a contact starts or ends.

> **Important**

>  The physics contact delegate methods are called during the physics simulation step. During that time, the physics world can’t be modified and the behavior of any changes to the physics bodies in the simulation is undefined. If you need to make such changes, set a flag inside [didBegin(\_:)](skphysicscontactdelegate/didbegin%28__%29.md) or [didEnd(\_:)](skphysicscontactdelegate/didend%28__%29.md) and make changes in response to that flag in the [update(\_:for:)](skscenedelegate/update%28__for_%29.md) method in a [SKSceneDelegate](skscenedelegate.md).

You can use the contact delegate to play a sound or execute game logic, such as increasing a player’s score, when a contact event occurs. The following code shows how to display a shockwave effect when two nodes with the name `ball` come into contact. The code only creates the effect when the collision impulse is above a specified threshold:

Listing 1. Creating a shockwave effect when objects come into contact

```swift
let shockWaveAction: SKAction = {
    let growAndFadeAction = SKAction.group([SKAction.scale(to: 50, duration: 0.5),
                                            SKAction.fadeOut(withDuration: 0.5)])
    
    let sequence = SKAction.sequence([growAndFadeAction,
                                      SKAction.removeFromParent()])
    
    return sequence
}()

func didBegin(_ contact: SKPhysicsContact) {
    if contact.collisionImpulse > 5 &&
        contact.bodyA.node?.name == "ball" &&
        contact.bodyB.node?.name == "ball" {
        
        let shockwave = SKShapeNode(circleOfRadius: 1)

        shockwave.position = contact.contactPoint
        scene.addChild(shockwave)
        
        shockwave.run(shockWaveAction)
    }
}
```

## Topics

### Responding to Contact Events

- [didBegin(\_:)](skphysicscontactdelegate/didbegin%28__%29.md): Called when two bodies first contact each other.
- [didEnd(\_:)](skphysicscontactdelegate/didend%28__%29.md): Called when the contact ends between two physics bodies.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Physics Simulation

- [Getting Started with Physics](getting-started-with-physics.md): Simulate gravity, acceleration, collision detection, or joints.
- [SKPhysicsWorld](skphysicsworld.md): The driver of the physics engine in a scene; it exposes the ability for you to configure and query the physics system.
- [SKPhysicsBody](skphysicsbody.md): An object that adds physics simulation to a node.
- [SKPhysicsContact](skphysicscontact.md): A description of the contact between two physics bodies.
- [SKFieldNode](skfieldnode.md): A node that applies physics effects to nearby nodes.

# SKPhysicsContactDelegate (Objective-C)

**Framework:** SpriteKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Methods your app can implement to respond when physics bodies come into contact.

## Declaration

```objectivec
@protocol SKPhysicsContactDelegate <NSObject>
```

## Mentioned In

- [Getting Started with Physics](getting-started-with-physics.md)
- [Responding to Frame-Cycle Events](responding-to-frame-cycle-events.md)

<a id="overview"></a>

## Overview

An object that implements the [SKPhysicsContactDelegate](skphysicscontactdelegate.md) protocol can respond when two physics bodies with overlapping [contactTestBitMask](skphysicsbody/contacttestbitmask.md) values are in contact with each other in a physics world. To receive contact messages, you set the [contactDelegate](skphysicsworld/contactdelegate.md) property of a [SKPhysicsWorld](skphysicsworld.md) object. The delegate is called when a contact starts or ends.

> **Important**

>  The physics contact delegate methods are called during the physics simulation step. During that time, the physics world can’t be modified and the behavior of any changes to the physics bodies in the simulation is undefined. If you need to make such changes, set a flag inside [didBeginContact:](skphysicscontactdelegate/didbegin%28__%29.md) or [didEndContact:](skphysicscontactdelegate/didend%28__%29.md) and make changes in response to that flag in the [update:forScene:](skscenedelegate/update%28__for_%29.md) method in a [SKSceneDelegate](skscenedelegate.md).

You can use the contact delegate to play a sound or execute game logic, such as increasing a player’s score, when a contact event occurs. The following code shows how to display a shockwave effect when two nodes with the name `ball` come into contact. The code only creates the effect when the collision impulse is above a specified threshold:

Listing 1. Creating a shockwave effect when objects come into contact

```swift
let shockWaveAction: SKAction = {
    let growAndFadeAction = SKAction.group([SKAction.scale(to: 50, duration: 0.5),
                                            SKAction.fadeOut(withDuration: 0.5)])
    
    let sequence = SKAction.sequence([growAndFadeAction,
                                      SKAction.removeFromParent()])
    
    return sequence
}()

func didBegin(_ contact: SKPhysicsContact) {
    if contact.collisionImpulse > 5 &&
        contact.bodyA.node?.name == "ball" &&
        contact.bodyB.node?.name == "ball" {
        
        let shockwave = SKShapeNode(circleOfRadius: 1)

        shockwave.position = contact.contactPoint
        scene.addChild(shockwave)
        
        shockwave.run(shockWaveAction)
    }
}
```

## Topics

### Responding to Contact Events

- [didBeginContact:](skphysicscontactdelegate/didbegin%28__%29.md): Called when two bodies first contact each other.
- [didEndContact:](skphysicscontactdelegate/didend%28__%29.md): Called when the contact ends between two physics bodies.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Physics Simulation

- [Getting Started with Physics](getting-started-with-physics.md): Simulate gravity, acceleration, collision detection, or joints.
- [SKPhysicsWorld](skphysicsworld.md): The driver of the physics engine in a scene; it exposes the ability for you to configure and query the physics system.
- [SKPhysicsBody](skphysicsbody.md): An object that adds physics simulation to a node.
- [SKPhysicsContact](skphysicscontact.md): A description of the contact between two physics bodies.
- [SKFieldNode](skfieldnode.md): A node that applies physics effects to nearby nodes.
