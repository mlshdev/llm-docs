> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnscenerenderer](https://developer.apple.com/documentation/scenekit/scnscenerenderer)

# SCNSceneRenderer (Swift)

**Framework:** SceneKit  
**Kind:** Protocol  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Methods and properties common to the [SCNView](scnview.md), [SCNLayer](scnlayer.md), and [SCNRenderer](scnrenderer.md) classes.

## Declaration

```swift
protocol SCNSceneRenderer : NSObjectProtocol
```

<a id="overview"></a>

## Overview

You use an instance of one of these classes to display a scene and manage SceneKit’s rendering and animation of the scene’s contents.

Typically, you use the [SCNView](scnview.md) class to display a scene in a window (or full screen). You can create and configure a SceneKit view programmatically or in Interface Builder. The other renderer classes render SceneKit content in more specialized situations. If your app has a user interface composed of Core Animation layers, you can use the [SCNLayer](scnlayer.md) class to render a scene into a layer. If your app uses Metal or OpenGL for other rendering, you can use the [SCNRenderer](scnrenderer.md) class to render SceneKit content with the same Metal device or OpenGL context.

Use the [scene](scnscenerenderer/scene.md) property of the view, layer, or renderer to specify the scene to display.

## Topics

### Presenting a Scene

- [scene](scnscenerenderer/scene.md): The scene to be displayed.
- [present(\_:with:incomingPointOfView:completionHandler:)](scnscenerenderer/present%28__with_incomingpointofview_completionhandler_%29.md): Displays the specified scene with an animated transition.

### Managing Scene Display

- [pointOfView](scnscenerenderer/pointofview.md): The node from which the scene’s contents are viewed for rendering.
- [autoenablesDefaultLighting](scnscenerenderer/autoenablesdefaultlighting.md): A Boolean value that determines whether SceneKit automatically adds lights to a scene.
- [isJitteringEnabled](scnscenerenderer/isjitteringenabled.md): A Boolean value that determines whether SceneKit applies jittering to reduce aliasing artifacts.
- [showsStatistics](scnscenerenderer/showsstatistics.md): A Boolean value that determines whether SceneKit displays rendering performance statistics in an accessory view.
- [debugOptions](scnscenerenderer/debugoptions.md): Options for drawing overlay content in a scene that can aid debugging.
- [renderingAPI](scnscenerenderer/renderingapi.md): The graphics technology SceneKit uses to render the scene.
- [SCNDebugOptions](scndebugoptions.md): Options for drawing overlays with SceneKit content that can aid in debugging, used with the [debugOptions](scnscenerenderer/debugoptions.md) property.
- [SCNRenderingAPI](scnrenderingapi.md): Options for choosing the graphics technology for an [SCNView](scnview.md) object (or other SceneKit renderer) to use for drawing its contents. Used by the [renderingAPI](scnscenerenderer/renderingapi.md) property and the [preferredRenderingAPI](scnview/option/preferredrenderingapi.md) option when initializing an [SCNView](scnview.md) object.

### Managing Scene Animation Timing

- [sceneTime](scnscenerenderer/scenetime.md): The current scene time.
- [isPlaying](scnscenerenderer/isplaying.md): A Boolean value that determines whether the scene is playing.
- [loops](scnscenerenderer/loops.md): A Boolean value that determines whether SceneKit restarts the scene time after all animations in the scene have played.

### Preloading Renderer Resources

- [prepare(\_:shouldAbortBlock:)](scnscenerenderer/prepare%28__shouldabortblock_%29.md): Prepares a SceneKit object for rendering.
- [prepare(\_:completionHandler:)](scnscenerenderer/prepare%28__completionhandler_%29.md): Prepares the specified SceneKit objects for rendering, using a background thread.

### Working With Projected Scene Contents

- [hitTest(\_:options:)](scnscenerenderer/hittest%28__options_%29.md): Searches the renderer’s scene for objects corresponding to a point in the rendered image.
- [SCNHitTestOption](scnhittestoption.md): Options affecting the behavior of SceneKit hit-testing methods.
- [isNode(\_:insideFrustumOf:)](scnscenerenderer/isnode%28__insidefrustumof_%29.md): Returns a Boolean value indicating whether a node might be visible from a specified point of view.
- [nodesInsideFrustum(of:)](scnscenerenderer/nodesinsidefrustum%28of_%29.md): Returns all nodes that might be visible from a specified point of view.
- [projectPoint(\_:)](scnscenerenderer/projectpoint%28__%29.md): Projects a point from the 3D world coordinate system of the scene to the 2D pixel coordinate system of the renderer.
- [unprojectPoint(\_:)](scnscenerenderer/unprojectpoint%28__%29.md): Unprojects a point from the 2D pixel coordinate system of the renderer to the 3D world coordinate system of the scene.

### Participating in the Scene Rendering Process

- [delegate](scnscenerenderer/delegate.md): A delegate object that receives messages about SceneKit’s rendering process.

### Customizing Scene Rendering with Metal

- [currentRenderCommandEncoder](scnscenerenderer/currentrendercommandencoder.md): The Metal render command encoder in use for the current SceneKit rendering pass.
- [device](scnscenerenderer/device.md): The Metal device this renderer uses for rendering.
- [commandQueue](scnscenerenderer/commandqueue.md): The Metal command queue this renderer uses for rendering.
- [colorPixelFormat](scnscenerenderer/colorpixelformat.md): The Metal pixel format for the renderer’s color output.
- [depthPixelFormat](scnscenerenderer/depthpixelformat.md): The Metal pixel format for the renderer’s depth buffer.
- [stencilPixelFormat](scnscenerenderer/stencilpixelformat.md): The Metal pixel format for the renderer’s stencil buffer.

### Customizing Scene Rendering with OpenGL

- [context](scnscenerenderer/context.md): The OpenGL rendering context that SceneKit uses for rendering the scene.

### Rendering Sprite Kit Content over a Scene

- [overlaySKScene](scnscenerenderer/overlayskscene.md): A Sprite Kit scene to be rendered on top of the SceneKit content.

### Working With Positional Audio

- [audioListener](scnscenerenderer/audiolistener.md): The node representing the listener’s position in the scene for use with positional audio effects.
- [audioEnvironmentNode](scnscenerenderer/audioenvironmentnode.md): The 3D audio mixing node SceneKit uses for positional audio effects.
- [audioEngine](scnscenerenderer/audioengine.md): The audio engine SceneKit uses for playing scene sounds.

### Instance Properties

- [currentRenderPassDescriptor](scnscenerenderer/currentrenderpassdescriptor.md)
- [currentTime](scnscenerenderer/currenttime.md): Deprecated.
- [currentViewport](scnscenerenderer/currentviewport.md)
- [isTemporalAntialiasingEnabled](scnscenerenderer/istemporalantialiasingenabled.md)
- [usesReverseZ](scnscenerenderer/usesreversez.md)
- [workingColorSpace](scnscenerenderer/workingcolorspace.md)

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [SCNLayer](scnlayer.md)
- [SCNRenderer](scnrenderer.md)
- [SCNView](scnview.md)

## See Also

### Display and Interactivity

- [SCNSceneRendererDelegate](scnscenerendererdelegate.md): Methods your app can implement to participate in SceneKit’s animation loop or perform additional rendering.
- [SCNLayer](scnlayer.md): Deprecated. A Core Animation layer that renders a SceneKit scene as its content.
- [SCNRenderer](scnrenderer.md): A renderer for displaying a SceneKit scene in an existing Metal workflow or OpenGL context.
- [SCNHitTestResult](scnhittestresult.md): Information about the result of a scene-space or view-space search for scene elements.

# SCNSceneRenderer (Objective-C)

**Framework:** SceneKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Methods and properties common to the [SCNView](scnview.md), [SCNLayer](scnlayer.md), and [SCNRenderer](scnrenderer.md) classes.

## Declaration

```objectivec
@protocol SCNSceneRenderer <NSObject>
```

<a id="overview"></a>

## Overview

You use an instance of one of these classes to display a scene and manage SceneKit’s rendering and animation of the scene’s contents.

Typically, you use the [SCNView](scnview.md) class to display a scene in a window (or full screen). You can create and configure a SceneKit view programmatically or in Interface Builder. The other renderer classes render SceneKit content in more specialized situations. If your app has a user interface composed of Core Animation layers, you can use the [SCNLayer](scnlayer.md) class to render a scene into a layer. If your app uses Metal or OpenGL for other rendering, you can use the [SCNRenderer](scnrenderer.md) class to render SceneKit content with the same Metal device or OpenGL context.

Use the [scene](scnscenerenderer/scene.md) property of the view, layer, or renderer to specify the scene to display.

## Topics

### Presenting a Scene

- [scene](scnscenerenderer/scene.md): The scene to be displayed.
- [presentScene:withTransition:incomingPointOfView:completionHandler:](scnscenerenderer/present%28__with_incomingpointofview_completionhandler_%29.md): Displays the specified scene with an animated transition.

### Managing Scene Display

- [pointOfView](scnscenerenderer/pointofview.md): The node from which the scene’s contents are viewed for rendering.
- [autoenablesDefaultLighting](scnscenerenderer/autoenablesdefaultlighting.md): A Boolean value that determines whether SceneKit automatically adds lights to a scene.
- [jitteringEnabled](scnscenerenderer/isjitteringenabled.md): A Boolean value that determines whether SceneKit applies jittering to reduce aliasing artifacts.
- [showsStatistics](scnscenerenderer/showsstatistics.md): A Boolean value that determines whether SceneKit displays rendering performance statistics in an accessory view.
- [debugOptions](scnscenerenderer/debugoptions.md): Options for drawing overlay content in a scene that can aid debugging.
- [renderingAPI](scnscenerenderer/renderingapi.md): The graphics technology SceneKit uses to render the scene.
- [SCNDebugOptions](scndebugoptions.md): Options for drawing overlays with SceneKit content that can aid in debugging, used with the [debugOptions](scnscenerenderer/debugoptions.md) property.
- [SCNRenderingAPI](scnrenderingapi.md): Options for choosing the graphics technology for an [SCNView](scnview.md) object (or other SceneKit renderer) to use for drawing its contents. Used by the [renderingAPI](scnscenerenderer/renderingapi.md) property and the [SCNPreferredRenderingAPIKey](scnview/option/preferredrenderingapi.md) option when initializing an [SCNView](scnview.md) object.

### Managing Scene Animation Timing

- [sceneTime](scnscenerenderer/scenetime.md): The current scene time.
- [playing](scnscenerenderer/isplaying.md): A Boolean value that determines whether the scene is playing.
- [loops](scnscenerenderer/loops.md): A Boolean value that determines whether SceneKit restarts the scene time after all animations in the scene have played.

### Preloading Renderer Resources

- [prepareObject:shouldAbortBlock:](scnscenerenderer/prepare%28__shouldabortblock_%29.md): Prepares a SceneKit object for rendering.
- [prepareObjects:withCompletionHandler:](scnscenerenderer/prepare%28__completionhandler_%29.md): Prepares the specified SceneKit objects for rendering, using a background thread.

### Working With Projected Scene Contents

- [hitTest:options:](scnscenerenderer/hittest%28__options_%29.md): Searches the renderer’s scene for objects corresponding to a point in the rendered image.
- [SCNHitTestOption](scnhittestoption.md): Options affecting the behavior of SceneKit hit-testing methods.
- [isNodeInsideFrustum:withPointOfView:](scnscenerenderer/isnode%28__insidefrustumof_%29.md): Returns a Boolean value indicating whether a node might be visible from a specified point of view.
- [nodesInsideFrustumWithPointOfView:](scnscenerenderer/nodesinsidefrustum%28of_%29.md): Returns all nodes that might be visible from a specified point of view.
- [projectPoint:](scnscenerenderer/projectpoint%28__%29.md): Projects a point from the 3D world coordinate system of the scene to the 2D pixel coordinate system of the renderer.
- [unprojectPoint:](scnscenerenderer/unprojectpoint%28__%29.md): Unprojects a point from the 2D pixel coordinate system of the renderer to the 3D world coordinate system of the scene.

### Participating in the Scene Rendering Process

- [delegate](scnscenerenderer/delegate.md): A delegate object that receives messages about SceneKit’s rendering process.

### Customizing Scene Rendering with Metal

- [currentRenderCommandEncoder](scnscenerenderer/currentrendercommandencoder.md): The Metal render command encoder in use for the current SceneKit rendering pass.
- [device](scnscenerenderer/device.md): The Metal device this renderer uses for rendering.
- [commandQueue](scnscenerenderer/commandqueue.md): The Metal command queue this renderer uses for rendering.
- [colorPixelFormat](scnscenerenderer/colorpixelformat.md): The Metal pixel format for the renderer’s color output.
- [depthPixelFormat](scnscenerenderer/depthpixelformat.md): The Metal pixel format for the renderer’s depth buffer.
- [stencilPixelFormat](scnscenerenderer/stencilpixelformat.md): The Metal pixel format for the renderer’s stencil buffer.

### Customizing Scene Rendering with OpenGL

- [context](scnscenerenderer/context.md): The OpenGL rendering context that SceneKit uses for rendering the scene.

### Rendering Sprite Kit Content over a Scene

- [overlaySKScene](scnscenerenderer/overlayskscene.md): A Sprite Kit scene to be rendered on top of the SceneKit content.

### Working With Positional Audio

- [audioListener](scnscenerenderer/audiolistener.md): The node representing the listener’s position in the scene for use with positional audio effects.
- [audioEnvironmentNode](scnscenerenderer/audioenvironmentnode.md): The 3D audio mixing node SceneKit uses for positional audio effects.
- [audioEngine](scnscenerenderer/audioengine.md): The audio engine SceneKit uses for playing scene sounds.

### Instance Properties

- [currentRenderPassDescriptor](scnscenerenderer/currentrenderpassdescriptor.md)
- [currentTime](scnscenerenderer/currenttime.md): Deprecated.
- [currentViewport](scnscenerenderer/currentviewport.md)
- [temporalAntialiasingEnabled](scnscenerenderer/istemporalantialiasingenabled.md)
- [usesReverseZ](scnscenerenderer/usesreversez.md)
- [workingColorSpace](scnscenerenderer/workingcolorspace.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [SCNLayer](scnlayer.md)
- [SCNRenderer](scnrenderer.md)
- [SCNView](scnview.md)

## See Also

### Display and Interactivity

- [SCNSceneRendererDelegate](scnscenerendererdelegate.md): Methods your app can implement to participate in SceneKit’s animation loop or perform additional rendering.
- [SCNLayer](scnlayer.md): Deprecated. A Core Animation layer that renders a SceneKit scene as its content.
- [SCNRenderer](scnrenderer.md): A renderer for displaying a SceneKit scene in an existing Metal workflow or OpenGL context.
- [SCNHitTestResult](scnhittestresult.md): Information about the result of a scene-space or view-space search for scene elements.
