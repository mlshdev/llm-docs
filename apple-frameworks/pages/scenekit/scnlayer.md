> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnlayer](https://developer.apple.com/documentation/scenekit/scnlayer)

# SCNLayer (Swift)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A Core Animation layer that renders a SceneKit scene as its content.

> OpenGL API deprecated, please use Metal instead. (Define SCN_SILENCE_GL_DEPRECATION to silence these warnings)

## Declaration

```swift
class SCNLayer
```

<a id="overview"></a>

## Overview

Use this class to integrate 3D content rendered by SceneKit into a user interface composed of Core Animation layers. To provide content for the layer, assign an [SCNScene](scnscene.md) object to its [scene](scnlayer/scene.md) property.

Most of the methods and properties you use for working with a SceneKit layer are defined by the [SCNSceneRenderer](scnscenerenderer.md) protocol.

## Topics

### Specifying a Scene

- [scene](scnlayer/scene.md): Deprecated. The scene to be displayed in the layer.

## Relationships

### Inherits From

- [CAOpenGLLayer](../quartzcore/caopengllayer.md)

### Conforms To

- [CAMediaTiming](../quartzcore/camediatiming.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [SCNSceneRenderer](scnscenerenderer.md)
- [SCNTechniqueSupport](scntechniquesupport.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Display and Interactivity

- [SCNSceneRenderer](scnscenerenderer.md): Methods and properties common to the [SCNView](scnview.md), [SCNLayer](scnlayer.md), and [SCNRenderer](scnrenderer.md) classes.
- [SCNSceneRendererDelegate](scnscenerendererdelegate.md): Methods your app can implement to participate in SceneKit’s animation loop or perform additional rendering.
- [SCNRenderer](scnrenderer.md): A renderer for displaying a SceneKit scene in an existing Metal workflow or OpenGL context.
- [SCNHitTestResult](scnhittestresult.md): Information about the result of a scene-space or view-space search for scene elements.

# SCNLayer (Objective-C)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** macOS 10.8+ (deprecated in 10.14)

A Core Animation layer that renders a SceneKit scene as its content.

> OpenGL API deprecated, please use Metal instead. (Define SCN_SILENCE_GL_DEPRECATION to silence these warnings)

## Declaration

```objectivec
@interface SCNLayer : CAOpenGLLayer
```

<a id="overview"></a>

## Overview

Use this class to integrate 3D content rendered by SceneKit into a user interface composed of Core Animation layers. To provide content for the layer, assign an [SCNScene](scnscene.md) object to its [scene](scnlayer/scene.md) property.

Most of the methods and properties you use for working with a SceneKit layer are defined by the [SCNSceneRenderer](scnscenerenderer.md) protocol.

## Topics

### Specifying a Scene

- [scene](scnlayer/scene.md): Deprecated. The scene to be displayed in the layer.

## Relationships

### Inherits From

- [CAOpenGLLayer](../quartzcore/caopengllayer.md)

### Conforms To

- [SCNSceneRenderer](scnscenerenderer.md)
- [SCNTechniqueSupport](scntechniquesupport.md)

## See Also

### Display and Interactivity

- [SCNSceneRenderer](scnscenerenderer.md): Methods and properties common to the [SCNView](scnview.md), [SCNLayer](scnlayer.md), and [SCNRenderer](scnrenderer.md) classes.
- [SCNSceneRendererDelegate](scnscenerendererdelegate.md): Methods your app can implement to participate in SceneKit’s animation loop or perform additional rendering.
- [SCNRenderer](scnrenderer.md): A renderer for displaying a SceneKit scene in an existing Metal workflow or OpenGL context.
- [SCNHitTestResult](scnhittestresult.md): Information about the result of a scene-space or view-space search for scene elements.
