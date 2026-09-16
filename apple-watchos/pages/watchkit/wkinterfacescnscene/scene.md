> Snapshot-pinned source payload for Apple watchOS snapshot-4bff84466040; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/watchkit/wkinterfacescnscene/scene

# scene (Swift)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 3.0+

The scene to be displayed.

## Declaration

```swift
var scene: SCNScene? { get set }
```

## See Also

### Managing the SceneKit Scene

- [antialiasingMode](antialiasingmode.md): The antialiasing mode used for rendering the scene.
- [preferredFramesPerSecond](preferredframespersecond.md): The animation frame rate that the interface uses to render its scene.
- [snapshot()](snapshot%28%29.md): Renders the scene to a new image object.

# scene (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 3.0+

The scene to be displayed.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) SCNScene * scene;
```

## See Also

### Managing the SceneKit Scene

- [antialiasingMode](antialiasingmode.md): The antialiasing mode used for rendering the scene.
- [preferredFramesPerSecond](preferredframespersecond.md): The animation frame rate that the interface uses to render its scene.
- [snapshot](snapshot%28%29.md): Renders the scene to a new image object.
