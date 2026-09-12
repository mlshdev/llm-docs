> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entity/movecharacter(by:deltatime:relativeto:collisionhandler:)](https://developer.apple.com/documentation/realitykit/entity/movecharacter(by:deltatime:relativeto:collisionhandler:))

# moveCharacter(by:deltaTime:relativeTo:collisionHandler:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

Moves the character along a specified vector over a period of time.

## Declaration

```swift
@discardableResult @MainActor @preconcurrency func moveCharacter(by moveDelta: SIMD3<Float>, deltaTime: Float, relativeTo referenceEntity: Entity?, collisionHandler: ((CharacterControllerComponent.Collision) -> Void)? = nil) -> CharacterControllerComponent.CollisionFlags
```

## Parameters

- `moveDelta`: Delta vector to attempt to move capsule in collision world.
- `deltaTime`: Time between last frame and current.
- `referenceEntity`: Reference entity that defines the frame of reference of the move delta. Can be `nil`, which is equivalent to “world space”.
- `collisionHandler`: Optional callback when an entity was hit. One call per each hit entity.

<a id="return-value"></a>

## Return Value

Collision flags that indicate the location of the collision.

<a id="discussion"></a>

## Discussion

Moves the character in the collision world, with continuous collision checking and response. This will create character collision events. Entity.transform will be updated on the next engine tick. Use `CharacterControllerStateComponent` to get additional information about the state of the character after the move.

## See Also

### Animating and controlling characters

- [characterController](charactercontroller.md): The character controller component for the entity.
- [characterControllerState](charactercontrollerstate.md): The character controller state for the entity.
- [teleportCharacter(to:relativeTo:)](teleportcharacter%28to_relativeto_%29.md): Moves the character instantly to a new position.
