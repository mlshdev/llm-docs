> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfaceskscene/scene](https://developer.apple.com/documentation/watchkit/wkinterfaceskscene/scene)

# scene (Swift)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 3.0+

The currently presented SpriteKit scene.

## Declaration

```swift
var scene: SKScene? { get }
```

## Mentioned In

- [Configuring a WatchKit Scene in a Storyboard](../configuring-a-watchkit-scene-in-a-storyboard.md)

<a id="Discussion"></a>

## Discussion

The default value is `nil`.

## See Also

### Displaying a Scene

- [presentScene(\_:)](presentscene%28__%29.md): Presents a scene.
- [presentScene(\_:transition:)](presentscene%28__transition_%29.md): Transitions from the current scene to a new scene.

# scene (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 3.0+

The currently presented SpriteKit scene.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) SKScene * scene;
```

## Mentioned In

- [Configuring a WatchKit Scene in a Storyboard](../configuring-a-watchkit-scene-in-a-storyboard.md)

<a id="Discussion"></a>

## Discussion

The default value is `nil`.

## See Also

### Displaying a Scene

- [presentScene:](presentscene%28__%29.md): Presents a scene.
- [presentScene:transition:](presentscene%28__transition_%29.md): Transitions from the current scene to a new scene.
