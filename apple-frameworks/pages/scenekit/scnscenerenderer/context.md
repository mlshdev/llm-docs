> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnscenerenderer/context](https://developer.apple.com/documentation/scenekit/scnscenerenderer/context)

# context (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The OpenGL rendering context that SceneKit uses for rendering the scene.

## Declaration

```swift
var context: UnsafeMutableRawPointer? { get }
```

<a id="Discussion"></a>

## Discussion

In macOS, the value of this property is a Core OpenGL [cglContextObj](https://developer.apple.com/documentation/appkit/nsopenglcontext/cglcontextobj) object.

In iOS, the value of this property is an [EAGLContext](../../opengles/eaglcontext.md) object.

# context (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · macOS · tvOS

The OpenGL rendering context that SceneKit uses for rendering the scene.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) void * context;
```

<a id="Discussion"></a>

## Discussion

In macOS, the value of this property is a Core OpenGL [CGLContextObj](https://developer.apple.com/documentation/appkit/nsopenglcontext/cglcontextobj) object.

In iOS, the value of this property is an [EAGLContext](../../opengles/eaglcontext.md) object.
