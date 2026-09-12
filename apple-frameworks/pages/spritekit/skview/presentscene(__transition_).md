> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skview/presentscene(_:transition:)](https://developer.apple.com/documentation/spritekit/skview/presentscene(_:transition:))

# presentScene(\_:transition:) (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Transitions from the current scene to a new scene.

## Declaration

```swift
func presentScene(_ scene: SKScene, transition: SKTransition)
```

## Parameters

- `scene`: The scene to present.
- `transition`: A transition used to animate between the two scenes.

<a id="Discussion"></a>

## Discussion

If there is currently a scene presented by the view, the view’s [scene](scene.md) property is updated immediately, the transition is executed to swap between the scenes. Otherwise, the new scene is presented immediately and the transition property is ignored.

## See Also

### Displaying a Scene

- [scene](scene.md): The scene currently presented by this view.
- [presentScene(\_:)](presentscene%28__%29.md): Presents a scene.
- [SKTransition](../sktransition.md): An object used to perform an animated transition to a new scene.

# presentScene:transition: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Transitions from the current scene to a new scene.

## Declaration

```objectivec
- (void) presentScene:(SKScene *) scene transition:(SKTransition *) transition;
```

## Parameters

- `scene`: The scene to present.
- `transition`: A transition used to animate between the two scenes.

<a id="Discussion"></a>

## Discussion

If there is currently a scene presented by the view, the view’s [scene](scene.md) property is updated immediately, the transition is executed to swap between the scenes. Otherwise, the new scene is presented immediately and the transition property is ignored.

## See Also

### Displaying a Scene

- [scene](scene.md): The scene currently presented by this view.
- [presentScene:](presentscene%28__%29.md): Presents a scene.
- [SKTransition](../sktransition.md): An object used to perform an animated transition to a new scene.
