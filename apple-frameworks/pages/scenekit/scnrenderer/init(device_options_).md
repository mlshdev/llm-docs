> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnrenderer/init(device:options:)](https://developer.apple.com/documentation/scenekit/scnrenderer/init(device:options:))

# init(device:options:) (Swift)

**Framework:** SceneKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Creates a renderer with the specified Metal device.

## Declaration

```swift
convenience init(device: (any MTLDevice)?, options: [AnyHashable : Any]? = nil)
```

## Parameters

- `device`: A Metal device.
- `options`: An optional dictionary for future extensions.

<a id="return-value"></a>

## Return Value

A new renderer object.

<a id="Discussion"></a>

## Discussion

Use this initializer to create a SceneKit renderer that draws into the rendering targets your app already uses to draw other content. For the `device` parameter, pass the [MTLDevice](../../metal/mtldevice.md) object your app uses for drawing. Then, to tell SceneKit to render your content, call the [SCNRenderer](../scnrenderer.md) method, providing a command buffer and render pass descriptor for SceneKit to use in its rendering.

## See Also

### Creating a Renderer

- [init(context:options:)](init%28context_options_%29.md): Creates a renderer with the specified OpenGL context.

# rendererWithDevice:options: (Objective-C)

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Creates a renderer with the specified Metal device.

## Declaration

```objectivec
+ (instancetype) rendererWithDevice:(id<MTLDevice>) device options:(NSDictionary *) options;
```

## Parameters

- `device`: A Metal device.
- `options`: An optional dictionary for future extensions.

<a id="return-value"></a>

## Return Value

A new renderer object.

<a id="Discussion"></a>

## Discussion

Use this initializer to create a SceneKit renderer that draws into the rendering targets your app already uses to draw other content. For the `device` parameter, pass the [MTLDevice](../../metal/mtldevice.md) object your app uses for drawing. Then, to tell SceneKit to render your content, call the [SCNRenderer](../scnrenderer.md) method, providing a command buffer and render pass descriptor for SceneKit to use in its rendering.

## See Also

### Creating a Renderer

- [rendererWithContext:options:](init%28context_options_%29.md): Creates a renderer with the specified OpenGL context.
