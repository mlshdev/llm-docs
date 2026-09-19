> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/spritekit/skview/scene

# scene (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The scene currently presented by this view.

## Declaration

```swift
var scene: SKScene? { get }
```

## Mentioned In

- [Choosing a SpriteKit Scene Renderer](../choosing-a-spritekit-scene-renderer.md)

<a id="Discussion"></a>

## Discussion

The default value is `nil`.

You call [presentScene(\_:)](presentscene%28__%29.md) to assign a value to this property.

## See Also

### Displaying a Scene

- [presentScene(\_:)](presentscene%28__%29.md): Presents a scene.
- [presentScene(\_:transition:)](presentscene%28__transition_%29.md): Transitions from the current scene to a new scene.
- [SKTransition](../sktransition.md): An object used to perform an animated transition to a new scene.

# scene (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The scene currently presented by this view.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) SKScene * scene;
```

## Mentioned In

- [Choosing a SpriteKit Scene Renderer](../choosing-a-spritekit-scene-renderer.md)

<a id="Discussion"></a>

## Discussion

The default value is `nil`.

You call [presentScene:](presentscene%28__%29.md) to assign a value to this property.

## See Also

### Displaying a Scene

- [presentScene:](presentscene%28__%29.md): Presents a scene.
- [presentScene:transition:](presentscene%28__transition_%29.md): Transitions from the current scene to a new scene.
- [SKTransition](../sktransition.md): An object used to perform an animated transition to a new scene.
