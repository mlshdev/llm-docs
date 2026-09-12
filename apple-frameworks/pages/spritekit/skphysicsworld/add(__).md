> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skphysicsworld/add(_:)](https://developer.apple.com/documentation/spritekit/skphysicsworld/add(_:))

# add(\_:) (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Adds a joint to the physics world.

## Declaration

```swift
func add(_ joint: SKPhysicsJoint)
```

## Parameters

- `joint`: The joint to add.

## Mentioned In

- [Connecting Bodies with Joints](../connecting-bodies-with-joints.md)

<a id="Discussion"></a>

## Discussion

For a joint to take effect, it must be added to the physics world.

## See Also

### Joining Physics Bodies with Joints

- [removeAllJoints()](removealljoints%28%29.md): Removes all joints from the physics world.
- [remove(\_:)](remove%28__%29.md): Removes a specific joint from the physics world.

# addJoint: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Adds a joint to the physics world.

## Declaration

```objectivec
- (void) addJoint:(SKPhysicsJoint *) joint;
```

## Parameters

- `joint`: The joint to add.

## Mentioned In

- [Connecting Bodies with Joints](../connecting-bodies-with-joints.md)

<a id="Discussion"></a>

## Discussion

For a joint to take effect, it must be added to the physics world.

## See Also

### Joining Physics Bodies with Joints

- [removeAllJoints](removealljoints%28%29.md): Removes all joints from the physics world.
- [removeJoint:](remove%28__%29.md): Removes a specific joint from the physics world.
