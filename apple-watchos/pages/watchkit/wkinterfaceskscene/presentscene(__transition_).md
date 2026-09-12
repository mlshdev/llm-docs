> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfaceskscene/presentscene(_:transition:)](https://developer.apple.com/documentation/watchkit/wkinterfaceskscene/presentscene(_:transition:))

# presentScene(\_:transition:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 3.0+

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

If the interface is not currently presenting a scene, the new scene is presented immediately, and the `transition` property is ignored. Otherwise, the interface’s [scene](scene.md) property is updated immediately, and the transition is executed to animate the swap between scenes.

## See Also

### Displaying a Scene

- [scene](scene.md): The currently presented SpriteKit scene.
- [presentScene(\_:)](presentscene%28__%29.md): Presents a scene.

# presentScene:transition: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 3.0+

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

If the interface is not currently presenting a scene, the new scene is presented immediately, and the `transition` property is ignored. Otherwise, the interface’s [scene](scene.md) property is updated immediately, and the transition is executed to animate the swap between scenes.

## See Also

### Displaying a Scene

- [scene](scene.md): The currently presented SpriteKit scene.
- [presentScene:](presentscene%28__%29.md): Presents a scene.
