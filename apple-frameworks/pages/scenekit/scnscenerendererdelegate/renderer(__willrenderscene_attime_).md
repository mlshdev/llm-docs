> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnscenerendererdelegate/renderer(_:willrenderscene:attime:)](https://developer.apple.com/documentation/scenekit/scnscenerendererdelegate/renderer(_:willrenderscene:attime:))

# renderer(\_:willRenderScene:atTime:) (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Tells the delegate that the renderer has cleared the viewport and is about to render the scene.

## Declaration

```swift
optional func renderer(_ renderer: any SCNSceneRenderer, willRenderScene scene: SCNScene, atTime time: TimeInterval)
```

## Parameters

- `renderer`: The SceneKit object responsible for rendering the scene. Examine this object’s [context](../scnscenerenderer/context.md) property if you need to reference the OpenGL context that your custom rendering code draws into.
- `scene`: The `SCNScene` object to be rendered.
- `time`: The current system time, in seconds. If your custom rendering involves animation, use this parameter to compute your own animation state.

<a id="Discussion"></a>

## Discussion

Implement this method to perform custom drawing before SceneKit renders a scene—for example, to draw backdrop content underneath SceneKit content. You should only execute Metal or OpenGL drawing commands (and any setup required to perform them) in this method—the results of modifying SceneKit objects during this method are undefined.

- To render using Metal, use the `renderer` parameter to retrieve the scene renderer’s [currentRenderCommandEncoder](../scnscenerenderer/currentrendercommandencoder.md) object and encode your own drawing commands. If you need to reference other Metal state, see the properties listed in [SCNSceneRenderer](../scnscenerenderer.md).
- To render using OpenGL, simply call the relevant OpenGL drawing commands—SceneKit automatically makes its OpenGL context the current context before calling this method. If you need to reference the OpenGL context being rendered into, examine the [context](../scnscenerenderer/context.md) property of the `renderer` parameter.

You must draw using the appropriate graphics technology for the view currently being rendered. Use the [renderingAPI](../scnscenerenderer/renderingapi.md) property of the `renderer` object to determine whether Metal or OpenGL is in use.

## See Also

### Rendering Custom Scene Content

- [renderer(\_:didRenderScene:atTime:)](renderer%28__didrenderscene_attime_%29.md): Tells the delegate that the renderer has rendered the scene.

# renderer:willRenderScene:atTime: (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Tells the delegate that the renderer has cleared the viewport and is about to render the scene.

## Declaration

```objectivec
- (void) renderer:(id<SCNSceneRenderer>) renderer willRenderScene:(SCNScene *) scene atTime:(NSTimeInterval) time;
```

## Parameters

- `renderer`: The SceneKit object responsible for rendering the scene. Examine this object’s [context](../scnscenerenderer/context.md) property if you need to reference the OpenGL context that your custom rendering code draws into.
- `scene`: The `SCNScene` object to be rendered.
- `time`: The current system time, in seconds. If your custom rendering involves animation, use this parameter to compute your own animation state.

<a id="Discussion"></a>

## Discussion

Implement this method to perform custom drawing before SceneKit renders a scene—for example, to draw backdrop content underneath SceneKit content. You should only execute Metal or OpenGL drawing commands (and any setup required to perform them) in this method—the results of modifying SceneKit objects during this method are undefined.

- To render using Metal, use the `renderer` parameter to retrieve the scene renderer’s [currentRenderCommandEncoder](../scnscenerenderer/currentrendercommandencoder.md) object and encode your own drawing commands. If you need to reference other Metal state, see the properties listed in [SCNSceneRenderer](../scnscenerenderer.md).
- To render using OpenGL, simply call the relevant OpenGL drawing commands—SceneKit automatically makes its OpenGL context the current context before calling this method. If you need to reference the OpenGL context being rendered into, examine the [context](../scnscenerenderer/context.md) property of the `renderer` parameter.

You must draw using the appropriate graphics technology for the view currently being rendered. Use the [renderingAPI](../scnscenerenderer/renderingapi.md) property of the `renderer` object to determine whether Metal or OpenGL is in use.

## See Also

### Rendering Custom Scene Content

- [renderer:didRenderScene:atTime:](renderer%28__didrenderscene_attime_%29.md): Tells the delegate that the renderer has rendered the scene.
