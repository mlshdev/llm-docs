> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacescnscene/preferredframespersecond](https://developer.apple.com/documentation/watchkit/wkinterfacescnscene/preferredframespersecond)

# preferredFramesPerSecond (Swift)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 3.0+

The animation frame rate that the interface uses to render its scene.

## Declaration

```swift
var preferredFramesPerSecond: Int { get set }
```

<a id="Discussion"></a>

## Discussion

SceneKit chooses an actual frame rate that is as close as possible to your preferred frame rate based on the capabilities of the hardware and the systems other requirements. Choose a frame rate that your app can consistently maintain. The default value is 60 frames per second.

To provide a consistent frame rate, SceneKit usually selects a frame rate that is a factor of the hardware’s maximum refresh rate. For example, if Apple Watch’s maximum refresh rate is 60 frames per second, then that is also the highest frame rate used by SceneKit. However, if you ask for a lower frame rate, SceneKit might choose 30, 20, 15 or some other factor as the actual frame rate.

## See Also

### Managing the SceneKit Scene

- [antialiasingMode](antialiasingmode.md): The antialiasing mode used for rendering the scene.
- [scene](scene.md): The scene to be displayed.
- [snapshot()](snapshot%28%29.md): Renders the scene to a new image object.

# preferredFramesPerSecond (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 3.0+

The animation frame rate that the interface uses to render its scene.

## Declaration

```objectivec
@property (nonatomic) NSInteger preferredFramesPerSecond;
```

<a id="Discussion"></a>

## Discussion

SceneKit chooses an actual frame rate that is as close as possible to your preferred frame rate based on the capabilities of the hardware and the systems other requirements. Choose a frame rate that your app can consistently maintain. The default value is 60 frames per second.

To provide a consistent frame rate, SceneKit usually selects a frame rate that is a factor of the hardware’s maximum refresh rate. For example, if Apple Watch’s maximum refresh rate is 60 frames per second, then that is also the highest frame rate used by SceneKit. However, if you ask for a lower frame rate, SceneKit might choose 30, 20, 15 or some other factor as the actual frame rate.

## See Also

### Managing the SceneKit Scene

- [antialiasingMode](antialiasingmode.md): The antialiasing mode used for rendering the scene.
- [scene](scene.md): The scene to be displayed.
- [snapshot](snapshot%28%29.md): Renders the scene to a new image object.
