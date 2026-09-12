> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnrenderingapi/opengles2](https://developer.apple.com/documentation/scenekit/scnrenderingapi/opengles2)

# SCNRenderingAPI.openGLES2 (Swift)

**Framework:** SceneKit  
**Kind:** Case  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Use the OpenGL ES 2.0 API for SceneKit rendering in iOS.

## Declaration

```swift
case openGLES2
```

<a id="Discussion"></a>

## Discussion

This option is available on all iOS devices supporting SceneKit. If you request the Metal rendering API for an [SCNView](../scnview.md) object on a device that does not support Metal, SceneKit falls back to the OpenGL ES 2.0 API.

## See Also

### Constants

- [SCNRenderingAPI.metal](metal.md): Use the Metal framework for SceneKit rendering.
- [SCNRenderingAPI.openGLLegacy](opengllegacy.md): Use the Legacy OpenGL API for SceneKit rendering in macOS.
- [SCNRenderingAPI.openGLCore32](openglcore32.md): Use the OpenGL 3.2 Core Profile API for SceneKit rendering in macOS.
- [SCNRenderingAPI.openGLCore41](openglcore41.md): Use the OpenGL 4.1 Core Profile API for SceneKit rendering in macOS.

# SCNRenderingAPIOpenGLES2 (Objective-C)

**Framework:** SceneKit  
**Kind:** Enumeration Case  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Use the OpenGL ES 2.0 API for SceneKit rendering in iOS.

## Declaration

```objectivec
SCNRenderingAPIOpenGLES2
```

<a id="Discussion"></a>

## Discussion

This option is available on all iOS devices supporting SceneKit. If you request the Metal rendering API for an [SCNView](../scnview.md) object on a device that does not support Metal, SceneKit falls back to the OpenGL ES 2.0 API.

## See Also

### Constants

- [SCNRenderingAPIMetal](metal.md): Use the Metal framework for SceneKit rendering.
- [SCNRenderingAPIOpenGLLegacy](opengllegacy.md): Use the Legacy OpenGL API for SceneKit rendering in macOS.
- [SCNRenderingAPIOpenGLCore32](openglcore32.md): Use the OpenGL 3.2 Core Profile API for SceneKit rendering in macOS.
- [SCNRenderingAPIOpenGLCore41](openglcore41.md): Use the OpenGL 4.1 Core Profile API for SceneKit rendering in macOS.
