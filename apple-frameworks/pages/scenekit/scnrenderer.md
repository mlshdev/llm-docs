> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnrenderer](https://developer.apple.com/documentation/scenekit/scnrenderer)

# SCNRenderer (Swift)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A renderer for displaying a SceneKit scene in an existing Metal workflow or OpenGL context.

## Declaration

```swift
class SCNRenderer
```

<a id="overview"></a>

## Overview

Use this class when you want to add content rendered by SceneKit to an app that already renders other content by using Metal, OpenGL, or OpenGL ES directly. To provide content for a SceneKit renderer, assign a [SCNScene](scnscene.md) object to its [scene](scnrenderer/scene.md) property.

For additional important methods and properties for working with SceneKit renderers, see [SCNSceneRenderer](scnscenerenderer.md).

## Topics

### Creating a Renderer

- [init(device:options:)](scnrenderer/init%28device_options_%29.md): Creates a renderer with the specified Metal device.
- [init(context:options:)](scnrenderer/init%28context_options_%29.md): Creates a renderer with the specified OpenGL context.

### Specifying a Scene

- [scene](scnrenderer/scene.md): The scene to be rendered.

### Managing Animation Timing

- [nextFrameTime](scnrenderer/nextframetime.md): The timestamp for the next frame to be rendered.

### Rendering a Scene Using Metal

- [render(atTime:viewport:commandBuffer:passDescriptor:)](scnrenderer/render%28attime_viewport_commandbuffer_passdescriptor_%29.md): Renders the scene’s contents at the specified system time in the specified Metal command buffer.

### Rendering a Scene Using OpenGL

- [render()](scnrenderer/render%28%29.md): Deprecated. Renders the scene’s contents in the renderer’s OpenGL context.
- [render(atTime:)](scnrenderer/render%28attime_%29.md): Renders the scene’s contents at the specified system time in the renderer’s OpenGL context.

### Capturing a Snapshot

- [snapshot(atTime:with:antialiasingMode:)](scnrenderer/snapshot%28attime_with_antialiasingmode_%29.md): Creates an image by drawing the renderer’s content at the specified system time.

### Instance Methods

- [render(withViewport:commandBuffer:passDescriptor:)](scnrenderer/render%28withviewport_commandbuffer_passdescriptor_%29.md)
- [update(atTime:)](scnrenderer/update%28attime_%29.md)
- [updateProbes(\_:atTime:)](scnrenderer/updateprobes%28__attime_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [SCNSceneRenderer](scnscenerenderer.md)
- [SCNTechniqueSupport](scntechniquesupport.md)

## See Also

### Display and Interactivity

- [SCNSceneRenderer](scnscenerenderer.md): Methods and properties common to the [SCNView](scnview.md), [SCNLayer](scnlayer.md), and [SCNRenderer](scnrenderer.md) classes.
- [SCNSceneRendererDelegate](scnscenerendererdelegate.md): Methods your app can implement to participate in SceneKit’s animation loop or perform additional rendering.
- [SCNLayer](scnlayer.md): Deprecated. A Core Animation layer that renders a SceneKit scene as its content.
- [SCNHitTestResult](scnhittestresult.md): Information about the result of a scene-space or view-space search for scene elements.

# SCNRenderer (Objective-C)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A renderer for displaying a SceneKit scene in an existing Metal workflow or OpenGL context.

## Declaration

```objectivec
@interface SCNRenderer : NSObject
```

<a id="overview"></a>

## Overview

Use this class when you want to add content rendered by SceneKit to an app that already renders other content by using Metal, OpenGL, or OpenGL ES directly. To provide content for a SceneKit renderer, assign a [SCNScene](scnscene.md) object to its [scene](scnrenderer/scene.md) property.

For additional important methods and properties for working with SceneKit renderers, see [SCNSceneRenderer](scnscenerenderer.md).

## Topics

### Creating a Renderer

- [rendererWithDevice:options:](scnrenderer/init%28device_options_%29.md): Creates a renderer with the specified Metal device.
- [rendererWithContext:options:](scnrenderer/init%28context_options_%29.md): Creates a renderer with the specified OpenGL context.

### Specifying a Scene

- [scene](scnrenderer/scene.md): The scene to be rendered.

### Managing Animation Timing

- [nextFrameTime](scnrenderer/nextframetime.md): The timestamp for the next frame to be rendered.

### Rendering a Scene Using Metal

- [renderAtTime:viewport:commandBuffer:passDescriptor:](scnrenderer/render%28attime_viewport_commandbuffer_passdescriptor_%29.md): Renders the scene’s contents at the specified system time in the specified Metal command buffer.

### Rendering a Scene Using OpenGL

- [render](scnrenderer/render%28%29.md): Deprecated. Renders the scene’s contents in the renderer’s OpenGL context.
- [renderAtTime:](scnrenderer/render%28attime_%29.md): Renders the scene’s contents at the specified system time in the renderer’s OpenGL context.

### Capturing a Snapshot

- [snapshotAtTime:withSize:antialiasingMode:](scnrenderer/snapshot%28attime_with_antialiasingmode_%29.md): Creates an image by drawing the renderer’s content at the specified system time.

### Instance Methods

- [renderWithViewport:commandBuffer:passDescriptor:](scnrenderer/render%28withviewport_commandbuffer_passdescriptor_%29.md)
- [updateAtTime:](scnrenderer/update%28attime_%29.md)
- [updateProbes:atTime:](scnrenderer/updateprobes%28__attime_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [SCNSceneRenderer](scnscenerenderer.md)
- [SCNTechniqueSupport](scntechniquesupport.md)

## See Also

### Display and Interactivity

- [SCNSceneRenderer](scnscenerenderer.md): Methods and properties common to the [SCNView](scnview.md), [SCNLayer](scnlayer.md), and [SCNRenderer](scnrenderer.md) classes.
- [SCNSceneRendererDelegate](scnscenerendererdelegate.md): Methods your app can implement to participate in SceneKit’s animation loop or perform additional rendering.
- [SCNLayer](scnlayer.md): Deprecated. A Core Animation layer that renders a SceneKit scene as its content.
- [SCNHitTestResult](scnhittestresult.md): Information about the result of a scene-space or view-space search for scene elements.
