> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/entity/charactercontroller

# characterController

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

The character controller component for the entity.

## Declaration

```swift
@MainActor @preconcurrency var characterController: CharacterControllerComponent? { get set }
```

## See Also

### Animating and controlling characters

- [characterControllerState](charactercontrollerstate.md): The character controller state for the entity.
- [moveCharacter(by:deltaTime:relativeTo:collisionHandler:)](movecharacter%28by_deltatime_relativeto_collisionhandler_%29.md): Moves the character along a specified vector over a period of time.
- [teleportCharacter(to:relativeTo:)](teleportcharacter%28to_relativeto_%29.md): Moves the character instantly to a new position.
