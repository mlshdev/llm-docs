> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalkit/mtkview/currentdrawable](https://developer.apple.com/documentation/metalkit/mtkview/currentdrawable)

# currentDrawable (Swift)

**Framework:** MetalKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The drawable to use for the current frame.

## Declaration

```swift
var currentDrawable: (any CAMetalDrawable)? { get }
```

<a id="Discussion"></a>

## Discussion

If all drawable objects are in use, the value of this property is `nil`. Your app should check that [currentDrawable](currentdrawable.md) isn’t `nil` before attempting to draw. The view changes the value of this property only after returning from a drawing function, either [draw(\_:)](../../uikit/uiview/draw%28__%29.md) from a subclassed instance of the view, or [draw(in:)](../mtkviewdelegate/draw%28in_%29.md) from the view’s delegate.

Use a [MTLRenderCommandEncoder](../../metal/mtlrendercommandencoder.md) object to render into the drawable’s texture and present it for display (typically registered using the [present(\_:)](../../metal/mtlcommandbuffer/present%28__%29.md) method of a command buffer). Try to minimize the time between when you fetch the drawable and when you submit the command buffer that uses it. For more information, see [CAMetalLayer](../../quartzcore/cametallayer.md).

## See Also

### Retrieving Render Target Information

- [currentRenderPassDescriptor](currentrenderpassdescriptor.md): A render pass descriptor to draw into the current drawable.
- [depthStencilTexture](depthstenciltexture.md): A packed depth and stencil texture associated with the current drawable object’s texture.
- [depthStencilStorageMode](depthstencilstoragemode.md): The storage mode that the packed depth and stencil texture use.
- [multisampleColorTexture](multisamplecolortexture.md): The multisample color sample texture to render into.

# currentDrawable (Objective-C)

**Framework:** MetalKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The drawable to use for the current frame.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) id<CAMetalDrawable> currentDrawable;
```

<a id="Discussion"></a>

## Discussion

If all drawable objects are in use, the value of this property is `nil`. Your app should check that [currentDrawable](currentdrawable.md) isn’t `nil` before attempting to draw. The view changes the value of this property only after returning from a drawing function, either [drawRect:](../../uikit/uiview/draw%28__%29.md) from a subclassed instance of the view, or [drawInMTKView:](../mtkviewdelegate/draw%28in_%29.md) from the view’s delegate.

Use a [MTLRenderCommandEncoder](../../metal/mtlrendercommandencoder.md) object to render into the drawable’s texture and present it for display (typically registered using the [presentDrawable:](../../metal/mtlcommandbuffer/present%28__%29.md) method of a command buffer). Try to minimize the time between when you fetch the drawable and when you submit the command buffer that uses it. For more information, see [CAMetalLayer](../../quartzcore/cametallayer.md).

## See Also

### Retrieving Render Target Information

- [currentRenderPassDescriptor](currentrenderpassdescriptor.md): A render pass descriptor to draw into the current drawable.
- [depthStencilTexture](depthstenciltexture.md): A packed depth and stencil texture associated with the current drawable object’s texture.
- [depthStencilStorageMode](depthstencilstoragemode.md): The storage mode that the packed depth and stencil texture use.
- [multisampleColorTexture](multisamplecolortexture.md): The multisample color sample texture to render into.
