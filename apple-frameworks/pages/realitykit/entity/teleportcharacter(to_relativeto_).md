> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entity/teleportcharacter(to:relativeto:)](https://developer.apple.com/documentation/realitykit/entity/teleportcharacter(to:relativeto:))

# teleportCharacter(to:relativeTo:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

Moves the character instantly to a new position.

## Declaration

```swift
@MainActor @preconcurrency func teleportCharacter(to position: SIMD3<Float>, relativeTo referenceEntity: Entity?)
```

## Parameters

- `position`: The position to move the character to, relative to `referenceEntity`.
- `referenceEntity`: The entity that defines a frame of reference. Set this to `nil` to indicate world space.

<a id="discussion"></a>

## Discussion

This method moves the character to a location specified relative to another entity. Pass `nil` in `relativeTo` to specify a position in world coordinates. A teleport move happens instantly. RealityKit does no collision checking when it moves the entity.

## See Also

### Animating and controlling characters

- [characterController](charactercontroller.md): The character controller component for the entity.
- [characterControllerState](charactercontrollerstate.md): The character controller state for the entity.
- [moveCharacter(by:deltaTime:relativeTo:collisionHandler:)](movecharacter%28by_deltatime_relativeto_collisionhandler_%29.md): Moves the character along a specified vector over a period of time.
