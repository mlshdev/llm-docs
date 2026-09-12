> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/sceneview/init(scene:pointofview:options:preferredframespersecond:antialiasingmode:delegate:technique:)](https://developer.apple.com/documentation/scenekit/sceneview/init(scene:pointofview:options:preferredframespersecond:antialiasingmode:delegate:technique:))

# init(scene:pointOfView:options:preferredFramesPerSecond:antialiasingMode:delegate:technique:)

**Framework:** SceneKit  
**Kind:** Initializer  
**Availability:** iOS 14.0+ (deprecated in 26.0) · iPadOS 14.0+ (deprecated in 26.0) · Mac Catalyst 14.0+ (deprecated in 26.0) · macOS 11.0+ (deprecated in 26.0) · tvOS 14.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 7.0+ (deprecated in 26.0)

## Declaration

```swift
@MainActor @preconcurrency init(scene: SCNScene? = nil, pointOfView: SCNNode? = nil, options: SceneView.Options = [], preferredFramesPerSecond: Int = 60, antialiasingMode: SCNAntialiasingMode = .multisampling4X, delegate: (any SCNSceneRendererDelegate)? = nil, technique: SCNTechnique? = nil)
```

## See Also

### Creating a Scene View

- [SceneView.Options](options.md): Deprecated.
