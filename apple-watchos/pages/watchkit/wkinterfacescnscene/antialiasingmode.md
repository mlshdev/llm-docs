> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacescnscene/antialiasingmode](https://developer.apple.com/documentation/watchkit/wkinterfacescnscene/antialiasingmode)

# antialiasingMode (Swift)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 3.0+

The antialiasing mode used for rendering the scene.

## Declaration

```swift
var antialiasingMode: SCNAntialiasingMode { get set }
```

<a id="Discussion"></a>

## Discussion

SceneKit can provide antialiasing, which smooths edges in a rendered scene, using a technique called multisampling. Multisampling renders each pixel multiple times and combines the results, creating a higher quality image at a performance cost proportional to the number of samples it uses.

For available values, see [SCNAntialiasingMode](https://developer.apple.com/documentation/scenekit/scnantialiasingmode). The default mode is [SCNAntialiasingMode.none](https://developer.apple.com/documentation/scenekit/scnantialiasingmode/none).

## See Also

### Managing the SceneKit Scene

- [preferredFramesPerSecond](preferredframespersecond.md): The animation frame rate that the interface uses to render its scene.
- [scene](scene.md): The scene to be displayed.
- [snapshot()](snapshot%28%29.md): Renders the scene to a new image object.

# antialiasingMode (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 3.0+

The antialiasing mode used for rendering the scene.

## Declaration

```objectivec
@property (nonatomic) SCNAntialiasingMode antialiasingMode;
```

<a id="Discussion"></a>

## Discussion

SceneKit can provide antialiasing, which smooths edges in a rendered scene, using a technique called multisampling. Multisampling renders each pixel multiple times and combines the results, creating a higher quality image at a performance cost proportional to the number of samples it uses.

For available values, see [SCNAntialiasingMode](https://developer.apple.com/documentation/scenekit/scnantialiasingmode). The default mode is [SCNAntialiasingModeNone](https://developer.apple.com/documentation/scenekit/scnantialiasingmode/none).

## See Also

### Managing the SceneKit Scene

- [preferredFramesPerSecond](preferredframespersecond.md): The animation frame rate that the interface uses to render its scene.
- [scene](scene.md): The scene to be displayed.
- [snapshot](snapshot%28%29.md): Renders the scene to a new image object.
