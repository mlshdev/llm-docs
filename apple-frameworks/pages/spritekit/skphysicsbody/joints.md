> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/spritekit/skphysicsbody/joints

# joints (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The joints connected to this physics body.

## Declaration

```swift
var joints: [SKPhysicsJoint] { get }
```

<a id="Discussion"></a>

## Discussion

This property holds an array of [SKPhysicsJoint](../skphysicsjoint.md) objects that define all joints added to the scene’s physics world that are connected to this physics body.

# joints (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The joints connected to this physics body.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<SKPhysicsJoint *> * joints;
```

<a id="Discussion"></a>

## Discussion

This property holds an array of [SKPhysicsJoint](../skphysicsjoint.md) objects that define all joints added to the scene’s physics world that are connected to this physics body.
