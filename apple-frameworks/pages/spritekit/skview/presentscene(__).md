> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skview/presentscene(_:)](https://developer.apple.com/documentation/spritekit/skview/presentscene(_:))

# presentScene(\_:) (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Presents a scene.

## Declaration

```swift
func presentScene(_ scene: SKScene?)
```

## Parameters

- `scene`: The scene to present.

## Mentioned In

- [Drawing SpriteKit Content in a View](../drawing-spritekit-content-in-a-view.md)
- [Responding to Frame-Cycle Events](../responding-to-frame-cycle-events.md)

<a id="Discussion"></a>

## Discussion

The new scene immediately replaces the current scene, if one exists.

## See Also

### Displaying a Scene

- [scene](scene.md): The scene currently presented by this view.
- [presentScene(\_:transition:)](presentscene%28__transition_%29.md): Transitions from the current scene to a new scene.
- [SKTransition](../sktransition.md): An object used to perform an animated transition to a new scene.

# presentScene: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Presents a scene.

## Declaration

```objectivec
- (void) presentScene:(SKScene *) scene;
```

## Parameters

- `scene`: The scene to present.

## Mentioned In

- [Drawing SpriteKit Content in a View](../drawing-spritekit-content-in-a-view.md)
- [Responding to Frame-Cycle Events](../responding-to-frame-cycle-events.md)

<a id="Discussion"></a>

## Discussion

The new scene immediately replaces the current scene, if one exists.

## See Also

### Displaying a Scene

- [scene](scene.md): The scene currently presented by this view.
- [presentScene:transition:](presentscene%28__transition_%29.md): Transitions from the current scene to a new scene.
- [SKTransition](../sktransition.md): An object used to perform an animated transition to a new scene.
