> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnscenerenderer/colorpixelformat](https://developer.apple.com/documentation/scenekit/scnscenerenderer/colorpixelformat)

# colorPixelFormat (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The Metal pixel format for the renderer’s color output.

## Declaration

```swift
var colorPixelFormat: MTLPixelFormat { get }
```

<a id="Discussion"></a>

## Discussion

Use this property, along with the [depthPixelFormat](depthpixelformat.md) and [stencilPixelFormat](stencilpixelformat.md) properties, if you perform custom drawing with Metal (see the [SCNSceneRendererDelegate](../scnscenerendererdelegate.md) and [SCNNodeRendererDelegate](../scnnoderendererdelegate.md) classes) and need to create a new [MTLRenderPipelineState](../../metal/mtlrenderpipelinestate.md) object to change the GPU state as part of your rendering.

> **Note**

>  This property is valid only for scene renderers whose [renderingAPI](renderingapi.md) value is [SCNRenderingAPI.metal](../scnrenderingapi/metal.md). You create a SceneKit view that renders using Metal with the [preferredRenderingAPI](../scnview/option/preferredrenderingapi.md) initialization option or in Interface Builder, or an [SCNRenderer](../scnrenderer.md) that uses Metal with the [init(device:options:)](../scnrenderer/init%28device_options_%29.md) method. For OpenGL-based scene renderers, this property’s value is always `nil`.

## See Also

### Customizing Scene Rendering with Metal

- [currentRenderCommandEncoder](currentrendercommandencoder.md): The Metal render command encoder in use for the current SceneKit rendering pass.
- [device](device.md): The Metal device this renderer uses for rendering.
- [commandQueue](commandqueue.md): The Metal command queue this renderer uses for rendering.
- [depthPixelFormat](depthpixelformat.md): The Metal pixel format for the renderer’s depth buffer.
- [stencilPixelFormat](stencilpixelformat.md): The Metal pixel format for the renderer’s stencil buffer.

# colorPixelFormat (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The Metal pixel format for the renderer’s color output.

## Declaration

```objectivec
@property (nonatomic, readonly) MTLPixelFormat colorPixelFormat;
```

<a id="Discussion"></a>

## Discussion

Use this property, along with the [depthPixelFormat](depthpixelformat.md) and [stencilPixelFormat](stencilpixelformat.md) properties, if you perform custom drawing with Metal (see the [SCNSceneRendererDelegate](../scnscenerendererdelegate.md) and [SCNNodeRendererDelegate](../scnnoderendererdelegate.md) classes) and need to create a new [MTLRenderPipelineState](../../metal/mtlrenderpipelinestate.md) object to change the GPU state as part of your rendering.

> **Note**

>  This property is valid only for scene renderers whose [renderingAPI](renderingapi.md) value is [SCNRenderingAPIMetal](../scnrenderingapi/metal.md). You create a SceneKit view that renders using Metal with the [SCNPreferredRenderingAPIKey](../scnview/option/preferredrenderingapi.md) initialization option or in Interface Builder, or an [SCNRenderer](../scnrenderer.md) that uses Metal with the [rendererWithDevice:options:](../scnrenderer/init%28device_options_%29.md) method. For OpenGL-based scene renderers, this property’s value is always `nil`.

## See Also

### Customizing Scene Rendering with Metal

- [currentRenderCommandEncoder](currentrendercommandencoder.md): The Metal render command encoder in use for the current SceneKit rendering pass.
- [device](device.md): The Metal device this renderer uses for rendering.
- [commandQueue](commandqueue.md): The Metal command queue this renderer uses for rendering.
- [depthPixelFormat](depthpixelformat.md): The Metal pixel format for the renderer’s depth buffer.
- [stencilPixelFormat](stencilpixelformat.md): The Metal pixel format for the renderer’s stencil buffer.
