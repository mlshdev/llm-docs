> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfaceskscene/presentscene(_:)](https://developer.apple.com/documentation/watchkit/wkinterfaceskscene/presentscene(_:))

# presentScene(\_:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 3.0+

Presents a scene.

## Declaration

```swift
func presentScene(_ scene: SKScene?)
```

## Parameters

- `scene`: The scene to present.

<a id="Discussion"></a>

## Discussion

The new scene immediately replaces the current scene, if one exists.

## See Also

### Displaying a Scene

- [scene](scene.md): The currently presented SpriteKit scene.
- [presentScene(\_:transition:)](presentscene%28__transition_%29.md): Transitions from the current scene to a new scene.

# presentScene: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 3.0+

Presents a scene.

## Declaration

```objectivec
- (void) presentScene:(SKScene *) scene;
```

## Parameters

- `scene`: The scene to present.

<a id="Discussion"></a>

## Discussion

The new scene immediately replaces the current scene, if one exists.

## See Also

### Displaying a Scene

- [scene](scene.md): The currently presented SpriteKit scene.
- [presentScene:transition:](presentscene%28__transition_%29.md): Transitions from the current scene to a new scene.
