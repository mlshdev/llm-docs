> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/spritekit/skphysicsworld/remove(_:)

# remove(\_:) (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Removes a specific joint from the physics world.

## Declaration

```swift
func remove(_ joint: SKPhysicsJoint)
```

## Parameters

- `joint`: The joint to remove.

## Mentioned In

- [Disconnecting Bodies from Joints](../disconnecting-bodies-from-joints.md)

## See Also

### Joining Physics Bodies with Joints

- [add(\_:)](add%28__%29.md): Adds a joint to the physics world.
- [removeAllJoints()](removealljoints%28%29.md): Removes all joints from the physics world.

# removeJoint: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Removes a specific joint from the physics world.

## Declaration

```objectivec
- (void) removeJoint:(SKPhysicsJoint *) joint;
```

## Parameters

- `joint`: The joint to remove.

## Mentioned In

- [Disconnecting Bodies from Joints](../disconnecting-bodies-from-joints.md)

## See Also

### Joining Physics Bodies with Joints

- [addJoint:](add%28__%29.md): Adds a joint to the physics world.
- [removeAllJoints](removealljoints%28%29.md): Removes all joints from the physics world.
