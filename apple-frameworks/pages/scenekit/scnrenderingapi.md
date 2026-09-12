> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnrenderingapi](https://developer.apple.com/documentation/scenekit/scnrenderingapi)

# SCNRenderingAPI (Swift)

**Framework:** SceneKit  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Options for choosing the graphics technology for an [SCNView](scnview.md) object (or other SceneKit renderer) to use for drawing its contents. Used by the [renderingAPI](scnscenerenderer/renderingapi.md) property and the [preferredRenderingAPI](scnview/option/preferredrenderingapi.md) option when initializing an [SCNView](scnview.md) object.

## Declaration

```swift
enum SCNRenderingAPI
```

## Topics

### Constants

- [SCNRenderingAPI.metal](scnrenderingapi/metal.md): Use the Metal framework for SceneKit rendering.
- [SCNRenderingAPI.openGLES2](scnrenderingapi/opengles2.md): Use the OpenGL ES 2.0 API for SceneKit rendering in iOS.
- [SCNRenderingAPI.openGLLegacy](scnrenderingapi/opengllegacy.md): Use the Legacy OpenGL API for SceneKit rendering in macOS.
- [SCNRenderingAPI.openGLCore32](scnrenderingapi/openglcore32.md): Use the OpenGL 3.2 Core Profile API for SceneKit rendering in macOS.
- [SCNRenderingAPI.openGLCore41](scnrenderingapi/openglcore41.md): Use the OpenGL 4.1 Core Profile API for SceneKit rendering in macOS.

### Initializers

- [init(rawValue:)](scnrenderingapi/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing Scene Display

- [pointOfView](scnscenerenderer/pointofview.md): The node from which the scene’s contents are viewed for rendering.
- [autoenablesDefaultLighting](scnscenerenderer/autoenablesdefaultlighting.md): A Boolean value that determines whether SceneKit automatically adds lights to a scene.
- [isJitteringEnabled](scnscenerenderer/isjitteringenabled.md): A Boolean value that determines whether SceneKit applies jittering to reduce aliasing artifacts.
- [showsStatistics](scnscenerenderer/showsstatistics.md): A Boolean value that determines whether SceneKit displays rendering performance statistics in an accessory view.
- [debugOptions](scnscenerenderer/debugoptions.md): Options for drawing overlay content in a scene that can aid debugging.
- [renderingAPI](scnscenerenderer/renderingapi.md): The graphics technology SceneKit uses to render the scene.
- [SCNDebugOptions](scndebugoptions.md): Options for drawing overlays with SceneKit content that can aid in debugging, used with the [debugOptions](scnscenerenderer/debugoptions.md) property.

# SCNRenderingAPI (Objective-C)

**Framework:** SceneKit  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Options for choosing the graphics technology for an [SCNView](scnview.md) object (or other SceneKit renderer) to use for drawing its contents. Used by the [renderingAPI](scnscenerenderer/renderingapi.md) property and the [SCNPreferredRenderingAPIKey](scnview/option/preferredrenderingapi.md) option when initializing an [SCNView](scnview.md) object.

## Declaration

```objectivec
enum SCNRenderingAPI : NSUInteger;
```

## Topics

### Constants

- [SCNRenderingAPIMetal](scnrenderingapi/metal.md): Use the Metal framework for SceneKit rendering.
- [SCNRenderingAPIOpenGLES2](scnrenderingapi/opengles2.md): Use the OpenGL ES 2.0 API for SceneKit rendering in iOS.
- [SCNRenderingAPIOpenGLLegacy](scnrenderingapi/opengllegacy.md): Use the Legacy OpenGL API for SceneKit rendering in macOS.
- [SCNRenderingAPIOpenGLCore32](scnrenderingapi/openglcore32.md): Use the OpenGL 3.2 Core Profile API for SceneKit rendering in macOS.
- [SCNRenderingAPIOpenGLCore41](scnrenderingapi/openglcore41.md): Use the OpenGL 4.1 Core Profile API for SceneKit rendering in macOS.

## See Also

### Managing Scene Display

- [pointOfView](scnscenerenderer/pointofview.md): The node from which the scene’s contents are viewed for rendering.
- [autoenablesDefaultLighting](scnscenerenderer/autoenablesdefaultlighting.md): A Boolean value that determines whether SceneKit automatically adds lights to a scene.
- [jitteringEnabled](scnscenerenderer/isjitteringenabled.md): A Boolean value that determines whether SceneKit applies jittering to reduce aliasing artifacts.
- [showsStatistics](scnscenerenderer/showsstatistics.md): A Boolean value that determines whether SceneKit displays rendering performance statistics in an accessory view.
- [debugOptions](scnscenerenderer/debugoptions.md): Options for drawing overlay content in a scene that can aid debugging.
- [renderingAPI](scnscenerenderer/renderingapi.md): The graphics technology SceneKit uses to render the scene.
- [SCNDebugOptions](scndebugoptions.md): Options for drawing overlays with SceneKit content that can aid in debugging, used with the [debugOptions](scnscenerenderer/debugoptions.md) property.
