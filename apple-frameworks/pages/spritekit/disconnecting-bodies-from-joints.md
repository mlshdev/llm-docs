> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/disconnecting-bodies-from-joints](https://developer.apple.com/documentation/spritekit/disconnecting-bodies-from-joints)

# Disconnecting Bodies from Joints (Swift)

**Framework:** SpriteKit  
**Kind:** Article

Disconnect joints from nodes in your scene.

<a id="overview"></a>

## Overview

You can use the [SKPhysicsWorld](skphysicsworld.md) method [remove(\_:)](skphysicsworld/remove%28__%29.md) to remove joints from a simulation. By making use of the [update(\_:for:)](skscenedelegate/update%28__for_%29.md) method of the [SKSceneDelegate](skscenedelegate.md), you can interrogate joint properties, such as the distance between the two connected bodies.

The following code shows an example. Each time a new spring joint is created, it is also added to an array named `springs` of type `[SKPhysicsJointSpring]`. With each simulation step, every spring is evaluated. If the distance between the two connected bodies is greater than `maxSpringDistance`, the spring is removed from both the physics world and the array.

```swift
var springs: [SKPhysicsJointSpring] = []
let maxSpringDistance: CGFloat = 31

// Each `scene.physicsWorld.add(spring)` is accompanied by `springs.append(spring)`

func update(_ currentTime: TimeInterval, for scene: SKScene) {
	for spring in springs {
		if let bodyAPosition = spring.bodyA.node?.position,
		let bodyBPosition = spring.bodyB.node?.position {
		let distance = hypot(bodyAPosition.x - bodyBPosition.x,
			bodyAPosition.y - bodyBPosition.y)
		if distance > maxSpringDistance {
			scene.physicsWorld.remove(spring)
			if let index = springs.index(of: spring) {
				springs.remove(at: index)
			}
		}
	}
}}
```

# Disconnecting Bodies from Joints (Objective-C)

**Framework:** SpriteKit  
**Kind:** Article

Disconnect joints from nodes in your scene.

<a id="overview"></a>

## Overview

You can use the [SKPhysicsWorld](skphysicsworld.md) method [removeJoint:](skphysicsworld/remove%28__%29.md) to remove joints from a simulation. By making use of the [update:forScene:](skscenedelegate/update%28__for_%29.md) method of the [SKSceneDelegate](skscenedelegate.md), you can interrogate joint properties, such as the distance between the two connected bodies.

The following code shows an example. Each time a new spring joint is created, it is also added to an array named `springs` of type `[SKPhysicsJointSpring]`. With each simulation step, every spring is evaluated. If the distance between the two connected bodies is greater than `maxSpringDistance`, the spring is removed from both the physics world and the array.

```swift
var springs: [SKPhysicsJointSpring] = []
let maxSpringDistance: CGFloat = 31

// Each `scene.physicsWorld.add(spring)` is accompanied by `springs.append(spring)`

func update(_ currentTime: TimeInterval, for scene: SKScene) {
	for spring in springs {
		if let bodyAPosition = spring.bodyA.node?.position,
		let bodyBPosition = spring.bodyB.node?.position {
		let distance = hypot(bodyAPosition.x - bodyBPosition.x,
			bodyAPosition.y - bodyBPosition.y)
		if distance > maxSpringDistance {
			scene.physicsWorld.remove(spring)
			if let index = springs.index(of: spring) {
				springs.remove(at: index)
			}
		}
	}
}}
```
