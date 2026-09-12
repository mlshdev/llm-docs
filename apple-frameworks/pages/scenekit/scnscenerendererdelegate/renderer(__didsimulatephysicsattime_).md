> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnscenerendererdelegate/renderer(_:didsimulatephysicsattime:)](https://developer.apple.com/documentation/scenekit/scnscenerendererdelegate/renderer(_:didsimulatephysicsattime:))

# renderer(\_:didSimulatePhysicsAtTime:) (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Tells the delegate to perform any updates that need to occur after physics simulations are performed.

## Declaration

```swift
optional func renderer(_ renderer: any SCNSceneRenderer, didSimulatePhysicsAtTime time: TimeInterval)
```

## Parameters

- `renderer`: The SceneKit object responsible for rendering the scene.
- `time`: The current system time, in seconds. Use this parameter for any time-based elements of your game logic.

<a id="Discussion"></a>

## Discussion

SceneKit calls this method exactly once per frame, so long as the [SCNView](../scnview.md) object (or other [SCNSceneRenderer](../scnscenerenderer.md) object) displaying the scene is not paused.

Implement this method to add game logic to the rendering loop. Any changes you make to the scene graph during this method are immediately reflected in the displayed scene. That is, SceneKit immediately updates the hierarchy of presentation nodes it uses to render the scene (instead of using the [SCNTransaction](../scntransaction.md) class to “batch” your changes).

This method is the last opportunity SceneKit provides for you to change the scene graph before rendering.

## See Also

### Adding Custom Logic to the Rendering Loop

- [renderer(\_:updateAtTime:)](renderer%28__updateattime_%29.md): Tells the delegate to perform any updates that need to occur before actions, animations, and physics are evaluated.
- [renderer(\_:didApplyAnimationsAtTime:)](renderer%28__didapplyanimationsattime_%29.md): Tells the delegate to perform any updates that need to occur after actions and animations are evaluated.

# renderer:didSimulatePhysicsAtTime: (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Tells the delegate to perform any updates that need to occur after physics simulations are performed.

## Declaration

```objectivec
- (void) renderer:(id<SCNSceneRenderer>) renderer didSimulatePhysicsAtTime:(NSTimeInterval) time;
```

## Parameters

- `renderer`: The SceneKit object responsible for rendering the scene.
- `time`: The current system time, in seconds. Use this parameter for any time-based elements of your game logic.

<a id="Discussion"></a>

## Discussion

SceneKit calls this method exactly once per frame, so long as the [SCNView](../scnview.md) object (or other [SCNSceneRenderer](../scnscenerenderer.md) object) displaying the scene is not paused.

Implement this method to add game logic to the rendering loop. Any changes you make to the scene graph during this method are immediately reflected in the displayed scene. That is, SceneKit immediately updates the hierarchy of presentation nodes it uses to render the scene (instead of using the [SCNTransaction](../scntransaction.md) class to “batch” your changes).

This method is the last opportunity SceneKit provides for you to change the scene graph before rendering.

## See Also

### Adding Custom Logic to the Rendering Loop

- [renderer:updateAtTime:](renderer%28__updateattime_%29.md): Tells the delegate to perform any updates that need to occur before actions, animations, and physics are evaluated.
- [renderer:didApplyAnimationsAtTime:](renderer%28__didapplyanimationsattime_%29.md): Tells the delegate to perform any updates that need to occur after actions and animations are evaluated.
