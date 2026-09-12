> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrendercommandencoder/setscissorrects:count:](https://developer.apple.com/documentation/metal/mtlrendercommandencoder/setscissorrects:count:)

# setScissorRects:count:

**Interface language:** Objective-C

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 14.5+ · visionOS 1.0+

Configures multiple rectangles for the fragment scissor test.

## Declaration

```objectivec
- (void) setScissorRects:(const MTLScissorRect[]) scissorRects count:(NSUInteger) count;
```

## Parameters

- `scissorRects`: An array of [MTLScissorRect](../mtlscissorrect.md) instances the command applies to the render pipeline for clipping.
- `count`: The number of elements in the `scissorRects` array.

<a id="discussion"></a>

## Discussion

The rendering pipeline discards any fragments that lie outside the scissor rectangle. The default scissor rectangle is the same size as the current render attachment, with its origin coordinates in the upper-left corner at `(0, 0)`.

Use this method to configure a different scissor rectangle for multiple viewports you configure with the [setViewports(\_:)](setviewports%28__%29.md) method. Multiple viewports give your app the ability to draw into separate areas of an image with a single draw call. You can either set a single scissor rectangle for all viewports with the [setScissorRect:](setscissorrect%28__%29.md) method, or set each viewport’s rectangle with this method.

> **Important**

>  The number of scissor rectangles you pass to this method needs to match the number of viewports you configure with the [setViewports(\_:)](setviewports%28__%29.md) method.

The maximum number of viewports and scissor rectangles a GPU supports varies by device family. For more information, see [MTLGPUFamily](../mtlgpufamily.md) and [Detecting GPU features and Metal software versions](../detecting-gpu-features-and-metal-software-versions.md).

The rendering pipeline sends each primitive to a single viewport and its associated scissor rectangle. You can select which viewport each primitive uses in your vertex shader by adding the `[[viewport_array_index]]` attribute to an output value.

> **Note**

>  You can change the render pass’s scissor rectangle configuration by calling this method again or by calling the [setScissorRect:](setscissorrect%28__%29.md) method.

The [setScissorRect:](setscissorrect%28__%29.md) method is equivalent to calling this method with a single element in the `scissorRects` array.

## See Also

### Configuring viewport and scissor behavior

- [setViewport:](setviewport%28__%29.md): Configures the render pipeline with a viewport that applies a transformation and a clipping rectangle.
- [setViewports:count:](setviewports_count_.md): Configures the render pipeline with multiple viewports that apply transformations and clipping rectangles.
- [setScissorRect:](setscissorrect%28__%29.md): Configures a rectangle for the fragment scissor test.
