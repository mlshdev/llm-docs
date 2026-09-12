> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrendercommandencoder/setviewport(_:)](https://developer.apple.com/documentation/metal/mtlrendercommandencoder/setviewport(_:))

# setViewport(\_:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Configures the render pipeline with a viewport that applies a transformation and a clipping rectangle.

## Declaration

```swift
func setViewport(_ viewport: MTLViewport)
```

## Parameters

- `viewport`: An [MTLViewport](../mtlviewport.md) instance the command applies to the render pipeline for transformations and clipping.

<a id="discussion"></a>

## Discussion

The render pipeline linearly maps vertex positions from normalized device coordinates to viewport coordinates by applying a viewport during the rasterization stage. It applies the transform first and then rasterizes the primitive while clipping any fragments outside the scissor rectangle (see [setScissorRect(\_:)](setscissorrect%28__%29.md)) or the render target’s extents.

The viewport’s [originX](../mtlviewport/originx.md) and [originY](../mtlviewport/originy.md) properties, which default to `0.0`, represent the number of pixels from the top-left corner of the render target. Positive [originX](../mtlviewport/originx.md) values go to the right and positive [originY](../mtlviewport/originy.md) values go downward. The default values for its [width](../mtlviewport/width.md) and [height](../mtlviewport/height.md) properties are the render target’s width and height, respectively. The default values for its [znear](../mtlviewport/znear.md) and [zfar](../mtlviewport/zfar.md) properties are `0.0` and `1.0`, respectively, which you can flip.

> **Note**

>  You can change the render pass’s viewport configuration by calling this method again, or by calling the [setViewports(\_:)](setviewports%28__%29.md) method.

## See Also

### Configuring viewport and scissor behavior

- [setViewports(\_:)](setviewports%28__%29.md): Configures the render pipeline with multiple viewports that apply transformations and clipping rectangles.
- [setScissorRect(\_:)](setscissorrect%28__%29.md): Configures a rectangle for the fragment scissor test.
- [setScissorRects(\_:)](setscissorrects%28__%29.md): Configures multiple rectangles for the fragment scissor test.

# setViewport: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Configures the render pipeline with a viewport that applies a transformation and a clipping rectangle.

## Declaration

```objectivec
- (void) setViewport:(MTLViewport) viewport;
```

## Parameters

- `viewport`: An [MTLViewport](../mtlviewport.md) instance the command applies to the render pipeline for transformations and clipping.

<a id="discussion"></a>

## Discussion

The render pipeline linearly maps vertex positions from normalized device coordinates to viewport coordinates by applying a viewport during the rasterization stage. It applies the transform first and then rasterizes the primitive while clipping any fragments outside the scissor rectangle (see [setScissorRect:](setscissorrect%28__%29.md)) or the render target’s extents.

The viewport’s [originX](../mtlviewport/originx.md) and [originY](../mtlviewport/originy.md) properties, which default to `0.0`, represent the number of pixels from the top-left corner of the render target. Positive [originX](../mtlviewport/originx.md) values go to the right and positive [originY](../mtlviewport/originy.md) values go downward. The default values for its [width](../mtlviewport/width.md) and [height](../mtlviewport/height.md) properties are the render target’s width and height, respectively. The default values for its [znear](../mtlviewport/znear.md) and [zfar](../mtlviewport/zfar.md) properties are `0.0` and `1.0`, respectively, which you can flip.

> **Note**

>  You can change the render pass’s viewport configuration by calling this method again, or by calling the [setViewports(\_:)](setviewports%28__%29.md) method.

## See Also

### Configuring viewport and scissor behavior

- [setViewports:count:](setviewports_count_.md): Configures the render pipeline with multiple viewports that apply transformations and clipping rectangles.
- [setScissorRect:](setscissorrect%28__%29.md): Configures a rectangle for the fragment scissor test.
- [setScissorRects:count:](setscissorrects_count_.md): Configures multiple rectangles for the fragment scissor test.
