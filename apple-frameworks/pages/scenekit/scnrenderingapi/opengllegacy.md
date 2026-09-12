> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnrenderingapi/opengllegacy](https://developer.apple.com/documentation/scenekit/scnrenderingapi/opengllegacy)

# SCNRenderingAPI.openGLLegacy (Swift)

**Framework:** SceneKit  
**Kind:** Case  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Use the Legacy OpenGL API for SceneKit rendering in macOS.

## Declaration

```swift
case openGLLegacy
```

<a id="Discussion"></a>

## Discussion

This option is available on all macOS systems supporting SceneKit. If you request the Metal rendering API for an [SCNView](../scnview.md) object on a system that does not support Metal, SceneKit falls back to the Legacy OpenGL API.

## See Also

### Constants

- [SCNRenderingAPI.metal](metal.md): Use the Metal framework for SceneKit rendering.
- [SCNRenderingAPI.openGLES2](opengles2.md): Use the OpenGL ES 2.0 API for SceneKit rendering in iOS.
- [SCNRenderingAPI.openGLCore32](openglcore32.md): Use the OpenGL 3.2 Core Profile API for SceneKit rendering in macOS.
- [SCNRenderingAPI.openGLCore41](openglcore41.md): Use the OpenGL 4.1 Core Profile API for SceneKit rendering in macOS.

# SCNRenderingAPIOpenGLLegacy (Objective-C)

**Framework:** SceneKit  
**Kind:** Enumeration Case  
**Availability:** macOS 10.11+

Use the Legacy OpenGL API for SceneKit rendering in macOS.

## Declaration

```objectivec
SCNRenderingAPIOpenGLLegacy
```

<a id="Discussion"></a>

## Discussion

This option is available on all macOS systems supporting SceneKit. If you request the Metal rendering API for an [SCNView](../scnview.md) object on a system that does not support Metal, SceneKit falls back to the Legacy OpenGL API.

## See Also

### Constants

- [SCNRenderingAPIMetal](metal.md): Use the Metal framework for SceneKit rendering.
- [SCNRenderingAPIOpenGLES2](opengles2.md): Use the OpenGL ES 2.0 API for SceneKit rendering in iOS.
- [SCNRenderingAPIOpenGLCore32](openglcore32.md): Use the OpenGL 3.2 Core Profile API for SceneKit rendering in macOS.
- [SCNRenderingAPIOpenGLCore41](openglcore41.md): Use the OpenGL 4.1 Core Profile API for SceneKit rendering in macOS.
