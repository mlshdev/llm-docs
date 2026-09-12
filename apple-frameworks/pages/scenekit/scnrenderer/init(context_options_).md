> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnrenderer/init(context:options:)](https://developer.apple.com/documentation/scenekit/scnrenderer/init(context:options:))

# init(context:options:) (Swift)

**Framework:** SceneKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Creates a renderer with the specified OpenGL context.

## Declaration

```swift
convenience init(context: EAGLContext?, options: [AnyHashable : Any]? = nil)
```

```swift
convenience init(context: CGLContextObj?, options: [AnyHashable : Any]? = nil)
```

## Parameters

- `context`: An OpenGL rendering context: either a [cglContextObj](https://developer.apple.com/documentation/appkit/nsopenglcontext/cglcontextobj) reference (in macOS) or an [EAGLContext](../../opengles/eaglcontext.md) object (in iOS).
- `options`: An optional dictionary for future extensions.

<a id="return-value"></a>

## Return Value

A new renderer object.

<a id="Discussion"></a>

## Discussion

Use this initializer to create a SceneKit renderer that draws into OpenGL context your app already uses to draw other content. To tell SceneKit to render your content, call the [SCNRenderer](../scnrenderer.md) or [SCNRenderer](../scnrenderer.md) method.

## See Also

### Creating a Renderer

- [init(device:options:)](init%28device_options_%29.md): Creates a renderer with the specified Metal device.

# rendererWithContext:options: (Objective-C)

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · macOS · tvOS

Creates a renderer with the specified OpenGL context.

## Declaration

```objectivec
+ (instancetype) rendererWithContext:(EAGLContext *) context options:(NSDictionary *) options;
```

```objectivec
+ (instancetype) rendererWithContext:(CGLContextObj) context options:(NSDictionary *) options;
```

## Parameters

- `context`: An OpenGL rendering context: either a [CGLContextObj](https://developer.apple.com/documentation/appkit/nsopenglcontext/cglcontextobj) reference (in macOS) or an [EAGLContext](../../opengles/eaglcontext.md) object (in iOS).
- `options`: An optional dictionary for future extensions.

<a id="return-value"></a>

## Return Value

A new renderer object.

<a id="Discussion"></a>

## Discussion

Use this initializer to create a SceneKit renderer that draws into OpenGL context your app already uses to draw other content. To tell SceneKit to render your content, call the [SCNRenderer](../scnrenderer.md) or [SCNRenderer](../scnrenderer.md) method.

## See Also

### Creating a Renderer

- [rendererWithDevice:options:](init%28device_options_%29.md): Creates a renderer with the specified Metal device.
