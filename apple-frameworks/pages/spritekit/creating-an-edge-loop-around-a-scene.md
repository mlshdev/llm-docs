> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/creating-an-edge-loop-around-a-scene](https://developer.apple.com/documentation/spritekit/creating-an-edge-loop-around-a-scene)

# Creating an Edge Loop Around a Scene (Swift)

**Framework:** SpriteKit  
**Kind:** Article

Border your scene with an obstacle that physics bodies cannot penetrate.

<a id="overview"></a>

## Overview

When you want to confine your in-app objects to a specific region, use an edge-based physics body to define the area. In an app that models a pool table, for example, the balls are the in-app objects, and the table edges collectively create an *edge loop*. The following code demonstrates creating an edge loop to implement an impenetrable boundary that extends from edge to edge in the scene.

**Swift**

```swift
func createSceneContents() {
    self.backgroundColor = .black
    self.scaleMode = .aspectFit
    self.physicsBody = SKPhysicsBody(edgeLoopFrom: self.frame)
}
```

**Obj-C**

```objc
- (void) createSceneContents
{
    self.backgroundColor = [SKColor blackColor];
    self.scaleMode = SKSceneScaleModeAspectFit;
    self.physicsBody = [SKPhysicsBody bodyWithEdgeLoopFromRect:self.frame];
}
```

## See Also

### Creating an Edge-Based Physics Body

- [init(edgeLoopFrom:)](skphysicsbody/init%28edgeloopfrom_%29-8sqfy.md): Creates an edge loop from a rectangle.
- [init(edgeFrom:to:)](skphysicsbody/init%28edgefrom_to_%29.md): Creates an edge between two points.
- [init(edgeLoopFrom:)](skphysicsbody/init%28edgeloopfrom_%29-5grxu.md): Creates an edge loop from a path.
- [init(edgeChainFrom:)](skphysicsbody/init%28edgechainfrom_%29.md): Creates an edge chain from a path.

# Creating an Edge Loop Around a Scene (Objective-C)

**Framework:** SpriteKit  
**Kind:** Article

Border your scene with an obstacle that physics bodies cannot penetrate.

<a id="overview"></a>

## Overview

When you want to confine your in-app objects to a specific region, use an edge-based physics body to define the area. In an app that models a pool table, for example, the balls are the in-app objects, and the table edges collectively create an *edge loop*. The following code demonstrates creating an edge loop to implement an impenetrable boundary that extends from edge to edge in the scene.

**Swift**

```swift
func createSceneContents() {
    self.backgroundColor = .black
    self.scaleMode = .aspectFit
    self.physicsBody = SKPhysicsBody(edgeLoopFrom: self.frame)
}
```

**Obj-C**

```objc
- (void) createSceneContents
{
    self.backgroundColor = [SKColor blackColor];
    self.scaleMode = SKSceneScaleModeAspectFit;
    self.physicsBody = [SKPhysicsBody bodyWithEdgeLoopFromRect:self.frame];
}
```

## See Also

### Creating an Edge-Based Physics Body

- [bodyWithEdgeLoopFromRect:](skphysicsbody/init%28edgeloopfrom_%29-8sqfy.md): Creates an edge loop from a rectangle.
- [bodyWithEdgeFromPoint:toPoint:](skphysicsbody/init%28edgefrom_to_%29.md): Creates an edge between two points.
- [bodyWithEdgeLoopFromPath:](skphysicsbody/init%28edgeloopfrom_%29-5grxu.md): Creates an edge loop from a path.
- [bodyWithEdgeChainFromPath:](skphysicsbody/init%28edgechainfrom_%29.md): Creates an edge chain from a path.
